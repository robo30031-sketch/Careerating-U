import type { CareerProfile } from '../types/career.ts';
import { CAREERS_PART_1 } from './careersPart1.ts';
import { CAREERS_PART_2 } from './careersPart2.ts';
import { CAREERS_PART_3 } from './careersPart3.ts';

export const INITIAL_CAREERS: CareerProfile[] = [
  ...CAREERS_PART_1,
  ...CAREERS_PART_2,
  ...CAREERS_PART_3,
];
