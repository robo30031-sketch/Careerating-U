import type { OccupationSeedEntry } from './types.ts';
import { TAXONOMY_CLUSTERS_01_03 } from './clusters_01_03.ts';
import { TAXONOMY_CLUSTER_02_EXTRA } from './cluster_02_extra.ts';
import { TAXONOMY_CLUSTER_04 } from './cluster_04.ts';
import { TAXONOMY_CLUSTER_05 } from './cluster_05.ts';
import { TAXONOMY_CLUSTER_06 } from './cluster_06.ts';
import { TAXONOMY_CLUSTER_07 } from './cluster_07.ts';
import { TAXONOMY_CLUSTER_08 } from './cluster_08.ts';
import { TAXONOMY_CLUSTER_09 } from './cluster_09.ts';
import { TAXONOMY_CLUSTER_10 } from './cluster_10.ts';
import { TAXONOMY_CLUSTER_11 } from './cluster_11.ts';
import { TAXONOMY_CLUSTER_12 } from './cluster_12.ts';
import { TAXONOMY_CLUSTER_13 } from './cluster_13.ts';
import { TAXONOMY_CLUSTER_14 } from './cluster_14.ts';
import { TAXONOMY_CLUSTER_15 } from './cluster_15.ts';
import { TAXONOMY_CLUSTER_16 } from './cluster_16.ts';
import { TAXONOMY_CLUSTER_17 } from './cluster_17.ts';
import { TAXONOMY_CLUSTER_18 } from './cluster_18.ts';
import { TAXONOMY_SUPPLEMENTAL_1 } from './cluster_supplemental_1.ts';
import { TAXONOMY_SUPPLEMENTAL_2 } from './cluster_supplemental_2.ts';

const RAW_ENTRIES: OccupationSeedEntry[] = [
  ...TAXONOMY_CLUSTERS_01_03,
  ...TAXONOMY_CLUSTER_02_EXTRA,
  ...TAXONOMY_CLUSTER_04,
  ...TAXONOMY_CLUSTER_05,
  ...TAXONOMY_CLUSTER_06,
  ...TAXONOMY_CLUSTER_07,
  ...TAXONOMY_CLUSTER_08,
  ...TAXONOMY_CLUSTER_09,
  ...TAXONOMY_CLUSTER_10,
  ...TAXONOMY_CLUSTER_11,
  ...TAXONOMY_CLUSTER_12,
  ...TAXONOMY_CLUSTER_13,
  ...TAXONOMY_CLUSTER_14,
  ...TAXONOMY_CLUSTER_15,
  ...TAXONOMY_CLUSTER_16,
  ...TAXONOMY_CLUSTER_17,
  ...TAXONOMY_CLUSTER_18,
  ...TAXONOMY_SUPPLEMENTAL_1,
  ...TAXONOMY_SUPPLEMENTAL_2,
];

function deduplicateTaxonomy(entries: OccupationSeedEntry[]): OccupationSeedEntry[] {
  const byId = new Map<string, OccupationSeedEntry>();
  for (const entry of entries) {
    if (!byId.has(entry.id)) {
      byId.set(entry.id, entry);
    }
  }
  return Array.from(byId.values());
}

export const ALL_TAXONOMY_ENTRIES: OccupationSeedEntry[] = deduplicateTaxonomy(RAW_ENTRIES);
