export type PlatformCategory = 
  | 'all'
  | 'freelancing'
  | 'tutoring'
  | 'internships'
  | 'creation'
  | 'microtasks';

export interface Platform {
  id: string;
  name: string;
  tagline: string;
  category: Exclude<PlatformCategory, 'all'>;
  description: string;
  howItWorks: string[];
  eligibility: {
    minAge: number;
    requirements: string[];
    studentFriendlyScore: number; // 1-10
    internationalAllowed: boolean;
    internationalNotes?: string;
  };
  earnings: {
    range: string;
    averageHourly: string;
    payoutMethods: string[];
    payoutFrequency: string;
    minimumPayout: string;
  };
  safetyLegality: {
    verifiedLegitimate: boolean;
    businessRegistration: string;
    taxReporting: string;
    escrowOrGuaranteedPay: boolean;
    safetyAuditNotes: string[];
  };
  pros: string[];
  watchOuts: string[];
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  timeCommitment: string;
  skillsNeeded: string[];
  officialUrl: string;
  featured?: boolean;
  studentProTip: string;
}

export type ApplicationStatus = 'saved' | 'applying' | 'approved' | 'active';

export interface SavedPlatformItem {
  platformId: string;
  status: ApplicationStatus;
  notes: string;
  dateAdded: string;
}

export interface QuizAnswers {
  hoursAvailable: number; // e.g. 3, 7, 12, 18
  primarySkill: 'academics' | 'creative' | 'tech' | 'tasks' | 'career';
  device: 'phone' | 'laptop';
  goal: 'immediate_cash' | 'skill_building' | 'passive_digital';
}
