import type { CareerProfile } from '../types/career.ts';

export const CAREERS_PART_2: CareerProfile[] = [
  {
    id: 'public-policy-analyst',
    name: 'Public Policy Analyst & Civil Administrator',
    clusterId: 'government-public-policy',
    clusterName: 'Government, Public Policy & Administration',
    status: 'Current',
    shortIntro:
      'Researches social, economic, and environmental challenges to design, evaluate, and implement public programmes, laws, and civic services.',
    specialisationTags: ['Economic Policy', 'Urban Governance', 'Health & Education Policy', 'Regulatory Analysis'],
    imageUrl: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    imageCaption: 'Legislative archives, district maps, and economic review briefs in a policy research study.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'NITI Aayog Knowledge Portal', url: 'https://www.niti.gov.in/', organization: 'National Institution for Transforming India' },
      { label: 'UPSC Civil Services Examination Portal', url: 'https://upsc.gov.in/', organization: 'Union Public Service Commission' },
      { label: 'O*NET: Political Scientists & Policy Analysts', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Connects rigorous evidence with democratic institutions to solve large-scale civic problems.',
      definition:
        'A Public Policy Analyst & Civil Administrator examines how laws, public budgets, and government programmes affect citizens—turning statistical data, field realities, and legal frameworks into actionable civic decisions.',
      mainPurpose:
        'To ensure public funds and statutory authority deliver clean water, equitable schools, resilient infrastructure, and fair public services.',
      whyItExists:
        'Well-intentioned laws often fail on the ground without careful budgeting, local implementation planning, and independent impact measurement.',
      societalImportance:
        'Guides how nations respond to droughts, urban transit congestion, rural employment guarantees, and technological regulation.',
      whatMakesItInteresting:
        'Every policy touches millions of lives; work combines field hearings in villages or city wards with parliamentary briefings and economic research.',
    },
    responsibilities: {
      summary: 'Synthesises field evidence, fiscal trade-offs, and legal mandates into durable civic programmes.',
      mainDuties: [
        'Evaluate existing welfare, sanitation, or education schemes using district household surveys and budget audits.',
        'Draft clear policy briefs, legislative impact notes, and implementation guidelines for ministers or municipal commissioners.',
        'Conduct stakeholder consultations with citizen groups, frontline workers, and industry bodies.',
        'Monitor service delivery metrics across districts to identify execution gaps.',
      ],
      importantResponsibilities: [
        'Maintaining non-partisan analytical rigour and protecting citizen privacy when handling administrative datasets.',
      ],
      problemsSolved: [
        'Designing targeted subsidy or scholarship disbursements so eligible rural families are not excluded by documentation errors.',
      ],
      decisionsMade: [
        'Prioritising limited municipal capital budgets across flood drainage, primary clinics, and school classrooms.',
      ],
      collaborators: [
        'Elected representatives, civil service officers, and judicial clerks',
        'Economists, sociologists, NGOs, and municipal engineers',
      ],
    },
    dailyWork: {
      summary: 'Alternates between quiet reading of statutory reports, data evaluation, and intense public consultations.',
      scheduleNote:
        'Field administrators spend mornings inspecting public works or citizen grievances, while think-tank analysts focus on econometric evaluation and legislative drafting.',
      morningActivities: [
        'Review district monitoring dashboards, newspaper policy developments, and urgent parliamentary or council questions.',
      ],
      mainTasks: [
        'Analyse survey microdata to measure whether a school nutrition or maternal health scheme reached target blocks.',
        'Write concise 2-page policy memos weighing cost, legal feasibility, and unintended side effects.',
      ],
      meetingsAndFieldwork: [
        'Hold listening sessions with panchayat leaders, school headmasters, or urban resident associations.',
      ],
      toolsUsedDaily: [
        'Stata / R / Python, QGIS demographic maps, parliamentary gazettes, and public finance spreadsheets.',
      ],
      communicationAndTeamwork:
        'Requires distilling 200-page technical studies into unbiased 5-minute briefings for busy decision-makers.',
      endOfDayActivities: [
        'Log consultation notes and circulate revised draft notifications to legal review teams.',
      ],
    },
    specialisations: {
      summary: 'Policy work branches by governance level and thematic domain.',
      items: [
        {
          id: 'civil-administration',
          title: 'District & Civil Service Administration',
          focus: 'Direct executive governance of revenue, disaster response, law and order, and public welfare.',
          howItDiffers: 'Hands-on statutory execution on the ground rather than advisory research.',
          jobTitles: ['IAS / State Civil Service Officer', 'Municipal Commissioner'],
          opportunities: 'Union and state governments in India; civil services globally.',
        },
        {
          id: 'development-economics',
          title: 'Development Policy & Impact Evaluation',
          focus: 'Testing public health, education, and poverty programmes via randomised evaluations and field surveys.',
          howItDiffers: 'Empirical research orientation inside think tanks and multilateral institutions.',
          jobTitles: ['Policy Researcher', 'Monitoring & Evaluation Specialist'],
          opportunities: 'NITI Aayog, J-PAL, World Bank, UNDP, and university policy centres.',
        },
        {
          id: 'tech-regulation',
          title: 'Technology, Data & Digital Public Infrastructure Policy',
          focus: 'Governing digital identity, cybersecurity standards, AI safety, and telecommunications access.',
          howItDiffers: 'Bridges computer science architecture with constitutional privacy and competition law.',
          jobTitles: ['Tech Policy Fellow', 'Regulatory Affairs Analyst'],
          opportunities: 'Digital ministries, policy institutes, and global technology governance teams.',
        },
      ],
    },
    skills: {
      summary: 'Blends quantitative economic literacy with constitutional awareness and persuasive prose.',
      technical: [
        { name: 'Policy Analysis & Cost-Benefit Evaluation', priority: 'Essential', description: 'Comparing fiscal costs, equity outcomes, and implementation risks across options.' },
        { name: 'Applied Statistics & Survey Interpretation', priority: 'Essential', description: 'Reading Census, NFHS, and NSS datasets critically without confusing correlation and causation.' },
        { name: 'Administrative & Constitutional Literacy', priority: 'Essential', description: 'Understanding federal division of powers, municipal bylaws, and legislative drafting.' },
        { name: 'Econometrics (R / Stata)', priority: 'Useful Additional', description: 'Running regression and difference-in-differences programme evaluations.' },
      ],
      personalProfessional: [
        { name: 'Clear, Unbiased Memo Writing', priority: 'Essential', description: 'Presenting evidence crisply even when data contradicts popular assumptions.' },
        { name: 'Stakeholder Listening', priority: 'Essential', description: 'Respecting perspectives from farmers, workers, scientists, and administrators alike.' },
        { name: 'Ethical Integrity', priority: 'Essential', description: 'Refusing conflicts of interest and upholding transparency.' },
      ],
    },
    schoolSubjects: {
      summary: 'Open to all streams; Social Sciences, Economics, and Mathematics create an outstanding mix.',
      subjects: [
        { subject: 'Political Science / Civics', tier: 'Essential', whyItMatters: 'Explains constitutions, federalism, electoral systems, and administrative accountability.', howToStart: 'Read how your local municipality or gram panchayat allocates its annual budget.' },
        { subject: 'Economics', tier: 'Essential', whyItMatters: 'Clarifies taxation, public goods, inflation, and welfare incentives.', howToStart: 'Explore summaries of the Union or State Budget and track one education allocation.' },
        { subject: 'Mathematics & Statistics', tier: 'Recommended', whyItMatters: 'Essential for interpreting national census data and evaluating policy outcomes.', howToStart: 'Practice spotting misleading charts in news articles.' },
        { subject: 'History & Sociology', tier: 'Recommended', whyItMatters: 'Illuminates how past policies shaped contemporary inequality and regional institutions.', howToStart: 'Join Model United Nations (MUN) or school debate societies focusing on real local issues.' },
      ],
      indianCurriculumNotes:
        'Any Class 12 stream (Humanities, Commerce, or Science) qualifies for undergraduate degrees leading into policy and UPSC Civil Services.',
      internationalNotes:
        'IB Global Politics, Economics, and History provide direct preparation for PPE (Philosophy, Politics, and Economics) or Public Policy degrees.',
    },
    education: {
      summary: 'Multidisciplinary undergraduate foundations followed by specialised Master of Public Policy (MPP) or civil service entry.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.A. Economics / Political Science / Sociology / Law / B.Tech', requirement: 'Mandatory', duration: '3–5 years', details: 'Any recognised bachelor’s degree builds eligibility for policy fellowships and civil services.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'Master of Public Policy (MPP) / M.P.A.', requirement: 'Recommended Additional', duration: '2 years', details: 'Offered at NLSIU Bengaluru, IITs, TISS, Ashoka, St. Xavier’s, and international schools.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Young Professionals and Legislative Assistant to Member of Parliament (LAMP) fellowships provide immersive hands-on entry directly after graduation.',
      researchAndAdvancedNote:
        'Ph.D. research investigates fiscal federalism, climate adaptation governance, and rural health systems.',
    },
    toolsAndTechnology: {
      summary: 'Built around demographic datasets, legislative archives, and analytical software.',
      items: [
        { name: 'Stata, R & Python Pandas', category: 'Computer Software', usedFor: 'Analysing national household, employment, and health surveys.' },
        { name: 'QGIS Spatial Mapping', category: 'Digital Platforms', usedFor: 'Mapping clinic shortages, flood zones, and school access by ward or district.' },
        { name: 'Parliamentary & Gazette Digital Archives', category: 'Digital Platforms', usedFor: 'Tracing statutory amendments, committee reports, and budget allocations.' },
      ],
    },
    experience: {
      summary: 'Grows through civic engagement, field research, and policy fellowships.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Survey students or local shopkeepers on a civic issue (waste sorting or safe cycling lanes) and present recommendations to local authorities.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Apply for NITI Aayog internships, state chief minister’s fellowships, or LAMP parliamentary fellowships.' },
        { level: 'Early Career', category: 'Volunteering', description: 'Assist local NGOs auditing public school infrastructure or right-to-information civic filings.' },
      ],
    },
    qualifications: {
      summary: 'Think-tank analysts require degrees and research portfolios; executive civil servants enter via statutory competitive examinations.',
      items: [
        { title: 'Recognised Bachelor’s Degree', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: 'Baseline requirement for policy roles and civil service exams.' },
        { title: 'UPSC Civil Services Examination (CSE) / State PSC', tier: 'Mandatory', kind: 'Government Examination', country: 'India', details: 'Mandatory statutory pathway specifically for IAS, IPS, IFS, and allied central/state civil services (minimum age 21).' },
        { title: 'Master of Public Policy (MPP)', tier: 'Recommended Additional', kind: 'Degree', country: 'Global', details: 'Strongly valued by multilateral bodies, think tanks, and consulting practices.' },
      ],
      countryDifferencesNote:
        'Civil service recruitment varies widely: India uses UPSC/State PSC competitive exams, the UK uses the Civil Service Fast Stream, and the US uses federal USAJOBS / Presidential Management Fellowships.',
    },
    careerProgression: {
      summary: 'Diverges cleanly between executive public administration and advisory research/think-tank leadership.',
      stages: [
        { stage: 'Policy Fellow / Research Associate', typicalTimeframe: 'Years 1–2', focus: 'Data cleaning, field interviews, and drafting sections of policy reports.' },
        { stage: 'Policy Analyst / Assistant Collector', typicalTimeframe: 'Years 2–5', focus: 'Owning thematic portfolios or executing district development programmes.' },
        { stage: 'Senior Fellow / District Magistrate / Joint Secretary', typicalTimeframe: 'Years 6–14', focus: 'Shaping state or national regulations and managing large public agencies.' },
        { stage: 'Cabinet Secretary / Think-Tank Director / Global Advisor', typicalTimeframe: 'Years 15+', focus: 'Leading institutional reform at national or international scale.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding independent civic-tech transparency platforms or municipal consulting firms.',
        research: 'Serving as Principal Economist or Senior Research Fellow at autonomous policy institutes.',
        specialisation: 'Becoming a national authority on water treaties, energy tariffs, or digital governance.',
        leadership: 'Directing UN regional commissions or philanthropic policy foundations.',
      },
    },
    workplaces: {
      summary: 'Moves between legislative secretariats, research libraries, and district field sites.',
      workMode: 'Mixed',
      locations: ['Government Ministries & Secretariats', 'District Collectorates & Municipal Halls', 'Independent Policy Think Tanks', 'International Organisations (UN / World Bank)', 'Rural Field Sites'],
      environmentDescription:
        'Dynamic mix of intense reading/writing offices and lively community hearings across varied socioeconomic settings.',
    },
    careerOpportunities: {
      summary: 'Broad opportunities across government, multilateral institutions, NGOs, and corporate regulatory teams.',
      mainIndustries: ['Public Administration', 'Policy Think Tanks', 'Multilateral Development Agencies', 'Non-Profit Advocacy', 'ESG & Regulatory Consulting'],
      privateSector: 'Public affairs, sustainability policy, and technology ethics compliance teams.',
      governmentSector: 'Civil services (UPSC/State PSC), NITI Aayog, parliamentary research desks, and municipal fellowships.',
      researchOpportunities: 'Centre for Policy Research (CPR), IIM public policy centres, Brookings, and J-PAL.',
      internationalOpportunities: 'World Bank, ADB, WHO, UNESCO, and foreign diplomatic services.',
      freelancingAndSelfEmployment: 'Independent programme evaluation consultants for development grants.',
      entrepreneurshipAndStartups: 'Civic data platforms, municipal waste/water governance startups.',
      emergingDemand: 'Climate transition policy, urban heat-action planning, and AI governance frameworks.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 3% growth for political scientists (2024–2034). Consolidated India-wide policy-analyst headcount figures are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Closely connected legal, humanitarian, and economic professions.',
      items: [
        {
          targetId: 'legal-counsel',
          name: 'Constitutional & Technology Counsel',
          clusterName: 'Law, Public Safety, Corrections & Security',
          whyRelated: 'Translates policy goals into enforceable statutes and tests their constitutionality in court.',
          sharedSkills: ['Constitutional Reasoning', 'Structured Writing', 'Stakeholder Negotiation'],
          differencesInResponsibilities: 'Represents clients in litigation and drafts binding legal contracts rather than fiscal evaluations.',
          transitionPathway: 'LL.B. or joint B.A., LL.B. followed by policy-law fellowships.',
        },
        {
          targetId: 'epidemiologist',
          name: 'Biomedical Epidemiologist',
          clusterName: 'Health Science & Medicine',
          whyRelated: 'Provides the disease-surveillance evidence that health policy analysts turn into national vaccination and sanitation budgets.',
          sharedSkills: ['Population Survey Analysis', 'Evidence-Based Reporting', 'Public Communication'],
          differencesInResponsibilities: 'Investigates biological pathogen spread and clinical trials rather than governance institutions.',
          transitionPathway: 'Master of Public Health (MPH) bridging health science and policy.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Increasingly empirical, digital, and focused on climate resilience.',
      disclaimer:
        'Established developments reflect current government modernisation; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Digital Public Infrastructure (DPI) Governance', description: 'Managing open-protocol payment, health, and education registries with strict citizen consent safeguards.' },
        { area: 'Evidence-Based Impact Audits', description: 'Using satellite imagery and anonymised administrative data to verify welfare outcomes.' },
      ],
      speculativePredictions: [
        { area: 'Real-Time Participatory Municipal Budgeting', description: 'Digital civic assemblies allowing citizens to co-prioritise local ward works transparently.' },
      ],
      environmentalAndSocialFactors:
        'Urban migration, ageing populations, and climate-induced disaster preparedness require agile, evidence-led public institutions.',
    },
    realWorldExamples: {
      summary: 'Administrators and policy thinkers who built enduring civic institutions.',
      pioneers: [
        {
          name: 'Dr. B. R. Ambedkar',
          profession: 'Jurist, Economist & Social Reformer',
          country: 'India',
          majorContributions: 'Chaired the Drafting Committee of the Constitution of India and shaped foundational water, labour, and central banking (RBI) economic policies.',
          achievements: 'Architect of the Indian Constitution; awarded the Bharat Ratna (posthumously, 1990).',
          whyWorkMatters: 'Demonstrated how constitutional design and economic policy protect human dignity and democratic equality.',
          sourceNote: 'Constituent Assembly of India & Parliament archives.',
        },
        {
          name: 'Elinor Ostrom',
          profession: 'Political Economist',
          country: 'United States',
          majorContributions: 'Showed empirically how local communities sustainably govern shared forests, fisheries, and irrigation commons without top-down coercion or privatisation.',
          achievements: 'First woman awarded the Nobel Memorial Prize in Economic Sciences (2009).',
          whyWorkMatters: 'Transformed global environmental and local governance policy design.',
          sourceNote: 'The Nobel Prize official biographical archive.',
        },
      ],
    },
  },

  {
    id: 'clinical-surgeon',
    name: 'Cardiothoracic & General Surgeon',
    clusterId: 'health-medicine',
    clusterName: 'Health Science & Medicine',
    status: 'Current',
    shortIntro:
      'Diagnoses complex anatomical diseases and performs precision operative procedures—from emergency trauma repair to intricate heart and organ surgery.',
    specialisationTags: ['General Surgery', 'Cardiothoracic', 'Minimally Invasive', 'Trauma Care'],
    imageUrl: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    imageCaption: 'Diagnostic imaging review and precision optical surgical instrumentation in a clinical centre.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'National Medical Commission (NMC)', url: 'https://www.nmc.org.in/', organization: 'Statutory Medical Regulator of India' },
      { label: 'Association of Surgeons of India', url: 'https://asiindia.org/', organization: 'ASI' },
      { label: 'O*NET: Surgeons', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Unites deep anatomical mastery, steady manual precision, and calm ethical judgment under high stakes.',
      definition:
        'A Cardiothoracic & General Surgeon is a licensed medical doctor who undergoes years of postgraduate surgical residency to repair injuries, remove tumours, bypass blocked arteries, and reconstruct organs through operative intervention.',
      mainPurpose:
        'To restore life, mobility, and organ function when medication alone cannot resolve structural, traumatic, or acute disease.',
      whyItExists:
        'Acute appendicitis, congenital heart defects, traumatic fractures, and solid tumours require skilled physical intervention inside sterile operating theatres.',
      societalImportance:
        'Saves lives immediately in emergency trauma wards and transforms long-term survival for cardiac and cancer patients.',
      whatMakesItInteresting:
        'Requires lifelong intellectual curiosity alongside tactile hand-eye craft, teamwork in the operating room, and deep human trust with patients.',
    },
    responsibilities: {
      summary: 'Extends far beyond the operating theatre to pre-operative diagnosis, informed consent, and post-operative recovery.',
      mainDuties: [
        'Examine patients, interpret CT/MRI scans, echocardiograms, and pathology biopsies to decide whether surgery is truly necessary.',
        'Explain surgical risks, alternatives, and recovery expectations honestly to patients and families.',
        'Lead sterile surgical teams performing open, laparoscopic, or thoracoscopic operations.',
        'Monitor post-operative ICU recovery for infection, bleeding, or cardiac stability.',
      ],
      importantResponsibilities: [
        'Exercising restraint—knowing when NOT to operate is as vital as surgical skill.',
        'Adhering strictly to WHO Surgical Safety Checklists and sterile protocols.',
      ],
      problemsSolved: [
        'Managing unexpected anatomical variations or sudden bleeding mid-operation with composure.',
      ],
      decisionsMade: [
        'Operative timing (emergency vs elective), graft selection, and multidisciplinary oncology/cardiac treatment plans.',
      ],
      collaborators: [
        'Anaesthesiologists, surgical nurses, perfusionists, and intensivists',
        'Radiologists, pathologists, cardiologists, and physiotherapists',
      ],
    },
    dailyWork: {
      summary: 'Begins early with inpatient ward rounds before scheduled or emergency theatre lists.',
      scheduleNote:
        'Schedules are demanding and unpredictable; trauma or cardiac emergencies frequently alter planned daytime calendars.',
      morningActivities: [
        'Conduct 7:00 AM ICU and ward rounds checking vital signs, surgical drains, and lab panels of recovering patients.',
      ],
      mainTasks: [
        'Perform scheduled operations alongside anaesthesiologists and scrub nurses.',
        'Run outpatient clinics evaluating new surgical referrals and post-discharge follow-ups.',
      ],
      meetingsAndFieldwork: [
        'Attend multidisciplinary tumour boards or heart-team conferences reviewing complex scans.',
      ],
      toolsUsedDaily: [
        'Surgical loupes, micro-suturing instruments, laparoscopic towers, electrocautery, and PACS radiology viewers.',
      ],
      communicationAndTeamwork:
        'Clear, respectful closed-loop communication in the operating theatre prevents errors under stress.',
      endOfDayActivities: [
        'Verify evening recovery stability of freshly operated patients and review next-day theatre briefings.',
      ],
    },
    specialisations: {
      summary: 'After core General Surgery residency, surgeons may sub-specialise deeply.',
      items: [
        {
          id: 'cardiothoracic',
          title: 'Cardiothoracic & Vascular Surgery (CTVS)',
          focus: 'Coronary bypasses, heart valve repair, lung resections, and congenital heart defects.',
          howItDiffers: 'Requires cardiopulmonary bypass perfusion coordination and super-speciality M.Ch/fellowship training.',
          jobTitles: ['Cardiothoracic Surgeon', 'Paediatric Cardiac Surgeon'],
          opportunities: 'Tertiary heart institutes, public medical colleges, and charitable cardiac centres.',
        },
        {
          id: 'minimally-invasive',
          title: 'Laparoscopic & Robotic-Assisted Surgery',
          focus: 'Keyhole abdominal, thoracic, and urological procedures reducing incision trauma and hospital stay.',
          howItDiffers: 'Relies on high-definition endoscopic cameras and fine articulated instruments.',
          jobTitles: ['Minimal Access Surgeon', 'GI Surgeon'],
          opportunities: 'Multi-speciality hospitals and academic surgical centres.',
        },
        {
          id: 'trauma-emergency',
          title: 'Trauma & Acute Care Surgery',
          focus: 'Immediate life-saving stabilisation for road accidents, internal haemorrhage, and burns.',
          howItDiffers: 'High-adrenaline emergency decision-making with rapid triage.',
          jobTitles: ['Trauma Surgeon', 'Emergency Surgical Specialist'],
          opportunities: 'Public trauma centres, armed forces medical corps, and disaster medical teams.',
        },
      ],
    },
    skills: {
      summary: 'Demands physical stamina, spatial anatomy mastery, and compassionate clarity.',
      technical: [
        { name: '3D Human Anatomy & Pathophysiology', priority: 'Essential', description: 'Understanding vascular, nerve, and tissue planes intimately.' },
        { name: 'Fine Psychomotor Dexterity', priority: 'Essential', description: 'Ambidextrous suturing, knot-tying, and gentle tissue handling.' },
        { name: 'Diagnostic Imaging Interpretation', priority: 'Essential', description: 'Reading CT angiograms, ultrasounds, and radiographs accurately.' },
        { name: 'Endoscopic & Microsurgical Optics', priority: 'Useful Additional', description: 'Operating via two-dimensional camera monitors or surgical microscopes.' },
      ],
      personalProfessional: [
        { name: 'Composure Under Acute Stress', priority: 'Essential', description: 'Thinking logically during sudden intraoperative complications.' },
        { name: 'Empathetic Patient Counselling', priority: 'Essential', description: 'Supporting frightened families clearly and respectfully.' },
        { name: 'Physical & Mental Stamina', priority: 'Essential', description: 'Remaining focused during 4-to-8-hour operations and night call shifts.' },
      ],
    },
    schoolSubjects: {
      summary: 'Strong Biology and Chemistry are mandatory prerequisites for medical school entry.',
      subjects: [
        { subject: 'Biology (Human Physiology & Zoology)', tier: 'Essential', whyItMatters: 'Core foundation of anatomy, cellular healing, and microbiology.', howToStart: 'Study human organ systems thoroughly and practise clear anatomical sketching.' },
        { subject: 'Chemistry (Organic & Biochemistry)', tier: 'Essential', whyItMatters: 'Explains pharmacology, acid-base blood balance, and anaesthesia.', howToStart: 'Connect biochemical pathways to real clinical concepts like blood oxygen transport.' },
        { subject: 'Physics', tier: 'Essential', whyItMatters: 'Required for NEET-UG in India and underpins fluid pressure, optics, and medical imaging.', howToStart: 'Understand fluid dynamics (Poiseuille’s law) and how it governs blood flow.' },
      ],
      indianCurriculumNotes:
        'In India, Physics, Chemistry, and Biology (PCB) in Class 11–12 plus qualifying NEET-UG is mandatory for MBBS admission.',
      internationalNotes:
        'In the UK, Biology and Chemistry A-Levels are standard for undergraduate Medicine; in the US/Canada, students complete a pre-med bachelor’s degree + MCAT before entering a 4-year MD/DO programme.',
    },
    education: {
      summary: 'One of the longest, most rigorously regulated educational journeys—spanning 11 to 14 years post-school.',
      pathways: [
        { stage: 'Primary Medical Degree', title: 'MBBS (India / UK) or MD/DO (USA)', requirement: 'Mandatory', duration: '4.5–5.5 years + 1 year internship', details: 'Covers pre-clinical sciences, clinical rotations, and compulsory rotating medical internship.', countryContext: 'India (NMC-recognised) / Global' },
        { stage: 'Surgical Residency', title: 'MS General Surgery / DNB General Surgery', requirement: 'Mandatory', duration: '3 years', details: 'Entry via NEET-PG / INI-CET in India; hands-on supervised surgical training.', countryContext: 'India' },
        { stage: 'Super-Speciality Training', title: 'M.Ch / DrNB Cardiothoracic & Vascular Surgery (or integrated 6-year M.Ch)', requirement: 'Mandatory', duration: '3 years (post-MS) or 6 years (post-MBBS)', details: 'Required to practise independently as a cardiothoracic surgeon in India.', countryContext: 'India (via NEET-SS) / US Fellowship' },
      ],
      alternativeAndVocationalNote:
        'There is NO non-degree or shortcut pathway to becoming a licensed surgeon. Related allied roles (Operating Theatre Technologist, Perfusionist, Physician Assistant) offer vital surgical-team careers via 3–4 year B.Sc. programmes.',
      researchAndAdvancedNote:
        'Academic surgeons lead clinical outcome registries, surgical innovation trials, and global health surgery access studies.',
    },
    toolsAndTechnology: {
      summary: 'Precision sterilised instruments paired with optical imaging and life-support systems.',
      items: [
        { name: 'Microsurgical Instruments & Vascular Sutures', category: 'Physical Tools', usedFor: 'Delicate dissection and anastomosis of blood vessels.' },
        { name: 'Heart-Lung Bypass Machine (Cardiopulmonary Perfusion)', category: 'Professional Equipment', usedFor: 'Temporarily circulating and oxygenating blood during open-heart repair.' },
        { name: '4K Laparoscopic & Thoracoscopic Video Towers', category: 'Industry Technologies', usedFor: 'Minimally invasive internal visualisation.' },
        { name: '3D-Printed Patient Heart Models', category: 'Emerging Tools', usedFor: 'Pre-operative rehearsal of complex congenital cardiac repairs.' },
      ],
    },
    experience: {
      summary: 'True clinical practice begins inside medical school; high schoolers build observational and service habits first.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Learn certified First Aid / CPR and volunteer in school health or blood-donation awareness camps.' },
        { level: 'Medical Undergraduate', category: 'Internships & Apprenticeships', description: 'Complete compulsory rotating clinical internships across surgery, casualty, and orthopaedics.' },
        { level: 'Residency', category: 'Research & Professional Exposure', description: 'Log supervised operative cases, present morbidity-mortality audits, and master suturing labs.' },
      ],
    },
    qualifications: {
      summary: 'Strictly regulated by national medical councils to protect patient safety.',
      items: [
        { title: 'NEET-UG + MBBS + NMC / State Medical Council Registration', tier: 'Mandatory', kind: 'Licence', country: 'India', details: 'Legal prerequisite to practise medicine in India under the National Medical Commission.' },
        { title: 'MS / DNB / M.Ch Surgical Specialist Registration', tier: 'Mandatory', kind: 'Degree', country: 'India', details: 'Required for independent specialist surgical privileges.' },
        { title: 'USMLE + Residency + Board Certification / GMC + FRCS', tier: 'Mandatory', kind: 'Licence', country: 'USA / UK', details: 'Required statutory licences and fellowship credentials for independent practice abroad.' },
      ],
      countryDifferencesNote:
        'Medical licences are strictly country-specific; foreign medical graduates must pass local licensing exams (e.g., FMGE/NExT in India, USMLE in US, PLAB/UKMLA in UK).',
    },
    careerProgression: {
      summary: 'Advances from supervised resident to senior consultant surgeon and department chief.',
      stages: [
        { stage: 'Medical Student & Clinical Intern', typicalTimeframe: 'Years 1–6', focus: 'Mastering foundational clinical diagnostics and assisting in wards.' },
        { stage: 'Surgical Resident (MS / DNB)', typicalTimeframe: 'Years 7–9', focus: 'Performing graded surgical procedures under senior consultant mentorship.' },
        { stage: 'Super-Speciality Fellow / Senior Resident (M.Ch)', typicalTimeframe: 'Years 10–12', focus: 'High-complexity cardiac, vascular, or thoracic procedures.' },
        { stage: 'Consultant / Head of Surgical Department', typicalTimeframe: 'Years 13+', focus: 'Independent complex surgery, mentoring junior surgeons, and hospital quality leadership.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Establishing specialised community surgical hospitals or surgical-device design ventures.',
        research: 'Pioneering low-cost prosthetic heart valves and surgical outcome registries.',
        specialisation: 'Focusing purely on paediatric congenital heart surgery or transplant surgery.',
        leadership: 'Directing medical college surgical faculties or charitable surgical missions.',
      },
    },
    workplaces: {
      summary: 'Anchored in sterile operating suites, ICUs, and outpatient clinics.',
      workMode: 'Indoor',
      locations: ['Hospital Operating Theatres', 'Intensive Care Units (ICU)', 'Outpatient Consultation Clinics', 'Teaching Medical Colleges', 'Emergency Trauma Rooms'],
      environmentDescription:
        'Highly structured, sterile, high-focus clinical environments requiring standing for prolonged operations and strict hygiene protocols.',
    },
    careerOpportunities: {
      summary: 'Consistent essential demand across public teaching hospitals, charitable trusts, and tertiary care centres.',
      mainIndustries: ['Public Teaching Hospitals', 'Charitable & Trust Hospitals', 'Private Tertiary Care Centres', 'Armed Forces Medical Services', 'Medical Device Innovation'],
      privateSector: 'Multi-speciality surgical institutes and specialist heart centres.',
      governmentSector: 'AIIMS, state medical colleges, district hospitals, and defence medical corps.',
      researchOpportunities: 'Clinical surgical trials and biomedical engineering collaborations.',
      internationalOpportunities: 'High global demand, subject to local medical licensing and residency recognition.',
      freelancingAndSelfEmployment: 'Visiting specialist surgical consultations across regional hospitals.',
      entrepreneurshipAndStartups: 'Affordable surgical clinic networks and medical training simulators.',
      emergingDemand: 'Minimally invasive valve interventions and expanding access to safe surgery in Tier-2/3 cities.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 3% growth for physicians and surgeons (2024–2034). National Medical Commission highlights persistent specialist shortages in rural India, though exact India-wide annual vacancy projections vary by state; Information not yet verified for exact national annual figures.',
    },
    relatedCareers: {
      summary: 'Medical, scientific, and engineering professions protecting human health.',
      items: [
        {
          targetId: 'epidemiologist',
          name: 'Biomedical Epidemiologist',
          clusterName: 'Health Science & Medicine',
          whyRelated: 'Prevents diseases at population scale that surgeons treat at individual patient scale.',
          sharedSkills: ['Clinical Pathophysiology', 'Evidence-Based Medicine', 'Biostatistics'],
          differencesInResponsibilities: 'Studies outbreak patterns and clinical trials across thousands of people rather than performing operations.',
          transitionPathway: 'MD Community Medicine or MPH after MBBS.',
        },
        {
          targetId: 'robotics-engineer',
          name: 'Mechatronics & Industrial Robotics Engineer',
          clusterName: 'Manufacturing, Robotics & Industrial Production',
          whyRelated: 'Designs precision surgical robotic arms, laparoscopic actuators, and medical imaging hardware.',
          sharedSkills: ['Spatial Precision', 'Mechanical Reliability', 'Human-Machine Safety'],
          differencesInResponsibilities: 'Engineers electro-mechanical systems rather than treating live patients.',
          transitionPathway: 'Biomedical engineering collaboration or dual MD-Engineering tracks.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Moving toward less invasive catheter/robotic interventions and patient-specific pre-operative planning.',
      disclaimer:
        'Established developments reflect clinical adoption; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Transcatheter & Hybrid Procedures', description: 'Replacing select open-chest valve replacements with catheter-guided implants for frail patients.' },
        { area: 'Augmented Surgical Imaging', description: 'High-precision intra-operative ultrasound and fluorescence mapping showing tumour margins.' },
      ],
      speculativePredictions: [
        { area: 'Telesurgery over Ultra-Low-Latency Fibre', description: 'Potentially expanding specialist surgical mentorship to remote regional hospitals.' },
      ],
      environmentalAndSocialFactors:
        'Equitable access to affordable cardiac and trauma surgery across rural regions remains one of global medicine’s highest priorities.',
    },
    realWorldExamples: {
      summary: 'Surgeons renowned for clinical breakthroughs and expanding access to care.',
      pioneers: [
        {
          name: 'Dr. Devi Prasad Shetty',
          profession: 'Cardiac Surgeon & Healthcare Founder',
          country: 'India',
          majorContributions: 'Performed thousands of complex cardiac operations and founded Narayana Health, applying high-volume clinical standardisation to make open-heart surgery dramatically more affordable.',
          achievements: 'Awarded the Padma Shri (2004) and Padma Bhushan (2012).',
          whyWorkMatters: 'Demonstrated that world-class paediatric and adult cardiac surgery can scale affordably to underserved families.',
          sourceNote: 'Government of India Padma Awards & Narayana Health institutional records.',
        },
        {
          name: 'Dr. Vivien Thomas',
          profession: 'Surgical Researcher & Educator',
          country: 'United States',
          majorContributions: 'Without formal medical-school access in the segregated 1940s, engineered the surgical instruments and animal-model technique enabling the landmark Blalock–Thomas–Taussig shunt for "blue baby" congenital heart defects.',
          achievements: 'Awarded an honorary doctorate by Johns Hopkins University (1976) after training generations of chief surgeons.',
          whyWorkMatters: 'Revolutionised paediatric cardiac surgery and paved the way for open-heart operations.',
          sourceNote: 'Johns Hopkins Medical Archives.',
        },
      ],
    },
  },

  {
    id: 'epidemiologist',
    name: 'Biomedical Epidemiologist',
    clusterId: 'health-medicine',
    clusterName: 'Health Science & Medicine',
    status: 'Current',
    shortIntro:
      'Investigates how infectious and chronic diseases spread across populations, pinpointing causes, testing vaccines, and guiding public health responses.',
    specialisationTags: ['Outbreak Investigation', 'Clinical Trials', 'Biostatistics', 'One Health'],
    imageUrl: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    imageCaption: 'Biomedical diagnostics and population health analysis inside an epidemiology research centre.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'ICMR National Institute of Epidemiology', url: 'https://nie.gov.in/', organization: 'Indian Council of Medical Research' },
      { label: 'WHO Epidemiology Resources', url: 'https://www.who.int/', organization: 'World Health Organization' },
      { label: 'O*NET: Epidemiologists', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Serves as the scientific detective of population health.',
      definition:
        'A Biomedical Epidemiologist studies the patterns, causes, risk factors, and control of diseases in defined human populations using field investigation, microbiology, and biostatistics.',
      mainPurpose:
        'To stop outbreaks early, prove whether treatments and vaccines truly work, and reduce preventable chronic illness across communities.',
      whyItExists:
        'Individual doctors see one patient at a time; someone must step back to notice why 30 families in one ward share the same waterborne fever or lung condition.',
      societalImportance:
        'Led to smallpox eradication, clean-water sanitation reforms, vaccine schedules, and evidence linking tobacco to lung cancer.',
      whatMakesItInteresting:
        'Blends Sherlock-Holmes-style field detective work—interviewing households and testing water wells—with rigorous mathematical modeling.',
    },
    responsibilities: {
      summary: 'Designs surveillance systems, conducts outbreak tracebacks, and analyses large clinical cohorts.',
      mainDuties: [
        'Investigate sudden disease clusters through contact tracing, questionnaire design, and laboratory sample coordination.',
        'Design randomised controlled trials (RCTs) and longitudinal cohort studies to evaluate vaccines or nutrition programmes.',
        'Calculate incidence, prevalence, odds ratios, and transmission rates while controlling for confounding bias.',
        'Advise health ministries and hospitals on quarantine, vector control, or screening policy.',
      ],
      importantResponsibilities: [
        'Communicating uncertain evolving evidence transparently to the public without triggering panic or false reassurance.',
      ],
      problemsSolved: [
        'Identifying a contaminated food source or mosquito breeding site driving a localised dengue or cholera spike.',
      ],
      decisionsMade: [
        'Selecting study sample sizes, defining clinical case criteria, and recommending emergency vaccination rings.',
      ],
      collaborators: [
        'Virologists, microbiologists, and clinical physicians',
        'Community health workers (ASHAs), biostatisticians, and public policy officials',
      ],
    },
    dailyWork: {
      summary: 'Shifts between calm statistical coding/paper writing and urgent field deployment during outbreaks.',
      scheduleNote:
        'Academic and ministry epidemiologists keep steady research schedules; field epidemic officers deploy rapidly during regional surges.',
      morningActivities: [
        'Review daily district infectious-disease surveillance reports for unusual hospital admission spikes.',
      ],
      mainTasks: [
        'Clean cohort trial datasets in R or SAS, adjusting models for age, vaccination history, and socioeconomic factors.',
        'Draft ethics board protocols or peer-reviewed manuscripts.',
      ],
      meetingsAndFieldwork: [
        'Visit primary health centres or interview community volunteers during field surveillance audits.',
      ],
      toolsUsedDaily: [
        'R, Stata/SAS, Epi Info, REDCap clinical survey software, and GIS disease-mapping layers.',
      ],
      communicationAndTeamwork:
        'Bridges laboratory scientists, clinicians, and civic officials with shared statistical clarity.',
      endOfDayActivities: [
        'Verify outbreak bulletin figures and sync findings with regional health laboratories.',
      ],
    },
    specialisations: {
      summary: 'Focuses on infectious threats, chronic non-communicable risks, or genetic cohorts.',
      items: [
        {
          id: 'field-outbreak',
          title: 'Field & Infectious Disease Epidemiology',
          focus: 'Rapid outbreak detection, zoonotic spillover, and vector-borne disease containment.',
          howItDiffers: 'Involves rapid travel to affected districts and close coordination with diagnostic labs.',
          jobTitles: ['Field Epidemiologist', 'Disease Surveillance Officer'],
          opportunities: 'ICMR/NCDC India, WHO, CDC, and state health directorates.',
        },
        {
          id: 'clinical-trials',
          title: 'Clinical & Pharmaco-Epidemiology',
          focus: 'Phase III vaccine/drug safety trials and post-market monitoring.',
          howItDiffers: 'Strictly governed by Good Clinical Practice (GCP) protocols and regulatory audits.',
          jobTitles: ['Clinical Epidemiologist', 'Biostatistics Lead'],
          opportunities: 'Vaccine research institutes, clinical trial networks, and medical universities.',
        },
      ],
    },
    skills: {
      summary: 'Combines biological literacy, rigorous study design, and statistical skepticism.',
      technical: [
        { name: 'Epidemiological Study Design (RCT, Cohort, Case-Control)', priority: 'Essential', description: 'Avoiding selection bias, recall bias, and confounding variables.' },
        { name: 'Biostatistics (R / SAS / Stata)', priority: 'Essential', description: 'Running survival analysis, logistic regression, and confidence-interval estimation.' },
        { name: 'Infectious Microbiology Literacy', priority: 'Essential', description: 'Understanding incubation periods, R0 transmission, and PCR/serology limits.' },
        { name: 'Spatial GIS Disease Mapping', priority: 'Useful Additional', description: 'Plotting hotspot clusters across urban wards or watersheds.' },
      ],
      personalProfessional: [
        { name: 'Scientific Skepticism', priority: 'Essential', description: 'Refusing to jump to causal conclusions from noisy preliminary numbers.' },
        { name: 'Community Sensitivity', priority: 'Essential', description: 'Interviewing patients during stressful outbreaks with dignity and privacy.' },
        { name: 'Clear Public Risk Communication', priority: 'Essential', description: 'Explaining probabilities honestly to journalists and families.' },
      ],
    },
    schoolSubjects: {
      summary: 'Biology paired strongly with Mathematics and Statistics.',
      subjects: [
        { subject: 'Biology', tier: 'Essential', whyItMatters: 'Explains pathogens, immunity, vaccines, and human physiology.', howToStart: 'Read historical accounts of how cholera and smallpox were traced and defeated.' },
        { subject: 'Mathematics & Statistics', tier: 'Essential', whyItMatters: 'Probability, exponential growth, and sampling error are the core language of epidemiology.', howToStart: 'Practice calculating percentages, false-positive rates, and disease incidence curves.' },
        { subject: 'Chemistry & Geography', tier: 'Recommended', whyItMatters: 'Links environmental sanitation, water quality, and climate zones to health.', howToStart: 'Explore local public-health water testing or vector awareness clubs.' },
      ],
      indianCurriculumNotes:
        'Accessible via two routes: clinical medical track (PCB -> MBBS -> MD Community Medicine/MPH) OR non-medical science track (PCB/PCM -> B.Sc. Biology/Statistics -> M.Sc. Epidemiology/MPH).',
      internationalNotes:
        'A-Levels/IB in Biology and Mathematics lead cleanly into public health, biomedical science, or medical degrees.',
    },
    education: {
      summary: 'Typically requires a postgraduate Master’s (MPH/M.Sc.) or medical degree.',
      pathways: [
        { stage: 'Undergraduate', title: 'MBBS / B.Sc. Life Sciences / B.Sc. Statistics / B.Pharm', requirement: 'Mandatory', duration: '3–5.5 years', details: 'Establishes biological or quantitative foundation.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'Master of Public Health (MPH) / M.Sc. Epidemiology / MD Community Medicine', requirement: 'Mandatory', duration: '2–3 years', details: 'Offered at ICMR-NIE Chennai, AIIMS, PGIMER, TISS, CMC Vellore, and global schools of public health.', countryContext: 'India / Global' },
        { stage: 'Fellowship Training', title: 'India EIS (Epidemic Intelligence Service) or Ph.D. Epidemiology', requirement: 'Optional', duration: '2–5 years', details: 'Intensive 2-year applied outbreak-response mentorship run by NCDC/ICMR.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Nurses, veterinarians ("One Health"), and data analysts frequently enter epidemiology through an MPH.',
      researchAndAdvancedNote:
        'Doctoral research explores genomic pathogen surveillance, antimicrobial resistance, and climate-linked vector expansion.',
    },
    toolsAndTechnology: {
      summary: 'Relies on survey platforms, statistical computing, and genomic-surveillance dashboards.',
      items: [
        { name: 'R, SAS & CDC Epi Info', category: 'Computer Software', usedFor: 'Calculating attack rates, regression models, and epidemic curves.' },
        { name: 'REDCap & Open Data Kit (ODK)', category: 'Digital Platforms', usedFor: 'Secure offline mobile field surveys during rural outbreak investigations.' },
        { name: 'Wastewater & Genomic Sequencing Pipelines', category: 'Emerging Tools', usedFor: 'Detecting viral variants in municipal sewage before hospital cases surge.' },
      ],
    },
    experience: {
      summary: 'Builds through data projects, community health volunteering, and research internships.',
      stages: [
        { level: 'High School', category: 'School & Personal Projects', description: 'Analyse open WHO or government vaccination coverage datasets and visualise trends.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Assist university community-medicine departments or NGOs with health literacy surveys.' },
        { level: 'Postgraduate', category: 'Research & Professional Exposure', description: 'Complete MPH field practicums inside district surveillance units.' },
      ],
    },
    qualifications: {
      summary: 'Master’s-level training is standard; medical licensure is required only for clinical patient care.',
      items: [
        { title: 'Master of Public Health (MPH) / M.Sc. Epidemiology / MD', tier: 'Mandatory', kind: 'Degree', country: 'Global', details: 'Standard professional qualification for independent epidemiologists.' },
        { title: 'Good Clinical Practice (GCP) Certification', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: 'Required when overseeing human clinical trials.' },
      ],
      countryDifferencesNote:
        'Non-physician epidemiologists work extensively in research, government surveillance, and trials worldwide; clinical leadership inside Indian medical colleges typically requires an MBBS + MD Community Medicine.',
    },
    careerProgression: {
      summary: 'Moves from data analyst or field investigator to directing national surveillance or research programmes.',
      stages: [
        { stage: 'Research Assistant / Surveillance Officer', typicalTimeframe: 'Years 1–2', focus: 'Data validation, questionnaire administration, and outbreak line-listing.' },
        { stage: 'Epidemiologist', typicalTimeframe: 'Years 3–6', focus: 'Designing cohort/case-control studies and leading field outbreak teams.' },
        { stage: 'Senior Scientist / Director of Surveillance', typicalTimeframe: 'Years 7+', focus: 'Shaping national immunisation policy and directing multi-country trials.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Building disease-surveillance analytics or clinical-trial coordination consultancies.',
        research: 'Leading vaccine efficacy trials and academic journals as Principal Investigator.',
        specialisation: 'Focusing on One Health zoonotic spillover, cancer registries, or nutrition epidemiology.',
        leadership: 'Serving on national immunisation advisory groups or WHO emergency panels.',
      },
    },
    workplaces: {
      summary: 'Alternates between analytical research institutes and community field clinics.',
      workMode: 'Mixed',
      locations: ['National Research Institutes (ICMR / NCDC)', 'University Public Health Schools', 'Hospital Infection Control Units', 'WHO / Multilateral Agencies', 'District Field Clinics'],
      environmentDescription:
        'Calm analytical offices during study design, shifting rapidly to on-site hospital or rural field coordination during outbreaks.',
    },
    careerOpportunities: {
      summary: 'Sustained global demand across government health security, clinical trials, and chronic-disease prevention.',
      mainIndustries: ['Public Health Agencies', 'Academic Medical Centres', 'Vaccine & Pharma Clinical Research', 'International Health NGOs', 'Health Insurance Analytics'],
      privateSector: 'Clinical research organisations (CROs), real-world evidence teams, and hospital quality units.',
      governmentSector: 'ICMR institutes, National Centre for Disease Control (NCDC), and state Integrated Disease Surveillance Programmes.',
      researchOpportunities: 'Strong fellowship funding for infectious disease, maternal-child nutrition, and environmental health.',
      internationalOpportunities: 'WHO, UNICEF, MSF (Doctors Without Borders), and global health institutes.',
      freelancingAndSelfEmployment: 'Independent biostatistics and clinical trial study-design consultancy.',
      entrepreneurshipAndStartups: 'Diagnostic surveillance platforms and environmental health monitoring.',
      emergingDemand: 'Climate-sensitive vector tracking, antimicrobial resistance (AMR) surveillance, and urban air-pollution health studies.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 16% employment growth for epidemiologists (2024–2034). Consolidated India-wide annual hiring statistics are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Bridges medicine, mathematical risk, and laboratory genomics.',
      items: [
        {
          targetId: 'computational-biologist',
          name: 'Computational Biologist & Bioinformatician',
          clusterName: 'Science, Technology, Engineering & Mathematics',
          whyRelated: 'Tracks viral/bacterial genome mutations powering molecular epidemiology.',
          sharedSkills: ['Biostatistics', 'R/Python Analysis', 'Pathogen Biology'],
          differencesInResponsibilities: 'Analyses DNA/RNA sequences and protein folding rather than field human populations.',
          transitionPathway: 'Bioinformatics electives during M.Sc. or MPH.',
        },
        {
          targetId: 'clinical-surgeon',
          name: 'Cardiothoracic & General Surgeon',
          clusterName: 'Health Science & Medicine',
          whyRelated: 'Shares clinical medicine roots; epidemiological registries directly measure surgical outcomes.',
          sharedSkills: ['Clinical Anatomy Literacy', 'Medical Ethics', 'Outcome Auditing'],
          differencesInResponsibilities: 'Performs individual operative procedures rather than population-level disease studies.',
          transitionPathway: 'MBBS graduates choose either clinical surgical residency or public health.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Expanding into wastewater biosurveillance, genomic tracing, and One Health integration.',
      disclaimer:
        'Established developments reflect current public health investments; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Wastewater & Genomic Pathogen Surveillance', description: 'Tracking community infection waves early without waiting for individual clinic tests.' },
        { area: 'One Health Integration', description: 'Uniting human physicians, veterinarians, and wildlife ecologists to spot animal-to-human spillover risks early.' },
      ],
      speculativePredictions: [
        { area: 'Near-Real-Time Predictive Outbreak Forecasting', description: 'Combining mobility, climate, and clinic data to pre-position medical supplies before monsoon outbreaks.' },
      ],
      environmentalAndSocialFactors:
        'Warming climates widen mosquito habitats while antibiotic overuse elevates drug-resistant infections.',
    },
    realWorldExamples: {
      summary: 'Scientists whose detective work saved millions of lives.',
      pioneers: [
        {
          name: 'Dr. Gagandeep Kang',
          profession: 'Clinician-Scientist & Microbiologist',
          country: 'India',
          majorContributions: 'Led foundational epidemiological and clinical research on rotavirus and enteric infections in Indian children, contributing directly to the indigenous Rotavac vaccine.',
          achievements: 'First Indian woman elected Fellow of the Royal Society (FRS, 2019); Infosys Prize laureate.',
          whyWorkMatters: 'Showed how rigorous Indian community cohort studies can produce affordable, life-saving vaccines.',
          sourceNote: 'Royal Society & Wellcome Trust Research Laboratory, CMC Vellore.',
        },
        {
          name: 'Dr. John Snow',
          profession: 'Physician & Father of Modern Epidemiology',
          country: 'England',
          majorContributions: 'Mapped London’s 1854 Broad Street cholera deaths geographically, proving cholera spread via contaminated water rather than "bad air" (miasma).',
          achievements: 'Persuaded local authorities to remove the Broad Street pump handle, curbing the local outbreak.',
          whyWorkMatters: 'Established spatial disease mapping and field data reasoning as cornerstones of public health.',
          sourceNote: 'London School of Hygiene & Tropical Medicine archives.',
        },
      ],
    },
  },

  {
    id: 'hospitality-director',
    name: 'Heritage & Sustainable Hospitality Director',
    clusterId: 'hospitality-tourism',
    clusterName: 'Hospitality & Tourism',
    status: 'Current',
    shortIntro:
      'Leads eco-lodges, heritage properties, and culinary destinations by blending cultural preservation, zero-waste operations, guest care, and local community livelihoods.',
    specialisationTags: ['Heritage Properties', 'Ecotourism', 'Culinary Operations', 'Destination Stewardship'],
    imageUrl: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    imageCaption: 'Restored timber-and-stone spatial planning for sustainable cultural hospitality spaces.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'NCHMCT (National Council for Hotel Management)', url: 'https://nchm.gov.in/', organization: 'Ministry of Tourism, India' },
      { label: 'UNWTO Sustainable Tourism Guidelines', url: 'https://www.unwto.org/', organization: 'UN World Tourism Organization' },
    ],
    introduction: {
      summary: 'Transforms travel from extractive sightseeing into restorative cultural and ecological stewardship.',
      definition:
        'A Heritage & Sustainable Hospitality Director oversees guest experience, architectural upkeep, local culinary sourcing, staff mentorship, and environmental footprints across hotels, restored palaces, or wilderness eco-lodges.',
      mainPurpose:
        'To offer memorable, safe, deeply authentic hospitality while conserving water, protecting fragile ecosystems, and keeping tourism income inside local communities.',
      whyItExists:
        'Mass tourism can overwhelm water tables, plastic waste systems, and local culture unless led by trained managers grounded in sustainability and service craft.',
      societalImportance:
        'Sustains traditional artisans, regional cuisines, wildlife conservation buffers, and dignified rural employment.',
      whatMakesItInteresting:
        'Every day combines human warmth, culinary artistry, heritage architecture care, financial stewardship, and cross-cultural storytelling.',
    },
    responsibilities: {
      summary: 'Directs multi-department operations from housekeeping and farm-to-table kitchens to water recycling and guest safety.',
      mainDuties: [
        'Lead daily morning briefings across front-office, culinary, engineering, housekeeping, and naturalist teams.',
        'Monitor guest satisfaction, staff wellbeing, food-safety standards, and seasonal occupancy budgets.',
        'Implement rainwater harvesting, solar thermal heating, greywater gardens, and plastic-free procurement.',
        'Partner with local weavers, farmers, and historians to craft respectful guest experiences.',
      ],
      importantResponsibilities: [
        'Fire safety, food hygiene compliance (FSSAI/HACCP), and fair working hours for hospitality staff.',
      ],
      problemsSolved: [
        'Eliminating single-use plastics and cutting water consumption per guest night without compromising comfort.',
      ],
      decisionsMade: [
        'Seasonal room pricing, local farm vendor contracts, heritage restoration priorities, and crisis contingency plans.',
      ],
      collaborators: [
        'Executive chefs, conservation architects, and local village artisans',
        'Tourism boards, wildlife naturalists, and international guests',
      ],
    },
    dailyWork: {
      summary: 'Hands-on, people-centred, and visibly present across the property.',
      scheduleNote:
        'Hospitality operates 365 days a year; peak festivals and holiday seasons demand active floor presence.',
      morningActivities: [
        'Walk the lobby, kitchen gardens, and dining room greeting early guests and reviewing overnight maintenance logs.',
      ],
      mainTasks: [
        'Check occupancy forecasts, supplier deliveries, and zero-waste composting metrics.',
        'Coach department supervisors on service recovery and staff training schedules.',
      ],
      meetingsAndFieldwork: [
        'Meet with conservation architects restoring lime-plaster courtyards or local women’s collectives supplying handmade amenities.',
      ],
      toolsUsedDaily: [
        'Property Management Systems (PMS), energy/water metering dashboards, HACCP checklists, and revenue spreadsheets.',
      ],
      communicationAndTeamwork:
        'Calm, gracious leadership sets the emotional tone for dozens or hundreds of team members.',
      endOfDayActivities: [
        'Attend evening dinner service check-ins and review next day’s arrival VIP or accessibility notes.',
      ],
    },
    specialisations: {
      summary: 'Branches across wilderness conservation, heritage restoration, and culinary direction.',
      items: [
        {
          id: 'ecotourism-lodge',
          title: 'Conservation & Wilderness Eco-Lodge Management',
          focus: 'Off-grid solar/water lodges bordering national parks and fragile coastlines.',
          howItDiffers: 'Integrates wildlife naturalist education and strict ecological carrying limits.',
          jobTitles: ['Eco-Lodge General Manager', 'Sustainable Tourism Director'],
          opportunities: 'Responsible safari camps, mountain homestay collectives, and coastal eco-resorts.',
        },
        {
          id: 'heritage-palace',
          title: 'Heritage Property & Cultural Hotel Leadership',
          focus: 'Managing historic havelis, forts, and landmark properties respectfully.',
          howItDiffers: 'Balances modern fire/accessibility codes with delicate conservation craftsmanship.',
          jobTitles: ['Heritage General Manager', 'Cultural Experience Director'],
          opportunities: 'Heritage hotel groups, museum hospitality wings, and historic estates.',
        },
      ],
    },
    skills: {
      summary: 'Equal parts operational business rigour and genuine human warmth.',
      technical: [
        { name: 'Hotel Operations & Revenue Management', priority: 'Essential', description: 'Managing occupancy yield, food cost ratios, and staffing rosters.' },
        { name: 'Food Safety & Environmental Auditing', priority: 'Essential', description: 'Enforcing HACCP hygiene, waste segregation, and water/energy intensity tracking.' },
        { name: 'Property Management Software (Opera / PMS)', priority: 'Essential', description: 'Coordinating reservations, housekeeping turnaround, and billing.' },
        { name: 'Cultural Heritage & Ecology Literacy', priority: 'Useful Additional', description: 'Understanding local architecture, flora, and culinary history.' },
      ],
      personalProfessional: [
        { name: 'Grace Under Pressure', priority: 'Essential', description: 'Resolving guest emergencies or flight disruptions calmly and empathetically.' },
        { name: 'Multicultural Empathy', priority: 'Essential', description: 'Welcoming guests and leading teams across diverse languages and customs.' },
        { name: 'Eye for Craft & Detail', priority: 'Essential', description: 'Noticing subtle lighting, cleanliness, or hospitality touches immediately.' },
      ],
    },
    schoolSubjects: {
      summary: 'Open to all Class 12 streams; languages, economics, and home science/environmental studies help.',
      subjects: [
        { subject: 'English & Regional/Foreign Languages', tier: 'Essential', whyItMatters: 'Hospitality is fundamentally built on warm, clear multilingual communication.', howToStart: 'Volunteer to guide visitors at school heritage events or local community fairs.' },
        { subject: 'Business Studies & Accountancy', tier: 'Recommended', whyItMatters: 'Prepares students for budgeting, cost control, and vendor management.', howToStart: 'Manage ticketing and supply budgets for a school cultural fest.' },
        { subject: 'History & Geography', tier: 'Recommended', whyItMatters: 'Deepens authentic knowledge of regional culture, ecology, and tourism seasons.', howToStart: 'Research and write a short heritage walking guide for your own town or neighbourhood.' },
      ],
      indianCurriculumNotes:
        'Any 10+2 stream qualifies for the NCHMCT JEE entrance exam leading to B.Sc. in Hospitality and Hotel Administration at Institutes of Hotel Management (IHMs).',
      internationalNotes:
        'European and Swiss hospitality schools (such as EHL) welcome strong languages, business studies, and demonstrated service experience.',
    },
    education: {
      summary: 'Combines specialised hospitality degrees with structured hands-on operational rotations.',
      pathways: [
        { stage: 'Undergraduate Degree', title: 'B.Sc. Hospitality & Hotel Administration / BHM', requirement: 'Mandatory', duration: '3–4 years', details: 'Includes compulsory industrial training across kitchens, front office, and housekeeping.', countryContext: 'India (IHMs / Universities) / Global' },
        { stage: 'Postgraduate / Management Trainee', title: 'Hotel Management Trainee Programmes / MBA Hospitality', requirement: 'Recommended Additional', duration: '1.5–2 years', details: 'Structured leadership tracks (such as Oberoi STEP/OCLD or Taj Management Training) fast-track managerial roles.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Vocational craft certificates in culinary arts, bakery, or front-office operations enable rapid entry and upward mobility through experience.',
      researchAndAdvancedNote:
        'Academic tourism research studies carrying capacity, community benefit-sharing, and regenerative travel economics.',
    },
    toolsAndTechnology: {
      summary: 'Operational reservation platforms paired with sustainability metering tools.',
      items: [
        { name: 'Property Management Systems (Opera PMS / Cloudbeds)', category: 'Computer Software', usedFor: 'Synchronising bookings, housekeeping status, and guest preferences.' },
        { name: 'Sub-Metered Water & Solar Telemetry', category: 'Industry Technologies', usedFor: 'Tracking real-time water recovery and renewable energy fractions.' },
        { name: 'GSTC / EarthCheck Sustainability Frameworks', category: 'Digital Platforms', usedFor: 'Auditing carbon, waste, and fair-wage compliance against global standards.' },
      ],
    },
    experience: {
      summary: 'Hands-on service internships and community hosting build instinctive hospitality.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Cook regional family recipes from scratch and host multi-course community meals.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Complete the mandatory 6-month hotel industrial exposure across all core departments.' },
        { level: 'Early Career', category: 'Volunteering', description: 'Support responsible rural homestay collectives or heritage walking-tour initiatives.' },
      ],
    },
    qualifications: {
      summary: 'No personal statutory licence required to manage hotels; properties themselves hold strict safety/food licences.',
      items: [
        { title: 'NCHMCT JEE / Accredited BHM Degree', tier: 'Recommended Additional', kind: 'Government Examination', country: 'India', details: 'Primary gateway into premier central/state Institutes of Hotel Management.' },
        { title: 'FSSAI / HACCP Food Safety Training', tier: 'Mandatory', kind: 'Certification', country: 'India / Global', details: 'Mandatory operational food-hygiene compliance for kitchens and F&B directors.' },
      ],
      countryDifferencesNote:
        'Hospitality degrees are widely portable globally; work visas and regional alcohol/food-safety regulations differ by country.',
    },
    careerProgression: {
      summary: 'Classic upward climb rewarding frontline mastery across multiple departments.',
      stages: [
        { stage: 'Industrial Trainee / Management Trainee', typicalTimeframe: 'Years 1–2', focus: 'Rotating through kitchens, housekeeping, reception, and maintenance.' },
        { stage: 'Department Manager (Front Office / F&B / Rooms)', typicalTimeframe: 'Years 3–6', focus: 'Managing a 15–50 person department, inventory, and service quality.' },
        { stage: 'Resident Manager / General Manager', typicalTimeframe: 'Years 7–12', focus: 'Holding full P&L, guest safety, and community partnership responsibility for a property.' },
        { stage: 'Regional Sustainability & Hospitality Director', typicalTimeframe: 'Years 12+', focus: 'Overseeing portfolios of heritage or eco-properties.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Restoring heritage family homes into boutique eco-homestays or farm-to-table restaurants.',
        research: 'Consulting for state tourism boards on sustainable carrying capacity.',
        specialisation: 'Mastering fine culinary pastry, tea/coffee terroir curation, or wilderness lodge guiding.',
        leadership: 'Leading regional responsible tourism coalitions.',
      },
    },
    workplaces: {
      summary: 'Vibrant, guest-facing physical spaces in cities, historic towns, mountains, and coastlines.',
      workMode: 'Field',
      locations: ['Restored Heritage Properties', 'Wilderness Eco-Lodges', 'Urban Hotels & Cultural Centres', 'Farm-to-Table Culinary Venues'],
      environmentDescription:
        'Active, on-your-feet hospitality environments requiring evening, weekend, and holiday dedication.',
    },
    careerOpportunities: {
      summary: 'Strong global mobility and rising demand for authentic, low-impact responsible travel.',
      mainIndustries: ['Heritage & Boutique Hospitality', 'Ecotourism & Conservation Lodges', 'Culinary & Beverage Operations', 'Destination Management Organisations'],
      privateSector: 'Hotel groups, responsible travel operators, and independent boutique resorts.',
      governmentSector: 'State Tourism Development Corporations and UNESCO cultural site visitor management.',
      researchOpportunities: 'Sustainable tourism economics and cultural preservation trusts.',
      internationalOpportunities: 'High mobility across Europe, Southeast Asia, the Middle East, and cruise/expedition lines.',
      freelancingAndSelfEmployment: 'Boutique hotel launch consulting, menu curation, and eco-certification auditing.',
      entrepreneurshipAndStartups: 'Community-owned homestay networks and zero-waste culinary ventures.',
      emergingDemand: 'Regenerative nature tourism, slow culinary travel, and heritage craft immersion.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 3% growth for lodging managers (2024–2034). Verified India-wide annual growth percentages vary across Ministry of Tourism reports; Information not yet verified for exact consolidated projections.',
    },
    relatedCareers: {
      summary: 'Careers combining human care, spatial design, and cultural preservation.',
      items: [
        {
          targetId: 'sustainable-architect',
          name: 'Sustainable Architect',
          clusterName: 'Architecture & Construction',
          whyRelated: 'Designs and restores the passive-cooled eco-lodges and heritage structures that hospitality directors operate.',
          sharedSkills: ['Heritage Sensitivity', 'Resource Efficiency', 'Spatial Experience'],
          differencesInResponsibilities: 'Focuses on structural design and construction rather than daily guest service.',
          transitionPathway: 'Architectural conservation or hospitality project management.',
        },
        {
          targetId: 'operations-strategist',
          name: 'Operations & Supply Chain Strategist',
          clusterName: 'Business Management & Administration',
          whyRelated: 'Shares vendor sourcing, inventory rotation, and multi-team scheduling discipline.',
          sharedSkills: ['Inventory Control', 'Service Quality', 'Budgeting'],
          differencesInResponsibilities: 'Manages manufacturing/freight logistics rather than direct guest experiences.',
          transitionPathway: 'Hospitality procurement and supply management.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Moving decisively away from plastic-heavy luxury toward regenerative, locally rooted hospitality.',
      disclaimer:
        'Established developments reflect active industry certifications; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Zero-Single-Use-Plastic & Greywater Loops', description: 'On-site glass bottling, biodigesters, and solar heating becoming standard expectations.' },
        { area: 'Hyper-Local Ingredient Traceability', description: 'Celebrating indigenous millets, heirloom produce, and regional culinary knowledge.' },
      ],
      speculativePredictions: [
        { area: 'Dynamic Carrying-Capacity Permits', description: 'Fragile Himalayan and coastal destinations adopting timed visitor quotas to prevent overcrowding.' },
      ],
      environmentalAndSocialFactors:
        'Water scarcity and climate heatwaves require hospitality properties to operate as net-positive watershed stewards.',
    },
    realWorldExamples: {
      summary: 'Leaders who pioneered ethical, heritage-rooted hospitality.',
      pioneers: [
        {
          name: 'Rai Bahadur Mohan Singh Oberoi',
          profession: 'Hospitality Pioneer & Hotelier',
          country: 'India',
          majorContributions: 'Built India’s first modern luxury hospitality group from a modest Shimla property (1934), establishing world-class professional hotel training academies inside India.',
          achievements: 'Awarded the Padma Bhushan (2001) for transforming Indian hospitality standards.',
          whyWorkMatters: 'Demonstrated that Indian hospitality professionals could set global benchmarks in service and formal management education.',
          sourceNote: 'Government of India Padma Awards & hospitality archives.',
        },
        {
          name: 'Jose Dominic',
          profession: 'Sustainable Hospitality Pioneer',
          country: 'India',
          majorContributions: 'Co-founded CGH Earth in Kerala, pioneering rainwater-harvesting, solar-powered, plastic-free cultural resorts built with local artisans and zero-import cuisines.',
          achievements: 'Recognised widely by global responsible-tourism awards for heritage and ecological stewardship.',
          whyWorkMatters: 'Proved decades ago that ecological restraint and deep local authenticity create resilient hospitality.',
          sourceNote: 'Responsible Tourism Society of India & CGH Earth records.',
        },
      ],
    },
  },

  {
    id: 'social-worker',
    name: 'Clinical & Community Social Worker',
    clusterId: 'human-services',
    clusterName: 'Human Services & Social Work',
    status: 'Current',
    shortIntro:
      'Stands alongside individuals, families, and vulnerable communities—connecting clinical mental-health support with housing, child protection, and systemic advocacy.',
    specialisationTags: ['Medical & Psychiatric', 'Child Protection', 'Community Development', 'Disaster Relief'],
    imageUrl: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    imageCaption: 'Community case records and human-development field journals in a social research study.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'Tata Institute of Social Sciences (TISS)', url: 'https://www.tiss.edu/', organization: 'TISS Mumbai' },
      { label: 'O*NET: Social Workers', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Bridges compassionate human support with practical knowledge of laws, healthcare, and community institutions.',
      definition:
        'A Clinical & Community Social Worker is a trained professional who helps people navigate trauma, illness, poverty, domestic crisis, or disability—both through direct counselling and by coordinating social safety nets.',
      mainPurpose:
        'To uphold human dignity, protect vulnerable children and elders, and empower marginalised communities to claim their rights and wellbeing.',
      whyItExists:
        'Medical clinics, courts, and schools often fail people silently when social barriers—trauma, homelessness, addiction, or bureaucracy—go unaddressed.',
      societalImportance:
        'Strengthens child safeguarding, hospital patient recovery, rural women’s collectives, and community disaster resilience.',
      whatMakesItInteresting:
        'No two human stories are alike; you combine psychology, law, empathy, and grassroots problem-solving in real community settings.',
    },
    responsibilities: {
      summary: 'Combines individual psychosocial assessments with family mediation and systemic resource coordination.',
      mainDuties: [
        'Conduct confidential intake interviews and psychosocial assessments in hospitals, schools, or community centres.',
        'Develop individualised care plans connecting families to legal aid, disability pensions, rehabilitation, or safe shelters.',
        'Facilitate community self-help groups, trauma-informed counselling, and child-protection case conferences.',
        'Maintain accurate, ethically protected case records.',
      ],
      importantResponsibilities: [
        'Mandatory safeguarding duties when children or vulnerable adults face abuse or neglect.',
        'Practising self-care and professional supervision to prevent secondary burnout.',
      ],
      problemsSolved: [
        'Helping a chronically ill patient secure transport, medication continuity, and family support after hospital discharge.',
      ],
      decisionsMade: [
        'Crisis safety planning, shelter referrals, and community programme resource allocation.',
      ],
      collaborators: [
        'Psychiatrists, paediatricians, teachers, and family court magistrates',
        'Non-profit outreach workers, shelter staff, and municipal welfare officers',
      ],
    },
    dailyWork: {
      summary: 'Deeply relational work shifting between quiet one-on-one counselling rooms and neighbourhood visits.',
      scheduleNote:
        'Hospital and school social workers follow institutional hours; disaster relief and child-protection officers respond to urgent calls.',
      morningActivities: [
        'Review urgent hospital or school referrals and check follow-ups with partner shelters.',
      ],
      mainTasks: [
        'Meet clients in private counselling rooms or conduct home visits with local community volunteers.',
        'Coordinate with legal clinics or district welfare committees on guardianship or disability documentation.',
      ],
      meetingsAndFieldwork: [
        'Participate in multidisciplinary hospital discharge meetings or neighbourhood health-literacy workshops.',
      ],
      toolsUsedDaily: [
        'Encrypted case-management logs, psychosocial assessment scales, and regional welfare referral directories.',
      ],
      communicationAndTeamwork:
        'Active, non-judgmental listening paired with firm, respectful advocacy inside bureaucratic systems.',
      endOfDayActivities: [
        'Update confidential case notes and debrief complex cases with a clinical supervisor.',
      ],
    },
    specialisations: {
      summary: 'Branches across clinical healthcare, child safeguarding, and grassroots community organising.',
      items: [
        {
          id: 'medical-psychiatric',
          title: 'Medical & Psychiatric Social Work',
          focus: 'Supporting hospital patients, palliative care families, and psychiatric rehabilitation.',
          howItDiffers: 'Works inside clinical teams alongside doctors and clinical psychologists.',
          jobTitles: ['Psychiatric Social Worker', 'Hospital Case Manager'],
          opportunities: 'Mental health institutes (e.g., NIMHANS), oncology centres, and public hospitals.',
        },
        {
          id: 'child-family',
          title: 'Child Welfare & School Social Work',
          focus: 'Preventing school dropout, addressing bullying/trauma, and child-protection advocacy.',
          howItDiffers: 'Centred in schools, foster systems, and juvenile justice boards.',
          jobTitles: ['School Social Worker', 'Child Protection Officer'],
          opportunities: 'Public/private schools, Childline/NCPCR initiatives, and family NGOs.',
        },
      ],
    },
    skills: {
      summary: 'Requires emotional maturity, ethical boundaries, and sharp institutional navigation.',
      technical: [
        { name: 'Psychosocial Assessment & Crisis Intervention', priority: 'Essential', description: 'Evaluating safety risks, trauma indicators, and protective family strengths.' },
        { name: 'Social Welfare Law & Rights Literacy', priority: 'Essential', description: 'Knowing juvenile justice, disability rights, and labour protection frameworks.' },
        { name: 'Trauma-Informed Counselling', priority: 'Essential', description: 'Holding safe space without imposing personal judgment.' },
        { name: 'Participatory Rural/Urban Appraisal', priority: 'Useful Additional', description: 'Co-designing programmes with community residents rather than top-down.' },
      ],
      personalProfessional: [
        { name: 'Deep Empathy with Healthy Boundaries', priority: 'Essential', description: 'Caring fiercely while maintaining sustainable emotional steadiness.' },
        { name: 'Cultural Humility', priority: 'Essential', description: 'Respecting diverse family traditions, languages, and socioeconomic realities.' },
        { name: 'Confidentiality & Integrity', priority: 'Essential', description: 'Protecting sensitive personal disclosures strictly.' },
      ],
    },
    schoolSubjects: {
      summary: 'Open to all streams; Humanities, Psychology, Sociology, and Civics provide strong insight.',
      subjects: [
        { subject: 'Psychology & Sociology', tier: 'Essential', whyItMatters: 'Explains human development, trauma, group behaviour, and social inequality.', howToStart: 'Volunteer consistently with a verified local literacy, elder-care, or animal/community shelter.' },
        { subject: 'Political Science / Legal Studies', tier: 'Recommended', whyItMatters: 'Introduces fundamental constitutional rights and local governance.', howToStart: 'Learn what district welfare and child-helpline services exist in your city.' },
        { subject: 'Languages', tier: 'Essential', whyItMatters: 'Fluency in local spoken languages builds immediate trust during home visits.', howToStart: 'Practise active listening and clear, respectful summarising.' },
      ],
      indianCurriculumNotes:
        'Any Class 12 stream qualifies for Bachelor of Social Work (BSW) or BA Psychology/Sociology, followed by Master of Social Work (MSW).',
      internationalNotes:
        'A-Levels/IB in Psychology, Sociology, or History lead smoothly into BSW/MSW accreditation pathways.',
    },
    education: {
      summary: 'Professional practice typically requires an accredited Bachelor or Master of Social Work (BSW / MSW) with supervised fieldwork.',
      pathways: [
        { stage: 'Undergraduate', title: 'Bachelor of Social Work (BSW) or B.A. Psychology / Sociology', requirement: 'Mandatory', duration: '3–4 years', details: 'BSW includes mandatory weekly community agency fieldwork placements.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'Master of Social Work (MSW) / M.Phil Psychiatric Social Work', requirement: 'Recommended Additional', duration: '2 years', details: 'Offered by TISS, Delhi University, Jamia Millia Islamia, and international schools; M.Phil PSW (NIMHANS/CIP) trains specialist clinical psychiatric social workers.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Grassroots community mobilisers often start as peer health workers or NGO volunteers before completing distance or full-time BSW/MSW degrees.',
      researchAndAdvancedNote:
        'Doctoral research evaluates community mental health models, urban homelessness interventions, and gender justice.',
    },
    toolsAndTechnology: {
      summary: 'Relies on confidential documentation systems and community mapping rather than heavy hardware.',
      items: [
        { name: 'Encrypted Case Management Systems', category: 'Digital Platforms', usedFor: 'Documenting client progress and safeguarding alerts securely.' },
        { name: 'Standardised Psychosocial Screening Tools', category: 'Professional Equipment', usedFor: 'Structured wellness, depression, and family-needs assessments.' },
      ],
    },
    experience: {
      summary: 'Supervised fieldwork is built directly into every accredited social work degree.',
      stages: [
        { level: 'School Level', category: 'Volunteering', description: 'Join NSS (National Service Scheme) or community tutoring and food-security drives.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Complete concurrent 15-hour/week agency fieldwork placements under qualified social-work supervisors.' },
      ],
    },
    qualifications: {
      summary: 'Licensing rules differ sharply by country: strictly statutory in the US/UK, degree-governed in India.',
      items: [
        { title: 'Accredited BSW / MSW Degree', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: 'Core professional qualification for NGO, hospital, and government welfare roles.' },
        { title: 'LCSW / Social Work England Registration', tier: 'Mandatory', kind: 'Licence', country: 'USA / UK', details: 'Statutory clinical licensure and supervised post-master’s hours are legally required in the US and UK.' },
        { title: 'M.Phil in Psychiatric Social Work', tier: 'Recommended Additional', kind: 'Degree', country: 'India', details: 'Recognised clinical specialist credential for mental health hospitals in India.' },
      ],
      countryDifferencesNote:
        'India currently regulates psychiatric social work training via premier clinical institutes while general social work licensure remains non-statutory, unlike the US/UK/Australia where protected registration is mandatory.',
    },
    careerProgression: {
      summary: 'Grows from frontline casework toward clinical leadership, programme direction, or policy advocacy.',
      stages: [
        { stage: 'Fieldwork Trainee / Case Worker', typicalTimeframe: 'Years 1–2', focus: 'Direct family outreach, intake assessments, and agency coordination.' },
        { stage: 'Clinical / Programme Social Worker', typicalTimeframe: 'Years 3–6', focus: 'Managing independent caseloads or designing district community interventions.' },
        { stage: 'Programme Director / Chief Clinical Social Worker', typicalTimeframe: 'Years 7+', focus: 'Mentoring teams, securing institutional grants, and shaping organisational safeguarding.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding community mental-health clinics, elder-care services, or social enterprises.',
        research: 'Evaluating national social protection and mental health models.',
        specialisation: 'Focusing deeply on oncology palliative support, addiction recovery, or juvenile justice.',
        leadership: 'Directing UN humanitarian protection clusters or national foundations.',
      },
    },
    workplaces: {
      summary: 'Embedded inside hospitals, schools, courts, shelters, and rural villages.',
      workMode: 'Mixed',
      locations: ['Hospitals & Mental Health Centres', 'Schools & Universities', 'Community NGOs & Shelters', 'District Welfare Offices', 'Rural & Urban Neighbourhoods'],
      environmentDescription:
        'Emotionally intense yet deeply meaningful human environments combining office case notes with direct field visits.',
    },
    careerOpportunities: {
      summary: 'Growing institutional recognition across healthcare, schools, CSR, and international aid.',
      mainIndustries: ['Healthcare & Mental Health', 'Child & Family Welfare', 'Education Support', 'Corporate Social Responsibility (CSR)', 'International Humanitarian Agencies'],
      privateSector: 'Private hospital palliative/psychiatry teams, school counselling wings, and corporate CSR foundations.',
      governmentSector: 'District Child Protection Units, medical social worker posts in AIIMS/public hospitals, and rural livelihood missions.',
      researchOpportunities: 'TISS, NIMHANS, and UNICEF social-policy research units.',
      internationalOpportunities: 'UNHCR, UNICEF, Save the Children, and licensed clinical roles abroad (subject to local licensure).',
      freelancingAndSelfEmployment: 'Licensed clinical therapy (where credentialed) and NGO safeguarding auditing.',
      entrepreneurshipAndStartups: 'Accessible mental-health collectives and assistive-care networks for seniors.',
      emergingDemand: 'School mental-health support, geriatric care for ageing cities, and climate-disaster psychosocial recovery.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 7% growth for social workers (2024–2034). Consolidated India-wide annual hiring statistics are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Professions centred on human development, justice, and civic institutions.',
      items: [
        {
          targetId: 'curriculum-designer',
          name: 'Curriculum Designer & Learning Scientist',
          clusterName: 'Education & Training',
          whyRelated: 'Designs inclusive educational environments supporting vulnerable and neurodiverse children.',
          sharedSkills: ['Child Advocacy', 'Empathy', 'Inclusive Design'],
          differencesInResponsibilities: 'Designs learning materials rather than family welfare interventions.',
          transitionPathway: 'Educational psychology or school-support specialisations.',
        },
        {
          targetId: 'public-policy-analyst',
          name: 'Public Policy Analyst & Civil Administrator',
          clusterName: 'Government, Public Policy & Administration',
          whyRelated: 'Translates frontline social worker insights into better housing, pension, and nutrition laws.',
          sharedSkills: ['Welfare System Literacy', 'Field Research', 'Advocacy'],
          differencesInResponsibilities: 'Evaluates macro budgets and legislation rather than direct individual casework.',
          transitionPathway: 'MPP or development policy fellowships after MSW.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Rising integration of mental health into primary care and community climate resilience.',
      disclaimer:
        'Established trends reflect global health initiatives; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Community-Based Mental Health Integration', description: 'Expanding tele-mental-health linkages (such as India’s Tele-MANAS) supported by frontline social workers.' },
        { area: 'Formal Safeguarding Standards', description: 'Stricter child-safety and workplace equity protocols across schools and charities.' },
      ],
      speculativePredictions: [
        { area: 'Climate-Displacement Case Coordination', description: 'Growing demand for social workers helping flood- and heat-displaced families rebuild livelihoods.' },
      ],
      environmentalAndSocialFactors:
        'Urban isolation, ageing populations, and economic transitions underscore the irreplaceable role of human care.',
    },
    realWorldExamples: {
      summary: 'Pioneers who shaped modern professional social work and community dignity.',
      pioneers: [
        {
          name: 'Jane Addams',
          profession: 'Social Worker, Sociologist & Reformer',
          country: 'United States',
          majorContributions: 'Co-founded Hull House in Chicago (1889), creating community childcare, adult education, public baths, and labour protections that helped define modern social work.',
          achievements: 'First American woman awarded the Nobel Peace Prize (1931).',
          whyWorkMatters: 'Demonstrated that social workers must live alongside communities and tackle root systemic causes, not just offer charity.',
          sourceNote: 'The Nobel Prize official biographical archive.',
        },
        {
          name: 'Ela Bhatt',
          profession: 'Social Organiser & Lawyer',
          country: 'India',
          majorContributions: 'Founded the Self-Employed Women’s Association (SEWA) in Ahmedabad (1972), unionising informal women workers and pioneering cooperative banking and healthcare.',
          achievements: 'Awarded the Ramon Magsaysay Award, Padma Bhushan, and Right Livelihood Award.',
          whyWorkMatters: 'Showed how grassroots organising transforms invisible informal workers into empowered economic leaders.',
          sourceNote: 'SEWA & Ramon Magsaysay Award archives.',
        },
      ],
    },
  },

  {
    id: 'software-architect',
    name: 'Distributed Systems Software Architect',
    clusterId: 'information-technology',
    clusterName: 'Information Technology & Computing',
    status: 'Current',
    shortIntro:
      'Designs large-scale, fault-tolerant software platforms—ensuring payments, digital public infrastructure, healthcare records, and global applications stay fast, secure, and reliable.',
    specialisationTags: ['Distributed Systems', 'Cloud Infrastructure', 'Security Architecture', 'API Design'],
    imageUrl: '/src/assets/images/career_computing_systems_1795001233090.jpg',
    imageCaption: 'Network topology diagrams and systems code architecture inside a contemporary computing studio.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'ACM Computing Curricula', url: 'https://www.acm.org/', organization: 'Association for Computing Machinery' },
      { label: 'O*NET: Software Developers & Architects', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'The structural engineering of the digital world.',
      definition:
        'A Distributed Systems Software Architect designs how dozens or thousands of independent computers, databases, and networks coordinate safely—even when individual servers crash or cables are severed.',
      mainPurpose:
        'To build dependable software infrastructure capable of handling millions of concurrent users without losing money, leaking private data, or grinding to a halt.',
      whyItExists:
        'Writing a small app for one laptop is straightforward; running nationwide instant payments (like UPI), hospital networks, or aviation booking systems requires deliberate architectural trade-offs.',
      societalImportance:
        'Powers digital banking inclusion, resilient emergency communications, scientific computing grids, and accessible educational platforms.',
      whatMakesItInteresting:
        'Combines abstract mathematical logic (consensus algorithms, cryptography) with very practical detective work diagnosing live system bottlenecks.',
    },
    responsibilities: {
      summary: 'Makes high-leverage technical design decisions, mentors engineering teams, and safeguards reliability.',
      mainDuties: [
        'Write Architecture Decision Records (ADRs) evaluating database consistency, latency, and cost trade-offs.',
        'Design clean API contracts, data schemas, encryption boundaries, and disaster-recovery failovers.',
        'Conduct deep code and security reviews alongside backend and reliability engineers.',
        'Diagnose rare distributed race conditions, memory leaks, or cascading traffic outages.',
      ],
      importantResponsibilities: [
        'Protecting user privacy, defending against cyber vulnerabilities, and keeping systems maintainable for future teams.',
      ],
      problemsSolved: [
        'Preventing double-spending when two payment requests arrive within the same millisecond across different data centres.',
      ],
      decisionsMade: [
        'Choosing relational vs event-log storage, synchronous vs asynchronous queues, and open-source vs managed infrastructure.',
      ],
      collaborators: [
        'Backend, frontend, security, and site reliability engineers',
        'Product managers, legal privacy counsel, and infrastructure vendors',
      ],
    },
    dailyWork: {
      summary: 'Balances deep uninterrupted design/coding blocks with architectural reviews and mentorship.',
      scheduleNote:
        'Healthy teams protect quiet focus mornings for writing specs and code; rare production outages require calm live incident command.',
      morningActivities: [
        'Inspect latency percentiles, error budgets, and overnight automated test alerts.',
      ],
      mainTasks: [
        'Draft system sequence diagrams and prototype performance-critical services in Go, Rust, Java, or TypeScript.',
        'Review pull requests for subtle concurrency bugs or database query bottlenecks.',
      ],
      meetingsAndFieldwork: [
        'Facilitate architecture whiteboard sessions where engineers stress-test proposed designs for failure modes.',
      ],
      toolsUsedDaily: [
        'Linux terminals, Git, distributed tracing tools (OpenTelemetry), PostgreSQL, Kubernetes, and diagramming canvases.',
      ],
      communicationAndTeamwork:
        'Great architects win through clear written reasoning and persuasion—not authority.',
      endOfDayActivities: [
        'Document review notes, close design open questions, and verify staging load tests.',
      ],
    },
    specialisations: {
      summary: 'Branches across backend scale, cybersecurity, data pipelines, and developer platforms.',
      items: [
        {
          id: 'cloud-distributed',
          title: 'Distributed Storage & Cloud Architecture',
          focus: 'Multi-region replication, consensus protocols (Raft/Paxos), and high-throughput microservices.',
          howItDiffers: 'Deeply grounded in networking, operating systems, and database internals.',
          jobTitles: ['Principal Systems Engineer', 'Cloud Architect'],
          opportunities: 'Digital payment networks, cloud providers, and large SaaS companies.',
        },
        {
          id: 'security-architect',
          title: 'Application & Infrastructure Security Architecture',
          focus: 'Zero-trust identity, threat modeling, cryptography, and supply-chain code security.',
          howItDiffers: 'Adversarial mindset—constantly asking how attackers could abuse trust boundaries.',
          jobTitles: ['Security Architect', 'Cryptography Engineer'],
          opportunities: 'Fintech, healthcare platforms, defence, and national cyber agencies.',
        },
      ],
    },
    skills: {
      summary: 'Deep computer science fundamentals matter far more than chasing fleeting frameworks.',
      technical: [
        { name: 'Data Structures, Concurrency & Operating Systems', priority: 'Essential', description: 'Understanding threads, locks, memory caching, and I/O bottlenecks.' },
        { name: 'Computer Networks & Database Internals', priority: 'Essential', description: 'TCP/IP, HTTP, ACID transactions, indexing, and replication trade-offs.' },
        { name: 'Systems Programming (Go, Rust, Java, C++, or TypeScript)', priority: 'Essential', description: 'Writing clean, testable, observable production code.' },
        { name: 'Threat Modeling & Cryptography', priority: 'Useful Additional', description: 'Designing safe authentication, key rotation, and least-privilege access.' },
      ],
      personalProfessional: [
        { name: 'Trade-off Clarity', priority: 'Essential', description: 'Articulating clearly what a technical design gains AND what complexity it costs.' },
        { name: 'Clear Technical Writing', priority: 'Essential', description: 'Authoring crisp design specs that align 50+ engineers.' },
        { name: 'Blameless Incident Composure', priority: 'Essential', description: 'Focusing on fixing systems rather than blaming teammates when software breaks.' },
      ],
    },
    schoolSubjects: {
      summary: 'Mathematics and logical problem-solving lay the strongest groundwork.',
      subjects: [
        { subject: 'Mathematics (Discrete Math & Logic)', tier: 'Essential', whyItMatters: 'Graph theory, modular arithmetic, and boolean logic directly power algorithms and encryption.', howToStart: 'Solve algorithmic puzzles and explore how binary arithmetic works.' },
        { subject: 'Computer Science', tier: 'Recommended', whyItMatters: 'Teaches programming syntax, recursion, and database basics early.', howToStart: 'Build a small client-server chat app or personal website from scratch without copy-pasting.' },
        { subject: 'Physics', tier: 'Recommended', whyItMatters: 'Reinforces quantitative modeling and hardware/semiconductor intuition.', howToStart: 'Explore how logic gates are built physically from transistors.' },
      ],
      indianCurriculumNotes:
        'Students commonly take PCM + Computer Science in Classes 11–12 for B.Tech CSE/IT; however, BCA, B.Sc. Computer Science, and self-taught open-source contributors also succeed.',
      internationalNotes:
        'A-Level/IB Mathematics and Computer Science prepare students cleanly for CS or Software Engineering degrees.',
    },
    education: {
      summary: 'Multiple genuine pathways exist—formal computer science degrees remain common, alongside strong portfolio routes.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.Tech / B.E. Computer Science, B.S. CS, or BCA + MCA', requirement: 'Recommended Additional', duration: '3–4 years', details: 'Provides deep grounding in operating systems, compilers, networks, and algorithms.', countryContext: 'India / Global' },
        { stage: 'Postgraduate', title: 'M.Tech / M.S. Computer Science (Systems / Security)', requirement: 'Optional', duration: '2 years', details: 'Valuable for cutting-edge distributed databases, compilers, or research labs.', countryContext: 'Global' },
        { stage: 'Apprenticeship & Open Source', title: 'Software Apprenticeships & Open-Source Contributions', requirement: 'Optional', duration: '1–3 years', details: 'Demonstrated production engineering skill and open-source commits can open doors even from non-CS degrees.', countryContext: 'Global' },
      ],
      alternativeAndVocationalNote:
        'Many respected architects began in mathematics, physics, or self-directed programming and earned seniority through real production experience.',
      researchAndAdvancedNote:
        'Systems research groups publish breakthroughs in consensus verification, energy-efficient data centres, and formal correctness proofs.',
    },
    toolsAndTechnology: {
      summary: 'Spans low-level terminal debuggers to cloud orchestration platforms.',
      items: [
        { name: 'Linux, Git & Profilers', category: 'Computer Software', usedFor: 'Inspecting CPU/memory performance and managing collaborative code history.' },
        { name: 'PostgreSQL, Redis & Apache Kafka', category: 'Industry Technologies', usedFor: 'Storing transactional records cleanly and streaming high-volume events.' },
        { name: 'Docker, Kubernetes & Terraform', category: 'Digital Platforms', usedFor: 'Packaging and declaratively managing resilient server fleets.' },
        { name: 'Formal Verification Tools (TLA+)', category: 'Emerging Tools', usedFor: 'Mathematically proving distributed protocols lack subtle deadlock bugs before coding.' },
      ],
    },
    experience: {
      summary: 'Build real end-to-end software that runs for actual users—not only isolated textbook snippets.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Automate a helpful task for your school library or build a simple web tool from scratch.' },
        { level: 'Undergraduate', category: 'School & Personal Projects', description: 'Write a miniature key-value database or HTTP server in Python, Go, or Rust to learn how protocols work.' },
        { level: 'College / Early Career', category: 'Internships & Apprenticeships', description: 'Contribute to established open-source tools (such as via Google Summer of Code) or intern on backend engineering teams.' },
      ],
    },
    qualifications: {
      summary: 'No statutory licence governs general software engineering; demonstrated systems judgment and code craft govern advancement.',
      items: [
        { title: 'Computer Science / Engineering Degree or Equivalent Portfolio', tier: 'Recommended Additional', kind: 'Degree', country: 'Global', details: 'Most large employers require a quantitative bachelor’s degree or proven equivalent production track record.' },
        { title: 'Cloud / Kubernetes Security Certifications (e.g., CKA, CISSP)', tier: 'Optional', kind: 'Certification', country: 'Global', details: 'Useful supplementary credentials for cloud infrastructure and security specialists.' },
      ],
      countryDifferencesNote:
        'Software architecture is largely borderless and unregulated; however, safety-critical avionics, medical-device, and banking software undergoes strict regulatory safety audits.',
    },
    careerProgression: {
      summary: 'Rarely forces engineers into people management—dual Individual Contributor (Staff/Principal) and Engineering Manager ladders exist.',
      stages: [
        { stage: 'Junior Software Engineer', typicalTimeframe: 'Years 1–2', focus: 'Writing well-tested features inside existing services and learning production debugging.' },
        { stage: 'Senior Software Engineer', typicalTimeframe: 'Years 3–6', focus: 'Owning entire subsystems end-to-end and mentoring junior peers.' },
        { stage: 'Staff Engineer / Software Architect', typicalTimeframe: 'Years 7–11', focus: 'Solving cross-team technical bottlenecks and defining multi-year platform architecture.' },
        { stage: 'Principal / Distinguished Architect', typicalTimeframe: 'Years 12+', focus: 'Setting company-wide or open-standard technical direction.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Co-founding developer infrastructure startups or technical software consultancies.',
        research: 'Working in corporate or academic labs on programming languages, databases, or cryptography.',
        specialisation: 'Remaining a hands-on Staff/Principal IC deep inside database engines or security kernels.',
        leadership: 'Stepping into VP Engineering or Chief Technology Officer (CTO) roles.',
      },
    },
    workplaces: {
      summary: 'Predominantly quiet studio offices or remote setups with global engineering collaboration.',
      workMode: 'Remote',
      locations: ['Software Engineering Studios', 'Digital Public Infrastructure Hubs', 'Remote Home Workspaces', 'University Computing Labs'],
      environmentDescription:
        'Calm, focused desk environments centred around deep reading, diagramming, and asynchronous written communication.',
    },
    careerOpportunities: {
      summary: 'Pervasive demand across every modern industry—from fintech and health platforms to climate grids.',
      mainIndustries: ['Financial & Payment Infrastructure', 'Cloud & Developer Tools', 'Healthcare Technology', 'Digital Public Infrastructure', 'E-Commerce & Logistics'],
      privateSector: 'Product companies, SaaS platforms, global engineering centres in Bengaluru/Hyderabad/Pune, and startups.',
      governmentSector: 'Digital public infrastructure initiatives (NIC, iSPIRT-aligned open protocols, e-governance platforms).',
      researchOpportunities: 'IIT/IISc systems labs, Microsoft Research, and open-source foundations.',
      internationalOpportunities: 'High global remote and relocation mobility.',
      freelancingAndSelfEmployment: 'Fractional architecture consulting and security auditing.',
      entrepreneurshipAndStartups: 'Low capital barrier to building software products solving real domain problems.',
      emergingDemand: 'Energy-efficient computing, privacy-preserving systems, and post-quantum cryptography transitions.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 15% employment growth for software developers (2024–2034). Verified consolidated India-wide annual architect hiring figures vary across NASSCOM reports; Information not yet verified for exact single official series.',
    },
    relatedCareers: {
      summary: 'Professions applying software rigour to robotics, biology, or legacy networks.',
      items: [
        {
          targetId: 'robotics-engineer',
          name: 'Mechatronics & Industrial Robotics Engineer',
          clusterName: 'Manufacturing, Robotics & Industrial Production',
          whyRelated: 'Applies real-time embedded software to physical motors, sensors, and robotic arms.',
          sharedSkills: ['C++/Rust Systems Code', 'Control Logic', 'Fault Tolerance'],
          differencesInResponsibilities: 'Designs physical mechanics and real-time hardware control rather than cloud databases.',
          transitionPathway: 'Embedded systems and RTOS coursework.',
        },
        {
          targetId: 'computational-biologist',
          name: 'Computational Biologist & Bioinformatician',
          clusterName: 'Science, Technology, Engineering & Mathematics',
          whyRelated: 'Applies large-scale distributed algorithms and pipelines to DNA and protein folding datasets.',
          sharedSkills: ['Python/C++ Pipelines', 'Large-Scale Data Engineering', 'Algorithmic Thinking'],
          differencesInResponsibilities: 'Answers biological research questions rather than commercial platform architecture.',
          transitionPathway: 'Bioinformatics master’s or research engineering inside genomics labs.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Shifting toward memory-safe languages, energy-aware data centres, and AI-assisted code review with stricter human verification.',
      disclaimer:
        'Established trends reflect current engineering adoption; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Memory-Safe Systems Languages', description: 'Wider adoption of Rust and formal verification to eliminate entire classes of security flaws.' },
        { area: 'Post-Quantum Cryptography Readiness', description: 'Upgrading global internet encryption protocols ahead of future quantum decryption threats.' },
      ],
      speculativePredictions: [
        { area: 'AI-Assisted Routine Code Synthesis', description: 'Automating boilerplate code while increasing demand for senior architects who verify safety, security, and system coherence.' },
      ],
      environmentalAndSocialFactors:
        'Electricity and freshwater cooling footprints of massive data centres are driving intense focus on efficient software engineering.',
    },
    realWorldExamples: {
      summary: 'Computer scientists who built foundational distributed and real-time systems.',
      pioneers: [
        {
          name: 'Margaret Hamilton',
          profession: 'Computer Scientist & Systems Engineer',
          country: 'United States',
          majorContributions: 'Directed the Software Engineering Division at MIT Instrumentation Laboratory, writing the fault-tolerant onboard flight software for NASA’s Apollo lunar missions.',
          achievements: 'Coined the term "software engineering"; awarded the Presidential Medal of Freedom (2016).',
          whyWorkMatters: 'Demonstrated priority-scheduled asynchronous recovery that saved the Apollo 11 Moon landing during computer overload alarms.',
          sourceNote: 'NASA & MIT Museum archives.',
        },
        {
          name: 'Prof. Raj Reddy',
          profession: 'Computer Scientist & Educator',
          country: 'India / United States',
          majorContributions: 'Pioneered large-scale speech recognition, robotics, and accessible computing systems while championing rural digital literacy initiatives in India.',
          achievements: 'First person of Asian origin to win the ACM Turing Award (1994); awarded the Padma Bhushan (2001).',
          whyWorkMatters: 'Bridged foundational computer science architecture with equitable global access.',
          sourceNote: 'ACM Turing Award & Carnegie Mellon University archives.',
        },
      ],
    },
  },

  {
    id: 'legal-counsel',
    name: 'Constitutional & Technology Counsel',
    clusterId: 'law-public-safety',
    clusterName: 'Law, Public Safety, Corrections & Security',
    status: 'Current',
    shortIntro:
      'Interprets constitutions, statutes, and emerging technology regulations—representing clients in courts, safeguarding digital privacy rights, and drafting enforceable agreements.',
    specialisationTags: ['Constitutional Law', 'Data Privacy & Tech', 'Appellate Advocacy', 'Regulatory Compliance'],
    imageUrl: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    imageCaption: 'Bound statutory reporters, constitutional commentaries, and case briefs in a legal chambers library.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'Bar Council of India (BCI)', url: 'https://www.barcouncilofindia.org/', organization: 'Statutory Regulator of Legal Practice in India' },
      { label: 'O*NET: Lawyers', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Protects fundamental rights and brings predictable rules to fast-moving human and technological change.',
      definition:
        'A Constitutional & Technology Counsel advises citizens, institutions, and governments on legal rights, statutory compliance, digital data protection, intellectual property, and constitutional remedies.',
      mainPurpose:
        'To resolve disputes peacefully under the rule of law and ensure new technologies respect human dignity, privacy, and fair competition.',
      whyItExists:
        'Society relies on independent advocates to hold both state power and private corporations accountable to written law.',
      societalImportance:
        'Defends free speech, digital privacy, fair contracts, consumer safety, and equitable access to justice.',
      whatMakesItInteresting:
        'Every case is a structured intellectual puzzle combining human drama, historical precedent, clear persuasion, and rapidly evolving technology.',
    },
    responsibilities: {
      summary: 'Combines deep legal research and precise drafting with oral advocacy and ethical client counsel.',
      mainDuties: [
        'Research judicial precedents, statutes, and international data-protection standards.',
        'Draft writ petitions, contracts, privacy notices, and legal opinions in unambiguous prose.',
        'Argue motions and appeals persuasively before judges, tribunals, or regulators.',
        'Audit software products or corporate practices for statutory compliance before launch.',
      ],
      importantResponsibilities: [
        'Upholding strict client confidentiality and duty to the court—never misleading judges with fabricated citations.',
      ],
      problemsSolved: [
        'Balancing national security or fraud prevention against citizens’ constitutional right to privacy.',
      ],
      decisionsMade: [
        'Litigation vs mediation strategy, contractual liability caps, and statutory interpretation arguments.',
      ],
      collaborators: [
        'Senior advocates, judges, and opposing counsel',
        'Software engineers, policy analysts, and regulatory compliance officers',
      ],
    },
    dailyWork: {
      summary: 'Split between quiet library/computer case research, client advisories, and courtroom hearings.',
      scheduleNote:
        'Litigators follow strict morning-to-afternoon court dockets and write briefs in the evening; advisory technology counsel keep steadier office rhythms.',
      morningActivities: [
        'Check daily High Court or Supreme Court cause lists, review final oral arguments, and prepare case binders.',
      ],
      mainTasks: [
        'Draft legal memoranda analysing how new data-protection rules apply to health or fintech products.',
        'Review software licensing terms and open-source compliance clauses.',
      ],
      meetingsAndFieldwork: [
        'Confer with senior advocates in chambers or mediate disputes between disputing parties.',
      ],
      toolsUsedDaily: [
        'Legal research databases (SCC Online, Manupatra, Westlaw), statutory codes, and redline document tools.',
      ],
      communicationAndTeamwork:
        'Precision of a single word ("shall" vs "may") can decide millions in liability or fundamental rights.',
      endOfDayActivities: [
        'Log billable or pro-bono case hours and brief junior associates on next-day filings.',
      ],
    },
    specialisations: {
      summary: 'Law branches between courtroom constitutional litigation and corporate/technology advisory.',
      items: [
        {
          id: 'constitutional-appellate',
          title: 'Constitutional & Public Interest Advocacy',
          focus: 'Fundamental rights petitions, judicial review, and administrative law in High/Supreme Courts.',
          howItDiffers: 'Courtroom-intensive oral argument grounded in constitutional history.',
          jobTitles: ['Advocate', 'Constitutional Counsel'],
          opportunities: 'Independent chambers, Supreme/High Court practice, and legal aid clinics.',
        },
        {
          id: 'tech-privacy-ip',
          title: 'Technology, Data Privacy & Intellectual Property Law',
          focus: 'Digital Personal Data Protection, software patents/copyrights, and cybersecurity compliance.',
          howItDiffers: 'Requires fluency in how APIs, cloud servers, and algorithms actually operate.',
          jobTitles: ['Technology Counsel', 'Data Protection Lawyer'],
          opportunities: 'Law firms, tech companies, and digital rights organisations.',
        },
      ],
    },
    skills: {
      summary: 'Clear logic, exhaustive reading stamina, and ethical backbone.',
      technical: [
        { name: 'Statutory Interpretation & Case Research', priority: 'Essential', description: 'Reading complex judgments accurately to distinguish binding ratio from commentary.' },
        { name: 'Precision Legal Drafting', priority: 'Essential', description: 'Writing airtight pleadings and contracts without ambiguous phrasing.' },
        { name: 'Technology & Data Flow Literacy', priority: 'Useful Additional', description: 'Understanding encryption, cookies, cloud hosting, and AI training pipelines.' },
      ],
      personalProfessional: [
        { name: 'Structured Oral Persuasion', priority: 'Essential', description: 'Answering sharp judicial questions calmly without losing the core thread.' },
        { name: 'Active Ethical Courage', priority: 'Essential', description: 'Giving clients honest unwelcome advice when an action is unlawful.' },
        { name: 'Reading Endurance', priority: 'Essential', description: 'Digesting hundreds of pages of evidence accurately without skimming crucial footnotes.' },
      ],
    },
    schoolSubjects: {
      summary: 'Open to ANY Class 12 stream—Humanities, Commerce, or Science.',
      subjects: [
        { subject: 'English & Languages', tier: 'Essential', whyItMatters: 'Law runs on precise grammar, comprehension, and rhetorical clarity.', howToStart: 'Join formal debate, parliamentary debate, or write structured opinion essays.' },
        { subject: 'Political Science & History', tier: 'Recommended', whyItMatters: 'Explains how constitutions, parliaments, and courts evolved.', howToStart: 'Read landmark accessible summaries of Supreme Court constitutional judgments.' },
        { subject: 'Computer Science / Economics', tier: 'Optional', whyItMatters: 'Gives an enormous edge in technology, privacy, and competition law.', howToStart: 'Read a major software service’s privacy policy carefully and outline what data it collects.' },
      ],
      indianCurriculumNotes:
        'Any Class 12 stream (45%+ aggregate) can sit CLAT or AILET for 5-year integrated B.A. LL.B. / B.B.A. LL.B. / B.Sc. LL.B. at National Law Universities, or pursue a 3-year LL.B. after any bachelor’s degree.',
      internationalNotes:
        'In the UK, LL.B. follows A-Levels directly; in the US/Canada, law (J.D.) is a 3-year postgraduate degree entered after any bachelor’s degree + LSAT.',
    },
    education: {
      summary: 'Requires a recognised law degree followed by bar enrolment and examination.',
      pathways: [
        { stage: 'Integrated Undergraduate Route', title: '5-Year Integrated LL.B. (B.A. LL.B. / B.Sc. LL.B.)', requirement: 'Mandatory', duration: '5 years', details: 'Direct post-school pathway in India via CLAT / AILET / state law CETs.', countryContext: 'India (BCI-recognised)' },
        { stage: 'Graduate Route', title: '3-Year LL.B. (or 3-Year J.D. in US/Canada)', requirement: 'Mandatory', duration: '3 years', details: 'Pursued after completing a B.A., B.Com., or B.Tech degree.', countryContext: 'India / North America' },
        { stage: 'Postgraduate Specialisation', title: 'LL.M. in Constitutional Law / Technology & Privacy Law', requirement: 'Optional', duration: '1–2 years', details: 'Deepens academic or international cross-border expertise.', countryContext: 'Global' },
      ],
      alternativeAndVocationalNote:
        'Paralegals, legal-aid community workers, and patent agents (e.g., Indian Patent Agent exam open to science/engineering graduates) hold vital legal roles without bar advocacy.',
      researchAndAdvancedNote:
        'Doctoral work explores algorithmic accountability, constitutional environmental rights, and access to rural justice.',
    },
    toolsAndTechnology: {
      summary: 'Relies on authoritative legal citation databases and document management.',
      items: [
        { name: 'SCC Online, Manupatra, LiveLaw & LexisNexis', category: 'Digital Platforms', usedFor: 'Searching verified judicial precedents and statutory amendments.' },
        { name: 'Document Redlining & E-Discovery Suites', category: 'Computer Software', usedFor: 'Tracking contract negotiations and reviewing large evidentiary files.' },
      ],
    },
    experience: {
      summary: 'Moot courts, legal-aid clinics, and chamber internships build real readiness.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Participate in debate clubs, mock parliaments, and constitutional literacy quizzes.' },
        { level: 'Law School', category: 'Competitions', description: 'Compete in national and international Moot Court competitions and mediation challenges.' },
        { level: 'Law School', category: 'Internships & Apprenticeships', description: 'Intern across trial courts, High Court advocates’ chambers, NGOs, and corporate law firms during semester breaks.' },
      ],
    },
    qualifications: {
      summary: 'Strictly regulated everywhere; practising in court requires bar enrolment and statutory exam clearance.',
      items: [
        { title: 'LL.B. from BCI-Recognised Institution', tier: 'Mandatory', kind: 'Degree', country: 'India', details: 'Academic prerequisite for bar enrolment.' },
        { title: 'State Bar Council Enrolment + All India Bar Examination (AIBE)', tier: 'Mandatory', kind: 'Licence', country: 'India', details: 'Passing AIBE grants the Certificate of Practice required to appear before courts in India.' },
        { title: 'State Bar Exam (USA) / SQE (England & Wales)', tier: 'Mandatory', kind: 'Licence', country: 'USA / UK', details: 'Required jurisdiction-specific licences to practise law abroad.' },
      ],
      countryDifferencesNote:
        'Law is deeply national: an advocate enrolled in India cannot automatically appear in US or UK courts without meeting local qualification rules (such as New York Bar LLM eligibility or UK SQE).',
    },
    careerProgression: {
      summary: 'Branches between independent courtroom chamber growth, law firm partnership, in-house counsel, and the judiciary.',
      stages: [
        { stage: 'Junior Advocate / Associate', typicalTimeframe: 'Years 1–3', focus: 'Legal research, case brief summaries, and procedural court filings.' },
        { stage: 'Senior Associate / Independent Practitioner', typicalTimeframe: 'Years 4–8', focus: 'Arguing substantive motions independently and advising clients directly.' },
        { stage: 'Partner / General Counsel / Advocate-on-Record', typicalTimeframe: 'Years 9–15', focus: 'Leading major constitutional/commercial cases or corporate legal departments.' },
        { stage: 'Senior Advocate / High Court or Supreme Court Judge', typicalTimeframe: 'Years 15+', focus: 'Designated appellate leadership or judicial service.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Establishing an independent specialist boutique chambers or legal-tech compliance startup.',
        research: 'Serving as judicial clerk, law commission researcher, or university law professor.',
        specialisation: 'Focusing purely on patent litigation, maritime arbitration, or digital rights.',
        leadership: 'Judicial service examinations (Lower Judiciary) or bar association leadership.',
      },
    },
    workplaces: {
      summary: 'Anchored in courtrooms, legal chambers, corporate offices, and legal-aid centres.',
      workMode: 'Mixed',
      locations: ['District, High & Supreme Courts', 'Advocates’ Chambers', 'Law Firms & In-House Tech Offices', 'Public Legal Aid Clinics'],
      environmentDescription:
        'Intellectual, high-reading environments contrasting intense courtroom hearings with quiet brief drafting.',
    },
    careerOpportunities: {
      summary: 'Diverse demand across litigation, technology compliance, judicial services, and human rights.',
      mainIndustries: ['Independent Litigation', 'Corporate & Technology Law Firms', 'In-House Legal Departments', 'Judiciary & Tribunals', 'Human Rights & Legal Aid NGOs'],
      privateSector: 'Law firms and in-house privacy/IP counsel at software, fintech, and healthcare companies.',
      governmentSector: 'Judicial Services, Public Prosecutors, Law Ministry, and regulatory commissions (TRAI, SEBI, CCI).',
      researchOpportunities: 'Vidhi Centre for Legal Policy, National Law University research chairs, and Law Commission.',
      internationalOpportunities: 'International commercial arbitration and cross-border privacy compliance.',
      freelancingAndSelfEmployment: 'Litigation practice is fundamentally independent/self-employed at the Bar.',
      entrepreneurshipAndStartups: 'Contract-review software, accessible citizen legal-aid portals.',
      emergingDemand: 'India’s Digital Personal Data Protection Act compliance, AI copyright, and climate litigation.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 4% growth for lawyers (2024–2034). Bar Council of India records over 1.7 million enrolled advocates historically, though annual active growth projections are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Adjacent governance, policy, and compliance careers.',
      items: [
        {
          targetId: 'public-policy-analyst',
          name: 'Public Policy Analyst & Civil Administrator',
          clusterName: 'Government, Public Policy & Administration',
          whyRelated: 'Co-designs the legislation and administrative rules that lawyers interpret and litigate.',
          sharedSkills: ['Constitutional Literacy', 'Analytical Writing', 'Research Discipline'],
          differencesInResponsibilities: 'Measures socioeconomic policy impact rather than arguing legal disputes.',
          transitionPathway: 'MPP or legislative fellowships following a law degree.',
        },
        {
          targetId: 'software-architect',
          name: 'Distributed Systems Software Architect',
          clusterName: 'Information Technology & Computing',
          whyRelated: 'Partners closely with technology counsel to implement data-privacy consent and encryption.',
          sharedSkills: ['Logical Precision', 'Edge-Case Analysis', 'Clear Specifications'],
          differencesInResponsibilities: 'Writes software infrastructure rather than statutory contracts.',
          transitionPathway: 'B.Tech graduates frequently pursue 3-year LL.B. to become patent and tech lawyers.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Rapidly adapting to digital courts, data privacy enforcement, and algorithmic regulation.',
      disclaimer:
        'Established developments reflect enacted legislation and court modernisation; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'E-Courts & Digitised Case Filings', description: 'Online pleadings, video appellate hearings, and open judgment repositories expanding access beyond metro cities.' },
        { area: 'Comprehensive Data Protection Laws', description: 'Enforcing user consent, breach reporting, and children’s online safety across digital platforms.' },
      ],
      speculativePredictions: [
        { area: 'AI-Assisted Precedent Search', description: 'Search tools accelerating case discovery while strict court sanctions reinforce human verification of every citation.' },
      ],
      environmentalAndSocialFactors:
        'Environmental constitutionalism, digital rights, and faster dispute resolution via mediation are reshaping legal education.',
    },
    realWorldExamples: {
      summary: 'Jurists whose integrity shaped constitutional justice and access to law.',
      pioneers: [
        {
          name: 'Justice Leila Seth',
          profession: 'Jurist & Former Chief Justice',
          country: 'India',
          majorContributions: 'First woman judge of the Delhi High Court and first woman Chief Justice of a state High Court in India (Himachal Pradesh, 1991); served on the Law Commission of India championing equal inheritance rights for daughters.',
          achievements: 'Reshaped Indian family, gender-equality, and criminal-law reform reports.',
          whyWorkMatters: 'Demonstrated how judicial rigour and social conscience advance constitutional equality.',
          sourceNote: 'Supreme Court & Law Commission of India archives.',
        },
        {
          name: 'Nani Palkhivala',
          profession: 'Constitutional Jurist & Economist',
          country: 'India',
          majorContributions: 'Argued landmark constitutional cases including Kesavananda Bharati (1973), helping establish the Basic Structure doctrine safeguarding core democratic principles.',
          achievements: 'Awarded the Padma Vibhushan (1998); served as India’s Ambassador to the United States.',
          whyWorkMatters: 'Protected constitutional supremacy and civil liberties through incisive oral advocacy.',
          sourceNote: 'Supreme Court of India historical records.',
        },
      ],
    },
  },
];
