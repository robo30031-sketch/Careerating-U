import type { CareerStatus, RealWorldExample, WorkMode } from '../../types/career.ts';

export type EntryRouteCategory =
  | 'engineering-degree'
  | 'science-research'
  | 'medical-clinical'
  | 'allied-health'
  | 'it-computing'
  | 'skilled-trade-iti'
  | 'law-judicial'
  | 'civil-defence'
  | 'finance-chartered'
  | 'business-management'
  | 'education-teaching'
  | 'creative-portfolio'
  | 'media-journalism'
  | 'aviation-maritime'
  | 'agriculture-field'
  | 'hospitality-service'
  | 'social-impact'
  | 'sports-performance'
  | 'transport-operator';

export interface OccupationSeedEntry {
  id: string;
  name: string;
  clusterId: string;
  secondaryClusterIds?: string[];
  industry: string;
  specialisation: string;
  jobFamily: string;
  specialisedRole: string;
  aliases: string[];
  status: CareerStatus;
  workMode: WorkMode;
  shortIntro: string;
  coreDuty: string;
  dailyFocus: string;
  tools: string[];
  subjects: string[];
  entryRoute: EntryRouteCategory;
  indiaRequirement: string;
  globalRequirement: string;
  pioneer?: RealWorldExample;
}
