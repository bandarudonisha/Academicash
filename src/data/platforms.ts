import { Platform } from '../types/platform';

export const PLATFORMS_DATA: Platform[] = [
  // --- FREELANCING ---
  {
    id: 'upwork',
    name: 'Upwork',
    tagline: 'World’s largest marketplace for freelance writing, tech, design, and translation.',
    category: 'freelancing',
    description: 'Upwork connects independent student freelancers with clients worldwide for fixed-price contracts and hourly tracked projects. Features an escrow payment system and dispute resolution.',
    howItWorks: [
      'Create a specialized student profile highlighting your skills, coursework, and portfolio samples.',
      'Submit targeted proposals using Connects (bidding tokens) to client job postings.',
      'Accept contracts with payment deposited in escrow before beginning work.',
      'Submit finished deliverables and receive release of funds directly to your verified bank or PayPal account.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Government-issued photo ID (Passport, Driver’s License, or State ID)', 'Tax identification number (SSN, EIN, or W-8BEN for non-US students)', 'Verified bank account or PayPal'],
      studentFriendlyScore: 8,
      internationalAllowed: true,
      internationalNotes: 'Available in 180+ countries. International students in the US on F-1 visas must consult designated school officials (DSO) regarding off-campus work authorization.'
    },
    earnings: {
      range: '$15 - $75+ / hour',
      averageHourly: '$25/hr',
      payoutMethods: ['Direct Bank Deposit (ACH)', 'PayPal', 'Wire Transfer', 'Payoneer'],
      payoutFrequency: 'Weekly on Wednesdays for hourly; 5-day security hold on fixed-price milestones',
      minimumPayout: '$10.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Publicly traded US corporation (NASDAQ: UPWK)',
      taxReporting: 'Issues 1099-K / 1099-NEC for US citizens; W-8BEN compliance for international workers',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Client funds are locked in third-party escrow before you start fixed-price milestones.',
        'Upwork Desktop App takes randomized screen snapshots providing payment guarantee for hourly work.',
        'Strictly prohibits off-platform communication before contracts to prevent payment scams.'
      ]
    },
    pros: [
      'Flexible scheduling: pick projects that fit around your exam calendar.',
      'Builds tangible portfolio work and client testimonials for your post-grad resume.',
      'Enforces formal contract terms and dispute mediation.'
    ],
    watchOuts: [
      '10% platform fee on freelance earnings.',
      'Proposal Connects cost a small fee once monthly free quota is exhausted.',
      'Competition can be fierce for entry-level generalist tasks.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '5-15 hrs/wk (Self-paced)',
    skillsNeeded: ['Content Writing', 'Web Development', 'Graphic Design', 'Data Entry', 'Translation', 'Social Media Management'],
    officialUrl: 'https://www.upwork.com',
    featured: true,
    studentProTip: 'Do not bid on general tasks. Niche down into a specific student superpower, such as "Medical Biology Proofreading" or "Python Data Cleaning for Academic Papers".'
  },
  {
    id: 'fiverr',
    name: 'Fiverr',
    tagline: 'Gig-based marketplace where clients discover and purchase your packaged services.',
    category: 'freelancing',
    description: 'Unlike bid-based sites where you chase clients, Fiverr lets you package your student skills into clear service tiers (Gigs) with upfront pricing and defined delivery deadlines.',
    howItWorks: [
      'Design modular "Gigs" (e.g., "I will design 3 minimalist book covers for $25").',
      'Set clear tier packages (Basic, Standard, Premium) with defined revision limits.',
      'Clients order directly and submit project briefing requirements.',
      'Deliver final files through the Fiverr resolution dashboard for automatic payment clearance.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Government ID verification upon first withdrawal', 'Active payment destination', 'Clear English communication or specialized native language skills'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Accepts sellers from over 160 countries with local currency withdrawal options.'
    },
    earnings: {
      range: '$10 - $200+ per gig',
      averageHourly: '$20/hr equivalent',
      payoutMethods: ['PayPal', 'Fiverr Revenue Card', 'Direct Bank Transfer', 'Payoneer'],
      payoutFrequency: 'Available 14 days after order completion (7 days for Top Rated sellers)',
      minimumPayout: '$5.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Publicly traded company (NYSE: FVRR)',
      taxReporting: 'Form 1099-K issued for eligible US earners meeting annual IRS thresholds',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Clients pay upfront to Fiverr; funds are released when you deliver the gig.',
        'Automated file scanning prevents malicious virus uploads.',
        'Zero tolerance for academic dishonesty (Fiverr strictly bans essay writing for academic grades).'
      ]
    },
    pros: [
      'No bidding necessary once your gigs gain positive algorithmic traction.',
      'You dictate exact turnaround times (e.g. 5 days) so you never work during exam days.',
      'Great for creative disciplines like illustration, voiceover, and podcast editing.'
    ],
    watchOuts: [
      'Platform retains a 20% service commission on all seller earnings.',
      'Early ratings heavily dictate visibility—late deliveries damage gig placement.',
      '14-day clearance period before funds become withdrawable.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '3-10 hrs/wk',
    skillsNeeded: ['Logo Design', 'Resume Editing', 'Audio/Podcast Editing', 'Thumbnail Creation', 'Proofreading'],
    officialUrl: 'https://www.fiverr.com',
    featured: true,
    studentProTip: 'Set your delivery time to 4 or 5 days instead of 24 hours. Under-promising and over-delivering ensures college emergencies never trigger late delivery penalties.'
  },
  {
    id: 'contra',
    name: 'Contra',
    tagline: 'Commission-free, portfolio-first freelance platform built for the next generation.',
    category: 'freelancing',
    description: 'Contra is an independent freelancer platform that charges 0% commission fees on contracts. Ideal for students with design, coding, or writing portfolios who want modern, transparent client contracts.',
    howItWorks: [
      'Assemble a modern portfolio highlighting university and personal side projects.',
      'Set your hourly rate or fixed project service packages.',
      'Apply to curated opportunities on the Contra Job Board or send direct contract links to private clients.',
      'Execute work under standardized digital legal agreements with escrow milestones.'
    ],
    eligibility: {
      minAge: 16,
      requirements: ['Valid email and digital portfolio links', 'Stripe account capability for payout receipt', '18+ for independent Stripe account or legal guardian co-sign if 16-17'],
      studentFriendlyScore: 10,
      internationalAllowed: true,
      internationalNotes: 'Supported in over 80 countries via Stripe Connect and local bank integrations.'
    },
    earnings: {
      range: '$20 - $80+ / hour',
      averageHourly: '$30/hr',
      payoutMethods: ['Stripe Direct Deposit', 'Crypto/USDC (Optional)', 'Direct Bank ACH'],
      payoutFrequency: 'Instant direct deposit upon client milestone sign-off (via Stripe)',
      minimumPayout: '$1.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Contra Inc., registered in Delaware, USA',
      taxReporting: 'Generates standard Stripe tax reports and 1099 compliance documentation',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Contract funds are held securely until deliverables are approved.',
        'Standardized contract templates protect freelancer copyright until full payment is finalized.',
        'Zero commission taken from the creator (clients pay a nominal handling fee).'
      ]
    },
    pros: [
      'Keep 100% of what you earn (zero platform commission deducted from your check).',
      'Modern, slick interface that doubles as your professional design/writing portfolio.',
      'Attracts tech-forward startups, venture-backed companies, and high-quality clients.'
    ],
    watchOuts: [
      'Smaller volume of entry-level micro-tasks compared to mature legacy marketplaces.',
      'Requires having at least 2-3 genuine project samples to gain approval.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '5-15 hrs/wk',
    skillsNeeded: ['UI/UX Design', 'Full-stack Development', 'Brand Strategy', 'Technical Writing', 'Video Editing'],
    officialUrl: 'https://contra.com',
    featured: false,
    studentProTip: 'Use your Contra profile URL directly on your LinkedIn and resume. It functions both as an interactive portfolio and an invoiceable checkout system.'
  },

  // --- ONLINE TUTORING & MENTORSHIP ---
  {
    id: 'preply',
    name: 'Preply',
    tagline: 'Teach languages and academic subjects to motivated global students at your own rates.',
    category: 'tutoring',
    description: 'Preply is a premier global tutoring platform where college students can teach languages (conversational English, Spanish, French, etc.) or academic disciplines (Math, Science, History) via video lessons.',
    howItWorks: [
      'Record a brief 2-minute introductory video demonstrating your friendly tutoring approach.',
      'Specify your available calendar hours around your college lecture timetable.',
      'Set your custom hourly rate (most student tutors start between $15 and $25/hour).',
      'Conduct video lessons inside the Preply Interactive Classroom with shared whiteboards and exercises.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['High-speed internet connection & functional webcam', 'Native or advanced fluency in your chosen subject', 'Government ID verification (Passport or National ID)'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Tutors teach students across 190 countries; payout is seamless globally.'
    },
    earnings: {
      range: '$15 - $45 / hour',
      averageHourly: '$22/hr',
      payoutMethods: ['PayPal', 'Payoneer', 'Wise', 'Skrill'],
      payoutFrequency: 'Instant withdrawal anytime once lesson is confirmed',
      minimumPayout: '$10.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Preply Inc., headquartered in Brookline, MA, USA & European offices',
      taxReporting: 'Compliant with US tax treaties; provides downloadable earning summaries for tax filings',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Students pre-pay for lesson credits upfront; tutors are guaranteed payment for attended slots.',
        'Lessons take place inside the platform video classroom, keeping personal contact numbers private.',
        '24/7 dedicated dispute support for student cancellations with less than 4 hours notice.'
      ]
    },
    pros: [
      'Total calendar freedom: open up 1 hour in the morning, 2 hours on Sunday afternoon.',
      'Conversational language practice requires minimal homework preparation.',
      'Builds patience, cross-cultural communication, and pedagogical credentials.'
    ],
    watchOuts: [
      'Commission starts high (33%) for first 20 hours of teaching, then reduces down to 18%.',
      'The initial trial lesson with a brand new student is free on the platform.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '4-12 hrs/wk',
    skillsNeeded: ['Language Fluency', 'Math Tutoring', 'Patient Communication', 'English as a Second Language (ESL)'],
    officialUrl: 'https://preply.com',
    featured: true,
    studentProTip: 'Offer conversational practice for international professionals preparing for TOEFL/IELTS or job interviews. They value regular weekly slots and rarely cancel.'
  },
  {
    id: 'wyzant',
    name: 'Wyzant',
    tagline: 'High-earning private academic tutoring in STEM, test prep, and university coursework.',
    category: 'tutoring',
    description: 'Wyzant is the leading US-based academic tutoring network. College students who excel in STEM (Calculus, Physics, Organic Chemistry, Python) command premium rates tutoring high school and college peers.',
    howItWorks: [
      'Take Wyzant’s online subject proficiency quizzes to certify your credentials in specific subjects.',
      'Set your custom hourly rate (STEM student tutors frequently earn $35-$65+/hr).',
      'Browse parent/student tutoring requests or receive direct lesson requests.',
      'Log completed lesson summaries and bill client credit cards securely through Wyzant.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Must reside in the United States', 'Valid US Social Security Number (SSN) for tax compliance', 'Pass Wyzant subject qualification tests'],
      studentFriendlyScore: 8,
      internationalAllowed: false,
      internationalNotes: 'Currently limited to US residents due to tax withholding regulations.'
    },
    earnings: {
      range: '$25 - $75+ / hour',
      averageHourly: '$40/hr',
      payoutMethods: ['Direct Deposit (ACH) to US checking accounts'],
      payoutFrequency: 'Twice monthly on the 1st and 15th, or Express Pay within 3 days',
      minimumPayout: '$20.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Wyzant Inc. (an IXL Learning Company), San Mateo, California',
      taxReporting: 'Issues Form 1099-NEC for annual earnings exceeding $600',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Parent/student credit card authorization is verified before lessons start.',
        'Legally enforces a 25% transparent platform fee with zero hidden tutor charges.',
        'Strict honor code preventing homework fraud or assisting with live proctored exams.'
      ]
    },
    pros: [
      'Significantly higher hourly rates than campus dining or administrative desk jobs.',
      'Reinforces your own coursework comprehension by teaching foundational principles.',
      'Both in-person (on or near campus) and online video tutoring options.'
    ],
    watchOuts: [
      'Platform keeps 25% commission fee on billed lessons.',
      'US-only residence requirement.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '3-8 hrs/wk',
    skillsNeeded: ['Calculus', 'Organic Chemistry', 'SAT/ACT Prep', 'Computer Science', 'College Essay Coaching'],
    officialUrl: 'https://www.wyzant.com',
    featured: false,
    studentProTip: 'Apply right after you score an A in a difficult prerequisite course (e.g., General Chemistry 101 or Linear Algebra). You are fresh on the exact stumbling blocks junior students face.'
  },
  {
    id: 'cambly',
    name: 'Cambly',
    tagline: 'Casual English conversation coaching with no lesson plans or grading required.',
    category: 'tutoring',
    description: 'Cambly connects native English speakers with learners around the world who simply want to practice speaking casual, everyday English. There are no lesson plans, homework grading, or required teaching degrees.',
    howItWorks: [
      'Submit a simple introductory video showcasing clear, friendly conversational English.',
      'Log into the web dashboard whenever you have free time between classes ("Priority Hours" or open on-demand).',
      'Receive incoming calls from students in Japan, Brazil, Turkey, South Korea, and Saudi Arabia.',
      'Talk about daily life, cultural exchanges, or travel topics for 15-30 minute segments.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Native English speaker status (US, UK, Canada, Australia, New Zealand, etc.)', 'Reliable high-speed internet and webcam', 'No prior teaching certificate or college degree required'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Tutors can log in from anywhere globally as long as they speak native-level English.'
    },
    earnings: {
      range: '$10.20 - $12.00 / hour',
      averageHourly: '$10.50/hr ($0.17/min Cambly, $0.20/min Cambly Kids)',
      payoutMethods: ['PayPal', 'Direct Deposit via Wise / Tipalti'],
      payoutFrequency: 'Every single Monday with no withdrawal requests needed',
      minimumPayout: '$20.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Cambly Inc., San Francisco, CA, USA',
      taxReporting: 'Provides yearly income breakdown for independent contractor tax filing',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Pay is tracked strictly by the minute while on active video calls.',
        'Built-in ban and reporting controls protect tutors against inappropriate student behavior.',
        'All calls are encrypted and routed through Cambly’s monitored servers.'
      ]
    },
    pros: [
      'Zero prep time: you log off and your work is 100% finished, with no papers to grade.',
      'Predictable weekly pay every Monday straight into your PayPal account.',
      'Flexible drop-in hours: ideal for unexpected free hours in dorm rooms.'
    ],
    watchOuts: [
      'Hourly rate is modest compared to specialized subject tutoring.',
      'Occasional quiet waiting periods during off-peak timezone hours.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '2-10 hrs/wk',
    skillsNeeded: ['Friendly Demeanor', 'Native English', 'Active Listening', 'Patience'],
    officialUrl: 'https://www.cambly.com',
    featured: false,
    studentProTip: 'Sign up for Cambly Kids if accepted. It pays $12.00/hour ($0.20/minute), and structured slide decks are provided automatically on-screen.'
  },

  // --- INTERNSHIPS & MICRO-INTERNSHIPS ---
  {
    id: 'parker-dewey',
    name: 'Parker Dewey',
    tagline: 'Paid, short-term micro-internships designed specifically for enrolled college students.',
    category: 'internships',
    description: 'Parker Dewey pioneers paid "Micro-Internships" — short, professional, 10 to 40-hour discrete projects for real companies. Projects range from sales research and competitor audits to marketing copy and data analysis.',
    howItWorks: [
      'Create your student account using your official .edu university email.',
      'Answer short, written application prompts explaining why your perspective fits each project.',
      'Selected students are hired as independent contractors for discrete assignments (typically 15-20 total hours).',
      'Submit deliverables to the company supervisor and receive fixed stipend pay upon completion.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Currently enrolled college undergraduate, graduate student, or recent graduate', 'US-based university enrollment (or authorized US work permit)', 'W-9 tax submission'],
      studentFriendlyScore: 10,
      internationalAllowed: true,
      internationalNotes: 'International students on F-1 visas may participate if authorized through CPT or pre-completion OPT as approved by their DSO.'
    },
    earnings: {
      range: '$200 - $600 per project',
      averageHourly: '$20 - $25/hr effective rate',
      payoutMethods: ['Direct Deposit (ACH) to US bank account', 'Paper Check'],
      payoutFrequency: 'Paid on the end of the month following project completion',
      minimumPayout: 'No minimum (Full stipend paid per project)'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Parker Dewey PBC, Chicago, Illinois (Public Benefit Corporation)',
      taxReporting: 'Issues official 1099-NEC forms for cumulative yearly earnings above $600',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Parker Dewey acts as the legal employer of record; companies pay Parker Dewey upfront.',
        'Endorsed by hundreds of top collegiate career centers and academic departments.',
        'Strictly bars unpaid spec work: every single project listed is 100% paid.'
      ]
    },
    pros: [
      'Real resume bullets with recognized corporate names (e.g. Dell, CBRE, high-growth startups).',
      'Low total hour commitment: 10 to 30 hours total spread over 2 to 4 weeks.',
      'Zero conflict with midterm and final exam schedules due to short project duration.'
    ],
    watchOuts: [
      'Competitive applicant pool: your short application answers must be thoughtful and tailored.',
      'Monthly payment processing cycle means payouts arrive several weeks after project hand-off.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '5-10 hrs/wk for 2-3 weeks',
    skillsNeeded: ['Market Research', 'Excel Data Analysis', 'Social Media Copy', 'Competitive Intelligence', 'Graphic Design'],
    officialUrl: 'https://www.parkerdewey.com',
    featured: true,
    studentProTip: 'Do not submit generic answers in the application. Reference the company’s recent press release or product launch in your first two sentences to stand out from 50 other applicants.'
  },
  {
    id: 'handshake',
    name: 'Handshake',
    tagline: 'University-verified platform for on-campus student jobs, paid co-ops, and internships.',
    category: 'internships',
    description: 'Handshake is the official career network partnered with over 1,500 colleges and universities. Every employer and job listing is vetted through your institution’s career service department to ensure compliance with student labor laws.',
    howItWorks: [
      'Log in through your university Single Sign-On (SSO) credentials (.edu portal).',
      'Complete your academic profile with your major, expected graduation year, GPA, and coursework.',
      'Filter for "On-Campus Jobs", "Part-Time Roles", or "Paid Micro-Internships" compliant with college schedules.',
      'Apply with 1-click university resume templates directly to verified recruiters.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Enrollment at a Handshake-affiliated college or university', 'Valid student ID & university email address', 'Legal authorization to work in host country (F-1 on-campus eligible)'],
      studentFriendlyScore: 10,
      internationalAllowed: true,
      internationalNotes: 'The #1 safest platform for international students on F-1 visas looking for legal 20 hr/week on-campus employment.'
    },
    earnings: {
      range: '$15 - $35 / hour',
      averageHourly: '$18/hr',
      payoutMethods: ['University Payroll (Direct Deposit)', 'Corporate Direct Deposit (W-2)'],
      payoutFrequency: 'Standard bi-weekly or semi-monthly company/university payroll',
      minimumPayout: 'Standard payroll'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Stryder Corp. (Handshake), San Francisco, CA',
      taxReporting: 'Official W-2 employee payroll with automated tax withholding and legal protections',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Zero scam rate: employer profiles must pass verification by your university career center staff.',
        'Enforces fair labor standards (FLSA) — unpaid student work masquerading as labor is systematically blocked.',
        'Campus jobs automatically cap your hours at 20 hrs/week during semesters to protect academic standing.'
      ]
    },
    pros: [
      'The safest ecosystem for students: protected by university employment standards.',
      'On-campus jobs accommodate class schedules (managers schedule around your lectures).',
      'Seamless compliance for international student visa restrictions.'
    ],
    watchOuts: [
      'Requires institutional university partnership to unlock full internal job boards.',
      'Campus jobs fill up rapidly during the first 2 weeks of the semester.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '5-20 hrs/wk',
    skillsNeeded: ['Campus Administration', 'Research Assistance', 'Peer Advising', 'IT Support', 'Library Science'],
    officialUrl: 'https://joinhandshake.com',
    featured: true,
    studentProTip: 'Look for "Campus Department Student Assistant" or "Library Monitor" roles. These often include dedicated quiet desk downtime where you are legally permitted to study while clocked in.'
  },
  {
    id: 'forage',
    name: 'Forage',
    tagline: 'Free virtual job simulations designed by leading employers to fast-track paid hiring.',
    category: 'internships',
    description: 'Forage offers free, 5-6 hour bite-sized virtual experience programs authored directly by top firms (JPMorgan, Boston Consulting Group, Google, Clifford Chance). While simulations are self-guided, completing them directly unlocks fast-track paid internship pipelines.',
    howItWorks: [
      'Enroll in any virtual job simulation corresponding to your career interests (e.g. Investment Banking, Software Engineering).',
      'Complete realistic simulated workplace tasks (e.g. build an Excel financial model or write client legal advice).',
      'Compare your submissions with model answers created by senior corporate managers.',
      'Receive a verifiable certificate for your CV and get prioritized by company recruiters for paid interviews.'
    ],
    eligibility: {
      minAge: 16,
      requirements: ['No prior experience or degree required', 'Completely open access to all students globally', 'Desktop computer or laptop with web browser'],
      studentFriendlyScore: 10,
      internationalAllowed: true,
      internationalNotes: '100% open to international students globally without visa implications.'
    },
    earnings: {
      range: 'Indirect: Fast-track to $30-$50/hr paid internships',
      averageHourly: 'Career Accelerator',
      payoutMethods: ['Recruiter fast-track to direct corporate payroll'],
      payoutFrequency: 'N/A (Pre-internship pipeline)',
      minimumPayout: 'Free to participate'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Forage (acquired by EAB), Washington, D.C. & Sydney',
      taxReporting: 'Free educational experience; no tax reporting required for simulation stage',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Programs are officially partnered and co-designed by Fortune 500 corporations.',
        'Never charges students any tuition or access fees.',
        'Data privacy strictly adheres to student protection regulations (FERPA and GDPR).'
      ]
    },
    pros: [
      'Zero financial risk or commitment: work at 2 AM in your pajamas for 1 hour at a time.',
      'High-impact resume credibility when applying for competitive summer analyst jobs.',
      'Students who complete simulations are 2.5x more likely to land the firm’s paid internship.'
    ],
    watchOuts: [
      'Does not provide an immediate cash payout for the simulation itself.',
      'Requires self-discipline to finish the 5-6 hour modules.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '2-3 hrs total per module',
    skillsNeeded: ['Curiosity', 'Basic Business Acumen', 'Python/Java (for tech tracks)', 'Writing'],
    officialUrl: 'https://www.theforage.com',
    featured: false,
    studentProTip: 'Complete 2 simulations during the semester break. Put the experience under "Extracurricular & Projects" on your resume before your campus career fair.'
  },

  // --- DIGITAL CONTENT CREATION & KNOWLEDGE ---
  {
    id: 'substack',
    name: 'Substack',
    tagline: 'Publish a subscription newsletter on student topics, niche research, or study guides.',
    category: 'creation',
    description: 'Substack empowers student writers, researchers, and hobbyists to publish newsletters directly to subscribers with optional paid memberships. You own your email subscriber list and content forever.',
    howItWorks: [
      'Launch a clean publication focused on a niche (e.g. "Weekly Med School Breakdown" or "Gen Z Financial Teardowns").',
      'Share free weekly editions to build your subscriber base across campus and social networks.',
      'Activate paid subscriptions ($5/month or $50/year) for exclusive deep-dives, cheat sheets, or community discussions.',
      'Receive direct payments into your bank account through integrated Stripe processing.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Stripe-supported bank account and personal ID', '18+ (or parent-managed Stripe account for 16-17 year olds)', 'Commitment to publishing regular original essays or breakdowns'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Supported in over 45 countries where Stripe operates.'
    },
    earnings: {
      range: '$50 - $1,500+ / month',
      averageHourly: 'Scalable Recurring',
      payoutMethods: ['Stripe Direct Deposit', 'Bank ACH'],
      payoutFrequency: 'Rolling 2-day payouts directly to your linked bank account',
      minimumPayout: '$10.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Substack Inc., San Francisco, California',
      taxReporting: 'Stripe generates Form 1099-K for creators meeting state and federal thresholds',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'You retain 100% intellectual property ownership of your writings and subscriber email lists.',
        'Platform charges a transparent 10% cut of paid subscription revenue; zero upfront hosting fees.',
        'Strict terms prohibiting plagiarized academic material or stolen copyrighted textbooks.'
      ]
    },
    pros: [
      'True recurring passive income once a base of 50-100 subscribers is established.',
      'Serves as an intellectual calling card for grad school admissions and corporate thought leadership.',
      'Flexible writing cadence: write ahead of time and schedule posts during exam periods.'
    ],
    watchOuts: [
      'Takes 3-6 months of consistent free writing to build an audience before monetizing.',
      'Requires self-promotion across LinkedIn, Twitter/X, and campus clubs.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '3-6 hrs/wk',
    skillsNeeded: ['Clear Writing', 'Subject Matter Interest', 'Curation', 'Basic Graphic Design'],
    officialUrl: 'https://substack.com',
    featured: false,
    studentProTip: 'Don’t write general diary entries. Solve a specific problem for fellow students, like "How to land clinical research positions as an undergrad" or "Bi-weekly AI research summaries explained simply".'
  },
  {
    id: 'gumroad',
    name: 'Gumroad',
    tagline: 'Sell digital study guides, Notion student templates, resume kits, and code snippets.',
    category: 'creation',
    description: 'Gumroad makes selling digital products effortless. College students can package their organized Notion productivity setups, exam flashcard decks, resume templates, or coding boilerplate kits for instant global sale.',
    howItWorks: [
      'Create a digital asset (e.g. an aesthetic Notion University Semester Planner or MCAT study summary).',
      'Upload the files or shareable link to your Gumroad store with preview screenshots.',
      'Set your price (e.g. $9, $19, or "Pay What You Want").',
      'Share the checkout link via TikTok, Instagram, Reddit student forums, or campus Discord channels.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Valid identity documentation', 'Bank account or PayPal for weekly payouts', 'Original intellectual property (no copyrighted textbook scans)'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Accepts creators worldwide with multi-currency checkout.'
    },
    earnings: {
      range: '$20 - $2,000+ / month',
      averageHourly: 'Passive Scalable',
      payoutMethods: ['PayPal', 'Direct Bank Transfer (ACH) via Stripe'],
      payoutFrequency: 'Every Friday for all cleared sales',
      minimumPayout: '$10.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Gumroad Inc., San Francisco, CA',
      taxReporting: 'Provides annual 1099 statements and automated digital sales tax collection (VAT/GST)',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Automated worldwide sales tax compliance handled directly by Gumroad.',
        'Buyer fraud detection and credit card dispute coverage.',
        'Strict copyright enforcement protecting original creator rights.'
      ]
    },
    pros: [
      'Make something once, sell it hundreds of times while you sleep or attend class.',
      'Zero inventory, zero shipping, zero supply chain costs.',
      'Flat 10% fee only when you make a sale (no monthly recurring hosting charges).'
    ],
    watchOuts: [
      '10% platform fee plus small payment processing transaction fee.',
      'Success requires sharing your work in online communities where students hang out.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '5-10 hrs to build, then 1-2 hrs/wk',
    skillsNeeded: ['Notion Setup', 'Canva Graphic Design', 'Study Note Synthesis', 'Social Media Sharing'],
    officialUrl: 'https://gumroad.com',
    featured: true,
    studentProTip: 'The #1 best-selling student digital product is a cohesive "All-in-One College Life & Grade Tracker Notion System". If you already built one for yourself, polish it and put it up for $8.'
  },
  {
    id: 'medium-partner',
    name: 'Medium Partner Program',
    tagline: 'Get paid when Medium subscribers read your tech tutorials, essays, and college guides.',
    category: 'creation',
    description: 'Medium is a clean publishing platform with an established paid subscriber network. When paying Medium members read your technical walkthroughs, science explainers, or career retrospectives, you earn a share of their monthly subscription fee.',
    howItWorks: [
      'Apply to the Medium Partner Program once you publish your first high-quality story.',
      'Publish detailed articles under popular tags like Programming, Data Science, Productivity, or Education.',
      'Submit your stories to high-traffic Medium publications (e.g. Towards Data Science, Better Programming) for instant reach.',
      'Earn monthly payouts based on the reading time and engagement of paying members.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Must be a Medium Member ($5/mo)', 'Reside in a Stripe-supported country', 'Original writing that complies with Medium content guidelines'],
      studentFriendlyScore: 8,
      internationalAllowed: true,
      internationalNotes: 'Supported in 119 countries through Stripe Connect.'
    },
    earnings: {
      range: '$20 - $500+ / month',
      averageHourly: '$15 - $30/hr effective',
      payoutMethods: ['Stripe Direct Deposit'],
      payoutFrequency: 'Monthly on the 8th of each month',
      minimumPayout: '$10.00'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'A Medium Corporation, San Francisco, CA',
      taxReporting: 'Generates Form 1099-MISC/1099-NEC and collects digital W-9 / W-8BEN',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Strict anti-AI spam quality rules: rewards deep human expertise and personal lived experience.',
        'Author retains full copyright and can delete or export content at any time.',
        'Transparent calculation metrics based on member read time, claps, highlights, and replies.'
      ]
    },
    pros: [
      'Built-in distribution: you do not need an existing social media following to get 10,000 views.',
      'Computer Science and Engineering students can monetize their university lab notes and code tutorials.',
      'Articles continue to accrue monthly earnings months after publication.'
    ],
    watchOuts: [
      'Requires Medium membership ($5/mo) to enroll as an approved Partner writer.',
      'Earnings depend strictly on paying member reading time, not external public clicks.'
    ],
    difficulty: 'Intermediate',
    timeCommitment: '2-5 hrs/wk',
    skillsNeeded: ['Technical Writing', 'Data Science', 'Coding Tutorials', 'Storytelling'],
    officialUrl: 'https://medium.com/earn',
    featured: false,
    studentProTip: 'Whenever you spend 4 hours debugging a weird programming issue or lab protocol, write a 600-word tutorial on "How to fix X". Other students search Google for that exact fix every day.'
  },

  // --- MICRO-TASKS & USER TESTING ---
  {
    id: 'prolific',
    name: 'Prolific',
    tagline: 'Ethical academic research platform guaranteeing fair hourly pay for university surveys.',
    category: 'microtasks',
    description: 'Prolific is the gold standard for research studies. Founded out of Oxford University, it connects researchers from Harvard, Stanford, and Cambridge with participants. Crucially, Prolific strictly mandates an ethical minimum pay rate of £6.00 / $8.00 per hour.',
    howItWorks: [
      'Complete your detailed demographics profile (education, major, hobbies, tech use).',
      'Receive automatic notifications when academic surveys and psychology studies match your profile.',
      'Complete 5 to 30-minute academic experiments or cognitive tests on your laptop or phone.',
      'Instant study approval and payout directly to your PayPal account.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Valid government photo ID for identity verification', 'PayPal account', 'Honest responses that pass attention-check questions'],
      studentFriendlyScore: 10,
      internationalAllowed: true,
      internationalNotes: 'Supports participants across 38 OECD countries including US, UK, Canada, Australia, EU, and South Africa.'
    },
    earnings: {
      range: '$8 - $16 / hour',
      averageHourly: '$11.50/hr',
      payoutMethods: ['PayPal'],
      payoutFrequency: 'Instant cashout after your first 4 completed submissions; otherwise twice weekly',
      minimumPayout: '£6.00 (~$7.80 USD)'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Prolific Science Ltd, Oxford, United Kingdom',
      taxReporting: 'Provides clean participant earning statements for self-employment reporting',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Enforces a strict minimum wage floor (£6.00 / $8.00 per hour); low-paying surveys are paused automatically.',
        'Academic Institutional Review Board (IRB) approved studies ensure ethical, non-harmful questions.',
        'Never sells your personal contact details or floods your inbox with marketing spam.'
      ]
    },
    pros: [
      'The single most trustworthy, scam-free survey platform on the internet.',
      'Zero screened-out frustration: unlike junk survey sites, you are never rejected halfway through a survey.',
      'Fascinating studies: participate in cutting-edge university behavioral and psychology research.'
    ],
    watchOuts: [
      'Popular studies fill up within seconds; keeping the browser tab open while studying is helpful.',
      'Waitlist for onboarding in some regions depending on demographic quotas.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '1-5 hrs/wk (Fill spare 15-minute breaks)',
    skillsNeeded: ['Careful Reading', 'Attention to Detail', 'Honesty in Responses'],
    officialUrl: 'https://www.prolific.com',
    featured: true,
    studentProTip: 'Install the official Prolific browser extension on your laptop. A gentle chime alerts you when a new $4 study pops up while you are working in the library.'
  },
  {
    id: 'usertesting',
    name: 'UserTesting',
    tagline: 'Get paid $10 to $60 for speaking your thoughts while testing new websites and apps.',
    category: 'microtasks',
    description: 'Companies like Adobe, Apple, Canva, and Airbnb need real student feedback on their mobile apps and websites. UserTesting pays you to navigate a digital prototype on your screen while speaking your raw thoughts aloud into a microphone.',
    howItWorks: [
      'Submit a quick 5-minute practice test to verify clear microphone audio and natural thought-voicing.',
      'Answer short 1-minute screener questions to match tests targeting student demographics.',
      'Open the screen recorder, perform simple tasks (e.g. "Try finding the return policy"), and speak your thoughts aloud for 15-20 minutes.',
      'Receive exactly $10 per completed standard test, or $30-$60 for live moderated 30-60 minute Zoom sessions.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Computer or smartphone with working microphone', 'Reliable high-speed internet', 'Ability to articulate thoughts fluently in English (or local language)', 'Verified PayPal account'],
      studentFriendlyScore: 9,
      internationalAllowed: true,
      internationalNotes: 'Accepts contributors globally across North America, Europe, Asia-Pacific, and Latin America.'
    },
    earnings: {
      range: '$10 - $60 per session',
      averageHourly: '$25 - $30/hr effective',
      payoutMethods: ['PayPal'],
      payoutFrequency: 'Automated deposit to PayPal exactly 7 days after completing the test',
      minimumPayout: '$10.00 (Single test threshold)'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'UserTesting Inc., San Francisco, CA',
      taxReporting: 'Issues 1099 documentation for qualifying annual US earnings',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Strictly prohibits clients from asking for passwords, credit card numbers, or sensitive SSNs.',
        'Automated 7-day payment pipeline guaranteed by UserTesting corporate escrow.',
        'High privacy standard: your face is not recorded unless you explicitly opt into a live interview.'
      ]
    },
    pros: [
      'Extremely high effective hourly return ($10 for 15 minutes = $40/hr pace).',
      'Fun and engaging: test unreleased video games, student fintech apps, and brand new interfaces.',
      'No specialized coding or design knowledge required; companies want everyday user feedback.'
    ],
    watchOuts: [
      'You will be disqualified from some screeners that look for specific non-student demographics.',
      'Microphone quality must be crisp without loud dorm background noise.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '2-6 hrs/wk',
    skillsNeeded: ['Vocal Articulation', 'Constructive Feedback', 'Attentive Observation'],
    officialUrl: 'https://www.usertesting.com',
    featured: true,
    studentProTip: 'Do not stay silent while clicking. The secret to 5-star tester ratings is constant narration: "Now I am looking for the search bar, but the contrast makes it hard to spot, so I feel slightly confused."'
  },
  {
    id: 'respondent',
    name: 'Respondent.io',
    tagline: 'High-paying 1-on-1 industry research interviews paying $50 to $150 per hour.',
    category: 'microtasks',
    description: 'Respondent connects enterprise researchers with specific audiences for 30 to 60-minute video interviews. College students who use specific software tools, study particular majors, or have unique consumer habits can earn substantial stipends.',
    howItWorks: [
      'Create a verified profile using your LinkedIn or university student email address.',
      'Browse research studies matching your background (e.g. "College Students Who Use AI Study Aids").',
      'Answer a 2-minute eligibility questionnaire.',
      'Book a 45-minute video call slot directly on the researcher’s Google Calendar and speak during the session.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['LinkedIn profile or verified university email', 'Webcam and quiet room for video interview', 'PayPal account'],
      studentFriendlyScore: 8,
      internationalAllowed: true,
      internationalNotes: 'Studies accept global participants, with a large concentration of US, UK, and European researchers.'
    },
    earnings: {
      range: '$40 - $150 per study',
      averageHourly: '$60 - $80/hr effective',
      payoutMethods: ['PayPal'],
      payoutFrequency: 'Processed via PayPal within 8-10 business days of interview sign-off',
      minimumPayout: 'No minimum (Full study honorarium paid)'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Respondent Inc., Austin, Texas',
      taxReporting: 'Generates standard independent contractor tax receipts',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Researchers must deposit client incentive fees in platform escrow before sessions can be scheduled.',
        'Transparent platform fee (5% fulfillment processing deducted from the incentive).',
        'Strict nondisclosure agreements protect your identity from being published publicly.'
      ]
    },
    pros: [
      'Exceptional payouts for student time: one 45-minute interview can pay for a week’s groceries ($75+).',
      'Engaging conversations with product designers and university faculty.',
      'Zero homework or ongoing obligation: complete the single video call and you are done.'
    ],
    watchOuts: [
      'Selection rates are selective; applying to 5-8 screeners often yields 1 confirmed study.',
      '5% fulfillment fee deducted from the payout.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '1-3 hrs/wk (As studies match)',
    skillsNeeded: ['Articulate Speaking', 'Punctuality', 'Honest Consumer Insights'],
    officialUrl: 'https://www.respondent.io',
    featured: false,
    studentProTip: 'Keep your LinkedIn profile up to date with your accurate university major and any campus leadership roles. Verified LinkedIn accounts get selected at double the rate of bare profiles.'
  },
  {
    id: 'clickworker',
    name: 'Clickworker / UHRS',
    tagline: 'Bite-sized micro-tasks, AI training data labeling, and audio transcription.',
    category: 'microtasks',
    description: 'Clickworker provides micro-tasks for global tech companies training artificial intelligence models. Tasks include categorizing images, checking search engine result quality (UHRS assessment), and short audio recordings.',
    howItWorks: [
      'Pass short language assessments on the Clickworker portal to unlock higher-tier jobs.',
      'Qualify for the UHRS (Universal Human Relevance System) assessment module.',
      'Complete micro-tasks lasting from 10 seconds to 3 minutes each at your own speed.',
      'Accumulate earnings in your account and receive weekly automated transfers.'
    ],
    eligibility: {
      minAge: 18,
      requirements: ['Valid identity confirmation', 'Payoneer or PayPal account', 'Pass basic comprehension assessments'],
      studentFriendlyScore: 8,
      internationalAllowed: true,
      internationalNotes: 'Available in over 130 countries worldwide with multi-lingual task availability.'
    },
    earnings: {
      range: '$8 - $15 / hour',
      averageHourly: '$10/hr',
      payoutMethods: ['Payoneer', 'PayPal', 'Direct Bank ACH (SEPA / US)'],
      payoutFrequency: 'Weekly on Wednesdays/Thursdays once account reaches threshold',
      minimumPayout: '$10.00 (€10 for EU)'
    },
    safetyLegality: {
      verifiedLegitimate: true,
      businessRegistration: 'Clickworker GmbH, Essen, Germany & San Francisco, CA',
      taxReporting: 'Complies with EU/US contractor reporting standards; self-employment records provided',
      escrowOrGuaranteedPay: true,
      safetyAuditNotes: [
        'Fully GDPR compliant and ISO 27001 data security certified.',
        'Over 20 years in continuous legal operation serving Microsoft and global enterprises.',
        'No payments or upfront fees ever required from workers.'
      ]
    },
    pros: [
      'Ultimate flexibility: work for 10 minutes between lectures, or 2 hours at midnight.',
      'Accessible from both desktop browsers and the Clickworker mobile app.',
      'Great for non-native English speakers with strong language abilities in other tongues.'
    ],
    watchOuts: [
      'Tasks can be repetitive.',
      'UHRS qualification tests require focused reading to avoid temporary lockouts.'
    ],
    difficulty: 'Beginner',
    timeCommitment: '2-10 hrs/wk',
    skillsNeeded: ['Data Categorization', 'Search Engine Evaluation', 'Fast Typing'],
    officialUrl: 'https://www.clickworker.com',
    featured: false,
    studentProTip: 'Take the time to qualify for UHRS (Universal Human Relevance System) through the Clickworker dashboard. UHRS tasks pay almost double the standard general task queue.'
  }
];

export const CATEGORY_INFO: Record<Exclude<import('../types/platform').PlatformCategory, 'all'>, {
  name: string;
  tagline: string;
  description: string;
  idealFor: string;
  averageEarnings: string;
  typicalHours: string;
}> = {
  freelancing: {
    name: 'Freelancing & Client Gigs',
    tagline: 'Turn your design, writing, or coding skills into project contracts.',
    description: 'Provide specialized services to businesses and individuals with defined project scope and milestone escrow protection.',
    idealFor: 'Students with existing skills in design, programming, writing, translation, or media.',
    averageEarnings: '$20 – $75+ / hr',
    typicalHours: '5 – 15 hrs / wk'
  },
  tutoring: {
    name: 'Online Tutoring & Teaching',
    tagline: 'Teach languages or academic subjects directly from your dorm.',
    description: 'Share your academic strengths in STEM or conversational language fluency with students across the globe on flexible calendars.',
    idealFor: 'High-achieving students, STEM majors, and native language speakers who enjoy 1-on-1 teaching.',
    averageEarnings: '$15 – $50+ / hr',
    typicalHours: '3 – 12 hrs / wk'
  },
  internships: {
    name: 'Micro-Internships & Early Career',
    tagline: 'Short-term paid corporate projects with real resume credentials.',
    description: 'University-vetted short projects (10-40 total hours) and verified campus jobs that fit around your exam calendar.',
    idealFor: 'Career-focused undergrads wanting Fortune 500 resume bullets and employer references.',
    averageEarnings: '$18 – $35 / hr',
    typicalHours: '5 – 15 hrs / wk'
  },
  creation: {
    name: 'Digital Content & Products',
    tagline: 'Build digital assets once and generate recurring student income.',
    description: 'Publish study notes, Notion templates, tech tutorials, and newsletters that continue earning while you study for exams.',
    idealFor: 'Organized students, creative writers, and tech enthusiasts who love sharing knowledge.',
    averageEarnings: 'Scalable / $50 – $1,500+ / mo',
    typicalHours: '3 – 8 hrs / wk'
  },
  microtasks: {
    name: 'Micro-Tasks & Usability Testing',
    tagline: 'Zero commitment: earn during spare 15-minute campus breaks.',
    description: 'Get paid for answering academic psychology surveys, testing new mobile apps, or participating in recorded 1-on-1 research interviews.',
    idealFor: 'Busy students wanting zero stress, no client management, and instant payouts during free gaps.',
    averageEarnings: '$10 – $35+ / hr',
    typicalHours: '1 – 6 hrs / wk'
  }
};
