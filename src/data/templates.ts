export type Template = {
  id: string;
  title: string;
  description: string;
  category: string;
  stack: string[];
  tags: string[];
  rating: number;
  users: string;
  deployTime: string;
  trending: boolean;
  aiPowered: boolean;
  gradient: string;
  accentColor: string;
  bgColor: string;
  chartData?: number[];
  metrics?: { label: string; value: string }[];
};

export const CATEGORIES = [
  "All",
  "CRM",
  "HR",
  "Analytics",
  "Finance",
  "Admin Panels",
  "Workflow",
  "AI Assistants",
  "SaaS",
];

export const TEMPLATES: Template[] = [
  {
    id: "crm-dashboard",
    title: "CRM Dashboard",
    description: "Full-featured CRM with pipeline management, contact tracking, and AI-powered lead scoring.",
    category: "CRM",
    stack: ["React", "PostgreSQL", "Stripe"],
    tags: ["Sales", "Pipeline", "Analytics"],
    rating: 4.9,
    users: "12.4k",
    deployTime: "~45s",
    trending: true,
    aiPowered: true,
    gradient: "from-blue-500/15 via-cyan-400/10 to-blue-600/5",
    accentColor: "#3B82F6",
    bgColor: "bg-blue-50",
    chartData: [30, 55, 40, 80, 65, 90, 75, 100],
    metrics: [{ label: "MRR", value: "$45,231" }, { label: "Leads", value: "1,284" }],
  },
  {
    id: "hr-system",
    title: "HR Management System",
    description: "Employee lifecycle, payroll integration, leave management and performance reviews.",
    category: "HR",
    stack: ["Next.js", "Supabase"],
    tags: ["Payroll", "Employees"],
    rating: 4.8,
    users: "8.1k",
    deployTime: "~60s",
    trending: false,
    aiPowered: true,
    gradient: "from-violet-500/15 via-purple-400/10 to-violet-600/5",
    accentColor: "#7C3AED",
    bgColor: "bg-violet-50",
    chartData: [50, 40, 70, 55, 85, 60, 90, 75],
    metrics: [{ label: "Employees", value: "348" }],
  },
  {
    id: "analytics-platform",
    title: "Analytics Platform",
    description: "Real-time event tracking, funnel analysis, cohort charts, and AI-generated insights.",
    category: "Analytics",
    stack: ["React", "ClickHouse"],
    tags: ["Events", "Funnels"],
    rating: 5.0,
    users: "18.2k",
    deployTime: "~30s",
    trending: true,
    aiPowered: true,
    gradient: "from-emerald-500/15 via-teal-400/10 to-emerald-600/5",
    accentColor: "#10B981",
    bgColor: "bg-emerald-50",
    chartData: [20, 45, 35, 70, 55, 85, 65, 100],
    metrics: [{ label: "Events/day", value: "2.4M" }],
  },
  {
    id: "finance-dashboard",
    title: "Finance Dashboard",
    description: "Budget tracking, expense management, P&L reports, and automated accounting.",
    category: "Finance",
    stack: ["Vue", "Go", "Plaid"],
    tags: ["Budget", "P&L"],
    rating: 4.7,
    users: "5.3k",
    deployTime: "~90s",
    trending: false,
    aiPowered: false,
    gradient: "from-amber-500/15 via-orange-400/10 to-amber-600/5",
    accentColor: "#F59E0B",
    bgColor: "bg-amber-50",
    chartData: [60, 45, 80, 55, 70, 50, 85, 65],
    metrics: [{ label: "Revenue", value: "$1.2M" }],
  },
  {
    id: "ai-support-agent",
    title: "AI Support Agent",
    description: "Multi-channel customer support with GPT-4 routing and ticket triage.",
    category: "AI Assistants",
    stack: ["Next.js", "OpenAI"],
    tags: ["Support", "GPT-4"],
    rating: 5.0,
    users: "9.7k",
    deployTime: "~45s",
    trending: true,
    aiPowered: true,
    gradient: "from-fuchsia-500/15 via-pink-400/10 to-fuchsia-600/5",
    accentColor: "#D946EF",
    bgColor: "bg-fuchsia-50",
    chartData: [40, 65, 50, 80, 60, 90, 70, 95],
    metrics: [{ label: "CSAT", value: "97%" }],
  },
  {
    id: "saas-starter",
    title: "SaaS Starter Kit",
    description: "Auth, billing, multi-tenancy, admin dashboard, and RBAC.",
    category: "SaaS",
    stack: ["React", "Supabase", "Stripe"],
    tags: ["Auth", "Billing"],
    rating: 4.9,
    users: "24.1k",
    deployTime: "~30s",
    trending: true,
    aiPowered: false,
    gradient: "from-indigo-500/15 via-blue-400/10 to-indigo-600/5",
    accentColor: "#6366F1",
    bgColor: "bg-indigo-50",
    chartData: [35, 60, 45, 75, 55, 85, 65, 90],
    metrics: [{ label: "MRR", value: "$28k" }],
  },
];
