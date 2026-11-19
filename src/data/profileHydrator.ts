import type {
  CareerProfile,
  CountryRequirement,
  EducationPathwayItem,
  OccupationSummary,
  ProgressionStage,
  QualificationItem,
  RelatedCareerLink,
  SourceReference,
  SubjectItem,
  ToolItem,
} from '../types/career.ts';
import { CAREER_CLUSTERS } from './clusters.ts';
import { INITIAL_CAREERS } from './careersSeed.ts';
import { ALL_TAXONOMY_ENTRIES } from './taxonomy/index.ts';
import type { EntryRouteCategory, OccupationSeedEntry } from './taxonomy/types.ts';

interface RouteTemplate {
  indianStreamNotes: string;
  internationalNotes: string;
  alternativeAndVocationalNote: string;
  researchAndAdvancedNote: string;
  countryDifferencesNote: string;
  pathways: (indiaReq: string, globalReq: string) => EducationPathwayItem[];
  qualifications: (indiaReq: string, globalReq: string) => QualificationItem[];
  progression: (role: string) => ProgressionStage[];
  countryMap: (indiaReq: string, globalReq: string) => CountryRequirement[];
  defaultWorkplaces: string[];
  industryHighlights: string[];
}

const CLUSTER_IMAGES: Record<string, { url: string; caption: string }> = {
  'agriculture-natural-resources': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Field documentation, specimen archives, and environmental reference studies.',
  },
  'architecture-construction': {
    url: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    caption: 'Architectural drafting boards, structural material samples, and scale models.',
  },
  'arts-communications': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Editorial typography, visual studio equipment, and documentary archives.',
  },
  'business-management': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Organisational planning, operations ledgers, and enterprise strategy workflows.',
  },
  'education-training': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Curricular study guides, classroom resources, and pedagogical documentation.',
  },
  'finance-actuarial': {
    url: '/src/assets/images/career_computing_systems_1795001233090.jpg',
    caption: 'Quantitative actuarial models, audit workbooks, and risk schedules.',
  },
  'government-public-policy': {
    url: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    caption: 'Civic institution records, policy briefs, and public administration archives.',
  },
  'health-medicine': {
    url: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    caption: 'Clinical reference instruments, diagnostic charts, and patient-care environments.',
  },
  'hospitality-tourism': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Culinary craft, destination curation, and sustainable hospitality operations.',
  },
  'human-services': {
    url: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    caption: 'Community support practice, care coordination notes, and counselling settings.',
  },
  'information-technology': {
    url: '/src/assets/images/career_computing_systems_1795001233090.jpg',
    caption: 'Systems architecture workstations, code reviews, and network reliability setups.',
  },
  'law-public-safety': {
    url: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    caption: 'Statutory compendia, evidentiary logs, and public protection standards.',
  },
  'manufacturing-robotics': {
    url: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    caption: 'Precision fabrication benches, automation rigs, and quality metrology tools.',
  },
  'marketing-commerce': {
    url: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    caption: 'Ethnographic research decks, editorial studios, and retail merchandising plans.',
  },
  'stem-research': {
    url: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    caption: 'Research instrumentation, laboratory notebooks, and experimental apparatus.',
  },
  'transportation-logistics': {
    url: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    caption: 'Transit corridor maps, freight control consoles, and multimodal scheduling.',
  },
  'energy-climate': {
    url: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    caption: 'Grid engineering telemetry, renewable hardware, and environmental field studies.',
  },
  'space-aviation': {
    url: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    caption: 'Flight instrumentation, propulsion test records, and orbital systems design.',
  },
};

const DEFAULT_SOURCES: SourceReference[] = [
  {
    label: 'National Career Service (NCS) / NCO Taxonomy',
    url: 'https://www.ncs.gov.in/',
    organization: 'Ministry of Labour & Employment, India',
  },
  {
    label: 'O*NET OnLine Occupational Reference',
    url: 'https://www.onetonline.org/',
    organization: 'U.S. Department of Labor',
  },
  {
    label: 'ESCO European Skills & Occupations Classification',
    url: 'https://esco.ec.europa.eu/',
    organization: 'European Commission',
  },
];

function buildCountries(
  indiaReq: string,
  globalReq: string,
  us: [string, string, string, string],
  uk: [string, string, string, string],
  de: [string, string, string, string],
  ca: [string, string, string, string],
  au: [string, string, string, string],
  jp: [string, string, string, string],
  indiaSchool: string,
  indiaNotes: string,
): CountryRequirement[] {
  return [
    {
      country: 'India',
      schoolPathway: indiaSchool,
      higherEducationOrTraining: indiaReq,
      licensingOrExams: 'See Section 10 India-specific exams, statutory councils, or trade boards.',
      notes: indiaNotes,
    },
    {
      country: 'United States',
      schoolPathway: us[0],
      higherEducationOrTraining: us[1],
      licensingOrExams: us[2],
      notes: us[3],
    },
    {
      country: 'United Kingdom',
      schoolPathway: uk[0],
      higherEducationOrTraining: uk[1],
      licensingOrExams: uk[2],
      notes: uk[3],
    },
    {
      country: 'Germany',
      schoolPathway: de[0],
      higherEducationOrTraining: de[1],
      licensingOrExams: de[2],
      notes: de[3],
    },
    {
      country: 'Canada',
      schoolPathway: ca[0],
      higherEducationOrTraining: ca[1],
      licensingOrExams: ca[2],
      notes: ca[3],
    },
    {
      country: 'Australia',
      schoolPathway: au[0],
      higherEducationOrTraining: au[1],
      licensingOrExams: au[2],
      notes: au[3],
    },
    {
      country: 'Japan',
      schoolPathway: jp[0],
      higherEducationOrTraining: jp[1],
      licensingOrExams: jp[2],
      notes: jp[3],
    },
    {
      country: 'International',
      schoolPathway: 'Secondary mastery of core foundational subjects tailored to regional boards.',
      higherEducationOrTraining: globalReq,
      licensingOrExams: 'Cross-border credential recognition varies by statutory body and language proficiency.',
      notes: 'Verify reciprocal treaty recognition or local board bridging exams prior to relocation.',
    },
  ];
}

function makeStandardProgression(role: string): ProgressionStage[] {
  return [
    {
      stage: `Trainee / Apprentice (${role})`,
      typicalTimeframe: 'Years 0–2',
      focus: 'Core safety practices, shadowed execution, tool familiarity, and foundational deliverables.',
    },
    {
      stage: `Practitioner / Associate ${role}`,
      typicalTimeframe: 'Years 2–5',
      focus: 'Autonomous case/project handling, peer verification, and regional qualification completion.',
    },
    {
      stage: `Senior Specialist / Lead ${role}`,
      typicalTimeframe: 'Years 5–10',
      focus: 'Complex edge-case resolution, mentoring junior cohorts, and cross-disciplinary architecture.',
    },
    {
      stage: `Principal / Director / Independent Fellow`,
      typicalTimeframe: 'Years 10+',
      focus: 'Institutional standards setting, advisory consultancy, public policy input, or practice ownership.',
      alternateTrack: 'Deep individual-contributor technical fellowship or independent studio/workshop ownership.',
    },
  ];
}

function buildRouteTemplate(route: EntryRouteCategory): RouteTemplate {
  switch (route) {
    case 'medical-clinical':
      return {
        indianStreamNotes:
          'In India (CBSE, ICSE, State Boards), Physics, Chemistry, and Biology (PCB) in Classes 11–12 is compulsory for NEET-UG and medical/dental/veterinary entrance.',
        internationalNotes:
          'US/Canada typically require an undergraduate pre-med Bachelor’s before MCAT and MD/DO; UK, Australia, Germany, and Japan often offer 5–6 year direct-entry MBBS/MD medical degrees after high school Biology and Chemistry.',
        alternativeAndVocationalNote:
          'Clinical medicine cannot be entered via short vocational diplomas; allied paramedical technicians enter through 2–3 year B.Sc./Diploma clinical tracks.',
        researchAndAdvancedNote:
          'Postgraduate MD/MS/MDS residencies, DM/MCh super-specialisations, and clinician-scientist Ph.D. programmes open academic hospital leadership.',
        countryDifferencesNote:
          'Every nation enforces strict statutory licensing exams (NExT India, USMLE US, UKMLA UK, Approbation Germany, MCCQE Canada, AMC Australia, Kokushi Japan).',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Preparation', title: '10+2 Physics, Chemistry, Biology (PCB)', requirement: 'Mandatory', duration: '2 years', details: 'Essential science foundation with ethical patient empathy.', countryContext: 'India & Direct-Entry Systems' },
          { stage: 'Primary Clinical Degree', title: indiaReq, requirement: 'Mandatory', duration: '5–6 years (incl. internship)', details: 'Supervised pre-clinical anatomy, clinical ward rotations, and mandatory internship.', countryContext: 'India / Commonwealth / EU / JP' },
          { stage: 'Residency & Fellowship', title: globalReq, requirement: 'Mandatory', duration: '3–6 years', details: 'Board specialty residency training under senior attending clinicians.', countryContext: 'International' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised Medical/Veterinary Degree & National Council Registration', tier: 'Mandatory', kind: 'Registration', country: 'India & Global', details: indiaReq },
          { title: 'Board Specialty Residency / Licensing Examination', tier: 'Mandatory', kind: 'Licence', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school AP Biology/Chemistry → 4-yr Pre-Med Bachelor’s', 'MCAT → 4-yr MD/DO + 3–7 yr ACGME Residency', 'USMLE Steps 1–3 / COMLEX + State Medical Board', 'Overseas IMGs must pass ECFMG + match into a US residency.'],
            ['A-Levels Biology & Chemistry (AAA) + UCAT/GAMSAT', '5–6 yr MBBS/MBChB + 2-yr Foundation Programme', 'UKMLA + General Medical Council (GMC) Specialist Register', 'NHS specialty training pathways run 3–8 additional years.'],
            ['Abitur with strong natural sciences + TMS aptitude test', '6-year Staatsexamen Medizin + Practical Year (PJ)', 'Approbation (State Medical Licence) + Facharzt Residency', 'German C1 + Fachsprachprüfung C1 medical German mandatory.'],
            ['High school Sciences → 3–4 yr Bachelor’s degree', 'MCAT → 3–4 yr MD + CaRMS Residency Match', 'MCCQE Part I + Royal College (RCPSC / CFPC)', 'Provincial College licensure required per province.'],
            ['Year 12 Biology/Chemistry/English + UCAT ANZ', '5–6 yr direct MBBS/MD or 4-yr graduate MD + Intern year', 'AHPRA Registration + Specialist College Fellowship', 'Rural training pathways carry dedicated internship slots.'],
            ['High school Science stream + University entrance exams', '6-year Medical School (Igakubu) + 2-yr Clinical Residency', 'National Medical Practitioners Examination (Kokushi)', 'Japanese fluency (JLPT N1) compulsory for patient licensing.'],
            'Classes 11–12 Physics, Chemistry, Biology (PCB); minimum 50% aggregate (category norms apply) for NEET-UG.',
            'Recognised by NMC / VCI / DCI; foreign graduates clear FMGE / NExT screening prior to internship.'
          ),
        defaultWorkplaces: ['Public & Teaching Hospitals', 'Community Primary Clinics', 'Diagnostic Centres', 'Clinical Research Units'],
        industryHighlights: ['Public Health Systems', 'Tertiary Teaching Hospitals', 'Clinical Trials', 'Humanitarian Medical Relief'],
      };

    case 'allied-health':
      return {
        indianStreamNotes:
          'Classes 11–12 with Physics, Chemistry, and Biology (PCB) prepare students cleanly for Nursing, Pharmacy, Physiotherapy, Optometry, and Allied Health degrees.',
        internationalNotes:
          'Most countries require accredited 3–4 year allied bachelor’s or master’s degrees plus clinical placement hours and national board registration.',
        alternativeAndVocationalNote:
          '2-year DMLT/Diploma nursing & technician programmes offer strong hospital entry, upgradable later via post-basic B.Sc. bridges.',
        researchAndAdvancedNote:
          'Master’s and clinical doctorates (MPT, Pharm.D, MSN Nurse Practitioner, Au.D) expand autonomous prescribing and diagnostic scope.',
        countryDifferencesNote:
          'Allied scopes vary significantly across borders (e.g., Nurse Practitioners and Doctors of Pharmacy hold broader independent prescribing authority in North America/UK).',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Science Base', title: '10+2 PCB / Science Stream', requirement: 'Mandatory', duration: '2 years', details: 'Anatomy, chemistry, and patient-safety fundamentals.', countryContext: 'India / Global' },
          { stage: 'Accredited Clinical Degree/Diploma', title: indiaReq, requirement: 'Mandatory', duration: '2–4.5 years', details: 'Didactic labs paired with mandatory hospital clinical hours.', countryContext: 'India' },
          { stage: 'International Board Registration', title: globalReq, requirement: 'Mandatory', duration: '1–3 years (with placements)', details: 'National registry exams enabling hospital or clinic practice.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Statutory Council Registration (INC / PCI / NCAHP / RCI)', tier: 'Mandatory', kind: 'Registration', country: 'India', details: indiaReq },
          { title: 'National Allied Health Licensure', tier: 'Mandatory', kind: 'Licence', country: 'International', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Biology, Chemistry & Maths', 'B.S./M.S./Clinical Doctorate (BSN, DPT, Pharm.D, Au.D)', 'NCLEX-RN / NPTE / NAPLEX / State Health Board', 'Continuing education credits required every 2 years.'],
            ['A-Levels or BTEC Health & Social Care', '3-yr Honours B.Sc. (Nursing/Physio/Optom/Pharmacy)', 'NMC (Nursing) / HCPC (Allied Health) / GPhC Registration', 'NHS Apprenticeship degree routes also widely funded.'],
            ['Mittlere Reife or Abitur + Science grades', 'Dual Vocational Ausbildung (3 yrs) or Dual Hochschule Degree', 'State Health Authority Berufserlaubnis', 'B2/C1 Medical German required for hospital registration.'],
            ['High school Biology, Chemistry, English', '4-yr Accredited Bachelor’s / M.Sc. (Nursing/OT/PT/Pharm)', 'Provincial Regulatory College Exam (NCLEX-RN / PCE)', 'Clear bilingual demand in French-speaking provinces.'],
            ['Year 12 Biology / Chemistry / Maths', '3–4 yr Accredited University Degree with clinical blocks', 'AHPRA National Board Registration', 'Strong rural/regional hospital fellowship incentives.'],
            ['High school Science stream', '3-yr Vocational Senmon Gakko or 4-yr University Health Degree', 'MHLW National Health Practitioner Licence', 'Direct hospital mentorship system with national board tests.'],
            'Classes 11–12 Physics, Chemistry, Biology (PCB) for degree admissions.',
            'Regulated via INC, PCI, RCI, and National Commission for Allied and Healthcare Professions (NCAHP).'
          ),
        defaultWorkplaces: ['Hospitals & Trauma ICUs', 'Outpatient Rehab Clinics', 'Diagnostic Laboratories', 'Community Health Centres'],
        industryHighlights: ['Hospital Networks', 'Rehabilitation Centres', 'Diagnostics & Imaging', 'Public Primary Healthcare'],
      };

    case 'engineering-degree':
      return {
        indianStreamNotes:
          'In India, Physics, Chemistry, and Mathematics (PCM) in Classes 11–12 prepares students for JEE Main/Advanced, state CETs, and accredited B.Tech/B.E. programmes.',
        internationalNotes:
          'Globally, accredited 4-year Bachelor’s (ABET US, Washington Accord, EUR-ACE Europe) followed by optional M.Sc./M.Eng. and Chartered/PE licensure represent the standard path.',
        alternativeAndVocationalNote:
          '3-year Polytechnic Engineering Diplomas after Class 10 allow direct technical roles or Lateral Entry directly into Year 2 of B.Tech.',
        researchAndAdvancedNote:
          'GATE / GRE-backed M.Tech, M.S., and Ph.D. research degrees open national R&D labs, space/defence agencies, and faculty appointments.',
        countryDifferencesNote:
          'India uses JEE/GATE and NBA accreditation; the US uses ABET + FE/PE exams; UK uses CEng via Engineering Council; Germany separates TU research universities from practice-oriented Fachhochschulen (HAW).',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Science & Maths', title: '10+2 Physics, Chemistry, Mathematics (PCM)', requirement: 'Mandatory', duration: '2 years', details: 'Calculus, mechanics, electricity, and spatial problem solving.', countryContext: 'India & Global' },
          { stage: 'Polytechnic Lateral Bridge (Optional)', title: '3-Year Diploma in Engineering', requirement: 'Optional', duration: '3 years post-10th', details: 'Hands-on workshop preparation with B.Tech lateral entry.', countryContext: 'India / Technical Institutes' },
          { stage: 'Accredited Engineering Degree', title: indiaReq, requirement: 'Mandatory', duration: '4–5 years', details: 'Core thermodynamics, design studio/labs, and capstone engineering.', countryContext: 'India' },
          { stage: 'Advanced / Licensure Track', title: globalReq, requirement: 'Recommended Additional', duration: '1–4 years', details: 'Chartered Engineer (CEng), PE licensure, or specialised Master’s.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised B.Tech / B.E. / B.Arch / B.Plan Degree', tier: 'Mandatory', kind: 'Degree', country: 'India & Washington Accord', details: indiaReq },
          { title: 'Chartered / Professional Engineer (PE / CEng / GATE)', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Calculus, Physics, Chemistry (AP/Honors)', '4-yr ABET-accredited B.S. Engineering', 'FE (Fundamentals of Engineering) → 4 yrs work → PE Exam', 'Washington Accord facilitates degree comparability.'],
            ['A-Levels Mathematics & Physics (+ Further Maths/Design)', '3-yr B.Eng. or 4-yr M.Eng. (accredited by IET/IMechE/ICE)', 'IEng / Chartered Engineer (CEng) via Engineering Council', 'Degree Apprenticeships blend paid industry work with B.Eng.'],
            ['Abitur with Leistungskurs Mathematik & Physik', 'TU University or Fachhochschule (B.Sc./M.Sc. + Praxissemester)', 'Ingenieurgesetz state chamber registration ("Beratender Ingenieur")', 'Strong Duales Studium options paired directly with industry.'],
            ['Grade 12 Calculus, Physics, Chemistry, English', '4-yr CEAB-accredited B.Eng. / B.A.Sc. (often with Co-op)', 'P.Eng. (Professional Engineer) via provincial association', 'Co-op work terms build vital industry experience before graduation.'],
            ['Year 12 Specialist Maths, Physics, Chemistry', '4-yr Engineers Australia accredited B.E. (Hons)', 'Chartered Engineer (CPEng) + NER registration', 'Washington Accord recognition covers international transfers.'],
            ['High school Rikei (Science/Maths) track + University tests', '4-yr Engineering Faculty (Kogakubu) + optional 2-yr Master’s', 'Gijutsushi (Professional Engineer Japan) exam', 'Close university-lab-to-manufacturer mentorship recruiting.'],
            'Classes 11–12 PCM (Physics, Chemistry, Maths) for JEE/CET; Class 10 Maths/Science for Polytechnic Diplomas.',
            'Washington Accord / NBA-accredited degrees simplify international recognition for postgraduate study and migration.'
          ),
        defaultWorkplaces: ['Engineering Design Studios', 'Testing Laboratories', 'Industrial Plants', 'Field Project Sites'],
        industryHighlights: ['Infrastructure & Core Engineering', 'R&D Centres', 'Public Utilities', 'Clean-Tech Startups'],
      };

    case 'science-research':
      return {
        indianStreamNotes:
          'Classes 11–12 Science (PCM, PCB, or PCMB) leads into 3–4 year B.Sc. Honours, 5-year BS-MS Integrated programmes (IISERs, NISER, IISc), and research fellowships.',
        internationalNotes:
          'University research scientists worldwide typically hold an Honours B.S. followed by an M.S./Ph.D. and postdoctoral research appointments.',
        alternativeAndVocationalNote:
          'B.Sc. graduates can enter laboratory technician, quality analysis, and museum/field monitoring roles directly without immediately pursuing a Ph.D.',
        researchAndAdvancedNote:
          'Competitive fellowships (CSIR-NET, GATE, JGEEBILS, NSF GRFP, Marie Skłodowska-Curie) fund doctoral and postdoctoral discovery.',
        countryDifferencesNote:
          'India features structured 5-year integrated BS-MS tracks at IISERs/NISER; Europe and UK often require a dedicated 1–2 year Master’s prior to 3–4 year Ph.D. enrolment; the US admits Honours B.S. graduates straight into 5–6 year Ph.D. programmes.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Science Foundation', title: '10+2 Science (PCM / PCB / PCMB)', requirement: 'Mandatory', duration: '2 years', details: 'Experimental inquiry across lab practicals and mathematics.', countryContext: 'India & Global' },
          { stage: 'Undergraduate / Integrated Science', title: indiaReq, requirement: 'Mandatory', duration: '3–5 years', details: 'B.Sc. (Hons) or 5-yr Integrated BS-MS with summer lab projects.', countryContext: 'India' },
          { stage: 'Doctoral & Postdoctoral Research', title: globalReq, requirement: 'Recommended Additional', duration: '4–6 years', details: 'Original thesis experiments, peer publications, and open-data archiving.', countryContext: 'International' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'B.Sc. / M.Sc. / BS-MS in Discipline', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: indiaReq },
          { title: 'CSIR-UGC NET / Ph.D. / Domain Charter (e.g. CChem / CGeol / CBiol)', tier: 'Recommended Additional', kind: 'Government Examination', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school AP Sciences & Calculus', '4-yr B.S. with undergraduate lab research → 5–6 yr Ph.D.', 'No single licence unless practising applied Geology (PG) or Clinical Lab', 'Funded via NSF / NIH research assistantships.'],
            ['A-Levels in 2–3 core Sciences/Maths', '3–4 yr B.Sc. / M.Sci. → 3–4 yr DPhil / Ph.D.', 'Chartered designations (CChem, CPhys, CBiol, CGeol)', 'UKRI Doctoral Training Partnerships fund Ph.D. cohorts.'],
            ['Abitur in Mathematics & Natural Sciences', '3-yr B.Sc. + 2-yr M.Sc. → 3–4 yr Dr. rer. nat. (Ph.D.)', 'Max Planck / Helmholtz / Leibniz Institute fellowships', 'Doctoral researchers are typically salaried university employees.'],
            ['Grade 12 Sciences & Calculus', '4-yr Honours B.Sc. → 2-yr M.Sc. → 4–5 yr Ph.D.', 'NSERC / CIHR grants; P.Geo / P.Chem in applied roles', 'Strong field station and co-op lab placements.'],
            ['Year 12 Sciences & Maths Methods', '3-yr B.Sc. + 1-yr Honours → 3–4 yr Ph.D.', 'ARC fellowships; AusIMM / RACI / Australian Society memberships', 'High international researcher mobility.'],
            ['High school Rikei science curriculum', '4-yr B.Sc. (Rigakubu) → 2-yr M.S. → 3-yr Ph.D.', 'JSPS Fellowships; national institutes (RIKEN / JAXA / AIST)', 'Structured Kenkyushitsu lab-group mentoring model.'],
            'Classes 11–12 Science; IISER Aptitude Test (IAT), NEST, CUET, and state entrance tests open premier research institutes.',
            'Publish open-source code, reproducible datasets, and summer research fellowships early to strengthen doctoral admissions.'
          ),
        defaultWorkplaces: ['Research Laboratories', 'Universities & National Institutes', 'Field Monitoring Stations', 'R&D Innovation Centres'],
        industryHighlights: ['National Research Councils', 'Universities', 'Biotech & Clean-Tech R&D', 'Scientific Agencies'],
      };

    case 'it-computing':
      return {
        indianStreamNotes:
          'Mathematics plus Computer Science or Informatics Practices in Classes 11–12 provides ideal preparation for B.Tech CS, BCA, B.Sc. CS, or specialised diplomas.',
        internationalNotes:
          'Strong portfolios, computer science degrees, practical internships, and security/cloud certifications open global opportunities across industries.',
        alternativeAndVocationalNote:
          'Recognised vocational diplomas, bootcamps with verifiable open-source codebases, and polytechnic diplomas allow skilled entry alongside formal CS degrees.',
        researchAndAdvancedNote:
          'M.Tech/M.S. and Ph.D. tracks in AI fairness, distributed consensus, cryptography, and HCI lead deep systems and academic work.',
        countryDifferencesNote:
          'Software engineering relies primarily on demonstrable engineering competence and portfolios rather than statutory state licensing, except in safety-critical aviation/medical systems.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Logic & Computing', title: '10+2 Mathematics + Computer Science / PCM', requirement: 'Recommended Additional', duration: '2 years', details: 'Algorithmic thinking, discrete logic, and programming basics.', countryContext: 'India & Global' },
          { stage: 'Technical Degree / BCA / Diploma', title: indiaReq, requirement: 'Mandatory', duration: '3–4 years', details: 'Data structures, OS kernels, databases, networking, and security.', countryContext: 'India' },
          { stage: 'Portfolio & Domain Certifications', title: globalReq, requirement: 'Recommended Additional', duration: 'Ongoing', details: 'Open-source systems, cloud/security practicals (CKA, OSCP, AWS/GCP).', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'B.Tech CS/IT / BCA / B.Sc. CS / Equivalent Portfolio', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: indiaReq },
          { title: 'Practical Cloud / Security / Accessibility Credentials', tier: 'Optional', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Maths + AP Computer Science A', '4-yr B.S. CS/CE or Coding Apprenticeship + Technical Portfolio', 'Vendor/Security Certs (OSCP, CKA, CISSP) optional', 'Strong internship-to-fulltime university pipelines.'],
            ['A-Levels Mathematics (+ Computer Science / Physics)', '3-yr B.Sc. CS / Degree Apprenticeship + GitHub Portfolio', 'BCS Chartered IT Professional (CITP) / CREST (for Cyber)', 'Higher & Degree Apprenticeships widely recognised.'],
            ['Abitur or Realschule + strong Maths/Informatics', 'Fachinformatiker Ausbildung (3 yrs) or TU/FH B.Sc. Informatik', 'IHK Vocational Certificate or Academic Degree', 'Dual vocational Fachinformatiker track pays while training.'],
            ['Grade 12 Calculus, Functions, Computer Science', '4-yr B.Sc./B.Eng. CS with Co-op terms', 'CIPS I.S.P. optional', 'Co-op placements build deep engineering resumes.'],
            ['Year 12 Mathematics Methods + Digital Solutions', '3-yr B.IT/B.Sc. or 4-yr B.Eng. Software + Portfolio', 'ACS Australian Computer Society Certification optional', 'Remote and hybrid tech roles span major cities.'],
            ['High school Maths & Informatics (Joho)', '4-yr CS Degree or 2–3 yr IT Senmon Gakko', 'IPA Fundamental/Applied Information Technology Engineer (FE/AP)', 'Government IPA certification is deeply respected by employers.'],
            'B.Tech CS requires PCM (10+2); BCA / B.Sc. IT accept varied streams with Maths/CS depending on university.',
            'Keep verifiable projects, automated tests, and security/accessibility awareness front and centre.'
          ),
        defaultWorkplaces: ['Engineering Offices', 'Remote Distributed Teams', 'Research Labs', 'Hospital/Transit IT Hubs'],
        industryHighlights: ['Enterprise & Civic Tech', 'Healthcare & Fintech Systems', 'Cybersecurity Defence', 'Public Digital Infrastructure'],
      };

    case 'skilled-trade-iti':
      return {
        indianStreamNotes:
          'Classes 8, 10, or 12 (with Workshop Science & Maths) qualify directly for NCVT Industrial Training Institutes (ITIs), Tool Rooms (IGTR/NTTF), and National Apprenticeship (NAPS) contracts.',
        internationalNotes:
          'Skilled trades enjoy immense respect and strong wages globally through formal multi-year paid Apprenticeships (Red Seal Canada, Duales System Germany, City & Guilds UK, Union/NCCER US, TAFE Australia).',
        alternativeAndVocationalNote:
          'Apprenticeship IS the primary gold-standard pathway—combining paid shop-floor mentorship with trade theory classroom blocks.',
        researchAndAdvancedNote:
          'Master Craftsperson ("Meister" / Foreman / Supervisor) licences open workshop ownership, safety inspection, and vocational instructor careers.',
        countryDifferencesNote:
          'Electrical, boiler, elevator, refrigeration, welding, and plumbing trades strictly require valid state/national safety licences before independent work.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Foundation', title: 'Class 10 / 12 Maths, Physics & Workshop Basics', requirement: 'Mandatory', duration: 'Completed secondary', details: 'Geometry, measurement, safety literacy, and blueprint reading.', countryContext: 'India & Global' },
          { stage: 'Trade Institute / Apprenticeship', title: indiaReq, requirement: 'Mandatory', duration: '1–3 years', details: 'Hands-on shop-floor machinery mastery + paid NAPS/guild apprenticeship.', countryContext: 'India' },
          { stage: 'Journeyman / Master Licensing', title: globalReq, requirement: 'Mandatory', duration: '2–4 years supervised practice', details: 'Trade exams certifying safe code-compliant independent work.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'ITI NCVT National Trade Certificate (NTC) / NAC Apprenticeship', tier: 'Mandatory', kind: 'Certification', country: 'India', details: indiaReq },
          { title: 'Journeyman / Master Trade Licence (Code-Compliant Trades)', tier: 'Mandatory', kind: 'Licence', country: 'International', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Diploma/GED + Trade Maths', '3–5 yr Registered Apprenticeship (Union JATC / NCCER / Trade School)', 'State Journeyman / Master Licence + OSHA-30 / EPA 608', 'Licensed Master crafts can run contracting firms.'],
            ['GCSEs Maths, English, Science (Grade 4+)', '2–4 yr Paid Trade Apprenticeship + NVQ / City & Guilds Level 3', 'ECS Gold Card / Gas Safe / CSCS Skilled Worker Card', 'T-Levels in Construction & Engineering bridge straight into work.'],
            ['Hauptschulabschluss / Mittlere Reife', '3–3.5 yr Duales System (Paid Apprenticeship + Berufsschule)', 'IHK / HWK Gesellenprüfung → optional Meisterbrief', 'Meister title permits training apprentices & running a firm.'],
            ['High school Grade 10–12 + Maths/Shop', '3–5 yr Provincial Apprenticeship + Technical Blocks', 'Red Seal Interprovincial Endorsement Exam', 'Red Seal allows legal trade mobility across every Canadian province.'],
            ['Year 10/11/12 + Pre-Apprenticeship Cert II', '3–4 yr Australian Apprenticeship + TAFE Certificate III', 'State Trade Licence (Electrician/Plumber/Builder)', 'Strong demand across infrastructure and clean-tech retrofits.'],
            ['Junior/Senior High School or Technical High (Kogyo Koko)', 'Company-sponsored training + Polytechnic/Trade School', 'National Trade Skill Test (Gino Kentei Grade 2–1)', 'Deep craft pride ("Monozukuri") and multi-decade mastery.'],
            'Class 10 pass enters 2-yr ITI Machinist/Electrician/Fitter/RAC/Tool Room trades cleanly; Class 10+2 required for advanced diplomas.',
            'Check national safety licensing (electricians, welders, lift, HVAC, boiler) carefully—work experience alone is never sufficient without safety clearance.'
          ),
        defaultWorkplaces: ['Precision Workshops', 'Construction Sites', 'Industrial Plants', 'Field Service Vans'],
        industryHighlights: ['Infrastructure & Housing', 'Precision Fabrication', 'Clean-Tech Retrofits', 'Equipment Maintenance'],
      };

    case 'law-judicial':
      return {
        indianStreamNotes:
          'Any Class 12 stream (Humanities, Commerce, or Science) qualifies for CLAT/AILET 5-year integrated LL.B.; STEM/Commerce students are especially sought in patent, tax, and tech law.',
        internationalNotes:
          'UK, India, Australia, Germany, and Japan offer direct undergraduate law pathways, whereas the US and Canada require a Bachelor’s degree before LSAT and a 3-year J.D.',
        alternativeAndVocationalNote:
          'Paralegal diplomas, conveyancing apprenticeships, and legal-tech operations roles offer meaningful legal careers without sitting full bar exams.',
        researchAndAdvancedNote:
          'LL.M., Ph.D. Law, and Judicial Services exams (PCS-J / Higher Judicial Services) open appellate advocacy, international tribunals, and judgeships.',
        countryDifferencesNote:
          'Bar admission is strictly jurisdictional: passing AIBE (India), State Bar (US), SQE/BPTC (UK), Zweites Staatsexamen (Germany), or National Shiho Shiken (Japan) is required to represent clients.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Preparation', title: '10+2 Any Stream (Strong Reading & Civics)', requirement: 'Mandatory', duration: '2 years', details: 'Critical reasoning, constitutional history, and clear writing.', countryContext: 'India & Global' },
          { stage: 'Qualifying Law Degree', title: indiaReq, requirement: 'Mandatory', duration: '3–5 years', details: '5-yr integrated BA/BBA/B.Sc. LL.B. or 3-yr post-grad LL.B.', countryContext: 'India' },
          { stage: 'Bar / Statutory Admission', title: globalReq, requirement: 'Mandatory', duration: '1–2 years training/exams', details: 'Bar exam, pupillage/articleship, and ethical character clearance.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised LL.B. / J.D. & National/State Bar Enrolment', tier: 'Mandatory', kind: 'Licence', country: 'India & Global', details: indiaReq },
          { title: 'Jurisdictional Bar / Solicitor / Judicial Qualification', tier: 'Mandatory', kind: 'Government Examination', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Humanities/Debate/Science → 4-yr Bachelor’s', 'LSAT → 3-yr ABA-accredited J.D.', 'State Bar Exam + MPRE Ethics Exam', 'Separate USPTO Patent Bar for technical patent prosecution.'],
            ['A-Levels Essay & Analytical subjects', '3-yr LL.B. (or any Bachelor’s + Law conversion) + QWE', 'Solicitors Qualifying Examination (SQE 1–2) or Bar Course', '2 years Qualifying Work Experience / 1-yr Pupillage required.'],
            ['Abitur + strong German & analytical reading', '4–5 yr Law Study + Erste Juristische Prüfung', '2-yr Referendariat + Zweites Staatsexamen ("Volljurist")', 'Both State Examinations compulsory for judges, prosecutors, and lawyers.'],
            ['High school → 3–4 yr Bachelor’s degree', 'LSAT → 3-yr J.D. / Civil Law BCL/LL.L (Quebec)', 'Articling / LPP + Provincial Law Society Bar Exam', 'Distinct common law vs Quebec civil law jurisdictions.'],
            ['Year 12 high academic ATAR + English', '4–5 yr LL.B. or 3-yr J.D. + Practical Legal Training (PLT)', 'State Supreme Court Admission + Practising Certificate', 'Supervised initial practice period applies post-admission.'],
            ['High school Humanities/Law prep', '4-yr Faculty of Law + Law School (Hoka Daigakuin)', 'National Bar Examination (Shiho Shiken) + 1-yr LTRI Apprenticeship', 'Judges, prosecutors, and Bengoshi attorneys share one national bar path.'],
            'CLAT / AILET / LSAT-India / MH-CET Law admit all Class 12 streams; Science graduates qualify additionally for the Indian Patent Agent Exam.',
            'Law licences do not transfer automatically across borders; foreign qualified attorneys sit conversion exams (SQE, NY/CA Bar, AIBE rules).'
          ),
        defaultWorkplaces: ['Courts & Tribunals', 'Law Firms & Legal Aid Clinics', 'Corporate & Regulatory Counsel Desks', 'Arbitration Chambers'],
        industryHighlights: ['Judiciary & Public Legal Aid', 'Regulatory Compliance', 'Intellectual Property & Tech Law', 'Dispute Resolution'],
      };

    case 'civil-defence':
      return {
        indianStreamNotes:
          '10+2 (any stream, PCM for technical/fire wings) builds eligibility for SSC, CAPF, State Police, Fire Services (NFSC), and UPSC Civil Services (IPS).',
        internationalNotes:
          'Agencies globally combine civil service/academic background checks, rigorous physical & psychological screening, and residential law-enforcement/rescue academies.',
        alternativeAndVocationalNote:
          'Constabulary, fireman, emergency dispatcher, and court security intakes open right after Class 10+2/ITI with upward departmental promotion exams.',
        researchAndAdvancedNote:
          'Criminology, Disaster Management, and Senior Staff College courses prepare commanders for multi-agency crisis leadership.',
        countryDifferencesNote:
          'Police, customs, immigration, and armed rescue commissions require national citizenship and clean legal background verification.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School & Physical Readiness', title: '10+2 + Physical Fitness & Civic Ethics', requirement: 'Mandatory', duration: 'Secondary completion', details: 'Endurance, integrity, constitutional rights, and first aid.', countryContext: 'India & Global' },
          { stage: 'Competitive Selection & Academy', title: indiaReq, requirement: 'Mandatory', duration: '6 months – 2 years academy', details: 'Written exam, physical standards test, medical, and residential training.', countryContext: 'India' },
          { stage: 'International Statutory Standards', title: globalReq, requirement: 'Mandatory', duration: 'Academy + Probation', details: 'State POST / NFPA / Fire & Border Agency commissioning.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Statutory Recruitment Exam & Residential Academy Clearance', tier: 'Mandatory', kind: 'Government Examination', country: 'India', details: indiaReq },
          { title: 'Medical, Background & Fitness Standards Certification', tier: 'Mandatory', kind: 'Age / Eligibility', country: 'India & Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Diploma / Bachelor’s (for Federal & Command)', 'Police/Fire Academy + EMT/NFPA 1001 or Federal FLETC', 'State POST Certification + Background & Psych Clearance', 'Federal agencies require US citizenship and 4-yr degrees.'],
            ['GCSEs/A-Levels or Policing Degree', 'Police Constable Degree Apprenticeship (PCDA) / Direct Entry / Fire Brigade', 'College of Policing Standards + Vetting', 'No height limits; fitness and situational judgement tests apply.'],
            ['Mittlere Reife or Abitur (for Gehobener Dienst)', '2.5–3 yr Dual Beamtenausbildung / Bachelor Polizeivollzugsdienst', 'Civil Service Beamtenstatus Oath & Physical Standards', 'Federal Bundespolizei vs 16 State Landespolizei & Berufsfeuerwehr.'],
            ['High school / College Police Foundations / Criminology', 'Provincial/RCMP Depot Training (26 weeks) + Field Coaching', 'Provincial Constable / NFPA Firefighter Accreditation', 'Strong community de-escalation and bilingual screening.'],
            ['Year 12 + First Aid / Driver Licence', 'State Police / Fire & Rescue Academy (paid recruit phase)', 'National Public Safety Qualifications + Integrity Vetting', 'Psychometric resilience screening compulsory.'],
            ['High school or University Degree', 'Prefectural Police / Fire Academy (6–10 months residential)', 'Civil Service Officer Commissioning', 'Koban community policing integration early in career.'],
            'Strict age limits, eyesight/physical efficiency tests, and clean character verification apply across UPSC/SSC/State PSC/Fire recruitments.',
            'Public safety commissions are restricted to citizens of each jurisdiction.'
          ),
        defaultWorkplaces: ['Stations & Control Rooms', 'Courthouses & Borders', 'Disaster Incident Scenes', 'Public Patrol Beats'],
        industryHighlights: ['Civil Policing & Investigation', 'Fire & Urban Search Rescue', 'Border & Aviation Security', 'Judicial Protection'],
      };

    case 'finance-chartered':
      return {
        indianStreamNotes:
          'Commerce with Accountancy, Economics, and Mathematics in Classes 11–12 is classic preparation, though Science/Engineering students regularly excel in Actuarial Science and Quantitative Finance.',
        internationalNotes:
          'Professional chartered bodies (ICAI, IAI, ACCA, AICPA CPA, ICAEW, CFA, SOA/IFoA) test across tiered papers plus mandatory 3-year practical articleships.',
        alternativeAndVocationalNote:
          'Bookkeeping, payroll, GST compliance, and bank operations roles open directly with B.Com/BBA and accounting software fluency.',
        researchAndAdvancedNote:
          'Fellowship (FCA / FIAI / FIA), CFA Charter, and Ph.D. Economics/Financial Econometrics open central-bank policy and chief risk roles.',
        countryDifferencesNote:
          'Audit and tax signing authority differs by country (CA India, CPA US, ACA/ACCA UK, Wirtschaftsprüfer Germany, CPA Canada/Australia).',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Quantitative Base', title: '10+2 Commerce / Mathematics / Economics', requirement: 'Recommended Additional', duration: '2 years', details: 'Double-entry logic, probability, algebra, and economic reasoning.', countryContext: 'India & Global' },
          { stage: 'Chartered / Degree Track', title: indiaReq, requirement: 'Mandatory', duration: '3–5 years', details: 'B.Com/B.A. Econ + ICAI CA / IAI Actuarial / CMA / CS articleship.', countryContext: 'India' },
          { stage: 'Global Credentialing', title: globalReq, requirement: 'Mandatory', duration: '3–5 years', details: 'CPA / ACCA / CFA / SOA exams + ethical audit hours.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Statutory Accounting / Actuarial Membership (ICAI / IAI / SEBI / RBI)', tier: 'Mandatory', kind: 'Certification', country: 'India', details: indiaReq },
          { title: 'Global Financial/Risk Charter (CPA / CFA / IFoA / SOA)', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school AP Calculus, Economics, Statistics', '150-credit Bachelor’s/Master’s Accounting/Maths', 'Uniform CPA Exam (4 parts) / CFA / SOA Actuarial Track', 'State Board licensing governs public audit sign-offs.'],
            ['A-Levels Mathematics, Economics, Accounting', 'University Degree or School-Leaver Audit Apprenticeship', 'ICAEW ACA / ACCA / CIMA / IFoA Fellowship', 'UK recognises chartered apprenticeships strongly without debt.'],
            ['Abitur Maths & Economics', 'B.Sc./M.Sc. BWL/VWL/Wirtschaftsmathematik + Work Exp', 'Steuerberater / Wirtschaftsprüfer / Aktuar (DAV) State Exams', 'Statutory audit and tax exams carry high selectivity.'],
            ['Grade 12 Calculus, Advanced Functions, Accounting', '4-yr Accredited B.Com / B.Math + CPA PEP Modules', 'CPA Common Final Examination (CFE) / FCIA Actuarial', 'Strong mutual recognition with international chartered bodies.'],
            ['Year 12 Maths Methods, Economics, Accounting', '3-yr B.Com / B.Actl + Chartered Accountants ANZ / Actuaries Inst', 'CA ANZ / CPA Australia / FIAA Fellowship', 'Reciprocal membership agreements across Commonwealth.'],
            ['High school Maths & Commerce/Econ', '4-yr Economics/Commerce Degree → Rigorous National Exams', 'Japanese CPA (Konin Kaikeishi) / IAAJ Actuary', 'Financial Services Agency (FSA) governs certified public audit.'],
            'CA Foundation & IAI ACET can be attempted right after Class 12 alongside B.Com/B.Sc. Statistics.',
            'Verify IFRS vs US GAAP / Indian Ind AS reporting frameworks and fiduciary ethics rules across borders.'
          ),
        defaultWorkplaces: ['Audit & Advisory Firms', 'Insurance & Pension Funds', 'Central & Commercial Banks', 'Corporate Treasury Desks'],
        industryHighlights: ['Public Audit & Assurance', 'Insurance & Actuarial Risk', 'Public Finance & Central Banking', 'Sustainable ESG Finance'],
      };

    case 'business-management':
      return {
        indianStreamNotes:
          'Any Class 12 stream (Commerce, Humanities, or Science) leads to BBA, B.Com, B.A. Economics, or B.Tech followed by operations experience and MBA/PGDM.',
        internationalNotes:
          'Employers value domain mastery first—combining real operational/analytical delivery with Business Administration or Supply Chain credentials.',
        alternativeAndVocationalNote:
          'Hands-on store supervision, cooperative management, and logistics dispatch allow upward leadership without immediate postgraduate MBAs.',
        researchAndAdvancedNote:
          'Executive MBAs, IIM fellowships, and specialised Master’s in Supply Chain or Organisational Psychology lead C-suite and policy strategy.',
        countryDifferencesNote:
          'No statutory licensing restricts general management, though project management (PMP), HR (SHRM/CIPD), and supply chain (ASCM) certifications boost global credibility.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Foundation', title: '10+2 Commerce, Economics, Humanities, or Science', requirement: 'Mandatory', duration: '2 years', details: 'Analytical writing, spreadsheets, basic economics, and teamwork.', countryContext: 'India & Global' },
          { stage: 'Undergraduate Degree', title: indiaReq, requirement: 'Mandatory', duration: '3–4 years', details: 'BBA/B.Com/B.Tech/B.A. with live organisational internships.', countryContext: 'India' },
          { stage: 'Specialised Postgrad / Credentials', title: globalReq, requirement: 'Recommended Additional', duration: '1–2 years', details: 'MBA/PGDM or PMP/ASCM/CIPD practitioner mastery.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised Bachelor’s Degree (+ MBA/PGDM for Strategy)', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: indiaReq },
          { title: 'Domain Practitioner Credential (PMP / ASCM / SHRM / Six Sigma)', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Maths, Economics, English, Debate', '4-yr B.S. Business/Operations/STEM + MBA after 2–5 yrs work', 'PMP / SHRM-SCP / ASCM CSCP optional', 'Strong internship-led corporate rotational programmes.'],
            ['A-Levels Economics, Maths, Business, Humanities', '3-yr Honours Degree or Management Degree Apprenticeship', 'CMI Chartered Manager / CIPD (HR) / CIPS (Procurement)', 'Chartered Manager status signals ethical management rigour.'],
            ['Abitur + English & Quantitative Economics', 'B.Sc./M.Sc. BWL / Wirtschaftsingenieurwesen + Praktika', 'IHK Fachwirt / Betriebswirt (Vocational Mgmt Track) optional', 'Strong Mittelstand apprenticeship-to-plant-manager mobility.'],
            ['Grade 12 Maths, English, Economics', '4-yr B.Com / B.B.A. (Co-op) + CPHR / PMP / SCMP', 'Provincial/National Professional Designations optional', 'High emphasis on workplace diversity and cooperative governance.'],
            ['Year 12 English, Maths, Economics', '3-yr B.Com/B.Bus + Graduate Rotational Programmes', 'AHRI / AIPM / CIPS certifications', 'Strong ESG and public-sector management opportunities.'],
            ['High school Humanities or Commerce track', '4-yr University Degree (Keizaigaku/Shogaku) → Shinsotsu Intake', 'SME Management Consultant (Chusho Kigyo Shindanshi)', 'Structured cross-department job rotation builds holistic managers.'],
            'CAT, XAT, CUET, IPMAT (5-yr Integrated MBA) represent common competitive entry pathways across India.',
            'Real frontline operational credibility (factories, stores, clinics, codebases) separates respected leaders from abstract slide-deck managers.'
          ),
        defaultWorkplaces: ['Corporate Headquarters', 'Operational Plants & Hubs', 'Consulting Field Sites', 'Cooperative Federations'],
        industryHighlights: ['Enterprise Operations', 'Supply Chain & Procurement', 'Management Consulting', 'Social & Cooperative Enterprises'],
      };

    case 'education-teaching':
      return {
        indianStreamNotes:
          'Any Class 12 subject mastery pairs with 4-year Integrated B.A./B.Sc. B.Ed. (ITEP under NEP 2020) or subject Bachelor’s + B.Ed. + CTET/TET qualification.',
        internationalNotes:
          'Public school teaching globally requires subject mastery plus accredited teacher preparation and state licensure (QTS UK, US State Licence, Referendariat Germany, VIT/NESA Australia, Kyoin Menkyo Japan).',
        alternativeAndVocationalNote:
          'D.El.Ed. (Elementary), Montessorian diplomas, adult literacy fellowships, and ed-tech instructional design allow teaching across community centres and publishers.',
        researchAndAdvancedNote:
          'M.Ed., M.A. Education, and Ph.D. tracks (UGC-NET) qualify university professors, national textbook authors, and learning scientists.',
        countryDifferencesNote:
          'Every country enforces strict child-safeguarding clearance (DBS UK, Working With Children Check AU, Police Clearance) and classroom teaching certification.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Mastery & Empathy', title: '10+2 Strong Command of Chosen Subjects', requirement: 'Mandatory', duration: '2 years', details: 'Deep curiosity, patience, and clear communication.', countryContext: 'India & Global' },
          { stage: 'Teacher Education & Subject Degree', title: indiaReq, requirement: 'Mandatory', duration: '2–4 years', details: '4-yr Integrated ITEP B.Ed. or Bachelor’s + 2-yr B.Ed./D.El.Ed.', countryContext: 'India' },
          { stage: 'Licensing & Child Safeguarding', title: globalReq, requirement: 'Mandatory', duration: 'Probation / Residency year', details: 'CTET/STET, QTS, State Teaching Licence, and background screening.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'NCTE-Recognised Teaching Degree + CTET/TET / UGC-NET', tier: 'Mandatory', kind: 'Government Examination', country: 'India', details: indiaReq },
          { title: 'Jurisdictional Teaching Licence & Safeguarding Check', tier: 'Mandatory', kind: 'Licence', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school strong in teachable major', '4-yr B.A./B.S. Education (or Subject + M.A.T.) + Student Teaching', 'State Teaching Licence (Praxis) + Background Check', 'Licences are issued per state with reciprocity agreements.'],
            ['A-Levels in specialty subjects + GCSE Maths/English/Science', '3–4 yr B.Ed. or Subject Degree + 1-yr PGCE / SCITT', 'Qualified Teacher Status (QTS) + Enhanced DBS Check', '2-year Early Career Teacher (ECT) induction mentorship.'],
            ['Abitur', 'Lehramt Bachelor + Master of Education + 18-mo Referendariat', '1. & 2. Staatsexamen for Civil-Service School Teachers', 'Teachers typically qualify across two distinct school subjects.'],
            ['Grade 12 + Volunteer Tutoring', '4-yr Concurrent B.Ed. or Degree + 2-yr Consecutive B.Ed.', 'Provincial College of Teachers Certificate (e.g. OCT)', 'French immersion and STEM educators in particular demand.'],
            ['Year 12 English + Maths + Subject majors', '4-yr B.Ed. or Bachelor’s + 2-yr Master of Teaching (MTeach)', 'State Registration (VIT / NESA) + Working With Children Check', 'LANTITE literacy/numeracy test compulsory pre-graduation.'],
            ['High school all-round academics', '4-yr Education Faculty or Subject Degree with Pedagogy Credits', 'Prefectural Kyoin Menkyojo + Prefectural Board Exam', 'Teachers rotate periodically across municipal public schools.'],
            'NEP 2020 transitions Indian teacher preparation steadily toward 4-year Integrated Teacher Education Programmes (ITEP) alongside CTET/STET.',
            'Clear criminal/safeguarding verification and inclusive special-needs sensitivity are non-negotiable everywhere.'
          ),
        defaultWorkplaces: ['Schools & Classrooms', 'Universities & Colleges', 'Museums & Libraries', 'Curriculum Studios'],
        industryHighlights: ['Public & Independent Schools', 'Higher Education', 'Inclusive Special Education', 'Public Libraries & Museums'],
      };

    case 'creative-portfolio':
      return {
        indianStreamNotes:
          'Any Class 12 stream prepares candidates for NID DAT, UCEED (IIT Design), NIFT, BFA Fine Arts, and conservatory auditions based on observational portfolio craft.',
        internationalNotes:
          'Admissions and studios evaluate original sketchbooks, process work, finished craft reels, and conceptual clarity far more than rote test scores.',
        alternativeAndVocationalNote:
          'Studio apprenticeships, community art ateliers, sound/camera rentals, and craft clusters allow dedicated makers to build respected careers without expensive private degrees.',
        researchAndAdvancedNote:
          'M.Des, M.F.A., and Practice-Led Design Ph.D. tracks lead design schools, museum curatorial departments, and accessibility research.',
        countryDifferencesNote:
          'Creative fields lack rigid statutory licences—copyright ethics, union/guild fair-pay contracts, and peer portfolios govern progression.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'Observational Craft Habit', title: '10+2 Any Stream + Sketchbook / Studio Portfolio', requirement: 'Mandatory', duration: 'Ongoing', details: 'Life drawing, composition, craft prototypes, or sound/photo studies.', countryContext: 'India & Global' },
          { stage: 'Design / Arts Degree or Atelier', title: indiaReq, requirement: 'Recommended Additional', duration: '3–4 years', details: 'B.Des / B.F.A. / B.Music / Conservatory or mentored apprenticeship.', countryContext: 'India' },
          { stage: 'Global Studio / Craft Track', title: globalReq, requirement: 'Recommended Additional', duration: '3–4 years', details: 'B.F.A./B.A. Design + juried exhibition/client portfolio.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Documented Original Portfolio & Process Sketchbooks', tier: 'Mandatory', kind: 'Certification', country: 'Global', details: 'Curated real prototypes, compositions, or client studies.' },
          { title: 'B.Des / B.F.A. / Conservatory Training', tier: 'Recommended Additional', kind: 'Degree', country: 'India & Global', details: `${indiaReq} · ${globalReq}` },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Art/Design/Photography + Portfolio prep', '4-yr B.F.A./B.Des (RISD, Parsons, Pratt, CalArts) or Apprenticeship', 'Guild/Union membership (AIGA, IATSE, SAG) where relevant', 'Clear portfolio and collaborative studio critiques essential.'],
            ['A-Levels Art/Design Technology + 1-yr Art Foundation Diploma', '3-yr B.A.(Hons) Design / Arts / Guild Apprenticeship', 'D&AD / Chartered Society of Designers optional', 'The UK 1-yr Foundation Diploma lets students explore disciplines first.'],
            ['Abitur + Mappenprüfung (Artistic Portfolio Exam)', 'Universität der Künste / Bauhaus / FH Gestaltung (B.A./Diplom)', 'Guild / Künstlersozialkasse (Artists Social Insurance)', 'Minimal tuition at public German Kunsthochschulen with selective portfolios.'],
            ['Grade 12 Visual Arts / Media + Portfolio', '4-yr B.Des / B.F.A. (OCAD U, Emily Carr, Concordia)', 'RGD (Registered Graphic Designer) provincial designation', 'Strong public-art and indigenous craft collaboration grants.'],
            ['Year 12 Visual Arts / Design + Folio Interview', '3–4 yr B.Des / B.F.A. (RMIT, UTS, VCA) or TAFE Diploma', 'AGDA / DIA Design Institute accreditation optional', 'Strong co-op studio placements.'],
            ['High school Art/Music + Practical Drawing Exam (Jitsugi)', '4-yr Art University (Tokyo Geidai, Tama, Musashino) or Senmon Gakko', 'Craft Guild / Meister-Apprentice lineage in traditional arts', 'Intense dedication to foundational craft ("Shokunin") values.'],
            'UCEED (IITs), NID DAT, NIFT, and JJ School / Kala Bhavana / NSD / FTII entrances test genuine observation rather than copied coaching templates.',
            'Protect original intellectual credit, model releases, and accessibility ethics across all media.'
          ),
        defaultWorkplaces: ['Design & Craft Studios', 'Theatres & Workshops', 'Museums & Publishing Houses', 'Remote Freelance Desks'],
        industryHighlights: ['Publishing & Typography', 'Product & Craft Design', 'Performing Arts & Film', 'Heritage & Museums'],
      };

    case 'media-journalism':
      return {
        indianStreamNotes:
          'Humanities, Economics, History, Political Science, or Science in Class 12 paired with student newspapers or radio prepares well for B.A. Journalism/Mass Comm and IIMC/ACJ PG diplomas.',
        internationalNotes:
          'Newsrooms globally hire sharp reporting portfolios across print, audio, investigative data, and video—valuing domain expertise in law, science, or finance.',
        alternativeAndVocationalNote:
          'Community radio fellowships, local district stringer reporting, and documentary workshops offer immediate field experience alongside degrees.',
        researchAndAdvancedNote:
          'Investigative journalism fellowships (Nieman, Reuters, Pari, Knight) empower deep public-interest beats.',
        countryDifferencesNote:
          'Press accreditation rules and defamation/FOIA/RTI protections differ substantially by country—journalists must know local media law.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Reading & Reporting', title: '10+2 Any Stream + Student Writing / Radio', requirement: 'Mandatory', duration: '2 years', details: 'Clear prose, fact-checking discipline, and civic curiosity.', countryContext: 'India & Global' },
          { stage: 'Journalism / Domain Degree', title: indiaReq, requirement: 'Recommended Additional', duration: '3–4 years', details: 'Domain degree (Econ/Law/Science/History) + Mass Comm PG Diploma.', countryContext: 'India' },
          { stage: 'International Newsroom Track', title: globalReq, requirement: 'Recommended Additional', duration: '3–4 years', details: 'Accredited Journalism degree (NCTJ UK / Columbia/Medill US) + clips.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Published Clips & Verified Fact-Checking Portfolio', tier: 'Mandatory', kind: 'Certification', country: 'Global', details: 'Demonstrated attribution accuracy, source protection, and corrections integrity.' },
          { title: 'Accredited Journalism Qualification / Press Accreditation', tier: 'Recommended Additional', kind: 'Certification', country: 'India & Global', details: `${indiaReq} · ${globalReq}` },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Newspaper / Yearbook / Debate', '4-yr B.A. Journalism or Domain Degree + M.S. Journalism + Internships', 'Press credentials issued by newsrooms/regional associations', 'FOIA transparency reporting is core craft.'],
            ['A-Levels History, English, Politics + Student Press', '3-yr B.A. Journalism or Domain Degree + NCTJ Fast-Track Diploma', 'NCTJ (National Council for the Training of Journalists)', 'Shorthand and UK media court-reporting law tested rigorously.'],
            ['Abitur + early newspaper/radio clips', 'Any University Degree + 2-yr Paid Volontariat Traineeship or Henri-Nannen-Schule', 'Presseausweis (Press Card) via DJV/dju', 'Paid 2-yr editorial Volontariat is the classic German newsroom route.'],
            ['Grade 12 English, History, Social Studies', '4-yr B.J. Journalism (Carleton/TMU) or Post-Grad Cert', 'CAJ ethics membership; bilingual English/French prized', 'Public broadcaster internships support regional reporting.'],
            ['Year 12 English, Modern History, Politics', '3-yr B.Journalism / Media + Cadetship at ABC/Print', 'MEAA Journalist Code of Ethics', 'First-year newsroom cadetships train beat fundamentals.'],
            ['High school Humanities/Social Studies', '4-yr University Degree (any discipline) → Mass-Hiring Editorial Exam', 'Kisha Club / Newspaper & NHK Editorial Entrance Track', 'Large Japanese media firms train generalist reporters internally.'],
            'India’s RTI Act 2005 and strong regional language fluency unlock authentic ground reporting outside metros.',
            'Independent fact-checking and zero plagiarism remain non-negotiable journalistic standards worldwide.'
          ),
        defaultWorkplaces: ['Newsrooms & Broadcast Studios', 'Field Reporting Locations', 'Publishing & Fact-Check Desks', 'Independent Documentary Teams'],
        industryHighlights: ['Public-Interest Journalism', 'Documentary Film & Audio', 'Book & Magazine Publishing', 'Fact-Checking & Open Data'],
      };

    case 'aviation-maritime':
      return {
        indianStreamNotes:
          'Classes 11–12 Physics and Mathematics (PCM) is strictly compulsory for commercial pilot licences (DGCA), Air Traffic Control (AAI), AME maintenance, Nautical Science (IMU), and Marine Engineering.',
        internationalNotes:
          'Aviation (ICAO/FAA/EASA) and shipping (IMO STCW) operate under tight harmonised international treaties, requiring Class-1 aviation/seafarer medical fitness and logged sea/flight hours.',
        alternativeAndVocationalNote:
          'Drone Remote Pilot Certificates (RPC), cabin safety training, and deck/engine ratings offer accelerated operational routes into aviation and shipping.',
        researchAndAdvancedNote:
          'Test-pilot/flight-test schools, Master Mariner Unlimited CoCs, and maritime admiralty/aviation law offer top command tracks.',
        countryDifferencesNote:
          'Pilots, AMEs, ATC officers, and Ship Masters require explicit national licence validation/conversion when changing flag or registration country.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Science & Medical Eligibility', title: '10+2 PCM + Colour-Vision / Class-1 Medical Clearances', requirement: 'Mandatory', duration: '2 years', details: 'Physics, trig, English ICAO/IMO fluency, and medical screening.', countryContext: 'India & Global' },
          { stage: 'Approved Academy / Sea/Flight Time', title: indiaReq, requirement: 'Mandatory', duration: '2–4 years', details: 'DGCA FTO / CAR-147 / IMU Marine / CATC ATC approved training.', countryContext: 'India' },
          { stage: 'National Licence / CoC Exams', title: globalReq, requirement: 'Mandatory', duration: 'Progressive hours', details: 'Checkrides, simulator checks, and oral Master/Engineer exams.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Statutory Aviation/Maritime Licence (DGCA / AAI / DG Shipping)', tier: 'Mandatory', kind: 'Licence', country: 'India', details: indiaReq },
          { title: 'ICAO / IMO STCW International Certificate of Competency', tier: 'Mandatory', kind: 'Licence', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Physics, Maths + FAA First-Class Medical', 'Part 141/61 Flight School / USMMA Kings Point / FAA ATC', 'FAA CPL/ATPL (1,500 hrs) / A&P / USCG Unlimited Mate-Master', 'Strict FAA/USCG drug-testing & biennial medicals.'],
            ['A-Levels Maths & Physics + CAA/MCA Medical', 'EASA/UK CAA FTO / Warsash Maritime Academy Cadetship', 'UK CAA ATPL / Part-66 / MCA STCW Master Unlimited', 'High cadet sponsorship schemes via major airlines/fleets.'],
            ['Abitur Maths, Physics, English + Medical', 'Lufthansa/Aviation Academies / Hochschule Jade/Bremen Nautical', 'EASA-LBA Licence / BSH STCW Patent', 'Dual simulator & sea-time blocks run strictly under EU rules.'],
            ['Grade 12 Physics, Maths, English + TC Medical', 'Approved Flight/Maritime College (Seneca, BCIT, Coast Guard)', 'Transport Canada CPL/ATPL/AME / Master Mariner CoC', 'Strong regional bush/seaplane & ice-navigation training.'],
            ['Year 12 Physics, Maths Methods + CASA/AMSA Medical', 'Approved FTO / Australian Maritime College (AMC Tasmania)', 'CASA CPL/ATPL / LAME / AMSA STCW Master CoC', 'High demand for remote regional aviation and bulk port pilots.'],
            ['High school Physics, Maths, English + Strict Class-1 Medical', 'Civil Aviation College / Tokyo/Kobe Maritime Univ + Airline Cadetship', 'JCAB Pilot/AME/ATC Licence / MLIT Kaigishi Marine CoC', 'Japanese airlines train many pilots through ab-initio cadet academies.'],
            'Always verify genuine DGCA / IMU / AAI official approvals and avoid unaccredited overseas flight-school debt traps.',
            'ICAO English Level 4+ proficiency and spotless logbook integrity are audited worldwide.'
          ),
        defaultWorkplaces: ['Cockpits & Ship Bridges', 'Control Towers & Ports', 'Maintenance Hangars & Drydocks', 'Mission Operations Centres'],
        industryHighlights: ['Commercial & Medevac Aviation', 'Global Merchant Shipping', 'Air Traffic & Port Safety', 'Spaceflight & Exploration'],
      };

    case 'agriculture-field':
      return {
        indianStreamNotes:
          'Classes 11–12 PCB, PCMB, or Agriculture stream unlocks ICAR-accredited 4-year B.Sc. (Hons.) Agriculture, Forestry, Fisheries, and Horticulture programmes.',
        internationalNotes:
          'Land-grant universities (US), agricultural/forestry faculties (Canada, Germany, Australia), and RAU/Harper Adams (UK) pair lab science with working farm/forest blocks.',
        alternativeAndVocationalNote:
          'Polytechnic diplomas in Agriculture, Horticulture, Dairy, and KVK skill training open immediate field-supervisor, nursery, and cooperative positions.',
        researchAndAdvancedNote:
          'ASRB-NET / ARS Scientist tracks and international CGIAR fellowships drive drought-resilient genetics, forestry, and coastal sustainability.',
        countryDifferencesNote:
          'Accredited agronomists/foresters carry voluntary or statutory titles in North America/UK (CCA, RPF Forester) while India uses ICAR degrees + State PSC Officer exams.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Science & Land Observation', title: '10+2 PCB / PCMB / Agriculture', requirement: 'Mandatory', duration: '2 years', details: 'Botany, soil chemistry, ecology, and meteorology basics.', countryContext: 'India & Global' },
          { stage: 'Agricultural / Forestry / Fisheries Degree', title: indiaReq, requirement: 'Mandatory', duration: '4 years (or 2-yr Diploma)', details: 'Includes Rural Agricultural Work Experience (RAWE) or forest camp.', countryContext: 'India' },
          { stage: 'Global Registration / Specialist Track', title: globalReq, requirement: 'Recommended Additional', duration: '2–4 years', details: 'M.Sc. / CCA Crop Adviser / Registered Forester / Marine Certs.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'ICAR-Accredited Degree / State Forest & Agri Exam', tier: 'Mandatory', kind: 'Degree', country: 'India', details: indiaReq },
          { title: 'Certified Crop Adviser (CCA) / Registered Professional Forester', tier: 'Recommended Additional', kind: 'Certification', country: 'International', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Biology, Chemistry, Environmental Science', '4-yr Land-Grant B.S. Agronomy / Forestry / Animal Science', 'ASA Certified Crop Adviser (CCA) / SAF Certified Forester', 'Extension Agents serve counties via university partnerships.'],
            ['A-Levels Biology, Chemistry, Geography or T-Level Agriculture', '3–4 yr B.Sc. (Harper Adams, Reading, Bangor) or Countryside Apprenticeship', 'BASIS / FACTS Adviser / Institute of Chartered Foresters (MICFor)', 'Strong regenerative farming and rewilding funding streams.'],
            ['Mittlere Reife or Abitur Sciences', '3-yr Landwirt/Forstwirt Apprenticeship or B.Sc. Agrar/Forstwissenschaft', 'Chamber of Agriculture Meister / Revierförster Civil Service', 'Deep traditional apprenticeship respect paired with precision farming.'],
            ['Grade 12 Biology, Chemistry, Maths', '4-yr B.Sc. Agriculture/Forestry/Fisheries (Guelph, UBC, Sask)', 'P.Ag. (Professional Agrologist) / RPF (Registered Professional Forester)', 'Provincial agrologist/forester Acts protect legal title practice.'],
            ['Year 12 Biology, Chemistry, Earth Science', '3–4 yr B.Ag.Sc. / B.Forestry / Marine Science', 'CPA (Certified Practising Agriculturist) optional', 'Heavy export horticulture, livestock biosecurity, and drought tech.'],
            ['High school Science stream', '4-yr Agriculture/Forestry Faculty (Nogakubu) or Agri College', 'Gijutsushi Agriculture / Prefectural Extension Advisor', 'Intense cooperative precision-horticulture and timber heritage.'],
            'ICAR CUET/AIEEA and State Agricultural University CETs govern 4-yr seats; UPSC IFoS opens Indian Forest Service command.',
            'Combine field humility alongside smallholder farmers with rigorous lab measurement.'
          ),
        defaultWorkplaces: ['Research Farms & Greenhouses', 'Forest Reserves & Watersheds', 'Aquaculture & Coastal Stations', 'Soil & Seed Laboratories'],
        industryHighlights: ['Food & Crop Security', 'Forest & Wildlife Stewardship', 'Sustainable Fisheries', 'Rural Cooperatives'],
      };

    case 'hospitality-service':
      return {
        indianStreamNotes:
          'Any Class 12 stream qualifies for NCHMCT JEE (IHM Institutes of Hotel Management), culinary institutes, and Indian Institute of Tourism & Travel Management (IITTM).',
        internationalNotes:
          'Switzerland, UK, US, Australia, and Germany respect both structured apprenticeships (Koch/Hotelfachfrau DE, Red Seal Cook CA, IHM IN) and hospitality management bachelor’s degrees.',
        alternativeAndVocationalNote:
          'Craft certificates in bakery, culinary arts, barista/tea grading, and mountaineering (NIM/HMI) offer immediate skilled jobs worldwide.',
        researchAndAdvancedNote:
          'Heritage conservation hospitality, destination sustainability policy, and culinary R&D/food science widen executive impact.',
        countryDifferencesNote:
          'Food hygiene cards (FSSAI FoSTaC India, ServSafe US, Level 2 Food Hygiene UK), wilderness/dive safety licences, and alcohol-service permits are jurisdiction-mandated.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Preparation', title: '10+2 Any Stream + Languages & Hygiene Interest', requirement: 'Mandatory', duration: '2 years', details: 'Communication, stamina, cultural curiosity, and numeracy.', countryContext: 'India & Global' },
          { stage: 'Hospitality / Culinary / Guiding Training', title: indiaReq, requirement: 'Mandatory', duration: '1–4 years', details: 'B.Sc. HHA (IHM), craft diploma, or mountaineering/dive ticket.', countryContext: 'India' },
          { stage: 'International Craft & Safety Standards', title: globalReq, requirement: 'Recommended Additional', duration: '1–3 years', details: 'Red Seal Cook / WSET / UIAGM / ServSafe / Destination Mgmt.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised Hospitality / Culinary / Guiding Qualification', tier: 'Mandatory', kind: 'Certification', country: 'India', details: indiaReq },
          { title: 'Food-Safety / Wilderness / Dive Rescue Licences', tier: 'Mandatory', kind: 'Licence', country: 'India & Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Home Ec / Business / Languages', '2–4 yr Culinary/Hospitality Degree (CIA, Cornell) or ACF Apprenticeship', 'ServSafe Food Handler/Manager + WFR (for Outdoor Guides)', 'Strong seasonal national park and urban hospitality hubs.'],
            ['GCSEs/A-Levels Languages, Business, Food Tech', 'Hospitality Apprenticeship or B.A. Hospitality/Tourism Management', 'Level 2/3 Food Hygiene + Blue Badge Guide / MLTE Mountain Leader', 'Apprenticeships span Michelin kitchens to heritage estates.'],
            ['Mittlere Reife / Abitur', '3-yr Dual Ausbildung (Koch / Hotelfachmann) + Meister', 'IHK Craft Exam + Health Department Hygiene Card', 'German hotel/culinary dual apprenticeships enjoy worldwide prestige.'],
            ['Grade 12 Culinary / Hospitality / Geography', '2–3 yr Culinary/Tourism Diploma or 4-yr B.H.M. + Apprenticeship', 'Red Seal Cook / Baker / ACMG Mountain Guide', 'Strong Indigenous eco-tourism and alpine guiding standards.'],
            ['Year 12 Hospitality / Languages / Geography', 'TAFE Cert III–IV Commercial Cookery or B.Tourism Management', 'Food Safety Supervisor + Outdoor Recreation Rescue Tickets', 'Strong café culture, reef ecotourism, and regional lodges.'],
            ['High school + Hospitality interest', '2-yr Culinary/Patisserie Senmon Gakko or Apprenticeship + Ryokan Service', 'Chorishi Menkyo (Licensed Chef) Exam after 2 yrs kitchen work', 'Japanese Chorishi culinary licence and Omotenashi craft standards.'],
            'NCHMCT JEE admits students across 70+ Institutes of Hotel Management (IHMs); NIM/HMI train mountain guides.',
            'Insist on humane kitchen/guide shift hours and zero plastic/food waste habits.'
          ),
        defaultWorkplaces: ['Commercial Kitchens & Bakeries', 'Heritage & Eco-Lodges', 'Mountain & Coastal Trails', 'Convention & Festival Venues'],
        industryHighlights: ['Culinary & Artisan Baking', 'Heritage & Eco-Hospitality', 'Adventure & Dive Guiding', 'Civic Events & Culture'],
      };

    case 'social-impact':
      return {
        indianStreamNotes:
          'Humanities, Psychology, Sociology, Political Science, or Biology in Class 12 lead into BSW, B.A. Psychology, and MSW/M.A. programmes (TISS, DU, NIMHANS, NIRD).',
        internationalNotes:
          'Clinical counselling, licensed social work, and speech/rehab therapies require regulated Master’s degrees, 1,500–3,000 supervised clinical hours, and state board licensure.',
        alternativeAndVocationalNote:
          'Peer recovery specialists, community mobilisation fellows, sign-language diplomas, and crisis-line workers enter meaningfully with targeted accredited diplomas.',
        researchAndAdvancedNote:
          'Ph.D. Social Policy, Clinical Psy.D., and Implementation Science evaluate which interventions genuinely uplift families.',
        countryDifferencesNote:
          'Statutory protected titles ("Clinical Psychologist", "Registered Social Worker", "Speech-Language Pathologist") require national council registration (RCI India, SWE UK, NASW/ASWB US).',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Empathy & Civics', title: '10+2 Humanities / Psychology / Social Sciences', requirement: 'Mandatory', duration: '2 years', details: 'Critical sociology, active listening, and local languages.', countryContext: 'India & Global' },
          { stage: 'Social Work / Psychology Degree', title: indiaReq, requirement: 'Mandatory', duration: '3–5 years', details: 'BSW + MSW / M.A. Counselling with mandatory fieldwork placements.', countryContext: 'India' },
          { stage: 'Clinical Supervised Hours & Board', title: globalReq, requirement: 'Mandatory', duration: '1–3 years supervised practice', details: 'RCI / LCSW / SWE / HCPC clinical licensure.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Recognised MSW / M.A. Psychology / RCI Registration', tier: 'Mandatory', kind: 'Registration', country: 'India', details: indiaReq },
          { title: 'Licensed Clinical Social Worker / Counsellor Credential', tier: 'Mandatory', kind: 'Licence', country: 'International', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Psychology, Sociology, Languages', '4-yr BSW/B.A. Psych → 2-yr CSWE-accredited MSW/M.S. + 3,000 hrs', 'State ASWB LCSW / LPC / LMFT Licensure', 'Mandatory ethics and mandated-reporter child-safety laws.'],
            ['A-Levels Sociology, Psychology, History, Biology', '3-yr Social Work / Psychology Degree or Step Up / Frontline Fast-Track', 'Social Work England (SWE) / BACP / HCPC Registration', 'Enhanced DBS safeguarding check mandatory.'],
            ['Abitur or Fachabitur Social Track', '3–4 yr B.A. Soziale Arbeit (FH/HAW) + Practical Recognition Year', 'Staatliche Anerkennung (State-Recognised Social Worker)', 'Strong youth-work, integration, and care-home structures.'],
            ['Grade 12 English, Social Sciences, Languages', '4-yr BSW → 1–2 yr MSW / M.A. Counselling Psychology', 'Provincial Registered Social Worker (RSW) / CCC Counsellor', 'High priority on Indigenous cultural humility and trauma care.'],
            ['Year 12 English + Humanities', '4-yr BSW or 2-yr Qualifying MSW (AASW Accredited)', 'AASW Membership + Working With Children & Police Clearances', 'Rural telehealth and NDIS disability support booming.'],
            ['High school Humanities/Civics', '4-yr Social Welfare Faculty (Shakai Fukushi)', 'National Shakai Fukushishi (Certified Social Worker) / Seishin Hoken', 'Deep geriatric and community care-manager structures.'],
            'CUET-PG opens TISS Mumbai/Tuljapur/Guwahati, Delhi University DSSW, and Central Universities; NIMHANS/CIP/RCI govern clinical psychology.',
            'Protect client dignity, strict confidentiality, and secondary-trauma self-care.'
          ),
        defaultWorkplaces: ['Community Field Centres', 'Hospitals & Mental Health Clinics', 'Schools & Youth Shelters', 'Disaster Relief & NGO Offices'],
        industryHighlights: ['Community & Family Welfare', 'Counselling & Trauma Care', 'Disability & Accessibility', 'Humanitarian Aid'],
      };

    case 'sports-performance':
      return {
        indianStreamNotes:
          'Physical Education and Biology in Classes 11–12 lead cleanly into B.P.Ed., B.Sc. Sports Science, and coaching diplomas at NSNIS Patiala and LNIPE Gwalior.',
        internationalNotes:
          'Universities globally pair Exercise Science / Kinesiology degrees with federation coaching badges (UEFA, ICC, USOC), NSCA CSCS, and safeguarding clearances.',
        alternativeAndVocationalNote:
          'Experienced retired athletes and certified fitness/yoga instructors qualify via national federation officiating exams and accredited fitness boards.',
        researchAndAdvancedNote:
          'M.Sc./Ph.D. Sports Biomechanics, High-Performance Physiology, and Sports Analytics drive Olympic podium support.',
        countryDifferencesNote:
          'Safeguarding checks, CPR/AED First Aid, and anti-doping WADA compliance are mandatory across youth coaching and officiating worldwide.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School Sport & Physiology', title: '10+2 Physical Education, Biology, First Aid', requirement: 'Mandatory', duration: '2 years', details: 'Athletic discipline, anatomy basics, and fair-play rules.', countryContext: 'India & Global' },
          { stage: 'Sports Degree / Coaching Diploma', title: indiaReq, requirement: 'Mandatory', duration: '1–4 years', details: 'B.P.Ed. / B.Sc. Sports Science / NSNIS Patiala / Federation Panels.', countryContext: 'India' },
          { stage: 'Accredited Coaching / S&C Credential', title: globalReq, requirement: 'Recommended Additional', duration: 'Ongoing levels', details: 'NSCA CSCS / Pro Coaching Badges / International Umpire Panels.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'NSNIS / B.P.Ed. / State Federation Coaching or Umpire Grade', tier: 'Mandatory', kind: 'Certification', country: 'India', details: indiaReq },
          { title: 'First Aid / AED / Anti-Doping / Safeguarding Clearance', tier: 'Mandatory', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Varsity Sports + Biology/Physics', '4-yr B.S. Kinesiology / Sports Management + NCAA/Club Play', 'NSCA CSCS / ACSM / Federation Coaching & SafeSport Clearance', 'Collegiate athletic pipeline serves Olympics and pro leagues.'],
            ['A-Levels PE, Biology, Psychology or BTEC Sport', '3-yr B.Sc. Sport & Exercise Science + Governing Body Coaching Levels', 'UKSCA / CIMSPA + Enhanced DBS + Safeguarding', 'Strong national lottery support via UK Sport academies.'],
            ['Abitur + Sports Aptitude Test (Sport-Eignungstest)', 'B.Sc./M.Sc. Sportwissenschaft (DSHS Köln) + DOSB Trainer Licence', 'DOSB Trainer C → B → A → Diplom-Trainer', 'German club system runs pyramid coaching tiers nationwide.'],
            ['Grade 12 Biology, Kinesiology, PE', '4-yr B.Kin. / B.Sc. Exercise Science', 'NCCP National Coaching Certification + CSEP-CEP', 'Strong Paralympic and winter-sport science centres.'],
            ['Year 12 PE, Biology, Maths', '3–4 yr B.Exercise & Sport Science (ESSA Accredited)', 'ESSA AES/ASpS + AIS/National Coaching Levels', 'Leading applied sports-science integration globally.'],
            ['High school Club Bukatsu + PE/Science', '4-yr Physical Education Univ (Nippon Sport Science Univ / Tsukuba)', 'JSPO Japan Sport Association Coach & Referee Licence', 'Deep school-to-corporate club athletic development.'],
            'SAI National Centres of Excellence, LNIPE Gwalior, and NSNIS Patiala anchor coaching and sports science careers in India.',
            'Always pair athletic ambition with secondary career degrees and concussion/heat-stroke protocols.'
          ),
        defaultWorkplaces: ['Stadiums & Training Tracks', 'High-Performance Biomechanics Labs', 'Community Sports Academies', 'Rehab & Fitness Gyms'],
        industryHighlights: ['National & Olympic Athletics', 'Youth School Coaching', 'Match Officiating & Integrity', 'Rehabilitation & Conditioning'],
      };

    case 'transport-operator':
    default:
      return {
        indianStreamNotes:
          'Class 10/12 with ITI Electrical/Mechanical/Diesel or clean state driving track opens Railway RRB Loco Pilot, Metro Operator, Transit Bus, and Commercial Freight driving careers.',
        internationalNotes:
          'Road, rail, crane, and utility transport careers rely on strict graduated commercial licences (CDL Class A/B US, Category C/D + CPC UK/EU, FRA Rail Engineer), medical vision checks, and hours-of-service logs.',
        alternativeAndVocationalNote:
          'Structured depot traineeships pay recruits during simulator and supervised line-driving blocks without requiring four-year university tuition.',
        researchAndAdvancedNote:
          'Experienced operators advance cleanly to Driver Instructors, Depot Safety Inspectors, Section Train Controllers, or Fleet Managers.',
        countryDifferencesNote:
          'Commercial driving, rail signalling, hazmat, and crane licences require clean traffic records, colour-vision medicals, and regional driving tests.',
        pathways: (indiaReq, globalReq) => [
          { stage: 'School & Safety Foundation', title: 'Class 10 / 12 + Clean Vision & Road/Trade Aptitude', requirement: 'Mandatory', duration: 'Secondary completion', details: 'Arithmetic, map reading, reaction safety, and mechanical checks.', countryContext: 'India & Global' },
          { stage: 'ITI / Licensing & Depot Academy', title: indiaReq, requirement: 'Mandatory', duration: '6 months – 2 years', details: 'RRB ZRTI rail school, HMV/HPV badge, or port equipment training.', countryContext: 'India' },
          { stage: 'Supervised Line / Route Checkride', title: globalReq, requirement: 'Mandatory', duration: '6–18 months supervised runs', details: 'CDL/HGV/FRA/CPCS proficiency checkrides and medical fitness.', countryContext: 'Global' },
        ],
        qualifications: (indiaReq, globalReq) => [
          { title: 'Statutory Transport / Rail / Heavy-Equipment Licence', tier: 'Mandatory', kind: 'Licence', country: 'India', details: indiaReq },
          { title: 'Hazardous Materials / Passenger / Crane Endorsement', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: globalReq },
        ],
        progression: makeStandardProgression,
        countryMap: (indiaReq, globalReq) =>
          buildCountries(
            indiaReq,
            globalReq,
            ['High school Diploma + Clean Driver Record + DOT Medical', 'Certified CDL Truck Driving School / Railroad Conductor → Engineer', 'CDL Class A/B (Hazmat/Passenger) / FRA Part 240 Loco Cert', 'Mandatory DOT rest limits and random medical/drug screens.'],
            ['GCSEs + Full Cat B Car Licence + DVLA Medical', 'LGV Cat C+E / PCV Bus / Train Operator Apprenticeship', 'Driver CPC (Certificate of Professional Competence) / ASLEF Rail', 'Paid municipal transit & rail depot academies train recruits.'],
            ['Mittlere Reife + Driving Licence + Psych Medical', '3-yr Berufskraftfahrer (Freight) or EiB Rail Train Driver Ausbildung', 'IHK Trade Licence + Triebfahrzeugführerschein (EU Rail)', 'Paid 3-year dual apprenticeships cover logistics & vehicle mechanics.'],
            ['Grade 12 + Clean Abstract + Air-Brake Endorsement', 'MELT Mandatory Entry-Level Training / Transit & Rail Depots', 'Provincial Class 1/2 CDL / RAC Rail Rule Qualification', 'Strict winter mountain chain & hours-of-service logging.'],
            ['Year 10/12 + Clean Licence Progression (C → LR → HR → MC)', 'Accredited Heavy Vehicle / Rail Operator Traineeship', 'Multi-Combination (MC) / Train Driver Cert IV', 'Major interstate road-train and iron-ore autonomous rail corridors.'],
            ['High school + Clean Vision/Hearing Medical', 'Driving School / Railway Company Training Institute (1 yr)', 'Large/Second-Class Commercial Licence / MLIT Rail Driver Licence', 'Legendary Shinkansen/transit punctuality driven by pointed call-and-response safety ("Shisa Kanko").'],
            'Hold valid LMV licence before upgrading to Heavy Transport (HMV/HPV); ITI Electrical/Mechanical/Diesel opens RRB Assistant Loco Pilot.',
            'Fatigue management, zero-alcohol rules, and pre-trip brake checks are enforced strictly everywhere.'
          ),
        defaultWorkplaces: ['Locomotive & Transit Cabs', 'Highway Freight Corridors', 'Port Terminals & Yards', 'Municipal Bus & Microhub Depots'],
        industryHighlights: ['Passenger Rail & Metro', 'Intermodal Freight Corridors', 'Urban Zero-Emission Buses', 'Ports & Last-Mile Microhubs'],
      };
  }
}

function buildSubjects(entry: OccupationSeedEntry, tmpl: RouteTemplate): {
  subjects: SubjectItem[];
  indianCurriculumNotes: string;
  internationalNotes: string;
} {
  const mapped: SubjectItem[] = entry.subjects.map((subj, idx) => ({
    subject: subj,
    tier: idx < 2 ? 'Essential' : idx === 2 ? 'Recommended' : 'Optional',
    whyItMatters: `Builds conceptual fluency directly needed for ${entry.specialisation.toLowerCase()} and daily decision-making as a ${entry.name}.`,
    howToStart: `Focus on practical problem sets, lab or field notebooks, and real-world applications connected to ${subj}.`,
  }));
  if (mapped.length === 0) {
    mapped.push({
      subject: 'Foundational Literacy, Numeracy & Applied Observation',
      tier: 'Essential',
      whyItMatters: 'Supports accurate documentation, safety rules, and craft judgement.',
      howToStart: 'Maintain structured observation journals and verify measurements carefully.',
    });
  }
  return {
    subjects: mapped,
    indianCurriculumNotes: tmpl.indianStreamNotes,
    internationalNotes: tmpl.internationalNotes,
  };
}

function buildTools(entry: OccupationSeedEntry): ToolItem[] {
  const categories: ToolItem['category'][] = [
    'Physical Tools',
    'Professional Equipment',
    'Computer Software',
    'Digital Platforms',
    'Industry Technologies',
    'Emerging Tools',
  ];
  const items: ToolItem[] = entry.tools.map((t, i) => ({
    name: t,
    category: categories[i % categories.length],
    usedFor: `Primary instrument or workflow system relied upon during ${entry.dailyFocus.toLowerCase()}`,
  }));
  while (items.length < 3) {
    items.push({
      name: items.length === 1 ? 'Safety & Calibration Protocols' : 'Technical Documentation & Field Logs',
      category: items.length === 1 ? 'Industry Technologies' : 'Digital Platforms',
      usedFor: `Maintaining verifiable quality, safety compliance, and traceable records in ${entry.industry}.`,
    });
  }
  return items;
}

function findRelatedCareerLinks(
  entry: OccupationSeedEntry,
  allEntries: OccupationSeedEntry[],
  clusterNames: Map<string, string>,
): RelatedCareerLink[] {
  const candidates = allEntries.filter(
    (other) =>
      other.id !== entry.id &&
      (other.clusterId === entry.clusterId ||
        (entry.secondaryClusterIds ?? []).includes(other.clusterId) ||
        (other.secondaryClusterIds ?? []).includes(entry.clusterId)),
  );
  // Prefer distinct jobFamilies or secondary clusters for richer lateral exploration
  const prioritized = [
    ...candidates.filter((c) => c.clusterId !== entry.clusterId),
    ...candidates.filter((c) => c.clusterId === entry.clusterId && c.jobFamily !== entry.jobFamily),
    ...candidates.filter((c) => c.clusterId === entry.clusterId && c.jobFamily === entry.jobFamily),
  ].slice(0, 4);

  return prioritized.map((target) => ({
    targetId: target.id,
    name: target.name,
    clusterName: clusterNames.get(target.clusterId) || target.clusterId,
    whyRelated: `Shares domain context across ${entry.industry} and ${target.industry}, or collaborates closely on joint projects.`,
    sharedSkills: entry.subjects.slice(0, 3),
    differencesInResponsibilities: `${target.name} focuses primarily on ${target.specialisation.toLowerCase()}, whereas ${entry.name} centres on ${entry.specialisation.toLowerCase()}.`,
    transitionPathway: `Complete targeted bridging modules or supervised experience in ${target.specialisedRole}; entry path: ${target.globalRequirement}.`,
  }));
}

export function hydrateSingleEntry(
  entry: OccupationSeedEntry,
  allEntries: OccupationSeedEntry[] = ALL_TAXONOMY_ENTRIES,
): CareerProfile {
  const clusterNames = new Map(CAREER_CLUSTERS.map((c) => [c.id, c.name]));
  const clusterName = clusterNames.get(entry.clusterId) || entry.clusterId;
  const tmpl = buildRouteTemplate(entry.entryRoute);
  const img = CLUSTER_IMAGES[entry.clusterId] || CLUSTER_IMAGES['stem-research'];
  const countryRequirements = tmpl.countryMap(entry.indiaRequirement, entry.globalRequirement);

  const flagship = INITIAL_CAREERS.find((f) => f.id === entry.id);
  if (flagship) {
    return {
      ...flagship,
      secondaryClusterIds: entry.secondaryClusterIds ?? [],
      industry: entry.industry,
      specialisation: entry.specialisation,
      jobFamily: entry.jobFamily,
      specialisedRole: entry.specialisedRole,
      aliases: entry.aliases,
      verificationState: 'Verified',
      unverifiedSections: [],
      contentVersion: 2,
      isFeatured: true,
      countryRequirements,
    };
  }

  const subjectData = buildSubjects(entry, tmpl);
  const related = findRelatedCareerLinks(entry, allEntries, clusterNames);
  const isHistoricalOrObsolete = entry.status === 'Historical' || entry.status === 'Obsolete';

  return {
    id: entry.id,
    name: entry.name,
    clusterId: entry.clusterId,
    clusterName,
    secondaryClusterIds: entry.secondaryClusterIds ?? [],
    industry: entry.industry,
    specialisation: entry.specialisation,
    jobFamily: entry.jobFamily,
    specialisedRole: entry.specialisedRole,
    aliases: entry.aliases,
    status: entry.status,
    shortIntro: entry.shortIntro,
    specialisationTags: [
      entry.industry,
      entry.jobFamily,
      ...entry.specialisation.split(',').map((s) => s.trim()).slice(0, 2),
    ].slice(0, 4),
    imageUrl: img.url,
    imageCaption: `${entry.name} — ${img.caption}`,
    lastUpdated: '2026-11-18',
    sources: DEFAULT_SOURCES,
    unverifiedSections: entry.pioneer ? [] : [16],
    verificationState: entry.pioneer ? 'Verified' : 'Partially Verified',
    contentVersion: 2,
    isFeatured: false,
    countryRequirements,

    // 1. Introduction
    introduction: {
      summary: entry.shortIntro,
      definition: `A ${entry.name} (${entry.specialisedRole}) works within ${entry.industry}, specialising in ${entry.specialisation.toLowerCase()}.`,
      mainPurpose: entry.coreDuty,
      whyItExists: `Modern societies and ${entry.industry.toLowerCase()} rely on dedicated practitioners who uphold high technical, ethical, and safety standards in ${entry.jobFamily.toLowerCase()}.`,
      societalImportance: isHistoricalOrObsolete
        ? `Historically essential before technological and institutional transitions reshaped ${entry.industry.toLowerCase()}; preserved in heritage and archival study.`
        : `Supports reliable public services, resilient infrastructure, human wellbeing, or economic productivity across ${clusterName.toLowerCase()}.`,
      whatMakesItInteresting: `Combines day-to-day mastery of ${entry.tools.slice(0, 2).join(' and ')} with real-world problem solving around ${entry.specialisation.toLowerCase()}.`,
    },

    // 2. Responsibilities
    responsibilities: {
      summary: `Balances technical execution in ${entry.jobFamily.toLowerCase()} with safety, documentation, and multi-party coordination.`,
      mainDuties: [
        entry.shortIntro,
        `Execute core operational workflows including: ${entry.dailyFocus}`,
        `Operate, inspect, and maintain specialised systems such as ${entry.tools.join(', ')}.`,
        'Document procedures, compliance logs, and handoff notes accurately for peers and auditors.',
      ],
      importantResponsibilities: [
        entry.coreDuty,
        'Upholding ethical standards, human safety margins, and environmental accountability.',
      ],
      problemsSolved: [
        `Diagnosing practical bottlenecks and failures within ${entry.specialisation.toLowerCase()}.`,
        'Translating complex constraints into reliable, repeatable field or organisational solutions.',
      ],
      decisionsMade: [
        'Evaluating safety thresholds, readiness criteria, and quality verification before sign-off.',
        `Selecting appropriate methods and tools across ${entry.workMode.toLowerCase()} working conditions.`,
      ],
      collaborators: [
        `Fellow specialists inside ${entry.jobFamily}`,
        'Quality, safety, compliance, and leadership teams',
        'Clients, communities, students, or interdisciplinary partners served by the role',
      ],
    },

    // 3. Daily Work
    dailyWork: {
      summary: entry.dailyFocus,
      scheduleNote: isHistoricalOrObsolete
        ? 'Historical schedules followed pre-digital guild, shift, or civic hours; modern counterparts operate under contemporary labour standards.'
        : `Daily routines vary by workplace (${entry.workMode.toLowerCase()}), peak seasonal demand, and team size; no two practitioners follow an identical schedule.`,
      morningActivities: [
        `Review shift handoff logs, priority checklists, and safety/environmental readiness before active tasks begin.`,
        `Inspect or prepare primary equipment and digital workspaces (${entry.tools.slice(0, 2).join(', ')}).`,
      ],
      mainTasks: [
        entry.dailyFocus,
        `Apply ${entry.subjects.slice(0, 2).join(' and ')} principles to verify outputs and resolve exceptions.`,
      ],
      meetingsAndFieldwork: [
        `Coordinate across ${entry.industry} teams, supervisors, or community stakeholders.`,
        entry.workMode === 'Field' || entry.workMode === 'Outdoor' || entry.workMode === 'Mixed'
          ? 'Active on-site inspections, field measurements, or hands-on operational runs.'
          : 'Structured peer reviews, design/case briefings, and analytical audits.',
      ],
      toolsUsedDaily: entry.tools,
      communicationAndTeamwork:
        'Requires clear, jargon-free handoffs between specialists, junior trainees, and non-technical stakeholders.',
      endOfDayActivities: [
        'Log verifiable records, calibrate or store tools safely, and flag unresolved items for the next team or day.',
      ],
    },

    // 4. Specialisations
    specialisations: {
      summary: `Key sub-disciplines and branches within ${entry.name} practice.`,
      items: entry.specialisation
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .map((branch, idx) => ({
          id: `${entry.id}-spec-${idx + 1}`,
          title: branch,
          focus: `Concentrates deeply on ${branch.toLowerCase()} within ${entry.industry}.`,
          howItDiffers: `Emphasises specialised ${branch.toLowerCase()} workflows rather than broader ${entry.jobFamily.toLowerCase()} generalism.`,
          jobTitles: [
            idx === 0 ? entry.specialisedRole : `${branch} Specialist`,
            ...(entry.aliases[idx] ? [entry.aliases[idx]] : []),
          ],
          opportunities: `Active pathways across ${tmpl.industryHighlights.slice(0, 2).join(' and ')}.`,
        })),
    },

    // 5. Skills
    skills: {
      summary: `Balances domain-specific mastery in ${entry.industry.toLowerCase()} with clear communication and ethical judgement.`,
      technical: [
        {
          name: `${entry.jobFamily} Domain Mastery`,
          priority: 'Essential',
          description: `Applied mastery of ${entry.specialisation.toLowerCase()}.`,
        },
        {
          name: `Tool & Instrumentation Proficiency (${entry.tools[0] || 'Core Systems'})`,
          priority: 'Essential',
          description: 'Operating, calibrating, and troubleshooting core equipment safely.',
        },
        {
          name: 'Safety, Quality & Regulatory Documentation',
          priority: 'Essential',
          description: 'Maintaining accurate logs, tolerances, and statutory compliance.',
        },
        {
          name: `Cross-Disciplinary Literacy (${entry.subjects.slice(0, 2).join(', ')})`,
          priority: 'Useful Additional',
          description: 'Connecting adjacent scientific, economic, or digital tools into daily work.',
        },
      ],
      personalProfessional: [
        {
          name: 'Ethical Judgement & Accountability',
          priority: 'Essential',
          description: entry.coreDuty,
        },
        {
          name: 'Clear Written & Verbal Communication',
          priority: 'Essential',
          description: 'Explaining findings and safety decisions plainly across diverse teams.',
        },
        {
          name: 'Calm Problem-Solving Under Pressure',
          priority: 'Essential',
          description: 'Diagnosing root causes methodically rather than rushing guesswork.',
        },
        {
          name: 'Mentorship & Continuous Learning',
          priority: 'Useful Additional',
          description: 'Guiding apprentices or junior teammates while adapting to evolving standards.',
        },
      ],
    },

    // 6. School Subjects
    schoolSubjects: {
      summary: `Foundational subjects helping students build readiness for ${entry.name}.`,
      ...subjectData,
    },

    // 7. Education
    education: {
      summary: isHistoricalOrObsolete
        ? 'This historical occupation transitioned into modern equivalents; see pathways for contemporary study and archival reference.'
        : `Recognised entry routes in India and internationally for ${entry.name}.`,
      pathways: tmpl.pathways(entry.indiaRequirement, entry.globalRequirement),
      alternativeAndVocationalNote: tmpl.alternativeAndVocationalNote,
      researchAndAdvancedNote: tmpl.researchAndAdvancedNote,
    },

    // 8. Tools & Technology
    toolsAndTechnology: {
      summary: `Core instruments, platforms, and systems used in ${entry.industry}.`,
      items: buildTools(entry),
    },

    // 9. Experience
    experience: {
      summary: 'Progressive, practical ways school students and early beginners can test genuine interest.',
      stages: [
        {
          level: 'School Level',
          category: 'Beginner Activities',
          description: `Explore hands-on foundations tied to ${entry.subjects[0] || 'core skills'} and visit local museums, workshops, or community demonstrations.`,
        },
        {
          level: 'High School',
          category: 'School & Personal Projects',
          description: `Build a small documented project or field observation notebook exploring ${entry.specialisation.toLowerCase()}.`,
        },
        {
          level: 'Competitions & Clubs',
          category: 'Competitions',
          description: `Join school science fairs, robotics/debate/craft guilds, or Olympiad challenges aligned with ${clusterName}.`,
        },
        {
          level: 'College / Vocational',
          category: 'Internships & Apprenticeships',
          description: `Pursue structured apprenticeships, hospital/field clinics, studio assistantships, or lab internships in ${entry.industry}.`,
        },
        {
          level: 'Early Career',
          category: 'Research & Professional Exposure',
          description: `Shadow experienced ${entry.specialisedRole} practitioners and build verifiable portfolios or logbooks.`,
        },
      ],
    },

    // 10. Qualifications
    qualifications: {
      summary: 'Statutory degrees, licences, examinations, and recognised credentials.',
      items: tmpl.qualifications(entry.indiaRequirement, entry.globalRequirement),
      countryDifferencesNote: `${tmpl.countryDifferencesNote} Use the country selector below to inspect requirements across India, US, UK, Germany, Canada, Australia, and Japan.`,
    },

    // 11. Career Progression
    careerProgression: {
      summary: `Typical growth from supervised trainee toward senior specialist, mentor, or independent practice in ${entry.jobFamily}.`,
      stages: tmpl.progression(entry.name),
      nonManagementTracks: {
        entrepreneurship: `Founding an independent ${entry.industry.toLowerCase()} consultancy, studio, workshop, or cooperative service.`,
        research: `Conducting applied R&D, standards testing, or policy evaluation in ${entry.specialisation.toLowerCase()}.`,
        specialisation: `Deepening technical command into rare niche work as a Principal ${entry.specialisedRole}.`,
        leadership: `Serving on industry ethics boards, vocational curriculum panels, or institutional advisory committees.`,
      },
    },

    // 12. Workplaces
    workplaces: {
      summary: `Work settings across ${entry.workMode.toLowerCase()} environments within ${entry.industry}.`,
      workMode: entry.workMode,
      locations: tmpl.defaultWorkplaces,
      environmentDescription: `Practitioners operate primarily in ${entry.workMode.toLowerCase()} contexts, adapting schedules to operational safety, seasonal peaks, or client collaboration.`,
    },

    // 13. Career Opportunities
    careerOpportunities: {
      summary: isHistoricalOrObsolete
        ? 'Archived historical occupation; modern opportunities sit across evolved technical and institutional successors.'
        : `Spans public institutions, private enterprise, independent practice, and research across ${entry.industry}.`,
      mainIndustries: tmpl.industryHighlights,
      privateSector: `Direct roles within specialised firms, workshops, studios, and enterprise departments in ${entry.industry}.`,
      governmentSector: `Public-sector commissions, municipal utilities, national labs, regulatory agencies, and public service cadres.`,
      researchOpportunities: `Methodological improvement, open-standards testing, and university/think-tank collaborations.`,
      internationalOpportunities: `International transferability depends on language proficiency and local statutory credential verification (${entry.globalRequirement}).`,
      freelancingAndSelfEmployment: `Independent consulting, project contracting, or licensed practitioner clinics where local laws permit.`,
      entrepreneurshipAndStartups: `Building cleaner, safer, more accessible tools or cooperatives addressing gaps in ${entry.industry.toLowerCase()}.`,
      emergingDemand: `Growing attention to safety, sustainability, digital interoperability, and equitable public access across ${clusterName}.`,
      verifiedStatisticsNote:
        'Information not yet verified. Individual country-level employment growth percentages for this occupation await direct citation from national labour statistical bureaus.',
    },

    // 14. Related Careers
    relatedCareers: {
      summary: `Connected professions across ${clusterName} and adjacent domains.`,
      items: related,
    },

    // 15. Future Developments
    futureDevelopments: {
      summary: isHistoricalOrObsolete
        ? 'Illustrates how automation, electrification, and social reform reshaped human labour.'
        : `Evolving standards, tools, and sustainability expectations across ${entry.industry}.`,
      disclaimer:
        'Established developments reflect documented industry practice; speculative trends represent plausible scenarios rather than guarantees.',
      establishedDevelopments: [
        {
          area: 'Digital Workflow & Safety Instrumentation',
          description: `Modern ${entry.name} teams rely increasingly on traceable digital records, calibrated sensors, and open quality standards.`,
        },
        {
          area: 'Sustainability & Accessibility Accountability',
          description: `Organisations prioritise lower environmental footprints, worker wellbeing, and universal accessibility across ${entry.industry.toLowerCase()}.`,
        },
      ],
      speculativePredictions: [
        {
          area: 'Human-Centred Assistive Automation',
          description: `Routine repetitive checks may automate gradually while human ethical judgement, physical dexterity, and community trust remain indispensable.`,
        },
      ],
      environmentalAndSocialFactors:
        'Climate resilience, demographic shifts, and transparent governance continuously reshape training and workplace ethics.',
    },

    // 16. Real-World Examples
    realWorldExamples: entry.pioneer
      ? {
          summary: 'Verified historical or contemporary pioneer whose work shaped this discipline.',
          pioneers: [entry.pioneer],
        }
      : {
          summary: 'Information not yet verified.',
          pioneers: [],
        },
  };
}

export function buildFullCareerDatabase(): CareerProfile[] {
  return ALL_TAXONOMY_ENTRIES.map((entry) => hydrateSingleEntry(entry, ALL_TAXONOMY_ENTRIES));
}

export function toOccupationSummary(p: CareerProfile): OccupationSummary {
  return {
    id: p.id,
    name: p.name,
    clusterId: p.clusterId,
    clusterName: p.clusterName,
    secondaryClusterIds: p.secondaryClusterIds ?? [],
    industry: p.industry || p.clusterName,
    specialisation: p.specialisation || p.specialisationTags.join(', '),
    jobFamily: p.jobFamily || p.clusterName,
    specialisedRole: p.specialisedRole || p.name,
    aliases: p.aliases ?? [],
    status: p.status,
    workMode: p.workplaces.workMode,
    shortIntro: p.shortIntro,
    specialisationTags: p.specialisationTags,
    verificationState: p.verificationState ?? (p.unverifiedSections?.length ? 'Partially Verified' : 'Verified'),
    unverifiedSectionsCount: p.unverifiedSections?.length ?? 0,
    lastUpdated: p.lastUpdated,
    isFeatured: Boolean(p.isFeatured),
  };
}
