import type {
  CareerProfile,
  ClusterWithStats,
  PaginatedOccupationsResponse,
} from '../types/career.ts';
import type { OccupationQueryParams } from '../data/careerClientEngine.ts';

let apiMode: 'unknown' | 'server' | 'client' = 'unknown';

async function loadClientEngine() {
  return import('../data/careerClientEngine.ts');
}

async function tryServerJson<T>(url: string): Promise<{ ok: true; data: T } | { ok: false; notFoundJson?: boolean }> {
  if (apiMode === 'client') {
    return { ok: false };
  }
  try {
    const res = await fetch(url);
    const contentType = (res.headers.get('content-type') || '').toLowerCase();
    const isJson = contentType.includes('application/json');
    if (res.ok && isJson) {
      const data = (await res.json()) as T;
      apiMode = 'server';
      return { ok: true, data };
    }
    if (res.status === 404 && isJson) {
      apiMode = 'server';
      return { ok: false, notFoundJson: true };
    }
    apiMode = 'client';
    return { ok: false };
  } catch {
    apiMode = 'client';
    return { ok: false };
  }
}

export async function apiGetClusters(): Promise<ClusterWithStats[]> {
  const serverRes = await tryServerJson<ClusterWithStats[]>('/api/clusters');
  if (serverRes.ok && Array.isArray(serverRes.data) && serverRes.data.length === 18) {
    return serverRes.data;
  }
  const engine = await loadClientEngine();
  return engine.clientGetClusters();
}

export async function apiQueryOccupations(
  params: OccupationQueryParams
): Promise<PaginatedOccupationsResponse> {
  const qs = new URLSearchParams();
  if (params.clusterId && params.clusterId !== 'all') qs.set('clusterId', params.clusterId);
  if (params.industry && params.industry !== 'All') qs.set('industry', params.industry);
  if (params.specialisation && params.specialisation !== 'All') {
    qs.set('specialisation', params.specialisation);
  }
  if (params.status && params.status !== 'All') qs.set('status', params.status);
  if (params.workMode && params.workMode !== 'All') qs.set('workMode', params.workMode);
  if (params.letter) qs.set('letter', params.letter);
  if (params.featured) qs.set('featured', 'true');
  if (params.q) qs.set('q', params.q);
  qs.set('page', String(params.page ?? 1));
  qs.set('limit', String(params.limit ?? 24));

  const serverRes = await tryServerJson<PaginatedOccupationsResponse>(
    `/api/occupations?${qs.toString()}`
  );
  if (serverRes.ok && serverRes.data && Array.isArray(serverRes.data.items)) {
    return serverRes.data;
  }
  const engine = await loadClientEngine();
  return engine.clientQueryOccupations(params);
}

export async function apiGetOccupationById(id: string): Promise<CareerProfile | null> {
  const serverRes = await tryServerJson<CareerProfile>(
    `/api/occupations/${encodeURIComponent(id)}`
  );
  if (serverRes.ok) {
    return serverRes.data;
  }
  if (serverRes.notFoundJson) {
    return null;
  }
  const engine = await loadClientEngine();
  return engine.clientGetOccupationById(id);
}

export async function apiGetCompareOccupations(ids: string[]): Promise<CareerProfile[]> {
  if (ids.length === 0) return [];
  const serverRes = await tryServerJson<CareerProfile[]>(
    `/api/occupations/compare?ids=${encodeURIComponent(ids.join(','))}`
  );
  if (serverRes.ok && Array.isArray(serverRes.data)) {
    return serverRes.data;
  }
  const engine = await loadClientEngine();
  return engine.clientGetCompareOccupations(ids);
}
