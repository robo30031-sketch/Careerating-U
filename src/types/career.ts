export type CareerStatus = 'Current' | 'Historical' | 'Obsolete' | 'Emerging';
export type WorkMode = 'Indoor' | 'Outdoor' | 'Field' | 'Remote' | 'Mixed';
export type SkillPriority = 'Essential' | 'Useful Additional';
export type QualificationPriority = 'Mandatory' | 'Optional' | 'Recommended Additional';
export type VerificationState = 'Verified' | 'Partially Verified' | 'Needs Review';

export type SupportedCountry =
  | 'India'
  | 'United States'
  | 'United Kingdom'
  | 'Germany'
  | 'Canada'
  | 'Australia'
  | 'Japan'
  | 'International';

export interface CountryRequirement {
  country: SupportedCountry;
  schoolPathway: string;
  higherEducationOrTraining: string;
  licensingOrExams: string;
  notes: string;
}

export interface CareerCluster {
  id: string;
  number: number;
  name: string;
  shortName: string;
  summary: string;
  keyDomains: string[];
}

export interface ClusterWithStats extends CareerCluster {
  occupationCount: number;
  secondaryCount: number;
  industries: string[];
  specialisations: string[];
}

export interface OccupationSummary {
  id: string;
  name: string;
  clusterId: string;
  clusterName: string;
  secondaryClusterIds: string[];
  industry: string;
  specialisation: string;
  jobFamily: string;
  specialisedRole: string;
  aliases: string[];
  status: CareerStatus;
  workMode: WorkMode;
  shortIntro: string;
  specialisationTags: string[];
  verificationState: VerificationState;
  unverifiedSectionsCount: number;
  lastUpdated: string;
  isFeatured: boolean;
}

export interface PaginatedOccupationsResponse {
  items: OccupationSummary[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  facets: {
    industries: string[];
    specialisations: string[];
    letters: string[];
  };
}

export interface SpecialisationItem {
  id: string;
  title: string;
  focus: string;
  howItDiffers: string;
  jobTitles: string[];
  opportunities: string;
}

export interface SkillItem {
  name: string;
  priority: SkillPriority;
  description: string;
}

export interface SubjectItem {
  subject: string;
  tier: 'Essential' | 'Recommended' | 'Optional';
  whyItMatters: string;
  howToStart: string;
}

export interface EducationPathwayItem {
  stage: string;
  title: string;
  requirement: QualificationPriority;
  duration: string;
  details: string;
  countryContext: string;
}

export interface ToolItem {
  name: string;
  category:
    | 'Physical Tools'
    | 'Professional Equipment'
    | 'Computer Software'
    | 'Digital Platforms'
    | 'Industry Technologies'
    | 'Emerging Tools';
  usedFor: string;
}

export interface ExperienceStage {
  level: string;
  category:
    | 'Beginner Activities'
    | 'School & Personal Projects'
    | 'Competitions'
    | 'Workshops'
    | 'Internships & Apprenticeships'
    | 'Volunteering'
    | 'Research & Professional Exposure';
  description: string;
}

export interface QualificationItem {
  title: string;
  tier: QualificationPriority;
  kind:
    | 'Degree'
    | 'Certification'
    | 'Government Examination'
    | 'Registration'
    | 'Licence'
    | 'Age / Eligibility';
  country: string;
  details: string;
}

export interface ProgressionStage {
  stage: string;
  typicalTimeframe: string;
  focus: string;
  alternateTrack?: string;
}

export interface RelatedCareerLink {
  targetId: string;
  name: string;
  clusterName: string;
  whyRelated: string;
  sharedSkills: string[];
  differencesInResponsibilities: string;
  transitionPathway: string;
}

export interface RealWorldExample {
  name: string;
  profession: string;
  country: string;
  majorContributions: string;
  achievements: string;
  whyWorkMatters: string;
  sourceNote: string;
}

export interface SourceReference {
  label: string;
  url: string;
  organization: string;
}

export interface CareerProfile {
  id: string;
  name: string;
  clusterId: string;
  clusterName: string;
  secondaryClusterIds?: string[];
  industry?: string;
  specialisation?: string;
  jobFamily?: string;
  specialisedRole?: string;
  aliases?: string[];
  status: CareerStatus;
  shortIntro: string;
  specialisationTags: string[];
  imageUrl: string;
  imageCaption: string;
  lastUpdated: string;
  sources: SourceReference[];
  unverifiedSections?: number[];
  verificationState?: VerificationState;
  contentVersion?: number;
  isFeatured?: boolean;
  countryRequirements?: CountryRequirement[];

  // 1. Introduction
  introduction: {
    summary: string;
    definition: string;
    mainPurpose: string;
    whyItExists: string;
    societalImportance: string;
    whatMakesItInteresting: string;
  };

  // 2. Responsibilities
  responsibilities: {
    summary: string;
    mainDuties: string[];
    importantResponsibilities: string[];
    problemsSolved: string[];
    decisionsMade: string[];
    collaborators: string[];
  };

  // 3. Daily Work
  dailyWork: {
    summary: string;
    scheduleNote: string;
    morningActivities: string[];
    mainTasks: string[];
    meetingsAndFieldwork: string[];
    toolsUsedDaily: string[];
    communicationAndTeamwork: string;
    endOfDayActivities: string[];
  };

  // 4. Specialisations
  specialisations: {
    summary: string;
    items: SpecialisationItem[];
  };

  // 5. Skills
  skills: {
    summary: string;
    technical: SkillItem[];
    personalProfessional: SkillItem[];
  };

  // 6. School Subjects
  schoolSubjects: {
    summary: string;
    subjects: SubjectItem[];
    indianCurriculumNotes: string;
    internationalNotes: string;
  };

  // 7. Education
  education: {
    summary: string;
    pathways: EducationPathwayItem[];
    alternativeAndVocationalNote: string;
    researchAndAdvancedNote: string;
  };

  // 8. Tools and Technology
  toolsAndTechnology: {
    summary: string;
    items: ToolItem[];
  };

  // 9. Experience
  experience: {
    summary: string;
    stages: ExperienceStage[];
  };

  // 10. Qualifications
  qualifications: {
    summary: string;
    items: QualificationItem[];
    countryDifferencesNote: string;
  };

  // 11. Career Progression
  careerProgression: {
    summary: string;
    stages: ProgressionStage[];
    nonManagementTracks: {
      entrepreneurship: string;
      research: string;
      specialisation: string;
      leadership: string;
    };
  };

  // 12. Workplaces
  workplaces: {
    summary: string;
    workMode: WorkMode;
    locations: string[];
    environmentDescription: string;
  };

  // 13. Career Opportunities
  careerOpportunities: {
    summary: string;
    mainIndustries: string[];
    privateSector: string;
    governmentSector: string;
    researchOpportunities: string;
    internationalOpportunities: string;
    freelancingAndSelfEmployment: string;
    entrepreneurshipAndStartups: string;
    emergingDemand: string;
    verifiedStatisticsNote: string;
  };

  // 14. Related Careers
  relatedCareers: {
    summary: string;
    items: RelatedCareerLink[];
  };

  // 15. Future Developments
  futureDevelopments: {
    summary: string;
    disclaimer: string;
    establishedDevelopments: {
      area: string;
      description: string;
    }[];
    speculativePredictions: {
      area: string;
      description: string;
    }[];
    environmentalAndSocialFactors: string;
  };

  // 16. Real-World Examples
  realWorldExamples: {
    summary: string;
    pioneers: RealWorldExample[];
  };
}

export const SECTION_TITLES: { id: string; number: number; title: string; shortTitle: string }[] = [
  { id: 'sec-1', number: 1, title: 'Introduction', shortTitle: '01. Introduction' },
  { id: 'sec-2', number: 2, title: 'Responsibilities', shortTitle: '02. Responsibilities' },
  { id: 'sec-3', number: 3, title: 'Daily Work', shortTitle: '03. Daily Work' },
  { id: 'sec-4', number: 4, title: 'Specialisations', shortTitle: '04. Specialisations' },
  { id: 'sec-5', number: 5, title: 'Skills', shortTitle: '05. Skills' },
  { id: 'sec-6', number: 6, title: 'School Subjects', shortTitle: '06. School Subjects' },
  { id: 'sec-7', number: 7, title: 'Education', shortTitle: '07. Education' },
  { id: 'sec-8', number: 8, title: 'Tools and Technology', shortTitle: '08. Tools & Tech' },
  { id: 'sec-9', number: 9, title: 'Experience', shortTitle: '09. Experience' },
  { id: 'sec-10', number: 10, title: 'Qualifications', shortTitle: '10. Qualifications' },
  { id: 'sec-11', number: 11, title: 'Career Progression', shortTitle: '11. Progression' },
  { id: 'sec-12', number: 12, title: 'Workplaces', shortTitle: '12. Workplaces' },
  { id: 'sec-13', number: 13, title: 'Career Opportunities', shortTitle: '13. Opportunities' },
  { id: 'sec-14', number: 14, title: 'Related Careers', shortTitle: '14. Related Careers' },
  { id: 'sec-15', number: 15, title: 'Future Developments', shortTitle: '15. Future' },
  { id: 'sec-16', number: 16, title: 'Real-World Examples', shortTitle: '16. Pioneers' },
];
