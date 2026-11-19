import type { CareerStatus, WorkMode } from '../../types/career.ts';
import type { EntryRouteCategory, OccupationSeedEntry } from './types.ts';

export type CompactRow = [
  id: string,
  name: string,
  secondaryClusterIds: string[],
  industry: string,
  specialisation: string,
  jobFamily: string,
  specialisedRole: string,
  aliases: string[],
  status: CareerStatus,
  workMode: WorkMode,
  shortIntro: string,
  coreDuty: string,
  dailyFocus: string,
  tools: string[],
  subjects: string[],
  entryRoute: EntryRouteCategory,
  indiaRequirement: string,
  globalRequirement: string,
];

export function mapRows(clusterId: string, rows: CompactRow[]): OccupationSeedEntry[] {
  return rows.map((r) => ({
    id: r[0],
    name: r[1],
    clusterId,
    secondaryClusterIds: r[2],
    industry: r[3],
    specialisation: r[4],
    jobFamily: r[5],
    specialisedRole: r[6],
    aliases: r[7],
    status: r[8],
    workMode: r[9],
    shortIntro: r[10],
    coreDuty: r[11],
    dailyFocus: r[12],
    tools: r[13],
    subjects: r[14],
    entryRoute: r[15],
    indiaRequirement: r[16],
    globalRequirement: r[17],
  }));
}
