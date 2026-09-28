export interface GuideSection {
  id: string;
  title: string;
  category: 'balance' | 'legality' | 'finance' | 'safety';
  readTime: string;
  summary: string;
  keyTakeaways: string[];
  content: {
    heading: string;
    body: string;
    bulletPoints?: string[];
  }[];
}

export const STUDENT_GUIDES: GuideSection[] = [
  {
    id: 'balance-studies-work',
    title: 'The 20-Hour Rule: Balancing Rigorous Studies with Part-Time Work',
    category: 'balance',
    readTime: '4 min read',
    summary: 'How to protect your GPA while maintaining a reliable side-income stream using proven collegiate time-blocking systems.',
    keyTakeaways: [
      'Empirical academic research shows working more than 15-20 hours/week drops median student GPA by 0.4 points.',
      'Always reserve 2 hours of self-study for every 1 credit lecture hour.',
      'Implement the "Exam Week Freeze" contract clause with clients at the start of every semester.'
    ],
    content: [
      {
        heading: '1. The Golden 20-Hour Ceiling',
        body: 'Multiple university educational studies (including research from the Georgetown Center on Education and the Workforce) demonstrate a sharp inflection point: full-time students working up to 15-20 hours per week achieve equal or higher GPAs due to structured discipline. However, exceeding 20 hours per week creates exponential sleep deprivation, missed lectures, and severe academic decline.',
        bulletPoints: [
          'Full-time course load (15 credit hours) requires ~30 hours of lectures and reading.',
          'Your part-time income window should realistically be capped at 8 to 15 hours per week during term time.',
          'Scale up to 25-35 hours only during summer, spring break, and winter recesses.'
        ]
      },
      {
        heading: '2. The "Buffer Sunday" Strategy',
        body: 'Never schedule freelance deadlines or client tutoring sessions on Sundays. Keep Sunday afternoons as a non-negotiable buffer. If a college assignment took 3 hours longer than expected during the week, Sunday absorbs the spillover without you needing to pull all-nighters or deliver late work to clients.'
      },
      {
        heading: '3. Communicating with Freelance Clients & Tutoring Families',
        body: 'Professional clients appreciate proactive academic communication. At the beginning of the semester, mark your midterm and final exam weeks on your calendar. Add a standard footnote in your client onboarding: "Please note that between Nov 12-19, project turnaround is extended by 48 hours due to university semester examinations."'
      }
    ]
  },
  {
    id: 'student-taxes-and-legality',
    title: 'Student Tax 101: Understanding 1099, W-2 & Independent Contractor Rules',
    category: 'legality',
    readTime: '5 min read',
    summary: 'Demystifying tax withholding, self-employment tax, 1099-NEC forms, and legitimate student expense deductions.',
    keyTakeaways: [
      'Freelance and platform earnings are considered self-employment income (1099-NEC or 1099-K).',
      'Always set aside 15% to 25% of every freelance payment in a separate high-yield savings account for taxes.',
      'Legitimate student freelancers can legally deduct business expenses: software subscriptions, laptop depreciation, and internet portions.'
    ],
    content: [
      {
        heading: '1. The Difference Between W-2 and 1099',
        body: 'When you work an on-campus job (e.g., campus library, dining hall) via Handshake, you are an employee (Form W-2). Taxes are automatically withheld from your paycheck. When you earn on Upwork, Preply, Prolific, or Gumroad, you are an independent contractor (Form 1099). No taxes are deducted upfront — meaning you are responsible for reporting and paying your own self-employment tax.'
      },
      {
        heading: '2. The 20% Reserve Rule for Students',
        body: 'The single biggest mistake student freelancers make is spending 100% of the money deposited in their checking account. Whenever $100 arrives from a freelance project or tutoring session, immediately transfer $20 into a dedicated savings sub-account named "Taxes & Buffer". When tax season arrives in April, you will never be caught off-guard.'
      },
      {
        heading: '3. Legal Expense Deductions You Can Claim',
        body: 'As a self-employed student contractor, you are only taxed on your NET profit, not your gross revenue. Keep digital receipts for tools required for your side work:',
        bulletPoints: [
          'Software tools: Adobe Creative Cloud, Canva Pro, Figma, Grammarly, IDE subscriptions.',
          'Hardware: External monitor, drawing tablet, microphone, webcam used for client calls.',
          'Platform fees: Upwork connects, Fiverr platform commissions, payment processing charges.',
          'Home office / Internet: A proportional fraction of your personal Wi-Fi bill.'
        ]
      },
      {
        heading: '4. International Students (F-1 Visa Rules)',
        body: 'CRITICAL: If you are an international student studying in the United States on an F-1 visa, federal immigration regulations strictly prohibit unauthorized off-campus employment. You are generally restricted to 20 hours per week of on-campus employment during the academic term. Any off-campus internships or practical training must be pre-authorized via Curricular Practical Training (CPT) or Optional Practical Training (OPT) through your designated school official (DSO).'
      }
    ]
  },
  {
    id: 'scam-prevention-red-flags',
    title: 'The Anti-Scam Playbook: 6 Red Flags That Protect Student Earners',
    category: 'safety',
    readTime: '4 min read',
    summary: 'How to instantly identify fake work-from-home scams, fraudulent checks, and predatory platforms targeting students.',
    keyTakeaways: [
      'Legitimate employers NEVER ask you to send money for equipment, background checks, or software licenses.',
      'Any client insisting on moving conversations to Telegram or WhatsApp before a contract is 99% a scam.',
      'Never accept a cashier’s check with instructions to "keep a fee and wire back the remainder" (fake check fraud).'
    ],
    content: [
      {
        heading: 'Red Flag #1: The Upfront Payment Trap',
        body: 'Scammers frequently send official-looking emails offering $35/hour for simple data entry or virtual assistant roles, then state: "You must first purchase an approved secure work laptop from our certified vendor, and we will reimburse you on your first check." Once you wire money or buy gift cards, the scammer disappears. A real company provides company equipment directly or uses your existing computer at zero cost.'
      },
      {
        heading: 'Red Flag #2: The Off-Platform Telegram / WhatsApp Push',
        body: 'Legitimate platforms like Upwork, Fiverr, Wyzant, and UserTesting have built-in chat and escrow systems. When someone sends you a message saying "Message our hiring manager @recruiter_john on Telegram for immediate onboarding," they are trying to strip away the platform’s escrow protection and dispute mediation.'
      },
      {
        heading: 'Red Flag #3: The Fake Check / Overpayment Scheme',
        body: 'You receive an offer for a remote student project and a physical or electronic check for $2,500 arrives. The "employer" says: "Deposit this, keep $500 for your student stipend, and wire the remaining $2,000 to our software setup technician." Federal banking laws require banks to make check funds available within 1-2 days, but the check takes 2-3 weeks to actually clear. When the fake check bounces, your bank pulls the full $2,500 from your student account, leaving you with negative balances and fraud flags.'
      },
      {
        heading: 'Red Flag #4: Academic Dishonesty / Contract Cheating Services',
        body: 'Websites that offer to pay students to write graded essays, complete university homework sets, or take proctored exams for other students violate university honor codes. Engaging in contract cheating carries severe consequences: academic suspension, permanent expulsion, transcript marks, and legal civil liability.'
      }
    ]
  },
  {
    id: 'student-financial-literacy',
    title: 'Student Financial Basics: 50/30/20 Budgeting & College Emergency Funds',
    category: 'finance',
    readTime: '3 min read',
    summary: 'A simple framework to manage your side-hustle earnings, avoid debt traps, and build financial security before graduation.',
    keyTakeaways: [
      'Divide earnings into: 50% Essentials (food, rent, textbooks), 30% Flexibility (campus social life), 20% Future (emergency fund & savings).',
      'Build a $500–$1,000 "Mini Emergency Fund" in a High-Yield Savings Account (HYSA) to avoid credit card debt.',
      'Do not keep side-income sitting in a 0.01% checking account when high-yield accounts pay 4-5% APY.'
    ],
    content: [
      {
        heading: '1. The College-Adapted 50/30/20 Split',
        body: 'Traditional adult budgeting assumes fixed salaries. For variable student side-income, adapt the split:',
        bulletPoints: [
          '50% Campus Essentials: Course textbooks, required software licenses, meal supplements, public transit pass, phone bill.',
          '30% Student Life: Coffee runs, dining out with friends, campus clubs, weekend activities.',
          '20% Foundation: Split evenly between your tax reserve (10%) and an emergency savings cushion (10%).'
        ]
      },
      {
        heading: '2. The $500 Peace-of-Mind Buffer',
        body: 'College emergencies strike unexpectedly: a cracked laptop screen during midterms, an unexpected course material lab fee, or a dental visit. Having $500 in a separate high-yield savings account means an unforeseen $150 emergency never derails your studies or forces you onto high-interest credit card debt.'
      },
      {
        heading: '3. Track Hours vs Net Earning',
        body: 'Track your actual time investment including setup and revisions. If a $30 graphic design gig takes you 6 hours because the client requests 8 revisions, your actual wage was $5/hour — below minimum wage. Learn to set boundary limits on revisions so your college study time remains respected.'
      }
    ]
  }
];
