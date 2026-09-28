export interface StudentAuditCase {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  offerExcerpt: string;
  context: string;
  redFlagsDetected: string[];
  verdict: 'SCAM_ALERT' | 'HIGH_RISK' | 'VERIFIED_SAFE';
  analysis: string;
  legalBreakdown: string;
  whatToDoInstead: string;
}

export const STUDENT_AUDIT_CASES: StudentAuditCase[] = [
  {
    id: 'data-entry-check',
    badge: 'Real Dorm Case Study',
    title: 'The "$38/hr Remote Assistant" Check Trap',
    subtitle: 'High-paying data entry offer received on student university webmail',
    offerExcerpt: '"We found your student profile on campus. You are accepted for our remote Administrative Data Assistant role ($38/hr, 10 hrs/wk). We are mailing you a company check for $2,800 to purchase certified home office software from our trusted vendor."',
    context: 'Sophomore biology student received an unsolicited email from a purported healthcare research firm praising their background.',
    redFlagsDetected: [
      'Unsolicited job offer with no formal interview or portfolio review',
      'Pay rate ($38/hr) is wildly distorted for entry-level data processing',
      'Fake Check Scam mechanism: asking student to deposit a check and wire money forward'
    ],
    verdict: 'SCAM_ALERT',
    analysis: 'Federal banking regulations (Expedited Funds Availability Act) require banks to make check funds available within 1–2 business days. However, the check takes up to 21 days to genuinely bounce back. The moment the counterfeit check is flagged, the bank removes the full $2,800 from your student account. Any money you wired to the "vendor" is gone forever, and your bank account may be locked for fraud.',
    legalBreakdown: 'Bank liability rests with the depositor. Depositing counterfeit cashier checks can permanently damage your ChexSystems banking history for 5 years.',
    whatToDoInstead: 'Mark email as phishing in your campus portal. Apply only through Handshake or university career boards where employer EIN numbers are verified.'
  },
  {
    id: 'telegram-retyping',
    badge: 'Social Media Ad Trap',
    title: 'The Telegram PDF-to-Word "Project Fee" Scheme',
    subtitle: 'Instagram/Discord DM offering payment for retyping scanned documents',
    offerExcerpt: '"Simple task for college students! Retype 40 PDF pages into MS Word for $600. To start, message our project supervisor @GlobalDocs_HR on Telegram and pay a refundable $25 security badge verification deposit."',
    context: 'First-year student with spare evening hours looking for fast laptop work without experience.',
    redFlagsDetected: [
      'Off-platform relocation directly to anonymous Telegram handles',
      'Advance-Fee Fraud: charging the worker a "deposit" or "badge fee" to unlock work',
      'Artificial tasks: OCR software converts PDFs for free; nobody pays $600 to retype text'
    ],
    verdict: 'SCAM_ALERT',
    analysis: 'No genuine business pays humans $600 to manually retype 40 pages when optical character recognition (OCR) takes 3 seconds. The goal is solely to extract the $25 "deposit" or identity info. Once paid, scammers block you or request a larger "tax release clearance fee."',
    legalBreakdown: 'Advance-fee fraud violates 18 U.S. Code § 1343 (Wire Fraud).',
    whatToDoInstead: 'Use verified transcription on Clickworker or academic testing on Prolific, which never demand a dime from contributors.'
  },
  {
    id: 'essay-writing-contract',
    badge: 'Academic Honor Code Violation',
    title: 'The "Essay Helper" Ghostwriting Network',
    subtitle: 'Websites offering $40–$80 per paper to write course essays for other students',
    offerExcerpt: '"Earn $800/month in your dorm! Write collegiate papers, literature reviews, and research summaries for busy students in your major. Confidential payments directly via PayPal."',
    context: 'High-performing English and Pre-Law student tempted by high rates to write essays in their field.',
    redFlagsDetected: [
      'Contract cheating and academic fraud facilitation',
      'Blackmail liability: ghostwriting syndicates frequently threaten to report student writers to their deans unless they keep working or pay extortion',
      'Violates collegiate student codes of conduct universally'
    ],
    verdict: 'HIGH_RISK',
    analysis: 'Writing graded academic work for other students violates the academic integrity code of every accredited university. Furthermore, student ghostwriters are routinely subjected to blackmail by malicious platform operators threatening to send their real identities, course transcripts, and samples to university disciplinary boards.',
    legalBreakdown: 'Classified as contract cheating. In several jurisdictions (e.g. California, UK Higher Education Act 2022, Australia TEQSA Act), operating or facilitating commercial cheating services is a criminal misdemeanor.',
    whatToDoInstead: 'Channel your subject mastery into legitimate, ethical tutoring on Preply or Wyzant, where you teach students foundational understanding rather than doing their work.'
  },
  {
    id: 'parker-dewey-microinternship',
    badge: 'Audited & Certified',
    title: 'Corporate Micro-Internship on Parker Dewey',
    subtitle: 'Paid competitive intelligence research project for an enterprise client',
    offerExcerpt: '"15-hour research project: Benchmark competitor pricing across 8 SaaS providers. Fixed stipend: $375 upon deliverable submission. Communication through Parker Dewey portal."',
    context: 'Junior business student seeking resume experience for summer corporate recruiting.',
    redFlagsDetected: [],
    verdict: 'VERIFIED_SAFE',
    analysis: 'Parker Dewey acts as the legal employer of record (W-9 / 1099 compliant). The enterprise client deposits the full stipend into corporate escrow before the student begins. You never purchase tools, zero fees are deducted from your compensation, and the experience counts as professional work experience on your resume.',
    legalBreakdown: 'Public Benefit Corporation audited and recommended by university career advisory councils across the United States.',
    whatToDoInstead: 'Apply with a tailored cover note highlighting relevant coursework and complete the project within the agreed timeline.'
  }
];

export interface EarningsGoal {
  name: string;
  monthlyTarget: number;
  description: string;
  recommendedCombination: {
    platformName: string;
    hoursPerWeek: number;
    activity: string;
    estWeekly: number;
  }[];
}

export const STUDENT_EARNING_BLUEPRINTS: EarningsGoal[] = [
  {
    name: 'Textbooks & Campus Groceries',
    monthlyTarget: 300,
    description: 'Lightweight side-income (3–5 hours/week) designed to cover monthly groceries, meal plans, and course materials without study friction.',
    recommendedCombination: [
      {
        platformName: 'Prolific',
        hoursPerWeek: 2,
        activity: 'Verified academic research studies between lectures',
        estWeekly: 25
      },
      {
        platformName: 'UserTesting',
        hoursPerWeek: 1.5,
        activity: '1 to 2 usability website walkthrough tests',
        estWeekly: 45
      }
    ]
  },
  {
    name: 'Rent & Living Expenses Supplement',
    monthlyTarget: 750,
    description: 'Steady, predictable cash flow (6–8 hours/week) leveraging academic subject mastery or language fluency.',
    recommendedCombination: [
      {
        platformName: 'Preply or Wyzant',
        hoursPerWeek: 4,
        activity: '1-on-1 language practice or STEM high school tutoring',
        estWeekly: 110
      },
      {
        platformName: 'UserTesting / Respondent',
        hoursPerWeek: 2,
        activity: 'Product feedback & consumer video sessions',
        estWeekly: 65
      }
    ]
  },
  {
    name: 'Career Capital & Full Independence',
    monthlyTarget: 1400,
    description: 'Professional high-value projects (10–14 hours/week) that simultaneously forge portfolio credibility for post-grad full-time jobs.',
    recommendedCombination: [
      {
        platformName: 'Parker Dewey / Contra',
        hoursPerWeek: 7,
        activity: 'Corporate micro-internship deliverables or freelance design/code',
        estWeekly: 220
      },
      {
        platformName: 'Wyzant STEM Tutoring',
        hoursPerWeek: 4,
        activity: 'Calculus, Organic Chemistry, or Python tutoring at $35/hr',
        estWeekly: 140
      }
    ]
  }
];
