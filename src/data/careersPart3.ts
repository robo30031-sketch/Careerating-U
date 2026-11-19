import type { CareerProfile } from '../types/career.ts';

export const CAREERS_PART_3: CareerProfile[] = [
  {
    id: 'robotics-engineer',
    name: 'Mechatronics & Industrial Robotics Engineer',
    clusterId: 'manufacturing-robotics',
    clusterName: 'Manufacturing, Robotics & Industrial Production',
    status: 'Current',
    shortIntro:
      'Unites mechanical engineering, electronics, control theory, and embedded software to build precision robots, autonomous factory cells, and assistive machines.',
    specialisationTags: ['Kinematics & Control', 'Embedded Firmware', 'Computer Vision', 'Safety Automation'],
    imageUrl: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    imageCaption: 'Precision robotic assembly structures, electronic harnesses, and hardware testing bays.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'IEEE Robotics & Automation Society', url: 'https://www.ieee-ras.org/', organization: 'IEEE RAS' },
      { label: 'AICTE Engineering Curricula', url: 'https://www.aicte-india.org/', organization: 'All India Council for Technical Education' },
    ],
    introduction: {
      summary: 'Gives intelligent software a reliable, safe physical body in the real world.',
      definition:
        'A Mechatronics & Industrial Robotics Engineer designs, integrates, programmes, and tests electro-mechanical systems—combining motors, sensors, gearboxes, microcontrollers, and feedback control algorithms.',
      mainPurpose:
        'To perform repetitive, hazardous, or micro-millimetre-precise physical tasks safely alongside human workers.',
      whyItExists:
        'Modern semiconductor fabrication, battery assembly, surgical instruments, and bomb-disposal rigs demand accuracy, force control, and endurance impossible by bare hands alone.',
      societalImportance:
        'Removes workers from toxic welding/foundry hazards, boosts clean-energy manufacturing quality, and powers prosthetic limbs and agricultural harvesters.',
      whatMakesItInteresting:
        'You touch real steel, solder real circuit boards, write real-time C++ control loops, and watch a machine physically move with grace.',
    },
    responsibilities: {
      summary: 'Spans CAD mechanism design, motor sizing, sensor fusion, and factory floor safety validation.',
      mainDuties: [
        'Model 3D robotic linkages, grippers, and torque loads in CAD and finite-element tools.',
        'Select servo motors, encoders, LiDAR/force-torque sensors, and safety PLC interlocks.',
        'Implement PID and inverse-kinematics control loops in C++, Python, or ROS 2.',
        'Commission automated workcells on factory floors and tune reliability over thousands of cycles.',
      ],
      importantResponsibilities: [
        'Designing fail-safe physical emergency stops and force limits (ISO 10218 / ISO TS 15066) so collaborative robots never injure technicians.',
      ],
      problemsSolved: [
        'Eliminating high-frequency arm vibration when a high-speed pick-and-place robot stops abruptly.',
      ],
      decisionsMade: [
        'Actuator gear-ratio selection, sensor placement, real-time bus protocol (EtherCAT/CAN), and safety light-curtain boundaries.',
      ],
      collaborators: [
        'Mechanical machinists, PCB designers, and embedded firmware engineers',
        'Plant production supervisors and industrial safety auditors',
      ],
    },
    dailyWork: {
      summary: 'Alternates between CAD/simulation desks, hardware prototyping benches, and factory testing cages.',
      scheduleNote:
        'Design sprints are lab-based; commissioning weeks involve hands-on debugging inside manufacturing plants.',
      morningActivities: [
        'Inspect overnight endurance-cycle logs and check motor thermal readings on test rigs.',
      ],
      mainTasks: [
        'Calibrate wrist force-torque sensors or refine inverse-kinematics path planners in ROS 2.',
        'Troubleshoot wiring noise on an oscilloscope with electrical technicians.',
      ],
      meetingsAndFieldwork: [
        'Conduct hazard-and-operability (HAZOP) safety walkthroughs with plant safety officers.',
      ],
      toolsUsedDaily: [
        'SolidWorks, MATLAB/Simulink, ROS 2, C++, oscilloscopes, multimeters, and CNC/3D printers.',
      ],
      communicationAndTeamwork:
        'Bridges mechanical, electrical, and software engineers who speak very different technical dialects.',
      endOfDayActivities: [
        'Commit verified firmware tags, lock test rigs safely, and log mechanical wear observations.',
      ],
    },
    specialisations: {
      summary: 'Branches across kinematics/control, industrial automation, and perceptive mobile robots.',
      items: [
        {
          id: 'industrial-automation',
          title: 'Industrial Workcell & Cobot Integration',
          focus: 'Articulated factory arms, welding/painting automation, and collaborative safety.',
          howItDiffers: 'Prioritises 99.99% uptime, cycle speed, and rugged factory standards.',
          jobTitles: ['Automation Robotics Engineer', 'Controls Integrator'],
          opportunities: 'Automotive, EV battery plants, electronics assembly, and pharmaceuticals.',
        },
        {
          id: 'autonomous-mobile',
          title: 'Autonomous Mobile Robots (AMR) & Perception',
          focus: 'SLAM mapping, LiDAR navigation, and warehouse/hospital transport fleets.',
          howItDiffers: 'Heavily focused on probabilistic robotics, computer vision, and obstacle avoidance.',
          jobTitles: ['Perception Engineer', 'Autonomous Systems Engineer'],
          opportunities: 'Warehouse robotics startups, surgical device firms, and mining/inspection drones.',
        },
      ],
    },
    skills: {
      summary: 'True interdisciplinary engineering: mechanics + electronics + real-time code.',
      technical: [
        { name: 'Kinematics, Dynamics & Control Theory (PID / LQR)', priority: 'Essential', description: 'Understanding coordinate transforms, Jacobians, and closed-loop stability.' },
        { name: 'Embedded C++ / Python & ROS 2', priority: 'Essential', description: 'Writing deterministic real-time motor control and sensor drivers.' },
        { name: '3D CAD & Electronics Schematic Literacy', priority: 'Essential', description: 'Reading wiring diagrams, sizing power supplies, and designing brackets.' },
        { name: 'Computer Vision & SLAM', priority: 'Useful Additional', description: 'Using depth cameras and LiDAR for unstructured environments.' },
      ],
      personalProfessional: [
        { name: 'Hardware-Software Debugging Patience', priority: 'Essential', description: 'Isolating whether a glitch stems from a loose solder joint, mechanical backlash, or software bug.' },
        { name: 'Safety-First Mindset', priority: 'Essential', description: 'Respecting stored energy in springs, lithium packs, and fast-moving steel arms.' },
        { name: 'Cross-Disciplinary Collaboration', priority: 'Essential', description: 'Working seamlessly with machinists, welders, and AI researchers.' },
      ],
    },
    schoolSubjects: {
      summary: 'Physics and Mathematics are foundational; Computer Science or Design Technology accelerates hands-on skill.',
      subjects: [
        { subject: 'Physics (Mechanics & Electromagnetism)', tier: 'Essential', whyItMatters: 'Governs torque, gear ratios, sensors, and electric motors.', howToStart: 'Take apart broken household appliances safely (unplugged!) to inspect gears and motors.' },
        { subject: 'Mathematics (Linear Algebra & Calculus)', tier: 'Essential', whyItMatters: 'Matrices rotate 3D robotic joints; calculus drives PID feedback control.', howToStart: 'Build a simple line-following Arduino/micro:bit rover and tune its turning speed.' },
        { subject: 'Computer Science', tier: 'Recommended', whyItMatters: 'Teaches C++/Python logic and state machines.', howToStart: 'Programme small microcontroller sensor loops reading ultrasonic distance or light.' },
      ],
      indianCurriculumNotes:
        'PCM (Physics, Chemistry, Mathematics) in Classes 11–12 leads to B.Tech in Mechatronics, Robotics & Automation, Mechanical, or Electrical/ECE Engineering.',
      internationalNotes:
        'A-Levels/IB Higher Level Mathematics and Physics paired with Design & Technology or Computer Science.',
    },
    education: {
      summary: 'Entered via B.Tech/B.E. engineering degrees or polytechnic mechatronics diplomas.',
      pathways: [
        { stage: 'Undergraduate Degree', title: 'B.Tech / B.E. in Mechatronics, Robotics, Mechanical, or ECE', requirement: 'Mandatory', duration: '4 years', details: 'Combines mechanics, microcontrollers, control systems, and senior robotics capstone builds.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'M.Tech / M.S. in Robotics & Autonomous Systems', requirement: 'Recommended Additional', duration: '2 years', details: 'Valuable for perception, legged locomotion, and surgical robotics R&D.', countryContext: 'Global' },
        { stage: 'Vocational Route', title: 'Polytechnic Diploma in Mechatronics / Industrial Automation', requirement: 'Optional', duration: '3 years', details: 'Trains hands-on PLC programmers, robotic cell technicians, and maintenance specialists.', countryContext: 'India / Germany Dual VET' },
      ],
      alternativeAndVocationalNote:
        'Hands-on technicians with industrial PLC certifications (Siemens, Fanuc, ABB) are in strong demand on factory floors.',
      researchAndAdvancedNote:
        'Academic labs study soft continuum surgical robots, tactile electronic skin, and dexterous manipulation.',
    },
    toolsAndTechnology: {
      summary: 'Bridges machine-shop instrumentation with real-time robotics middleware.',
      items: [
        { name: 'Oscilloscopes, Calipers & Torque Wrenches', category: 'Physical Tools', usedFor: 'Verifying PWM motor signals and mechanical assembly tolerances.' },
        { name: 'SolidWorks & MATLAB / Simulink', category: 'Computer Software', usedFor: '3D assembly modeling and control-loop simulation before cutting metal.' },
        { name: 'ROS 2 (Robot Operating System) & Gazebo', category: 'Digital Platforms', usedFor: 'Modular robot software messaging and physics simulation.' },
        { name: 'Industrial Servo Drives & Safety PLCs', category: 'Industry Technologies', usedFor: 'Deterministic factory-grade motion control.' },
      ],
    },
    experience: {
      summary: 'Robotics rewards builders—start small with low-cost microcontrollers and join team competitions.',
      stages: [
        { level: 'School Level', category: 'Competitions', description: 'Join FIRST Robotics, World Robot Olympiad (WRO), or Atal Tinkering Lab hardware challenges.' },
        { level: 'Undergraduate', category: 'School & Personal Projects', description: 'Build a multi-DOF robotic arm or autonomous rover in campus robotics clubs (e.g., ABU Robocon).' },
        { level: 'Early Career', category: 'Internships & Apprenticeships', description: 'Intern on factory automation lines or warehouse robotics startups.' },
      ],
    },
    qualifications: {
      summary: 'Accredited engineering degrees govern professional roles; industrial robot OEM certificates add practical value.',
      items: [
        { title: 'B.Tech / B.E. or Polytechnic Diploma in Engineering', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: 'Core technical credential for robotics design and integration roles.' },
        { title: 'GATE (for M.Tech / PSU R&D in India)', tier: 'Optional', kind: 'Government Examination', country: 'India', details: 'Gateway to IIT/IISc robotics postgraduate degrees and PSU engineering posts.' },
        { title: 'Industrial Robot / PLC Vendor Certifications (FANUC, ABB, Siemens)', tier: 'Recommended Additional', kind: 'Certification', country: 'Global', details: 'Valued in automotive and factory automation roles.' },
      ],
      countryDifferencesNote:
        'In Germany and Switzerland, structured dual apprenticeships produce highly respected mechatronics specialists; in India and the US, 4-year engineering degrees dominate design tracks.',
    },
    careerProgression: {
      summary: 'Progresses from subsystem builder to lead systems architect across complete robotic products.',
      stages: [
        { stage: 'Junior Mechatronics / Automation Engineer', typicalTimeframe: 'Years 1–2', focus: 'Testing actuators, writing sensor drivers, and assembling prototype rigs.' },
        { stage: 'Robotics Systems Engineer', typicalTimeframe: 'Years 3–6', focus: 'Integrating mechanics, electronics, and control loops into shippable machines.' },
        { stage: 'Lead Robotics Architect / Principal Engineer', typicalTimeframe: 'Years 7+', focus: 'Defining multi-generation robot platforms, safety certifications, and R&D strategy.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding agricultural weeding robots, solar-panel cleaning robotics, or assistive exoskeleton startups.',
        research: 'Leading humanoid manipulation or bio-inspired locomotion research.',
        specialisation: 'Mastering medical-surgical robotics compliance (IEC 60601) or subsea ROV engineering.',
        leadership: 'Directing factory automation transformation across manufacturing groups.',
      },
    },
    workplaces: {
      summary: 'Hands-on hardware labs, prototype machine shops, and active factory floors.',
      workMode: 'Mixed',
      locations: ['Robotics R&D Labs', 'Automated Manufacturing Plants', 'Logistics Fulfilment Centres', 'Medical Device Cleanrooms'],
      environmentDescription:
        'Dynamic workshop-meets-studio spaces filled with workbenches, soldering irons, test cages, and debugging laptops.',
    },
    careerOpportunities: {
      summary: 'Expanding across EV manufacturing, electronics assembly, warehouses, and healthcare devices.',
      mainIndustries: ['Automotive & EV Manufacturing', 'Semiconductor & Electronics Assembly', 'Warehouse Logistics', 'Medical & Surgical Robotics', 'Defence & Subsea Inspection'],
      privateSector: 'Robotics startups, EV factories, medical device makers, and industrial integrators.',
      governmentSector: 'DRDO, ISRO robotics divisions, Bhabha Atomic Research Centre (remote-handling robotics), and CSIR labs.',
      researchOpportunities: 'Strong global funding at IITs, IISc, ETH Zurich, CMU, and corporate R&D labs.',
      internationalOpportunities: 'High demand in Germany, Japan, South Korea, the US, and India’s growing manufacturing corridors.',
      freelancingAndSelfEmployment: 'Custom factory-cell PLC integration and prototype consulting.',
      entrepreneurshipAndStartups: 'Rapidly growing Indian robotics ecosystem in warehouse AMRs, cleaning robots, and precision agri-machinery.',
      emergingDemand: 'Human-safe collaborative cobots and automated recycling/e-waste sorting.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 9% growth for mechanical engineers and 11% for industrial engineers (2024–2034). Consolidated India-wide robotics-only hiring statistics are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Hardware, software, and aerospace engineering siblings.',
      items: [
        {
          targetId: 'aerospace-engineer',
          name: 'Aerospace Propulsion & Spacecraft Systems Engineer',
          clusterName: 'Space, Aviation & Frontier Exploration',
          whyRelated: 'Shares precision actuators, guidance-navigation-control (GNC) math, and extreme reliability testing.',
          sharedSkills: ['Control Theory', 'CAD & Structural Analysis', 'Real-Time Embedded Systems'],
          differencesInResponsibilities: 'Designs orbital spacecraft and propulsion surviving vacuum and launch G-forces rather than factory floors.',
          transitionPathway: 'M.Tech Aerospace Control or avionics hardware roles.',
        },
        {
          targetId: 'software-architect',
          name: 'Distributed Systems Software Architect',
          clusterName: 'Information Technology & Computing',
          whyRelated: 'Designs fleet-management cloud software coordinating hundreds of warehouse mobile robots.',
          sharedSkills: ['C++/Python Systems', 'Telemetry', 'Fault-Tolerant Protocols'],
          differencesInResponsibilities: 'Focuses purely on software infrastructure without physical mechanics or PCBs.',
          transitionPathway: 'Robotics fleet cloud backend engineering.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Moving from rigidly caged blind robots toward perceptive, adaptable machines.',
      disclaimer:
        'Established trends reflect active industrial deployments; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Force-Limited Collaborative Robots (Cobots)', description: 'Safely working directly beside human technicians without heavy safety cages.' },
        { area: 'Sim-to-Real Physics Training', description: 'Testing millions of grasping variations in GPU physics simulators before running hardware.' },
      ],
      speculativePredictions: [
        { area: 'General-Purpose Mobile Manipulators', description: 'Robots capable of handling varied unstructured tasks across hospitals or elder-care homes safely.' },
      ],
      environmentalAndSocialFactors:
        'Reshoring manufacturing and hazardous-job shortages drive automation, creating parallel need for technician upskilling.',
    },
    realWorldExamples: {
      summary: 'Engineers who brought programmable robotics into industry and exploration.',
      pioneers: [
        {
          name: 'Joseph Engelberger',
          profession: 'Engineer & Father of Industrial Robotics',
          country: 'United States',
          majorContributions: 'Co-developed Unimate, the world’s first programmable industrial robot arm installed on a General Motors die-casting line (1961), later pioneering hospital service robots.',
          achievements: 'Awarded the Japan Prize (1997) for foundational contributions to robotics.',
          whyWorkMatters: 'Transformed robotics from science fiction into practical machines protecting human workers from molten-metal hazards.',
          sourceNote: 'IEEE Robotics & Automation History archives.',
        },
        {
          name: 'Dr. Takeo Kanade',
          profession: 'Roboticist & Computer Vision Pioneer',
          country: 'Japan / United States',
          majorContributions: 'Invented the direct-drive robotic manipulator arm and pioneered optical-flow and stereo computer vision enabling autonomous machines to perceive 3D space.',
          achievements: 'Awarded the Kyoto Prize (2016) and Franklin Institute Bower Award.',
          whyWorkMatters: 'Gave robots both smooth mechanical actuation and visual spatial awareness.',
          sourceNote: 'Kyoto Prize & Carnegie Mellon Robotics Institute records.',
        },
      ],
    },
  },

  {
    id: 'brand-strategist',
    name: 'Consumer Research & Brand Strategist',
    clusterId: 'marketing-commerce',
    clusterName: 'Marketing, Brand & Digital Commerce',
    status: 'Current',
    shortIntro:
      'Uncovers genuine human needs through qualitative ethnography and market data—shaping honest brand positioning, product stories, and ethical public communications.',
    specialisationTags: ['Ethnographic Research', 'Brand Positioning', 'Consumer Insights', 'Product Narrative'],
    imageUrl: '/src/assets/images/ascend_editorial_atelier_1795001231748.jpg',
    imageCaption: 'Qualitative field research journals and brand architecture materials in a strategy studio.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'ESOMAR Market Research Standards', url: 'https://esomar.org/', organization: 'European Society for Opinion and Marketing Research' },
      { label: 'O*NET: Market Research Analysts', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Connects what an organisation makes with what real people genuinely value and trust.',
      definition:
        'A Consumer Research & Brand Strategist conducts field interviews, surveys, and cultural analysis to understand why people choose, trust, or reject products—translating those insights into clear positioning and communication strategy.',
      mainPurpose:
        'To ensure organisations solve real customer problems and communicate honestly without deceptive hype.',
      whyItExists:
        'Engineering teams often build features nobody asked for; rigorous consumer research prevents costly product mismatches and clarifies brand identity.',
      societalImportance:
        'Helps public-health campaigns (like vaccine trust or seat-belt adoption), ethical cooperatives, and sustainable products earn genuine public understanding.',
      whatMakesItInteresting:
        'Combines psychology, anthropology, business economics, and creative storytelling.',
    },
    responsibilities: {
      summary: 'Bridges qualitative human listening with quantitative market sizing and creative briefs.',
      mainDuties: [
        'Conduct in-depth user interviews, home visits, and unbiased survey studies across diverse regions.',
        'Analyse purchasing behaviour, cultural shifts, and competitive category gaps.',
        'Write concise creative strategy briefs guiding designers, copywriters, and product managers.',
        'Measure brand comprehension, trust, and campaign effectiveness ethically.',
      ],
      importantResponsibilities: [
        'Upholding ESOMAR research ethics—protecting respondent privacy and resisting manipulative "dark pattern" marketing.',
      ],
      problemsSolved: [
        'Discovering why rural families hesitate to adopt a clean cookstove or financial app despite subsidies.',
      ],
      decisionsMade: [
        'Defining target audience segments, core brand value proposition, and regional language tone.',
      ],
      collaborators: [
        'Editorial designers, copywriters, and product developers',
        'Data analysts, sales leads, and community outreach partners',
      ],
    },
    dailyWork: {
      summary: 'Alternates between listening to real people in the field and synthesising crisp strategy decks.',
      scheduleNote:
        'Research sprints involve travel and live interviews; strategy weeks focus on synthesis workshops.',
      morningActivities: [
        'Review survey cross-tabulations or transcribe recorded customer interviews from regional markets.',
      ],
      mainTasks: [
        'Distil dozens of messy qualitative observations into three clear human insights.',
        'Co-author launch positioning briefs with product and design leads.',
      ],
      meetingsAndFieldwork: [
        'Visit neighbourhood kirana shops, households, or clinics to observe real usage habits unobtrusively.',
      ],
      toolsUsedDaily: [
        'Survey platforms, qualitative coding boards, R/Excel analytics, and presentation suites.',
      ],
      communicationAndTeamwork:
        'Requires sharp synthesis—turning 60 pages of transcripts into a single illuminating truth.',
      endOfDayActivities: [
        'Refine discussion guides for next-day interviews and verify respondent consent logs.',
      ],
    },
    specialisations: {
      summary: 'Spans deep human ethnography, product positioning, and ethical social-impact campaigns.',
      items: [
        {
          id: 'qualitative-ethnography',
          title: 'Qualitative Ethnography & Cultural Insights',
          focus: 'In-home observation, focus moderation, and cultural semiotics across regional markets.',
          howItDiffers: 'Deeply anthropological—valuing unscripted observation over raw click metrics.',
          jobTitles: ['Consumer Insights Lead', 'Design Researcher'],
          opportunities: 'Research agencies, consumer goods firms, and UX research teams.',
        },
        {
          id: 'brand-architecture',
          title: 'Brand Architecture & Positioning Strategy',
          focus: 'Long-term brand identity, naming, portfolio clarity, and social-purpose messaging.',
          howItDiffers: 'Sits directly with founders and creative directors shaping multi-year identity.',
          jobTitles: ['Brand Strategist', 'Strategic Planner'],
          opportunities: 'Design consultancies, consumer brands, and non-profit advocacy organisations.',
        },
      ],
    },
    skills: {
      summary: 'Blends empathetic listening with analytical rigour and sharp writing.',
      technical: [
        { name: 'Unbiased Survey & Interview Design', priority: 'Essential', description: 'Avoiding leading questions that bias honest participant responses.' },
        { name: 'Market Segmentation & Quantitative Analysis', priority: 'Essential', description: 'Interpreting cross-tabs, cohort retention, and pricing elasticity.' },
        { name: 'Creative Brief Writing', priority: 'Essential', description: 'Inspiring designers and writers with crystal-clear strategic focus.' },
        { name: 'A/B Experimentation & Attribution Literacy', priority: 'Useful Additional', description: 'Understanding statistical significance in digital product tests.' },
      ],
      personalProfessional: [
        { name: 'Non-Judgmental Curiosity', priority: 'Essential', description: 'Listening deeply to people whose habits differ completely from your own.' },
        { name: 'Synthesis & Clarity', priority: 'Essential', description: 'Finding patterns across contradictory human opinions.' },
        { name: 'Ethical Integrity', priority: 'Essential', description: 'Advocating honest claims rather than misleading greenwashing.' },
      ],
    },
    schoolSubjects: {
      summary: 'Open to all streams; Economics, Psychology, Languages, and Mathematics blend powerfully.',
      subjects: [
        { subject: 'Psychology & Sociology', tier: 'Essential', whyItMatters: 'Explains cognitive biases, social norms, and decision habits.', howToStart: 'Notice and journal why your friends trust certain products or campaigns over others.' },
        { subject: 'Economics & Business Studies', tier: 'Recommended', whyItMatters: 'Clarifies pricing, competition, and consumer trade-offs.', howToStart: 'Compare how two competing local brands position themselves in price and quality.' },
        { subject: 'Statistics & Languages', tier: 'Recommended', whyItMatters: 'Ensures survey accuracy and persuasive storytelling.', howToStart: 'Run an anonymous, unbiased 5-question school survey and report what surprised you.' },
      ],
      indianCurriculumNotes:
        'Any Class 12 stream qualifies for BBA, B.Com., B.A. Economics/Psychology, or Mass Communication, often followed by specialised strategic-communication programmes (such as MICA Ahmedabad or IIMs).',
      internationalNotes:
        'IB Psychology, Business Management, and Economics prepare students strongly.',
    },
    education: {
      summary: 'Accessible from diverse humanities, commerce, design, and engineering degrees.',
      pathways: [
        { stage: 'Undergraduate', title: 'BBA / B.A. Economics / Psychology / Mass Communication / B.Des', requirement: 'Mandatory', duration: '3–4 years', details: 'Builds analytical, behavioural, and communication foundations.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'PGDM Communications (e.g., MICA) / MBA Marketing / M.Sc. Consumer Behaviour', requirement: 'Recommended Additional', duration: '1–2 years', details: 'Deepens qualitative ethnography, brand finance, and creative planning.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Journalists, UX researchers, and copywriters frequently transition smoothly into brand strategy via research portfolios.',
      researchAndAdvancedNote:
        'Behavioural economics research investigates sustainable consumption nudges and misinformation resilience.',
    },
    toolsAndTechnology: {
      summary: 'Combines human-centred interviewing kits with survey and analytics platforms.',
      items: [
        { name: 'Qualtrics / Typeform & Survey Cross-Tabulation', category: 'Digital Platforms', usedFor: 'Running statistically representative population studies.' },
        { name: 'Qualitative Coding Suites (Dovetail / Miro)', category: 'Computer Software', usedFor: 'Tagging interview themes and clustering customer pain points.' },
      ],
    },
    experience: {
      summary: 'Practice observing real behaviour and testing assumptions early.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Interview classmates about why they use or abandon a school club and design a clearer poster.' },
        { level: 'Undergraduate', category: 'Competitions', description: 'Compete in case-study and brand-strategy competitions or student research clubs.' },
        { level: 'Early Career', category: 'Internships & Apprenticeships', description: 'Intern at qualitative market-research agencies or design strategy studios.' },
      ],
    },
    qualifications: {
      summary: 'Unregulated by government licensing; professional research codes govern ethical standards.',
      items: [
        { title: 'Bachelor’s Degree + Research / Strategy Portfolio', tier: 'Mandatory', kind: 'Degree', country: 'Global', details: 'Standard expectation demonstrating analytical and qualitative thinking.' },
        { title: 'ESOMAR / MRSI Ethical Research Adherence', tier: 'Recommended Additional', kind: 'Certification', country: 'Global / India', details: 'Professional industry standards governing informed consent and data privacy in market research.' },
      ],
      countryDifferencesNote:
        'Degrees and insight portfolios transfer smoothly internationally, though cultural fluency in local languages is prized inside each market.',
    },
    careerProgression: {
      summary: 'Advances from research analyst to Head of Strategy or Chief Brand Officer.',
      stages: [
        { stage: 'Junior Research / Brand Analyst', typicalTimeframe: 'Years 1–2', focus: 'Moderating interviews, cleaning survey data, and auditing competitors.' },
        { stage: 'Brand Strategist / Insights Manager', typicalTimeframe: 'Years 3–6', focus: 'Leading positioning projects and guiding creative launches.' },
        { stage: 'Strategy Director / VP Brand & Consumer Insights', typicalTimeframe: 'Years 7+', focus: 'Shaping multi-product company direction and ethical brand stewardship.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding independent brand-strategy or ethnographic research consultancies.',
        research: 'Specialising in public-health behaviour change and social marketing.',
        specialisation: 'Mastering B2B technical positioning or regional Tier-2/3 consumer ethnography.',
        leadership: 'Advising social enterprises and cooperative craft brands.',
      },
    },
    workplaces: {
      summary: 'Collaborative creative agencies, corporate product teams, and field research sites.',
      workMode: 'Mixed',
      locations: ['Brand & Design Agencies', 'Consumer Goods & Tech Headquarters', 'Qualitative Research Studios', 'Field Neighbourhoods & Markets'],
      environmentDescription:
        'Lively whiteboard studios balanced by attentive listening inside real homes and shops.',
    },
    careerOpportunities: {
      summary: 'Broad opportunities across consumer products, technology UX research, and public-impact campaigns.',
      mainIndustries: ['Brand & Design Consultancies', 'Consumer Goods & Retail', 'Technology & UX Research', 'Social Impact & Public Health Campaigns'],
      privateSector: 'Product-led tech companies, sustainable consumer brands, and global research agencies (Kantar, Nielsen, Ipsos).',
      governmentSector: 'Public-awareness campaign strategy (sanitation, road safety, financial literacy).',
      researchOpportunities: 'Behavioural science and consumer-culture university groups.',
      internationalOpportunities: 'High transferability across global strategy hubs.',
      freelancingAndSelfEmployment: 'Independent brand-positioning sprints for early-stage ethical startups.',
      entrepreneurshipAndStartups: 'Helping artisan cooperatives build direct-to-consumer brands.',
      emergingDemand: 'Anti-greenwashing authenticity, regional-language digital commerce, and UX design research.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 7% employment growth for market research analysts (2024–2034). Consolidated India-wide strategist hiring statistics are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Bridges human psychology, editorial narrative, and public policy.',
      items: [
        {
          targetId: 'editorial-designer',
          name: 'Classical Typographer & Editorial Designer',
          clusterName: 'Arts, Audio/Video Technology & Communications',
          whyRelated: 'Translates brand strategy briefs into coherent visual systems, typography, and packaging.',
          sharedSkills: ['Storytelling Clarity', 'Cultural Literacy', 'Audience Empathy'],
          differencesInResponsibilities: 'Executes physical/digital visual typography rather than conducting consumer research.',
          transitionPathway: 'Design strategy and creative direction roles.',
        },
        {
          targetId: 'public-policy-analyst',
          name: 'Public Policy Analyst & Civil Administrator',
          clusterName: 'Government, Public Policy & Administration',
          whyRelated: 'Applies behavioural insights ("nudge" design) to encourage vaccination, savings, and water conservation.',
          sharedSkills: ['Field Interviewing', 'Survey Analysis', 'Behavioural Framing'],
          differencesInResponsibilities: 'Designs civic public programmes rather than commercial brands.',
          transitionPathway: 'Behavioural science fellowships in public policy.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Shifting away from invasive ad-tracking toward consent-based qualitative depth and ethical transparency.',
      disclaimer:
        'Established trends reflect privacy regulation shifts; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Privacy-First Research Methods', description: 'Strict data-protection laws are ending third-party tracking, making direct, consensual customer interviews vital again.' },
        { area: 'Anti-Greenwashing Verification', description: 'Regulators increasingly penalise vague sustainability claims lacking lifecycle proof.' },
      ],
      speculativePredictions: [
        { area: 'Synthetic Survey Simulations', description: 'Early experiments using simulated personas—though experts stress real human listening remains irreplaceable.' },
      ],
      environmentalAndSocialFactors:
        'Informed younger consumers demand verified supply-chain honesty rather than polished slogans.',
    },
    realWorldExamples: {
      summary: 'Thinkers who reshaped ethical consumer insight and social-impact communication.',
      pioneers: [
        {
          name: 'Rama Bijapurkar',
          profession: 'Market Strategy Consultant & Author',
          country: 'India',
          majorContributions: 'Pioneered rigorous empirical understanding of India’s diverse urban and rural consumer income pyramids, shaping market strategy for decades.',
          achievements: 'Taught at IIM Ahmedabad and authored landmark studies on consumer India.',
          whyWorkMatters: 'Replaced Western copy-paste marketing assumptions with grounded research on how Indian households actually earn, save, and choose.',
          sourceNote: 'IIM Ahmedabad & published bibliographic records.',
        },
        {
          name: 'David Ogilvy',
          profession: 'Advertising Strategist & Researcher',
          country: 'United Kingdom / United States',
          majorContributions: 'Transformed advertising from loud guesswork into research-backed, respectful long-form storytelling grounded in product facts.',
          achievements: 'Founded Ogilvy & Mather and authored classic texts on research-driven communication.',
          whyWorkMatters: 'Famous for reminding strategists that "the consumer isn’t a moron; she is your wife"—insisting on honesty and homework.',
          sourceNote: 'Advertising Hall of Fame & historical archives.',
        },
      ],
    },
  },

  {
    id: 'computational-biologist',
    name: 'Computational Biologist & Bioinformatician',
    clusterId: 'stem-research',
    clusterName: 'Science, Technology, Engineering & Mathematics',
    status: 'Emerging',
    shortIntro:
      'Applies algorithms, statistical models, and molecular physics to decode DNA sequences, predict 3D protein folding, and accelerate precision medicine and crop resilience.',
    specialisationTags: ['Genomics', 'Structural Proteomics', 'Single-Cell Analysis', 'Drug Discovery'],
    imageUrl: '/src/assets/images/career_clinical_medicine_1795001232913.jpg',
    imageCaption: 'Cellular microscopy paired with computational genomic imaging inside a research lab.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'National Centre for Biological Sciences (NCBS)', url: 'https://www.ncbs.res.in/', organization: 'TIFR / NCBS Bengaluru' },
      { label: 'EMBL-EBI Bioinformatics Portal', url: 'https://www.ebi.ac.uk/', organization: 'European Bioinformatics Institute' },
    ],
    introduction: {
      summary: 'Where living genomes meet high-performance computation.',
      definition:
        'A Computational Biologist & Bioinformatician writes algorithms and mathematical models to analyse massive biological datasets—from sequencing millions of DNA base pairs to simulating how proteins fold inside cells.',
      mainPurpose:
        'To uncover hidden causes of genetic disease, design targeted medicines, and identify drought-resilient genes in crops far faster than wet-lab trial and error alone.',
      whyItExists:
        'A single human genome contains ~3 billion base pairs; modern sequencers generate petabytes of data that cannot be read by human eyes without specialised software.',
      societalImportance:
        'Enabled rapid mRNA vaccine target design, rare genetic disorder diagnosis, cancer biomarker discovery, and biodiversity conservation.',
      whatMakesItInteresting:
        'You speak both languages—molecular biology and computer algorithms—collaborating daily with wet-lab experimentalists.',
    },
    responsibilities: {
      summary: 'Builds reproducible genomic pipelines, models biological networks, and validates discoveries with wet-lab teams.',
      mainDuties: [
        'Process raw DNA/RNA sequencing reads (FASTQ/BAM), filter noise, and align variants against reference genomes.',
        'Model 3D protein-ligand interactions to screen promising therapeutic molecules before lab synthesis.',
        'Analyse single-cell RNA expression matrices to map how healthy and diseased tissues differ.',
        'Maintain reproducible, peer-review-ready code pipelines and statistical checks.',
      ],
      importantResponsibilities: [
        'Preventing false biological conclusions from batch effects, contaminated samples, or overfitted statistical models.',
      ],
      problemsSolved: [
        'Pinpointing a single rare genetic mutation explaining an infant’s undiagnosed metabolic condition.',
      ],
      decisionsMade: [
        'Selecting statistical false-discovery thresholds, alignment algorithms, and candidate drug molecules for lab validation.',
      ],
      collaborators: [
        'Molecular biologists, geneticists, and wet-lab biochemists',
        'Clinical oncologists, pharmacologists, and high-performance computing engineers',
      ],
    },
    dailyWork: {
      summary: 'Predominantly dry-lab computational research anchored inside collaborative biology institutes.',
      scheduleNote:
        'Works mostly on Linux workstations and computing clusters, punctuated by wet-lab experimental review meetings.',
      morningActivities: [
        'Check overnight high-performance computing (HPC) genome alignment jobs for memory or convergence errors.',
      ],
      mainTasks: [
        'Write Python/R notebooks testing gene-expression differences across patient cohorts.',
        'Inspect 3D predicted protein binding pockets with structural chemists.',
      ],
      meetingsAndFieldwork: [
        'Journal club discussions dissecting newly published genomics preprints with labmates.',
      ],
      toolsUsedDaily: [
        'Linux, Python (Biopython, PyTorch), R/Bioconductor, Nextflow, AlphaFold/Rosetta, and Git.',
      ],
      communicationAndTeamwork:
        'Must explain statistical uncertainty clearly to wet-lab biologists who decide which expensive mouse or cell experiments to run next.',
      endOfDayActivities: [
        'Document reproducible pipeline parameters and archive figures for manuscript submission.',
      ],
    },
    specialisations: {
      summary: 'Rapidly expanding across genomics, structural biology, and systems medicine.',
      items: [
        {
          id: 'clinical-genomics',
          title: 'Clinical Genomics & Precision Oncology',
          focus: 'Analysing patient tumour DNA to match targeted therapies.',
          howItDiffers: 'Works close to hospital geneticists under strict clinical accuracy standards.',
          jobTitles: ['Clinical Bioinformatician', 'Genomic Data Scientist'],
          opportunities: 'Cancer centres, genetic diagnostic labs, and national genome missions (e.g., GenomeIndia).',
        },
        {
          id: 'structural-proteomics',
          title: 'Computational Structural Biology & Drug Design',
          focus: 'Molecular dynamics simulations and AI-guided protein structure prediction.',
          howItDiffers: 'Deeply grounded in biophysics, quantum chemistry, and 3D geometry.',
          jobTitles: ['Computational Chemist', 'Protein Engineer'],
          opportunities: 'Biotech therapeutics firms, structural institutes, and enzyme engineering startups.',
        },
      ],
    },
    skills: {
      summary: 'Requires genuine dual fluency—superficial biology OR superficial coding is not enough.',
      technical: [
        { name: 'Molecular Biology & Genetics', priority: 'Essential', description: 'Understanding transcription, translation, mutations, and evolutionary conservation.' },
        { name: 'Python, R/Bioconductor & Linux Bash', priority: 'Essential', description: 'Manipulating large genomic matrices cleanly on remote compute servers.' },
        { name: 'Biostatistics & Machine Learning', priority: 'Essential', description: 'Multiple-hypothesis correction, clustering, and avoiding data leakage.' },
        { name: 'Workflow Engines (Nextflow / Snakemake)', priority: 'Useful Additional', description: 'Making multi-step sequencing pipelines portable and reproducible.' },
      ],
      personalProfessional: [
        { name: 'Experimental Skepticism', priority: 'Essential', description: 'Checking whether a striking computer pattern is actually just lab sample contamination.' },
        { name: 'Interdisciplinary Patience', priority: 'Essential', description: 'Bridging biological terminology and computer science abstraction smoothly.' },
      ],
    },
    schoolSubjects: {
      summary: 'Biology, Mathematics, and Computer Science form the ideal triad; Chemistry supports biochemistry.',
      subjects: [
        { subject: 'Biology (Genetics & Cell Biology)', tier: 'Essential', whyItMatters: 'Explains DNA replication, gene regulation, and protein synthesis.', howToStart: 'Explore public NCBI or Protein Data Bank (RCSB PDB) 3D molecule viewers online.' },
        { subject: 'Mathematics & Statistics', tier: 'Essential', whyItMatters: 'Probability, matrices, and calculus underpin sequence alignment and molecular simulations.', howToStart: 'Learn how dynamic programming aligns two short DNA strings.' },
        { subject: 'Computer Science & Chemistry', tier: 'Recommended', whyItMatters: 'Builds Python fluency and structural chemical intuition.', howToStart: 'Try beginner bioinformatics string puzzles on Rosalind.info.' },
      ],
      indianCurriculumNotes:
        'PCMB (all four sciences) keeps maximum doors open; however, PCM students can take B.Tech Biotechnology/CS and learn biology, while PCB students can take B.Sc. Biology/Bioinformatics and learn Python.',
      internationalNotes:
        'IB/A-Level Biology + Mathematics + Chemistry or Computer Science.',
    },
    education: {
      summary: 'Usually combines an undergraduate science/engineering degree with specialised postgraduate research.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.Tech Biotechnology / Bioinformatics / CS OR B.Sc. Life Sciences / Mathematics', requirement: 'Mandatory', duration: '3–4 years', details: 'Offered at IITs, IISERs, NITs, Anna University, and global universities.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'M.Sc. / M.Tech Bioinformatics & Computational Biology', requirement: 'Recommended Additional', duration: '2 years', details: 'Crucial for mastering advanced statistical genomics and pipeline design.', countryContext: 'India (e.g., IBAB Bengaluru, JNU, IITs) / Global' },
        { stage: 'Research Track', title: 'Ph.D. in Computational Biology', requirement: 'Optional', duration: '4–6 years', details: 'Essential for leading academic research labs or principal biotech R&D discovery.', countryContext: 'Global' },
      ],
      alternativeAndVocationalNote:
        'Strong software engineers frequently enter computational biology teams as Research Software Engineers without a biology Ph.D.',
      researchAndAdvancedNote:
        'Frontier research integrates spatial transcriptomics, de novo enzyme design, and microbial ecology.',
    },
    toolsAndTechnology: {
      summary: 'Powered by cloud/HPC clusters and open scientific bioinformatics libraries.',
      items: [
        { name: 'Python (Biopython, Scanpy) & R/Bioconductor', category: 'Computer Software', usedFor: 'Single-cell transcriptomics and differential gene expression.' },
        { name: 'RCSB PDB, NCBI GenBank & AlphaFold DB', category: 'Digital Platforms', usedFor: 'Querying global verified DNA sequences and 3D protein structures.' },
        { name: 'Nextflow & Docker/Singularity Containers', category: 'Industry Technologies', usedFor: 'Ensuring genomic analyses produce identical results across research labs.' },
        { name: 'Nanopore Long-Read Real-Time Sequencers', category: 'Emerging Tools', usedFor: 'Portable field DNA sequencing during biodiversity or pathogen studies.' },
      ],
    },
    experience: {
      summary: 'Open-access biological databases let curious students practice real research early.',
      stages: [
        { level: 'High School', category: 'Beginner Activities', description: 'Solve introductory DNA-matching algorithm problems on Rosalind or inspect haemoglobin in 3D on RCSB PDB.' },
        { level: 'Undergraduate', category: 'Research & Professional Exposure', description: 'Apply for summer research fellowships (IASc-INSA-NASI SRFP in India) at NCBS, CCMB, IGIB, or IISER labs.' },
      ],
    },
    qualifications: {
      summary: 'Academic degrees and peer-reviewed research track records govern careers; clinical diagnostic sign-off may require medical-lab oversight.',
      items: [
        { title: 'Recognised Bachelor’s + Master’s / Ph.D. in Bioinformatics or Related Science', tier: 'Mandatory', kind: 'Degree', country: 'Global', details: 'Standard research and biotech entry qualification.' },
        { title: 'CSIR-UGC NET / GATE Life Sciences or Biotechnology', tier: 'Optional', kind: 'Government Examination', country: 'India', details: 'Qualifies candidates for funded Ph.D. fellowships (JRF) and M.Tech seats in India.' },
      ],
      countryDifferencesNote:
        'Research roles are globally uniform; clinical genomic reporting inside hospital pathology labs is subject to regional clinical laboratory accreditation.',
    },
    careerProgression: {
      summary: 'Advances across academic investigator paths and biotech R&D leadership.',
      stages: [
        { stage: 'Bioinformatics Analyst / Junior Research Fellow', typicalTimeframe: 'Years 1–3', focus: 'Running established sequencing pipelines and quality-control plots.' },
        { stage: 'Computational Biologist / Scientist', typicalTimeframe: 'Years 4–7', focus: 'Designing novel statistical methods and guiding experimental study designs.' },
        { stage: 'Principal Investigator / Director of Computational Sciences', typicalTimeframe: 'Years 8+', focus: 'Leading multi-disciplinary drug discovery or national genomics consortia.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Building protein-engineering or rare-disease diagnostic startups.',
        research: 'Leading autonomous research groups at national institutes (NCBS, EMBL, Broad).',
        specialisation: 'Focusing deeply on molecular dynamics or agricultural crop pan-genomics.',
        leadership: 'Directing national biobank data standards.',
      },
    },
    workplaces: {
      summary: 'Dry-lab offices embedded inside wet-lab biology institutes and biotech hubs.',
      workMode: 'Mixed',
      locations: ['Academic Biology Research Institutes', 'Biotech & Pharma R&D Labs', 'Clinical Genomics Diagnostic Centres', 'Hybrid Computing Workspaces'],
      environmentDescription:
        'Quiet, intellectually vibrant research labs where computer scientists sit beside molecular biologists.',
    },
    careerOpportunities: {
      summary: 'Rapidly expanding emerging field across precision oncology, agriculture, and industrial bio-manufacturing.',
      mainIndustries: ['Biotechnology & Therapeutics', 'Clinical Genetic Diagnostics', 'Agricultural Genomics', 'Academic Life Sciences', 'Industrial Enzyme Engineering'],
      privateSector: 'Biopharma R&D, genomics sequencing companies, and computational drug discovery startups.',
      governmentSector: 'DBT/CSIR institutes (IGIB, CCMB, NCBS, NIBMG) and ICMR genomics programmes.',
      researchOpportunities: 'Strong international Ph.D. and postdoctoral funding.',
      internationalOpportunities: 'High global mobility across Bengaluru, Boston, Cambridge (UK), Basel, and Singapore.',
      freelancingAndSelfEmployment: 'Specialised bioinformatics pipeline consulting for small academic labs.',
      entrepreneurshipAndStartups: 'Plastic-degrading enzyme design, sustainable bio-materials, and precision diagnostics.',
      emergingDemand: 'Integration of AI structural biology with high-throughput robotic wet-lab synthesis.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics classifies bioinformatics under biological scientists/data scientists (data scientists projected 34% growth 2024–2034). Dedicated India-only annual counts are not centrally published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Connects genomics, population health, and precision computing.',
      items: [
        {
          targetId: 'epidemiologist',
          name: 'Biomedical Epidemiologist',
          clusterName: 'Health Science & Medicine',
          whyRelated: 'Uses viral genomic surveillance built by bioinformaticians to track real-world disease waves.',
          sharedSkills: ['Biostatistics', 'R/Python Analysis', 'Pathogen Biology'],
          differencesInResponsibilities: 'Conducts human population field investigations rather than molecular algorithms.',
          transitionPathway: 'MPH or infectious disease genomics fellowships.',
        },
        {
          targetId: 'agronomist',
          name: 'Agronomist & Sustainable Crop Scientist',
          clusterName: 'Agriculture, Food & Natural Resources',
          whyRelated: 'Applies crop genome discoveries to breed drought- and salinity-tolerant staple foods.',
          sharedSkills: ['Genetics', 'Experimental Design', 'Data Modeling'],
          differencesInResponsibilities: 'Tests living plants in open field plots rather than server clusters.',
          transitionPathway: 'Plant bioinformatics or molecular breeding programmes.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Transforming biology from descriptive observation into programmable molecular engineering.',
      disclaimer:
        'Established developments reflect published Nobel-winning and clinical breakthroughs; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'AI Protein Structure & De Novo Binder Design', description: 'Predicting 3D protein shapes from amino-acid sequences routinely in minutes rather than years of X-ray crystallography.' },
        { area: 'National Population Biobanks', description: 'Projects like GenomeIndia mapping regional genetic diversity to avoid medicine bias toward European-only datasets.' },
      ],
      speculativePredictions: [
        { area: 'Virtual Whole-Cell Simulators', description: 'Multi-scale computer models potentially predicting how an entire living cell responds to a candidate drug before lab tests.' },
      ],
      environmentalAndSocialFactors:
        'Genetic privacy, equitable global access to genomic therapies, and biosecurity oversight remain critical ethical priorities.',
    },
    realWorldExamples: {
      summary: 'Pioneers whose structural and computational breakthroughs unlocked molecular biology.',
      pioneers: [
        {
          name: 'Dr. G. N. Ramachandran',
          profession: 'Biophysicist & Structural Biologist',
          country: 'India',
          majorContributions: 'Formulated the Ramachandran Plot (1963) describing mathematically allowed protein backbone torsion angles, and discovered the triple-helical structure of collagen.',
          achievements: 'Fellow of the Royal Society; foundational figure in Indian molecular biophysics at Madras and IISc.',
          whyWorkMatters: 'Every computational protein structure validation tool in the world still relies directly on the Ramachandran Plot.',
          sourceNote: 'Indian Academy of Sciences & Royal Society archives.',
        },
        {
          name: 'Dr. Margaret Oakley Dayhoff',
          profession: 'Physical Chemist & Pioneer of Bioinformatics',
          country: 'United States',
          majorContributions: 'Created the first computerised protein sequence database (Atlas of Protein Sequence and Structure, 1965) and invented the single-letter amino-acid code.',
          achievements: 'Widely recognised as the founder of computational bioinformatics.',
          whyWorkMatters: 'Built the data structures and evolutionary substitution matrices (PAM) that underpin modern sequence alignment.',
          sourceNote: 'National Library of Medicine & ISCB historical records.',
        },
      ],
    },
  },

  {
    id: 'transit-planner',
    name: 'Urban Transit & Rail Systems Planner',
    clusterId: 'transportation-logistics',
    clusterName: 'Transportation, Distribution & Logistics',
    status: 'Current',
    shortIntro:
      'Plans metro rail corridors, bus rapid transit, walkable station precincts, and regional rail networks that move millions safely with clean, low-carbon efficiency.',
    specialisationTags: ['Metro Rail Planning', 'Multimodal Hubs', 'Demand Forecasting', 'Active Mobility'],
    imageUrl: '/src/assets/images/career_sustainable_architecture_1795001233715.jpg',
    imageCaption: 'Metropolitan transit corridor mapping and urban site integration plans in a planning studio.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'Institute of Urban Transport (India)', url: 'https://www.iutindia.org/', organization: 'Ministry of Housing & Urban Affairs, India' },
      { label: 'UITP Public Transport Knowledge Base', url: 'https://www.uitp.org/', organization: 'International Association of Public Transport' },
    ],
    introduction: {
      summary: 'Shapes how cities breathe, connect, and move people fairly without gridlock.',
      definition:
        'An Urban Transit & Rail Systems Planner analyses commuter travel patterns, land use, civil alignment constraints, and fleet scheduling to design integrated metro, rail, bus, cycling, and pedestrian networks.',
      mainPurpose:
        'To give every resident—whether student, elder, or worker—safe, affordable, reliable mobility without forcing private car ownership.',
      whyItExists:
        'Widening roads alone quickly fills back up with traffic ("induced demand"); high-capacity rail and priority bus systems carry tens of thousands more people per hour per lane.',
      societalImportance:
        'Cuts urban air pollution, saves commuters hours weekly, lowers road fatalities, and connects lower-income neighbourhoods to schools and jobs.',
      whatMakesItInteresting:
        'Combines civil engineering geometry, human geography, economic cost-benefit modeling, and civic public hearings.',
    },
    responsibilities: {
      summary: 'Designs corridor alignments, ridership forecasts, station interchanges, and timetable coordination.',
      mainDuties: [
        'Model origin-destination commuter flows using household travel surveys, farecard taps, and census data.',
        'Evaluate elevated, underground, and at-grade rail or BRT alignments against geological, heritage, and cost constraints.',
        'Design seamless "last-mile" transfers between metro stations, city buses, feeder autos, footpaths, and cycle tracks.',
        'Optimise train headways, depot stabling, and signalling capacity.',
      ],
      importantResponsibilities: [
        'Ensuring universal step-free accessibility (tactile paving, lifts, ramps) and safe pedestrian crossings around every station.',
      ],
      problemsSolved: [
        'Fixing bottlenecked railway concourses or bus terminals where thousands transfer simultaneously during peak hours.',
      ],
      decisionsMade: [
        'Station spacing distances, park-and-ride vs walkable transit-oriented zoning, and feeder bus frequency.',
      ],
      collaborators: [
        'Civil, geotechnical, and electrical traction engineers',
        'Urban architects, municipal commissioners, and citizen commuter groups',
      ],
    },
    dailyWork: {
      summary: 'Moves between GIS/transport simulation desks and lively street-level corridor walks.',
      scheduleNote:
        'Office modeling days alternate with peak-hour field observations watching how real crowds navigate junctions.',
      morningActivities: [
        'Observe morning rush-hour boarding queues and pedestrian bottlenecks at a busy interchange station.',
      ],
      mainTasks: [
        'Run four-step travel demand simulations in VISUM/EMME testing a proposed metro extension.',
        'Coordinate station entry placements on CAD site plans with urban architects.',
      ],
      meetingsAndFieldwork: [
        'Present corridor options at municipal public consultations to gather feedback from local shopkeepers and commuters.',
      ],
      toolsUsedDaily: [
        'QGIS, PTV Visum/Vissim, AutoCAD, GTFS transit feed validators, and Python spatial libraries.',
      ],
      communicationAndTeamwork:
        'Requires translating technical capacity numbers ("passengers per hour per direction") into human travel-time stories.',
      endOfDayActivities: [
        'Update alignment cost-ridership matrices and review Environmental Impact Assessment notes.',
      ],
    },
    specialisations: {
      summary: 'Spans strategic regional corridors, micro-level station pedestrian design, and freight rail.',
      items: [
        {
          id: 'metro-network',
          title: 'Metro & Regional Rail Network Planning',
          focus: 'Corridor feasibility, Detailed Project Reports (DPRs), and multi-line interchange geometry.',
          howItDiffers: 'High capital infrastructure horizon spanning 5-to-30-year city growth.',
          jobTitles: ['Transit Systems Planner', 'Rail Corridor Specialist'],
          opportunities: 'Metro rail corporations (DMRC, BMRCL, etc.), engineering consultancies, and multilateral banks.',
        },
        {
          id: 'active-firstlastmile',
          title: 'Active Mobility & Station Access Planning',
          focus: 'Safe footpaths, protected cycle networks, bus priority lanes, and Transit-Oriented Development (TOD).',
          howItDiffers: 'Street-level human-scale geometry focused on safety and equitable access.',
          jobTitles: ['Urban Mobility Planner', 'Non-Motorised Transport Specialist'],
          opportunities: 'Municipal smart-city cells, ITDP-style mobility non-profits, and urban design studios.',
        },
      ],
    },
    skills: {
      summary: 'Integrates transport modeling math with urban spatial sensitivity.',
      technical: [
        { name: 'Travel Demand & Traffic Micro-Simulation', priority: 'Essential', description: 'Building origin-destination matrices, mode-choice models, and pedestrian flow simulations.' },
        { name: 'GIS & CAD Spatial Analysis', priority: 'Essential', description: 'Overlaying population density, flood plains, and right-of-way street widths.' },
        { name: 'Transit Operations & Scheduling Math', priority: 'Essential', description: 'Calculating headway capacity, fleet turnaround, and signalling limits.' },
        { name: 'GTFS Open Transit Data & Python', priority: 'Useful Additional', description: 'Analysing bus/rail schedule reliability and accessibility isochrones.' },
      ],
      personalProfessional: [
        { name: 'Civic Empathy', priority: 'Essential', description: 'Designing streets for children, elders, and wheelchair users—not just fast cars.' },
        { name: 'Public Consultation Diplomacy', priority: 'Essential', description: 'Addressing neighbourhood construction concerns constructively.' },
        { name: 'Systems Patience', priority: 'Essential', description: 'Coordinating decade-long infrastructure across changing municipal leadership.' },
      ],
    },
    schoolSubjects: {
      summary: 'Mathematics, Geography, and Physics build a clear entry path.',
      subjects: [
        { subject: 'Mathematics & Statistics', tier: 'Essential', whyItMatters: 'Required for civil/planning engineering and travel-demand modeling.', howToStart: 'Time how long buses or metro trains take at different hours and graph peak congestion.' },
        { subject: 'Geography', tier: 'Recommended', whyItMatters: 'Explains urban growth patterns, land contours, and population distribution.', howToStart: 'Sketch a map of your neighbourhood showing where sidewalks break or buses lack shelters.' },
        { subject: 'Physics', tier: 'Essential', whyItMatters: 'Needed for civil/transport engineering entry; explains braking distances, gradients, and energy.', howToStart: 'Calculate how many cars equal the passenger capacity of a single 6-coach metro train.' },
      ],
      indianCurriculumNotes:
        'PCM at 10+2 leads to B.Tech Civil Engineering or Bachelor of Planning (B.Plan via JEE Main Paper 2), followed by M.Plan / M.Tech Transportation Engineering.',
      internationalNotes:
        'A-Levels/IB in Geography, Mathematics, and Physics lead into Civil Engineering or Urban & Regional Planning degrees.',
    },
    education: {
      summary: 'Typically combines Civil Engineering, Architecture, or Urban Planning with postgraduate transport specialisation.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.Tech Civil Engineering / B.Plan / B.Arch', requirement: 'Mandatory', duration: '4–5 years', details: 'Establishes infrastructure, surveying, and spatial design grounding.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'M.Tech Transportation Engineering / M.Plan (Transport & Mobility)', requirement: 'Recommended Additional', duration: '2 years', details: 'Offered by IITs, School of Planning and Architecture (SPA), CEPT Ahmedabad, and global planning schools.', countryContext: 'India / Global' },
      ],
      alternativeAndVocationalNote:
        'Transit schedule analysts and GIS cartographers often enter with geography or data science degrees.',
      researchAndAdvancedNote:
        'Doctoral research explores multimodal fare integration, heat-shaded walkability, and freight electrification.',
    },
    toolsAndTechnology: {
      summary: 'Blends geospatial mapping, crowd simulation, and open transit standards.',
      items: [
        { name: 'QGIS & ArcGIS', category: 'Computer Software', usedFor: 'Mapping catchment areas within a 10-minute walk of stations.' },
        { name: 'PTV Visum / Vissim & AnyLogic', category: 'Industry Technologies', usedFor: 'Simulating intersection delays, train headways, and emergency station evacuations.' },
        { name: 'GTFS (General Transit Feed Specification)', category: 'Digital Platforms', usedFor: 'Publishing standardised live schedules across public transit apps.' },
      ],
    },
    experience: {
      summary: 'Observe real streets, map transit gaps, and intern with municipal or metro bodies.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Conduct a safe walking audit around your school gate noting missing zebra crossings or shade.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Intern at Metro Rail Corporations, Smart City SPVs, CEPT/IIT transport labs, or sustainable mobility NGOs.' },
      ],
    },
    qualifications: {
      summary: 'Planning and engineering bodies govern professional credentials in several jurisdictions.',
      items: [
        { title: 'Accredited B.Plan / B.Tech Civil + M.Plan / M.Tech', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: 'Standard qualification for urban transport planners.' },
        { title: 'ITPI Membership (Institute of Town Planners, India) / AICP (USA) / RTPI (UK)', tier: 'Recommended Additional', kind: 'Certification', country: 'India / USA / UK', details: 'Recognised professional planning body credentials.' },
      ],
      countryDifferencesNote:
        'Structural railway bridge/tunnel sign-off requires licensed Civil/Structural Engineers, whereas network corridor and land-use policy relies on certified Urban/Transport Planners.',
    },
    careerProgression: {
      summary: 'Grows from data modeler to directing city-wide mobility authorities.',
      stages: [
        { stage: 'Junior Transport Analyst', typicalTimeframe: 'Years 1–2', focus: 'Running traffic counts, GIS maps, and demand-model inputs.' },
        { stage: 'Transport / Transit Planner', typicalTimeframe: 'Years 3–6', focus: 'Drafting feasibility studies, bus network redesigns, and station access plans.' },
        { stage: 'Principal Mobility Strategist / Chief Project Planner', typicalTimeframe: 'Years 7+', focus: 'Advising mayors, state metro boards, and national rail corridors.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding open-data transit routing platforms or electric feeder-mobility services.',
        research: 'Advancing equitable public transport fare policy and pedestrian safety engineering.',
        specialisation: 'Mastering railway timetable optimisation or airport-rail intermodal terminals.',
        leadership: 'Heading Unified Metropolitan Transport Authorities (UMTAs).',
      },
    },
    workplaces: {
      summary: 'Blends engineering offices, civic municipal halls, and active transit corridors.',
      workMode: 'Mixed',
      locations: ['Metro Rail & Transit Authorities', 'Urban Design & Engineering Consultancies', 'Municipal Planning Departments', 'Field Stations & Street Corridors'],
      environmentDescription:
        'Collaborative mapping studios balanced by regular street-level site surveys across busy neighbourhoods.',
    },
    careerOpportunities: {
      summary: 'Strong expansion driven by rapid metro-rail and clean city-bus investments across India and developing cities.',
      mainIndustries: ['Metro & High-Speed Rail Corporations', 'Municipal Transit Agencies', 'Infrastructure Engineering Consultancies', 'Multilateral Development Banks', 'Mobility Think Tanks'],
      privateSector: 'Global infrastructure consultancies (RITES, Systra, AECOM, Arup) and electric-bus fleet planners.',
      governmentSector: 'Metro Rail SPVs, Indian Railways planning wings, UMTA bodies, and state town-planning departments.',
      researchOpportunities: 'IIT/CEPT transport centres and WRI/ITDP sustainable cities programmes.',
      internationalOpportunities: 'High global mobility across Europe, Singapore, Middle East, and expanding Asian/African metro systems.',
      freelancingAndSelfEmployment: 'Independent mobility audit and road-safety consulting.',
      entrepreneurshipAndStartups: 'Live bus-tracking analytics and shared micro-mobility integration.',
      emergingDemand: 'Electric bus depot grid planning and extreme-heat shaded pedestrian corridors.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 3% growth for urban and regional planners (2024–2034). India has expanded metro rail to over 20 cities, though consolidated planner-only annual hiring counts are not published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'Adjacent spatial, energy, and aerospace engineering paths.',
      items: [
        {
          targetId: 'sustainable-architect',
          name: 'Sustainable Architect',
          clusterName: 'Architecture & Construction',
          whyRelated: 'Designs the physical metro stations, civic plazas, and dense walkable neighbourhoods along rail lines.',
          sharedSkills: ['Urban Masterplanning', 'CAD/GIS', 'Human-Scale Accessibility'],
          differencesInResponsibilities: 'Focuses on building structures and materials rather than network ridership.',
          transitionPathway: 'Master’s in Urban Design or Transport Planning.',
        },
        {
          targetId: 'renewable-energy-engineer',
          name: 'Grid-Scale Renewable Energy Engineer',
          clusterName: 'Energy, Climate & Sustainability',
          whyRelated: 'Powers electrified metro trains and city electric-bus depots with solar and battery microgrids.',
          sharedSkills: ['Infrastructure Load Modeling', 'Systems Reliability', 'Decarbonisation'],
          differencesInResponsibilities: 'Designs substations and power electronics rather than passenger transit corridors.',
          transitionPathway: 'Electric mobility power-grid integration roles.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Integrating multimodal unified ticketing, electric bus corridors, and pedestrian-first cities.',
      disclaimer:
        'Established trends reflect active municipal mobility missions; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Unified National Mobility Cards & Open Ticketing', description: 'Enabling one fare pass across metro trains, feeder buses, and regional rapid rail.' },
        { area: 'Transit-Oriented Development (TOD)', description: 'Building dense schools, homes, and parks directly around rail stations to cut commute distances.' },
      ],
      speculativePredictions: [
        { area: 'Dynamic Demand-Responsive Feeder Shuttles', description: 'Small electric minibuses adjusting routes cleanly around suburban rail arrivals.' },
      ],
      environmentalAndSocialFactors:
        'Air-quality emergencies and heatwaves make shaded walkways and clean electrified public transit urgent public-health priorities.',
    },
    realWorldExamples: {
      summary: 'Engineers and urbanists who built transformative public transit systems.',
      pioneers: [
        {
          name: 'Dr. E. Sreedharan',
          profession: 'Civil Engineer & Metro Transit Builder',
          country: 'India',
          majorContributions: 'Led the engineering and on-schedule delivery of the Konkan Railway through formidable Western Ghats terrain and transformed urban mobility as Managing Director of the Delhi Metro Rail Corporation (DMRC).',
          achievements: 'Awarded the Padma Shri (2001) and Padma Vibhushan (2008).',
          whyWorkMatters: 'Set an enduring benchmark for punctuality, transparency, and world-class public transit engineering in India.',
          sourceNote: 'Government of India Padma Awards & DMRC archives.',
        },
        {
          name: 'Jaime Lerner',
          profession: 'Architect, Urban Planner & Former Mayor',
          country: 'Brazil',
          majorContributions: 'Pioneered Curitiba’s Bus Rapid Transit (BRT) system in the 1970s—dedicated bus lanes, pre-boarded tube stations, and integrated land zoning delivering metro-like capacity at a fraction of underground cost.',
          achievements: 'Recipient of the UN Environment Award and Prince Claus Award.',
          whyWorkMatters: 'Inspired BRT corridors in over 170 cities worldwide, including Ahmedabad and Bogotá.',
          sourceNote: 'UN-Habitat & World Resources Institute archives.',
        },
      ],
    },
  },

  {
    id: 'renewable-energy-engineer',
    name: 'Grid-Scale Renewable Energy Engineer',
    clusterId: 'energy-climate',
    clusterName: 'Energy, Climate & Sustainability',
    status: 'Emerging',
    shortIntro:
      'Designs utility-scale solar, wind, pumped-hydro, and battery-storage systems—and upgrades high-voltage power grids to deliver clean, stable electricity reliably.',
    specialisationTags: ['Grid Integration', 'Battery Storage', 'Solar & Wind Design', 'Power Electronics'],
    imageUrl: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    imageCaption: 'High-precision electrical hardware testing and energy systems schematics.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'National Institute of Solar Energy (NISE)', url: 'https://nise.res.in/', organization: 'Ministry of New & Renewable Energy, India' },
      { label: 'International Energy Agency (IEA) Grids', url: 'https://www.iea.org/', organization: 'IEA' },
    ],
    introduction: {
      summary: 'Rebuilds the electrical backbone of civilisation for a zero-carbon century.',
      definition:
        'A Grid-Scale Renewable Energy Engineer designs photovoltaic parks, offshore/onshore wind farms, grid-scale battery inverters, and transmission substations so variable sun and wind power keeps lights, hospitals, and trains running without blackouts.',
      mainPurpose:
        'To replace fossil-fuel coal and gas generation with affordable, reliable, low-carbon electricity.',
      whyItExists:
        'Connecting intermittent solar and wind to grids built a century ago for spinning steam turbines creates complex frequency and voltage stability challenges.',
      societalImportance:
        'Directly slows global warming, cleans urban air from coal smoke, and brings resilient solar microgrids to remote villages.',
      whatMakesItInteresting:
        'Spans huge physical infrastructure—towering wind turbines and desert solar parks—down to millisecond power-electronics firmware.',
    },
    responsibilities: {
      summary: 'Combines site resource assessment, electrical substation design, and grid-stability simulation.',
      mainDuties: [
        'Model solar irradiance or wind-shear resource data to optimise array spacing and annual energy yield.',
        'Design high-voltage inverters, transformers, battery energy storage systems (BESS), and protection relays.',
        'Run load-flow and fault-ride-through simulations ensuring plants stay online during grid disturbances.',
        'Coordinate grid interconnection permits and commissioning tests with state load-dispatch centres.',
      ],
      importantResponsibilities: [
        'Preventing high-voltage arc hazards, battery thermal runaway, and cascading grid frequency trips.',
      ],
      problemsSolved: [
        'Pairing solar farms with battery inverters ("grid-forming") to provide synthetic inertia when clouds pass suddenly.',
      ],
      decisionsMade: [
        'DC-to-AC sizing ratios, storage duration hours, underground vs overhead cable routing, and agrivoltaic spacing.',
      ],
      collaborators: [
        'Grid dispatch operators, geotechnical/civil engineers, and environmental ecologists',
        'Power-electronics manufacturers and rural community landowners',
      ],
    },
    dailyWork: {
      summary: 'Splits time between power-systems simulation desks and commissioning visits at substations or renewable parks.',
      scheduleNote:
        'Design phases are engineering-office focused; plant energisation weeks involve field testing with protective gear.',
      morningActivities: [
        'Review SCADA telemetry from operating solar/wind sites checking inverter efficiency or tracker faults.',
      ],
      mainTasks: [
        'Simulate short-circuit protection settings in ETAP or PSS/E.',
        'Optimise hybrid wind-solar-battery dispatch schedules against evening peak demand curves.',
      ],
      meetingsAndFieldwork: [
        'Inspect transformer oil gauges, combiner boxes, and earthing grids on site.',
      ],
      toolsUsedDaily: [
        'PVsyst, ETAP / DIgSILENT PowerFactory, AutoCAD Electrical, Python, and SCADA telemetry.',
      ],
      communicationAndTeamwork:
        'Bridges utility grid regulators, site civil contractors, and financial analysts.',
      endOfDayActivities: [
        'Submit interconnection compliance reports and log substation punch-list sign-offs.',
      ],
    },
    specialisations: {
      summary: 'Branches across generation plant engineering, battery storage, and transmission grid stability.',
      items: [
        {
          id: 'grid-integration-bess',
          title: 'Grid Integration & Battery Storage Systems (BESS)',
          focus: 'Grid-forming inverters, pumped hydro, and transmission congestion management.',
          howItDiffers: 'Deeply rooted in power-systems stability and high-voltage protection.',
          jobTitles: ['Power Systems Engineer', 'BESS Grid Architect'],
          opportunities: 'Transmission utilities, renewable IPPs, and grid software firms.',
        },
        {
          id: 'offshore-wind-solar',
          title: 'Utility Solar, Agrivoltaics & Wind Resource Engineering',
          focus: 'Site micro-siting, bifacial PV tracking, and dual-use farming under raised solar panels.',
          howItDiffers: 'Combines meteorology, structural foundations, and yield economics.',
          jobTitles: ['Renewable Resource Engineer', 'PV Plant Designer'],
          opportunities: 'Clean-energy developers, engineering consultancies, and international EPCs.',
        },
      ],
    },
    skills: {
      summary: 'Strong electrical power fundamentals paired with climate-resource analytics.',
      technical: [
        { name: 'Power Systems Analysis & High-Voltage Protection', priority: 'Essential', description: 'Understanding AC/DC conversion, reactive power, harmonics, and relay coordination.' },
        { name: 'Yield & Grid Modeling (PVsyst, PowerFactory, ETAP)', priority: 'Essential', description: 'Simulating plant losses and interconnection stability.' },
        { name: 'Electrical CAD & Codes (IEC / CEA / IEEE)', priority: 'Essential', description: 'Drafting compliant single-line diagrams and earthing safety layouts.' },
        { name: 'Python / Weather Forecasting Analytics', priority: 'Useful Additional', description: 'Predicting next-day cloud/wind ramp events for grid dispatchers.' },
      ],
      personalProfessional: [
        { name: 'Zero-Compromise Safety Discipline', priority: 'Essential', description: 'Following Lockout-Tagout (LOTO) strictly around live kilovolt equipment.' },
        { name: 'Systems Realism', priority: 'Essential', description: 'Designing for dust storms, coastal salt corrosion, and extreme heatwaves.' },
      ],
    },
    schoolSubjects: {
      summary: 'Physics and Mathematics are mandatory for electrical/energy engineering entry.',
      subjects: [
        { subject: 'Physics (Electricity, Magnetism & Thermodynamics)', tier: 'Essential', whyItMatters: 'Governs generators, semiconductors in solar cells, and power transmission losses.', howToStart: 'Measure how a small solar panel’s voltage and current change with tilt angle and shade.' },
        { subject: 'Mathematics (Calculus & Trigonometry)', tier: 'Essential', whyItMatters: 'AC phasor analysis, solar geometry, and power-flow equations rely directly on it.', howToStart: 'Explore how solar sun angles shift between summer and winter solstices.' },
        { subject: 'Chemistry & Environmental Science', tier: 'Recommended', whyItMatters: 'Explains lithium/sodium-ion battery electrochemistry and lifecycle material recycling.', howToStart: 'Compare energy density and safety trade-offs across battery chemistries.' },
      ],
      indianCurriculumNotes:
        'PCM in Classes 11–12 leads to B.Tech Electrical, Power, Mechanical, or Renewable Energy Engineering (plus postgraduate M.Tech Energy Systems at IITs or NITs).',
      internationalNotes:
        'A-Levels/IB in Mathematics, Physics, and Chemistry lead into Electrical/Energy Engineering degrees.',
    },
    education: {
      summary: 'Entered primarily via Electrical, Mechanical, or dedicated Energy Engineering degrees.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.Tech / B.E. Electrical Engineering, Power Engineering, or Energy Science', requirement: 'Mandatory', duration: '4 years', details: 'Core path covering machines, power electronics, and high-voltage grids.', countryContext: 'India / Global' },
        { stage: 'Postgraduate Specialisation', title: 'M.Tech / M.S. Renewable Energy / Power Systems / Energy Storage', requirement: 'Recommended Additional', duration: '2 years', details: 'Deepens grid-forming inverter modeling, offshore wind, and hydrogen electrochemistry.', countryContext: 'India (IIT Bombay DESE, IIT Delhi, TERI) / Global' },
        { stage: 'Vocational Technician Route', title: 'ITI / Polytechnic Diploma + Suryamitra Solar PV Skill Programme', requirement: 'Optional', duration: '6 months – 3 years', details: 'Trains certified solar PV installation and substation maintenance technicians.', countryContext: 'India (NISE)' },
      ],
      alternativeAndVocationalNote:
        'India’s NISE Suryamitra programme and regional polytechnics provide fast practical entry into solar field installation and O&M roles.',
      researchAndAdvancedNote:
        'Active research explores perovskite-silicon tandem cells, sodium-ion stationary storage, and green hydrogen electrolysers.',
    },
    toolsAndTechnology: {
      summary: 'Spans field power-quality analysers to grid-scale simulation platforms.',
      items: [
        { name: 'Thermal Drones & I-V Curve Tracers', category: 'Professional Equipment', usedFor: 'Spotting overheated defective solar cells across thousand-acre parks.' },
        { name: 'PVsyst, WindPRO & DIgSILENT PowerFactory', category: 'Computer Software', usedFor: 'Bankable energy-yield modeling and grid stability studies.' },
        { name: 'Grid-Forming Battery Inverters (BESS)', category: 'Emerging Tools', usedFor: 'Stabilising grid frequency cleanly without fossil spinning reserves.' },
      ],
    },
    experience: {
      summary: 'Hands-on microgrid kits, campus energy audits, and substation internships build real fluency.',
      stages: [
        { level: 'School Level', category: 'Beginner Activities', description: 'Audit your school’s electricity meter readings and calculate rooftop solar potential.' },
        { level: 'Undergraduate', category: 'Internships & Apprenticeships', description: 'Intern with state transmission utilities, NISE labs, or solar-wind EPC developers.' },
      ],
    },
    qualifications: {
      summary: 'Engineering degrees are standard; high-voltage electrical safety permits govern live site testing.',
      items: [
        { title: 'B.Tech / B.E. in Electrical / Energy Engineering', tier: 'Mandatory', kind: 'Degree', country: 'Global', details: 'Standard qualification for grid and plant design engineers.' },
        { title: 'Electrical Supervisor / High-Voltage Safety Permit', tier: 'Mandatory', kind: 'Licence', country: 'India (CEA) / Regional', details: 'Statutory safety authorisation required for hands-on testing inside live high-voltage substations.' },
        { title: 'NABCEP PV Certification / BEE Certified Energy Auditor', tier: 'Recommended Additional', kind: 'Certification', country: 'USA / India', details: 'Recognised professional credentials in solar design and industrial energy auditing.' },
      ],
      countryDifferencesNote:
        'Electrical grid codes (CEA in India, IEEE/FERC in US, ENTSO-E in Europe) vary strictly by national grid frequency (50 Hz vs 60 Hz) and fault rules.',
    },
    careerProgression: {
      summary: 'Grows from site design engineer to grid architect or clean-energy project director.',
      stages: [
        { stage: 'Graduate Energy / Electrical Engineer', typicalTimeframe: 'Years 1–2', focus: 'Drafting single-line diagrams, shading studies, and supporting site tests.' },
        { stage: 'Grid Integration / Plant Design Lead', typicalTimeframe: 'Years 3–7', focus: 'Leading full MW/GW plant designs and utility interconnection approvals.' },
        { stage: 'Chief Grid Architect / Director of Clean Energy Engineering', typicalTimeframe: 'Years 8+', focus: 'Architecting regional hybrid renewable-storage portfolios and green hydrogen hubs.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Building rural solar cold-storage microgrids or commercial rooftop/battery firms.',
        research: 'Advancing tandem photovoltaics and grid-scale flow batteries.',
        specialisation: 'Focusing purely on offshore wind foundations or HVDC transmission.',
        leadership: 'Advising national electricity regulators on clean transition standards.',
      },
    },
    workplaces: {
      summary: 'Alternates between engineering offices and dramatic wind/solar landscapes.',
      workMode: 'Mixed',
      locations: ['Utility Solar & Wind Parks', 'High-Voltage Substations', 'Grid Dispatch Control Centres', 'Engineering Design Offices'],
      environmentDescription:
        'Remote windy plateaus, sunny desert arrays, and modern engineering control rooms.',
    },
    careerOpportunities: {
      summary: 'One of the fastest-growing engineering fields globally under national net-zero commitments.',
      mainIndustries: ['Utility Solar & Wind Developers', 'Grid Transmission & Storage Utilities', 'Microgrid & Rural Electrification', 'Industrial Decarbonisation', 'Power Electronics Manufacturing'],
      privateSector: 'Clean energy producers, wind/inverter OEMs, and corporate clean-power procurement teams.',
      governmentSector: 'NTPC Green, SECI, PGCIL, state electricity boards, and MNRE institutes.',
      researchOpportunities: 'NISE, NIWE, IIT Energy Departments, and NREL.',
      internationalOpportunities: 'Very high demand across India, Europe, Middle East, North America, and Australia.',
      freelancingAndSelfEmployment: 'Independent energy yield auditing and commercial rooftop engineering.',
      entrepreneurshipAndStartups: 'Solar-powered cold storage for farmers, EV charging microgrids, and battery recycling.',
      emergingDemand: 'Round-the-clock hybrid renewable + storage tenders and green ammonia/steel power.',
      verifiedStatisticsNote:
        'International Energy Agency (IEA) World Energy Employment reports show clean energy jobs outpacing fossil-fuel employment globally; U.S. BLS projects 9% growth for electrical engineers (2024–2034). Consolidated India-only engineer projections vary; Information not yet verified for a single figure.',
    },
    relatedCareers: {
      summary: 'Connects heavy electrical grids, rural systems, and precision hardware.',
      items: [
        {
          targetId: 'transit-planner',
          name: 'Urban Transit & Rail Systems Planner',
          clusterName: 'Transportation, Distribution & Logistics',
          whyRelated: 'Coordinates electrified metro and bus-depot power loads with clean-energy grids.',
          sharedSkills: ['Infrastructure Load Modeling', 'Long-Term Systems Planning', 'Public Utility Coordination'],
          differencesInResponsibilities: 'Designs commuter transit networks rather than generation substations.',
          transitionPathway: 'Electric mobility infrastructure planning.',
        },
        {
          targetId: 'agronomist',
          name: 'Agronomist & Sustainable Crop Scientist',
          clusterName: 'Agriculture, Food & Natural Resources',
          whyRelated: 'Co-designs agrivoltaic farms growing shade-tolerant crops beneath solar panels.',
          sharedSkills: ['Microclimate Modeling', 'Land Stewardship', 'GIS'],
          differencesInResponsibilities: 'Manages living crop yields rather than megawatt power electronics.',
          transitionPathway: 'Rural clean-energy & agrivoltaic field deployments.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Transitioning from isolated solar/wind farms into round-the-clock storage-backed clean grids.',
      disclaimer:
        'Established developments reflect active grid tenders; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Grid-Forming Inverters & Long-Duration Storage', description: 'Enabling grids to run at 80–100% renewable share without fossil inertia.' },
        { area: 'Agrivoltaics & Offshore Wind Expansion', description: 'Dual-use solar-farmland designs and deep-water wind turbines.' },
      ],
      speculativePredictions: [
        { area: 'Continental Super-Grids & Green Hydrogen Pipelines', description: 'Transmitting desert solar power thousands of kilometres via HVDC or green molecules.' },
      ],
      environmentalAndSocialFactors:
        'Critical mineral recycling (lithium, copper, silicon) and fair land stewardship with rural communities are central to an ethical clean transition.',
    },
    realWorldExamples: {
      summary: 'Scientists and engineers who made solar and energy efficiency practical.',
      pioneers: [
        {
          name: 'Dr. Maria Telkes',
          profession: 'Biophysicist & Solar Energy Pioneer',
          country: 'Hungary / United States',
          majorContributions: 'Designed the first 100% solar-heated house (Dover Sun House, 1948) using phase-change salt thermal storage, plus life-saving solar seawater desalination stills.',
          achievements: 'Earned the Society of Women Engineers Achievement Award (1952); inducted into the National Inventors Hall of Fame.',
          whyWorkMatters: 'Proved early on that solar energy can be stored chemically and thermally for cloudy days.',
          sourceNote: 'National Inventors Hall of Fame & MIT archives.',
        },
        {
          name: 'Prof. Ashok Jhunjhunwala',
          profession: 'Electrical Engineer & Energy/Telecom Innovator',
          country: 'India',
          majorContributions: 'Pioneered decentralised solar DC microgrids for off-grid Indian homes, EV battery swapping architecture, and indigenous telecom systems at IIT Madras.',
          achievements: 'Awarded the Padma Shri (2002) for science and engineering.',
          whyWorkMatters: 'Demonstrated how low-voltage DC solar architecture eliminates costly inverter losses for rural communities.',
          sourceNote: 'IIT Madras & Government of India Padma Awards records.',
        },
      ],
    },
  },

  {
    id: 'aerospace-engineer',
    name: 'Aerospace Propulsion & Spacecraft Systems Engineer',
    clusterId: 'space-aviation',
    clusterName: 'Space, Aviation & Frontier Exploration',
    status: 'Current',
    shortIntro:
      'Designs launch vehicle engines, orbital satellites, thermal shields, and atmospheric aircraft—pushing materials, propulsion, and navigation to extreme physical limits.',
    specialisationTags: ['Spacecraft Propulsion', 'Orbital Mechanics', 'Thermal & Structures', 'Avionics & GNC'],
    imageUrl: '/src/assets/images/career_aerospace_engineering_1795001232754.jpg',
    imageCaption: 'Spacecraft assembly cleanroom showing propulsion hardware integration and schematic verification.',
    lastUpdated: '2026-11-12',
    sources: [
      { label: 'ISRO Careers & Space Missions', url: 'https://www.isro.gov.in/', organization: 'Indian Space Research Organisation' },
      { label: 'IN-SPACe Private Space Ecosystem', url: 'https://www.inspace.gov.in/', organization: 'Department of Space, India' },
      { label: 'O*NET: Aerospace Engineers', url: 'https://www.onetonline.org/', organization: 'U.S. Department of Labor' },
    ],
    introduction: {
      summary: 'Turns orbital mathematics and extreme metallurgy into reliable flight across sky and vacuum.',
      definition:
        'An Aerospace Propulsion & Spacecraft Systems Engineer researches, designs, integrates, and tests aircraft, launch rockets, and satellites so they survive extreme vibration, cryogenic fuels, vacuum radiation, and supersonic re-entry.',
      mainPurpose:
        'To enable weather forecasting satellites, rural broadband, earth-observation climate monitoring, cleaner aviation, and deep-space scientific exploration.',
      whyItExists:
        'Once a rocket leaves the launchpad or a satellite enters orbit, nobody can walk up with a wrench to fix a loose valve; extraordinary systems engineering and ground testing are mandatory.',
      societalImportance:
        'Provides early cyclone warnings that save thousands of coastal lives, monitors glacier melt and crop drought, and advances precision materials science.',
      whatMakesItInteresting:
        'Works at the edge of physics—where every extra gram of mass matters and a successful launch or planetary orbit insertion represents years of collective teamwork.',
    },
    responsibilities: {
      summary: 'Combines subsystem mathematical design with exhaustive ground vibration, thermal-vacuum, and hot-fire testing.',
      mainDuties: [
        'Model orbital trajectories, delta-v fuel budgets, aerodynamic drag, or combustion chamber heat transfer.',
        'Design lightweight composite structures, cryogenic propellant valves, or satellite attitude-control flywheels.',
        'Conduct Failure Modes and Effects Analyses (FMEA) ensuring single component faults never doom a mission.',
        'Oversee cleanroom spacecraft integration, acoustic vibration tests, and live mission telemetry.',
      ],
      importantResponsibilities: [
        'Adhering to international space-debris mitigation guidelines (safe end-of-life de-orbiting) and aviation airworthiness rules.',
      ],
      problemsSolved: [
        'Preventing cryogenic liquid oxygen/hydrogen slosh or combustion instability inside a high-thrust rocket engine.',
      ],
      decisionsMade: [
        'Mass-margin allocations, radiation-hardened chip selection, orbit altitude trade-offs, and test readiness go/no-go calls.',
      ],
      collaborators: [
        'Materials metallurgists, GNC software engineers, and cleanroom technicians',
        'Atmospheric scientists, launch-range safety officers, and mission directors',
      ],
    },
    dailyWork: {
      summary: 'Patient, methodical engineering verification interrupted by thrilling cleanroom integration and launch campaigns.',
      scheduleNote:
        'Ninety percent of aerospace engineering is rigorous analysis, documentation, and ground testing long before launch day.',
      morningActivities: [
        'Review thermal-vacuum chamber sensor logs from overnight satellite qualification tests.',
      ],
      mainTasks: [
        'Run computational fluid dynamics (CFD) or finite-element stress checks on a propellant turbopump housing.',
        'Coordinate interface control documents (ICDs) so satellite solar panels clear launch-vehicle fairing walls.',
      ],
      meetingsAndFieldwork: [
        'Suit up in lint-free bunny suits to inspect spacecraft harness routing inside an ISO-class cleanroom.',
      ],
      toolsUsedDaily: [
        'MATLAB/Simulink, ANSYS/NASTRAN, GMAT/STK orbital simulators, CAD suites, and telemetry consoles.',
      ],
      communicationAndTeamwork:
        'Strict peer-review culture where junior engineers are encouraged to speak up immediately if any anomaly looks suspicious.',
      endOfDayActivities: [
        'Log anomaly discrepancy reports (DRs) and verify flight-readiness sign-off checklists.',
      ],
    },
    specialisations: {
      summary: 'Aerospace splits broadly across propulsion, structures, orbital mechanics, and avionics.',
      items: [
        {
          id: 'propulsion-cryo',
          title: 'Propulsion & Combustion Systems',
          focus: 'Liquid, cryogenic, solid, electric Hall-thruster, and sustainable aviation fuel engines.',
          howItDiffers: 'Deep thermodynamics, turbomachinery, and high-temperature metallurgy.',
          jobTitles: ['Propulsion Engineer', 'Combustion Scientist'],
          opportunities: 'Space agencies (ISRO/NASA/ESA), private rocket startups, and jet-engine OEMs.',
        },
        {
          id: 'gnc-orbital',
          title: 'Orbital Mechanics & Guidance, Navigation, Control (GNC)',
          focus: 'Trajectory optimisation, rendezvous docking, and autonomous planetary landing.',
          howItDiffers: 'Mathematically intensive—blending astrodynamics with Kalman filtering and control loops.',
          jobTitles: ['Flight Dynamics Engineer', 'GNC Engineer'],
          opportunities: 'Satellite constellations, lunar/planetary missions, and autonomous UAVs.',
        },
      ],
    },
    skills: {
      summary: 'Deep physics, disciplined verification culture, and collaborative humility.',
      technical: [
        { name: 'Fluid Dynamics, Thermodynamics & Orbital Mechanics', priority: 'Essential', description: 'Applying Navier-Stokes, rocket equations, and Keplerian trajectories.' },
        { name: 'Structural FEA & Materials Science', priority: 'Essential', description: 'Understanding fatigue, thermal expansion, and carbon composites.' },
        { name: 'MATLAB / Simulink, Python & CAD', priority: 'Essential', description: 'Simulating 6-DOF flight dynamics and designing flight hardware.' },
        { name: 'Systems Engineering & FMEA Verification', priority: 'Essential', description: 'Managing complex requirements traceability across thousands of parts.' },
      ],
      personalProfessional: [
        { name: 'Intellectual Honesty on Anomalies', priority: 'Essential', description: 'Never brushing aside a tiny unexplained test blip—spaceflight punishes wishful thinking.' },
        { name: 'Meticulous Documentation', priority: 'Essential', description: 'Ensuring every torque wrench turn and test condition is traceable.' },
        { name: 'Teamwork Across Disciplines', priority: 'Essential', description: 'Integrating ideas across mechanical, chemical, and software teams.' },
      ],
    },
    schoolSubjects: {
      summary: 'Physics, Chemistry, and Mathematics (PCM) are strictly foundational.',
      subjects: [
        { subject: 'Physics (Mechanics, Fluids & Thermodynamics)', tier: 'Essential', whyItMatters: 'Every aspect of lift, orbital velocity, and rocket thrust flows directly from classical mechanics.', howToStart: 'Build water-bottle rockets safely outdoors and measure how water volume changes apogee height.' },
        { subject: 'Mathematics (Calculus, Vectors & Differential Equations)', tier: 'Essential', whyItMatters: 'Governs trajectories, structural stress tensors, and control stability.', howToStart: 'Calculate escape velocity and geostationary orbital radius from Newton’s law of gravitation.' },
        { subject: 'Chemistry & Computer Science', tier: 'Recommended', whyItMatters: 'Explains rocket propellants, heat-shield ceramics, and flight simulation code.', howToStart: 'Simulate a 2D orbital slingshot around Earth in Python.' },
      ],
      indianCurriculumNotes:
        'PCM in Class 11–12 is mandatory for B.Tech Aerospace/Mechanical/Avionics via JEE Main/Advanced (including IIST Thiruvananthapuram directly linked to ISRO).',
      internationalNotes:
        'A-Levels/IB Higher Level Physics and Mathematics are standard prerequisites globally.',
    },
    education: {
      summary: 'Entered via Aerospace, Mechanical, Electrical, or Avionics engineering degrees.',
      pathways: [
        { stage: 'Undergraduate', title: 'B.Tech / B.E. Aerospace, Mechanical, ECE, or Avionics Engineering', requirement: 'Mandatory', duration: '4 years', details: 'Note: Mechanical and ECE graduates regularly enter aerospace propulsion and avionics alongside dedicated Aerospace graduates.', countryContext: 'India (IITs, IIST, NITs) / Global' },
        { stage: 'Postgraduate Specialisation', title: 'M.Tech / M.S. Aerospace Propulsion, Aerodynamics, or Space Systems', requirement: 'Recommended Additional', duration: '2 years', details: 'Deepens CFD, composite structures, or astrodynamics research.', countryContext: 'Global' },
      ],
      alternativeAndVocationalNote:
        'AME (Aircraft Maintenance Engineering) licences and precision CNC machining diplomas open vital hands-on aviation and spacecraft manufacturing technician careers.',
      researchAndAdvancedNote:
        'Ph.D. research investigates reusable methane/LOX engines, electric plasma propulsion, and active orbital debris removal.',
    },
    toolsAndTechnology: {
      summary: 'Blends extreme-environment test facilities with high-fidelity physics simulation.',
      items: [
        { name: 'ANSYS Fluent / NASTRAN & Simulink', category: 'Computer Software', usedFor: 'Simulating supersonic airflow, structural vibration, and attitude control.' },
        { name: 'GMAT (NASA) & STK', category: 'Digital Platforms', usedFor: 'Designing multi-year interplanetary trajectories and satellite coverage passes.' },
        { name: 'Thermal-Vacuum Chambers & Vibration Shakers', category: 'Professional Equipment', usedFor: 'Proving spacecraft survive rocket launch shaking and -150°C to +120°C orbital extremes.' },
      ],
    },
    experience: {
      summary: 'Student CubeSat clubs, rocketry teams, and national space labs offer extraordinary early exposure.',
      stages: [
        { level: 'School Level', category: 'Competitions', description: 'Join ISRO YUVIKA (Young Scientist Programme), aero-modeling glider clubs, or astronomy/satellite tracking projects.' },
        { level: 'Undergraduate', category: 'School & Personal Projects', description: 'Join student CubeSat teams, SAE Aero Design, or university sounding-rocket societies.' },
        { level: 'College / Early Career', category: 'Internships & Apprenticeships', description: 'Intern at ISRO centres, HAL, NAL, or private IN-SPACe space startups.' },
      ],
    },
    qualifications: {
      summary: 'Accredited engineering degrees govern design roles; aviation maintenance and national space agencies have specific entry channels.',
      items: [
        { title: 'B.Tech / B.E. in Aerospace or Allied Core Engineering', tier: 'Mandatory', kind: 'Degree', country: 'India & Global', details: 'Required academic foundation.' },
        { title: 'ICRB Examination / IIST Direct Absorption (ISRO)', tier: 'Optional', kind: 'Government Examination', country: 'India', details: 'Recruitment pathways for Scientist/Engineer posts in ISRO.' },
        { title: 'DGCA Aircraft Maintenance Engineer (AME) / FAA A&P Licence', tier: 'Optional', kind: 'Licence', country: 'India / USA', details: 'Mandatory specifically to certify commercial aircraft airworthiness—not required for satellite/rocket design engineers.' },
      ],
      countryDifferencesNote:
        'Many defence and national rocket programmes require citizenship/security clearances (e.g., ITAR in the US, Indian citizenship for ISRO), whereas commercial aviation and civilian earth-observation roles are more international.',
    },
    careerProgression: {
      summary: 'Advances through technical engineering mastery toward Subsystem Lead or Mission Director.',
      stages: [
        { stage: 'Scientist / Engineer "SC" or Junior Aerospace Engineer', typicalTimeframe: 'Years 1–3', focus: 'Running subsystem analyses, wind-tunnel/vibration tests, and component qualification.' },
        { stage: 'Senior Systems Engineer / Subsystem Lead', typicalTimeframe: 'Years 4–9', focus: 'Owning entire propulsion stages, payloads, or flight-dynamics modules.' },
        { stage: 'Project Director / Mission Director / Chief Engineer', typicalTimeframe: 'Years 10+', focus: 'Holding launch and mission sign-off authority across hundreds of specialists.' },
      ],
      nonManagementTracks: {
        entrepreneurship: 'Founding NewSpace small-satellite Earth-observation, launch-vehicle, or electric-propulsion startups.',
        research: 'Advancing hypersonic aerodynamics or electric aviation at NAL, IITs, or NASA.',
        specialisation: 'Remaining a technical Fellow in cryogenic turbomachinery or deep-space astrodynamics.',
        leadership: 'Directing national space centres or aviation safety authorities.',
      },
    },
    workplaces: {
      summary: 'Moves between quiet simulation labs, dust-free cleanrooms, and coastal launchpads.',
      workMode: 'Mixed',
      locations: ['Spacecraft Cleanrooms', 'Propulsion Test Stands', 'Mission Control Centres', 'Aerodynamics Wind Tunnels', 'Engineering Offices'],
      environmentDescription:
        'Meticulous, clean, high-discipline engineering centres punctuated by intense rocket test firings and launch countdowns.',
    },
    careerOpportunities: {
      summary: 'Expanding sharply beyond government space agencies into private satellites, climate monitoring, and clean aviation.',
      mainIndustries: ['Government Space Agencies', 'Private Launch & Satellite Startups', 'Commercial Aviation & Electric Flight', 'Earth Observation & Climate Data', 'Defence Aerospace'],
      privateSector: 'Growing Indian private space ecosystem (Skyroot, Agnikul, Pixxel, etc. under IN-SPACe), Airbus/Boeing engineering centres, and global aerospace suppliers.',
      governmentSector: 'ISRO, DRDO, CSIR-NAL, Hindustan Aeronautics Limited (HAL).',
      researchOpportunities: 'IIT aerospace departments, IIST, Raman Research Institute, and international space institutes.',
      internationalOpportunities: 'Commercial aviation, earth-observation analytics, and European/Commonwealth engineering firms (subject to export-control rules).',
      freelancingAndSelfEmployment: 'Specialised FEA/CFD simulation consulting.',
      entrepreneurshipAndStartups: 'Hyperspectral agricultural/methane-monitoring satellites, orbital servicing, and hydrogen-electric regional aircraft.',
      emergingDemand: 'Climate-monitoring constellations, reusable rockets, and sustainable electric/hydrogen aviation.',
      verifiedStatisticsNote:
        'U.S. Bureau of Labor Statistics projects 6% employment growth for aerospace engineers (2024–2034). IN-SPACe tracks growing private Indian space registrations, though consolidated official annual engineer hiring forecasts are not published; Information not yet verified.',
    },
    relatedCareers: {
      summary: 'High-reliability engineering and atmospheric/grid systems.',
      items: [
        {
          targetId: 'robotics-engineer',
          name: 'Mechatronics & Industrial Robotics Engineer',
          clusterName: 'Manufacturing, Robotics & Industrial Production',
          whyRelated: 'Shares autonomous control theory, sensors, and rugged actuators (such as planetary rovers).',
          sharedSkills: ['Control Loops', 'Embedded C++', 'Precision Mechanisms'],
          differencesInResponsibilities: 'Designs factory and terrestrial robots rather than orbital spacecraft.',
          transitionPathway: 'Rover mobility or aerospace actuator design.',
        },
        {
          targetId: 'renewable-energy-engineer',
          name: 'Grid-Scale Renewable Energy Engineer',
          clusterName: 'Energy, Climate & Sustainability',
          whyRelated: 'Shares fluid aerodynamics (wind turbine blades) and high-efficiency solar cell/battery heritage.',
          sharedSkills: ['Aerodynamics', 'Thermodynamics', 'Power Systems'],
          differencesInResponsibilities: 'Focuses on terrestrial megawatt electricity grids rather than orbital flight.',
          transitionPathway: 'Aerodynamic wind-blade modeling or aerospace battery research.',
        },
      ],
    },
    futureDevelopments: {
      summary: 'Driven by reusable launch systems, climate-sensing satellites, and low-emission aviation.',
      disclaimer:
        'Established developments reflect active missions and commercial flights; speculative predictions are non-guaranteed.',
      establishedDevelopments: [
        { area: 'Reusable Launch Vehicles & Small-Satellite Constellations', description: 'Dramatically lowering orbital launch cost and enabling daily global wildfire, flood, and methane tracking.' },
        { area: 'Electric & Sustainable Aviation Propulsion', description: 'Hybrid-electric regional aircraft and aerodynamic drag reduction to curb aviation emissions.' },
      ],
      speculativePredictions: [
        { area: 'In-Orbit Satellite Refuelling & Lunar Infrastructure', description: 'Potential long-term shift toward modular serviceable spacecraft and sustained lunar science outposts.' },
      ],
      environmentalAndSocialFactors:
        'Orbital space-debris congestion and dark-sky preservation for ground astronomy require strict international de-orbiting discipline.',
    },
    realWorldExamples: {
      summary: 'Spacecraft and propulsion engineers whose breakthroughs shaped India and global spaceflight.',
      pioneers: [
        {
          name: 'Dr. Vikram Sarabhai',
          profession: 'Physicist & Father of the Indian Space Programme',
          country: 'India',
          majorContributions: 'Founded INCOSPAR/ISRO and anchored India’s space programme firmly in peaceful societal applications—weather forecasting, rural educational television, and resource mapping.',
          achievements: 'Awarded the Padma Bhushan (1966) and Padma Vibhushan (posthumously, 1972).',
          whyWorkMatters: 'Demonstrated that frontier space engineering can serve rural farmers and coastal fishermen directly.',
          sourceNote: 'ISRO & Department of Space archives.',
        },
        {
          name: 'Dr. Tessy Thomas',
          profession: 'Aerospace & Guidance Systems Engineer',
          country: 'India',
          majorContributions: 'Led mission design, guidance, and trajectory systems as Project Director for long-range propulsion programmes at DRDO, becoming the first woman scientist to head an Indian strategic missile project.',
          achievements: 'Awarded the Lal Bahadur Shastri National Award and Sir Mokshagundam Visvesvaraya Award.',
          whyWorkMatters: 'Broke longstanding leadership barriers in Indian aerospace propulsion and guidance engineering.',
          sourceNote: 'DRDO & Government of India institutional records.',
        },
      ],
    },
  },
];
