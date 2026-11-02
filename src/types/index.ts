export type ProjectCategory = 'all' | 'furniture' | 'joinery' | 'shop' | 'turning' | 'diy' | 'commissions';

export type BlogCategory = 
  | 'All'
  | 'DIY & Tutorials'
  | 'Oils (Hardwax & Natural)'
  | 'Polyurethanes & Topcoats'
  | 'Tool Reviews'
  | 'Joinery Techniques'
  | 'Shop Setup'
  | 'Finishing & Care'
  | 'Timber Guide';

export interface ToolUsed {
  id: string;
  name: string;
  category: string;
  role: string;
  affiliateUrl: string;
  priceEstimate: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'furniture' | 'joinery' | 'shop' | 'turning' | 'diy' | 'commissions';
  subCategory?: string;
  timberSpecies: string[];
  finish: string;
  dimensions: string;
  buildTime: string;
  durationDates?: string;
  timelineStatus?: 'Planning' | 'In Progress' | 'Finishing' | 'Completed';
  difficulty: 'Apprentice' | 'Journeyman' | 'Master';
  description: string;
  fullStory: string;
  keyFeatures: string[];
  image: string;
  secondaryImage?: string;
  toolsUsed: ToolUsed[];
  joineryMethods: string[];
  clientOrLocation: string;
  year: number;
  isUserPost?: boolean;
}

export interface AffiliateProduct {
  id: string;
  name: string;
  brand: string;
  category: 'saws' | 'hand-tools' | 'dust-collection' | 'routers' | 'finishing' | 'clamps';
  categoryLabel: string;
  subCategory?: string;
  badge: 'Best Overall' | 'Best Value' | 'Premium Pick' | 'Editor’s Choice' | 'Most Durable';
  rating: number;
  reviewsCount: number;
  priceTier: '$' | '$$' | '$$$' | '$$$$';
  priceEstimate: string;
  image: string;
  summary: string;
  pros: string[];
  cons: string[];
  specs: Record<string, string>;
  affiliateLink: string;
  merchant: 'Rockler' | 'Woodcraft' | 'Amazon' | 'Lee Valley' | 'Highland Woodworking';
  isUserPost?: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: 'DIY & Tutorials' | 'Oils (Hardwax & Natural)' | 'Polyurethanes & Topcoats' | 'Tool Reviews' | 'Joinery Techniques' | 'Shop Setup' | 'Finishing & Care' | 'Timber Guide';
  subCategory?: string;
  readTime: string;
  date: string;
  isoDate: string;
  coverImage: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  keyTakeaways: string[];
  tableOfContents: { id: string; title: string }[];
  featuredProduct?: AffiliateProduct;
  diyDifficulty?: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime?: string;
  materialsNeeded?: string[];
  finishType?: 'oil' | 'polyurethane' | 'lacquer' | 'wax' | 'hybrid';
  contentSections: {
    id: string;
    heading: string;
    paragraphs: string[];
    callout?: {
      type: 'tip' | 'warning' | 'pro-tip';
      title: string;
      text: string;
    };
    comparisonTable?: {
      headers: string[];
      rows: string[][];
    };
  }[];
  faqItems: FAQItem[];
  testingBreakdown?: { category: string; score: number; comment: string }[];
  galleryImages?: string[];
  pullQuote?: { quote: string; author: string; role: string };
  prosAndCons?: { pros: string[]; cons: string[] };
  isUserPost?: boolean;
}

export interface CutListItem {
  partName: string;
  qty: number;
  thickness: string;
  width: string;
  length: string;
  material: string;
  notes?: string;
}

export interface WoodworkingPlan {
  id: string;
  title: string;
  slug: string;
  category: 'furniture' | 'shop-jigs' | 'outdoor' | 'cabinetry' | 'small-craft';
  categoryLabel: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Master';
  estimatedHours: string;
  totalBoardFeet: string;
  estimatedCost: string;
  dimensions: string;
  image: string;
  schematicImage?: string;
  description: string;
  cutList: CutListItem[];
  hardwareList: string[];
  recommendedTools: string[];
  recommendedTimber: string[];
  assemblyPhases: {
    phaseNumber: number;
    title: string;
    description: string;
    proTips?: string;
  }[];
  pdfDownloadUrl?: string;
  isUserPost?: boolean;
}

export interface WoodSpecies {
  name: string;
  botanicalName: string;
  jankaHardness: number; // lbf
  workability: 'Easy' | 'Moderate' | 'Challenging';
  tearoutRisk: 'Low' | 'Medium' | 'High';
  movementInService: 'Low' | 'Moderate' | 'High';
  radialShrinkage: number; // %
  tangentialShrinkage: number; // %
  recommendedFinish: string;
  typicalCostPerBf: string;
  category: 'Domestic Hardwood' | 'Exotic Hardwood' | 'Softwood';
  description: string;
  grainColor: string;
}

export interface CommissionInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  woodSpecies: string[];
  budget: string;
  timeline: string;
  description: string;
  dimensions?: string;
  submittedAt: string;
}
