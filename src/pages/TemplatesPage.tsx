import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, Sparkles, ArrowRight, ChevronRight, Globe, Copy, Eye, Zap, LayoutGrid, Bot, BarChart2, Briefcase, Users, Shield, Package, Cpu, X, Calendar, Settings, FileText, PieChart } from "lucide-react";

type Tmpl = {
  id: string; title: string; author: string; clones: string;
  cat: string; catColor: string; accent: string; gradFrom: string; gradTo: string;
  preview: string;
};

const T: Tmpl[] = [
  { id:"crm", title:"CRM Dashboard", author:"OneAtlas Team", clones:"10,611", cat:"Productivity", catColor:"bg-blue-100 text-blue-700",
    accent:"#3B82F6", gradFrom:"#3B82F6", gradTo:"#60A5FA", preview:"crm" },
  { id:"board", title:"Project Board", author:"OneAtlas Team", clones:"6,421", cat:"Productivity", catColor:"bg-emerald-100 text-emerald-700",
    accent:"#10B981", gradFrom:"#10B981", gradTo:"#34D399", preview:"board" },
  { id:"analytics", title:"Analytics Platform", author:"OneAtlas Team", clones:"8,174", cat:"Productivity", catColor:"bg-violet-100 text-violet-700",
    accent:"#7C3AED", gradFrom:"#7C3AED", gradTo:"#A78BFA", preview:"analytics" },
  { id:"hr", title:"HR Management", author:"OneAtlas Team", clones:"8,293", cat:"Business", catColor:"bg-purple-100 text-purple-700",
    accent:"#9333EA", gradFrom:"#9333EA", gradTo:"#C084FC", preview:"hr" },
  { id:"finance", title:"Finance Tracker", author:"OneAtlas Team", clones:"4,821", cat:"Business", catColor:"bg-amber-100 text-amber-700",
    accent:"#F59E0B", gradFrom:"#F59E0B", gradTo:"#FCD34D", preview:"finance" },
  { id:"saas", title:"SaaS Starter Kit", author:"OneAtlas Team", clones:"24,102", cat:"Business", catColor:"bg-indigo-100 text-indigo-700",
    accent:"#6366F1", gradFrom:"#6366F1", gradTo:"#818CF8", preview:"saas" },
  { id:"ai-agent", title:"AI Support Agent", author:"OneAtlas Team", clones:"9,714", cat:"AI & Automation", catColor:"bg-fuchsia-100 text-fuchsia-700",
    accent:"#D946EF", gradFrom:"#D946EF", gradTo:"#F0ABFC", preview:"ai" },
  { id:"workflow", title:"Workflow Builder", author:"OneAtlas Team", clones:"7,632", cat:"AI & Automation", catColor:"bg-rose-100 text-rose-700",
    accent:"#F43F5E", gradFrom:"#F43F5E", gradTo:"#FDA4AF", preview:"workflow" },
  { id:"inventory", title:"Inventory Manager", author:"OneAtlas Team", clones:"5,109", cat:"AI & Automation", catColor:"bg-cyan-100 text-cyan-700",
    accent:"#0EA5E9", gradFrom:"#0EA5E9", gradTo:"#7DD3FC", preview:"inventory" },
];

const CATS = ["Productivity","Business","AI & Automation"];
const CAT_ICONS: Record<string,JSX.Element> = {
  "Productivity": <LayoutGrid className="w-5 h-5"/>,
  "Business": <Briefcase className="w-5 h-5"/>,
  "AI & Automation": <Bot className="w-5 h-5"/>,
};

/* ── Preview renderer ─────────────────────────────────────────── */
function Preview({ t }: { t: Tmpl }) {
  const bar = (vals: number[], c1: string, c2: string) => (
    <div className="flex items-end gap-[3px] h-14 w-full">
      {vals.map((h,i)=>(
        <div key={i} className="flex-1 rounded-[3px] transition-all" style={{height:`${h}%`,background:i%2?c1:c2,opacity:0.85}}/>
      ))}
    </div>
  );

  const metricRow = (items: {l:string;v:string;trend?:string}[]) => (
    <div className="flex gap-2">
      {items.map(m=>(
        <div key={m.l} className="flex-1 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">{m.l}</div>
          <div className="text-[15px] font-bold text-slate-800">{m.v}</div>
          {m.trend && <div className="text-[9px] font-semibold text-emerald-500">{m.trend}</div>}
        </div>
      ))}
    </div>
  );

  if (t.preview==="crm") return (
    <div className="w-full h-full bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Pipeline",v:"$284k",trend:"↑ 12%"},{l:"Won",v:"$96k",trend:"↑ 8%"},{l:"Leads",v:"1,284"}])}
      <div className="flex gap-2 flex-1">
        <div className="flex-1 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Activity</div>
          {bar([40,65,45,80,55,90,70,100,60,85],"#3B82F6","#93C5FD")}
        </div>
        <div className="w-20 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center">
          <div className="w-12 h-12 rounded-full border-[3px] border-blue-500 border-t-blue-200 flex items-center justify-center">
            <span className="font-bold text-slate-700 text-xs">58%</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (t.preview==="board") return (
    <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-3 flex flex-col gap-2 text-[10px]">
      <div className="flex gap-2">
        {[{l:"To Do",c:"#10B981"},{l:"Progress",c:"#F59E0B"},{l:"Review",c:"#6366F1"},{l:"Done",c:"#64748B"}].map(s=>(
          <div key={s.l} className="flex-1 rounded-lg h-5 text-white text-[9px] font-bold flex items-center justify-center" style={{background:s.c}}>{s.l}</div>
        ))}
      </div>
      <div className="flex gap-2 flex-1">
        {[3,2,2,4].map((n,ci)=>(
          <div key={ci} className="flex-1 flex flex-col gap-1">
            {Array.from({length:n}).map((_,ri)=>(
              <div key={ri} className="bg-white/80 rounded-lg border border-white/60 p-1.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
                <div className="h-1.5 rounded w-4/5 mb-1 bg-slate-200/70"/>
                <div className="h-1 rounded w-3/5 bg-slate-100"/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  if (t.preview==="analytics") return (
    <div className="w-full h-full bg-gradient-to-br from-violet-50 via-white to-purple-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Users",v:"142k",trend:"↑ 24%"},{l:"Sessions",v:"2.4M"},{l:"Bounce",v:"32%"}])}
      <div className="flex gap-2 flex-1">
        {/* Funnel chart */}
        <div className="flex-1 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-2">Conversion Funnel</div>
          <div className="flex flex-col gap-1 items-center">
            {[{l:"Visitors",w:"100%",v:"48,291",c:"#7C3AED"},{l:"Sign ups",w:"62%",v:"29,940",c:"#8B5CF6"},{l:"Activated",w:"38%",v:"18,350",c:"#A78BFA"},{l:"Paid",w:"18%",v:"8,692",c:"#C4B5FD"}].map(f=>(
              <div key={f.l} className="w-full">
                <div className="h-4 rounded-md flex items-center px-1.5 justify-between" style={{width:f.w,background:f.c,margin:"0 auto"}}>
                  <span className="text-white text-[7px] font-bold truncate">{f.l}</span>
                  <span className="text-white/80 text-[7px] font-medium">{f.v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Heatmap grid */}
        <div className="w-20 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-1.5">Activity</div>
          <div className="grid grid-cols-4 gap-[2px]">
            {[90,40,70,20,60,85,30,95,50,75,45,100,35,80,55,65,25,90,70,40,85,50,60,30].map((v,i)=>(
              <div key={i} className="aspect-square rounded-[2px]" style={{background:`rgba(124,58,237,${v/120})`}}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  if (t.preview==="hr") return (
    <div className="w-full h-full bg-gradient-to-br from-purple-50 via-white to-pink-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Team",v:"348"},{l:"Depts",v:"12"},{l:"Open",v:"7"}])}
      <div className="flex-1 bg-white/80 rounded-xl border border-white/60 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        {[{n:"Alice Chen",r:"Lead",d:"Product"},{n:"Bob Kumar",r:"Dev",d:"Eng"},{n:"Carol D.",r:"Design",d:"UX"}].map((s,i)=>(
          <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 border-b border-slate-50 last:border-0">
            <div className="w-5 h-5 rounded-full text-white text-[8px] font-bold flex items-center justify-center" style={{background:t.accent}}>{s.n[0]}</div>
            <div className="flex-1"><span className="font-semibold text-slate-700">{s.n}</span></div>
            <span className="text-[8px] px-1.5 py-0.5 rounded-full font-semibold" style={{background:`${t.accent}15`,color:t.accent}}>{s.d}</span>
          </div>
        ))}
      </div>
    </div>
  );

  if (t.preview==="ai") return (
    <div className="w-full h-full bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-3 flex flex-col text-[10px]">
      <div className="flex-1 space-y-1.5 overflow-hidden">
        {[{r:"user",t:"How do I reset my password?"},{r:"ai",t:"Click 'Forgot Password' on login to get a reset link. ✨"},{r:"user",t:"Order status?"},{r:"ai",t:"Order #4821 ships tomorrow by 5pm 📦"}].map((m,i)=>(
          <div key={i} className={`flex ${m.r==="user"?"justify-end":""}`}>
            <div className={`px-2.5 py-1.5 rounded-2xl max-w-[85%] font-medium leading-relaxed ${m.r==="user"?"text-white rounded-tr-sm":"bg-white/80 text-slate-700 rounded-tl-sm border border-white/60 shadow-sm"}`}
              style={m.r==="user"?{background:`linear-gradient(135deg,${t.gradFrom},${t.gradTo})`}:{}}>
              {m.t}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  if (t.preview==="finance") return (
    <div className="w-full h-full bg-gradient-to-br from-amber-50 via-white to-orange-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Revenue",v:"$1.2M",trend:"↑ 18%"},{l:"Expenses",v:"$840k"},{l:"Profit",v:"$360k",trend:"↑ 9%"}])}
      <div className="flex gap-2 flex-1">
        {/* Transaction ledger */}
        <div className="flex-1 bg-white/80 rounded-xl border border-white/60 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="flex items-center px-2.5 py-1.5 bg-amber-50/50 border-b border-amber-100/50">
            <span className="font-semibold text-slate-500">Recent Transactions</span>
          </div>
          {[{n:"Stripe Payout",a:"+$12,400",t:"Income",c:"#10B981",d:"Today"},
            {n:"AWS Invoice",a:"-$3,240",t:"Cloud",c:"#F59E0B",d:"Yesterday"},
            {n:"Payroll — May",a:"-$48,000",t:"Salary",c:"#F43F5E",d:"May 1"},
            {n:"Client Payment",a:"+$8,500",t:"Income",c:"#10B981",d:"Apr 29"}].map((tx,i)=>(
            <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 border-b border-slate-50 last:border-0">
              <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{background:`${tx.c}15`}}>
                <div className="w-2 h-2 rounded-full" style={{background:tx.c}}/>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-slate-700 truncate">{tx.n}</div>
                <div className="text-[8px] text-slate-400">{tx.d}</div>
              </div>
              <span className="font-bold" style={{color:tx.a.startsWith("+")?"#10B981":"#F43F5E"}}>{tx.a}</span>
            </div>
          ))}
        </div>
        {/* Spending rings */}
        <div className="w-20 bg-white/80 rounded-xl p-2 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col items-center justify-center gap-1">
          <div className="relative w-14 h-14">
            <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#FEF3C7" strokeWidth="3"/>
              <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="3" strokeDasharray="60 100" strokeLinecap="round"/>
              <circle cx="18" cy="18" r="10" fill="none" stroke="#FEF3C7" strokeWidth="3"/>
              <circle cx="18" cy="18" r="10" fill="none" stroke="#FB923C" strokeWidth="3" strokeDasharray="40 100" strokeLinecap="round"/>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-[8px] font-bold text-slate-600">68%</span>
            </div>
          </div>
          <div className="text-[8px] text-slate-400 font-semibold text-center">Budget Used</div>
        </div>
      </div>
    </div>
  );

  if (t.preview==="saas") return (
    <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-white to-blue-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"MRR",v:"$28k",trend:"↑ 22%"},{l:"Users",v:"3,421"},{l:"Churn",v:"1.2%",trend:"↓ 0.3%"}])}
      <div className="flex gap-2 flex-1">
        <div className="flex-1 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider mb-2">MRR Growth</div>
          <div className="flex items-end gap-[3px] h-14 w-full">
            {[25,35,30,45,40,55,50,65,58,72,68,85].map((h,i)=>(
              <div key={i} className="flex-1 rounded-[3px]" style={{height:`${h}%`,background:"#6366F1",opacity:0.7+i*0.02}}/>
            ))}
          </div>
        </div>
        <div className="w-24 bg-white/80 rounded-xl p-2.5 border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] flex flex-col gap-1.5">
          <div className="text-[9px] text-slate-400 font-semibold uppercase tracking-wider">Plans</div>
          {[{l:"Free",v:"1,840",c:"#E2E8F0"},{l:"Pro",v:"1,204",c:"#6366F1"},{l:"Team",v:"312",c:"#818CF8"},{l:"Enterprise",v:"65",c:"#4F46E5"}].map(p=>(
            <div key={p.l} className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full shrink-0" style={{background:p.c}}/>
              <span className="text-slate-500 flex-1">{p.l}</span>
              <span className="font-bold text-slate-700">{p.v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (t.preview==="workflow") return (
    <div className="w-full h-full bg-gradient-to-br from-rose-50 via-white to-pink-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Runs/day",v:"142k"},{l:"Success",v:"99.7%",trend:"↑"},{l:"Avg Time",v:"1.2s"}])}
      <div className="flex-1 bg-white/80 rounded-xl border border-white/60 shadow-[0_1px_3px_rgba(0,0,0,0.06)] relative overflow-hidden"
        style={{backgroundImage:"radial-gradient(#F1F5F9 1px,transparent 1px)",backgroundSize:"14px 14px"}}>
        <svg className="absolute inset-0 w-full h-full">
          <line x1="20%" y1="50%" x2="38%" y2="30%" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 3"/>
          <line x1="20%" y1="50%" x2="38%" y2="70%" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 3"/>
          <line x1="55%" y1="30%" x2="75%" y2="25%" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 3"/>
          <line x1="55%" y1="70%" x2="75%" y2="75%" stroke="#FDA4AF" strokeWidth="1.5" strokeDasharray="4 3"/>
        </svg>
        {[{x:14,y:50,l:"Webhook",c:"#F59E0B"},{x:42,y:28,l:"AI Parse",c:"#D946EF"},
          {x:42,y:72,l:"DB Save",c:"#3B82F6"},{x:78,y:23,l:"Slack",c:"#10B981"},
          {x:78,y:77,l:"Email",c:"#F43F5E"}].map((n,i)=>(
          <div key={i} className="absolute flex items-center gap-1 bg-white rounded-lg border border-slate-200 px-2 py-1 shadow-sm font-semibold text-slate-600"
            style={{left:`${n.x}%`,top:`${n.y}%`,transform:"translate(-50%,-50%)"}}>
            <div className="w-2 h-2 rounded-full" style={{background:n.c}}/>{n.l}
          </div>
        ))}
      </div>
    </div>
  );

  if (t.preview==="inventory") return (
    <div className="w-full h-full bg-gradient-to-br from-cyan-50 via-white to-sky-50 p-3 flex flex-col gap-2 text-[10px]">
      {metricRow([{l:"Products",v:"2,841"},{l:"Low Stock",v:"23",trend:"⚠️"},{l:"Orders",v:"486"}])}
      <div className="flex-1 bg-white/80 rounded-xl border border-white/60 overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.06)]">
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-50/80 border-b border-slate-100">
          <span className="font-semibold text-slate-500">Stock Levels</span>
        </div>
        {[{name:"MacBook Pro 16\"",sku:"SKU-4821",qty:142,max:200,c:"#0EA5E9"},
          {name:"iPhone 15 Pro",sku:"SKU-3291",qty:18,max:200,c:"#F59E0B"},
          {name:"AirPods Max",sku:"SKU-1092",qty:284,max:300,c:"#10B981"},
          {name:"iPad Air M2",sku:"SKU-7734",qty:8,max:200,c:"#F43F5E"}].map((item,i)=>(
          <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 border-b border-slate-50 last:border-0">
            <div className="w-5 h-5 rounded bg-slate-100 flex items-center justify-center">
              <Package className="w-3 h-3 text-slate-400"/>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-slate-700 truncate">{item.name}</div>
              <div className="text-[8px] text-slate-400">{item.sku}</div>
            </div>
            <div className="w-14">
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{width:`${(item.qty/item.max)*100}%`,background:item.c}}/>
              </div>
            </div>
            <span className="font-bold text-slate-600 w-6 text-right">{item.qty}</span>
          </div>
        ))}
      </div>
    </div>
  );

  // true fallback (shouldn't hit)
  return <div className="w-full h-full bg-slate-50 flex items-center justify-center text-slate-300 text-sm">Preview</div>;
}

/* ── Full-screen Template Modal ───────────────────────────────── */
function TemplateModal({ t, onClose }: { t: Tmpl; onClose: () => void }) {
  const [activeNav, setActiveNav] = useState("Dashboard");
  const navItems = [
    { label: "Dashboard", icon: <LayoutGrid className="w-4 h-4" /> },
    { label: "Tasks", icon: <FileText className="w-4 h-4" /> },
    { label: "Team", icon: <Users className="w-4 h-4" /> },
    { label: "Calendar", icon: <Calendar className="w-4 h-4" /> },
    { label: "Analytics", icon: <BarChart2 className="w-4 h-4" /> },
    { label: "Reports", icon: <PieChart className="w-4 h-4" /> },
  ];
  const settingsItems = [
    { label: "Integrations", icon: <Package className="w-4 h-4" /> },
    { label: "Settings", icon: <Settings className="w-4 h-4" /> },
  ];
  const tasks = [
    { task:"Launch campaign optimization", assignee:"Riya K.", due:"May 15", priority:"High", prColor:"#F59E0B", status:"Done", stColor:"#10B981" },
    { task:"Redesign landing page", assignee:"Aryan S.", due:"May 18", priority:"Critical", prColor:"#F43F5E", status:"Active", stColor:"#3B82F6" },
    { task:"Content marketing strategy", assignee:"Neha M.", due:"May 22", priority:"Normal", prColor:"#6366F1", status:"Backlog", stColor:"#94A3B8" },
    { task:"User onboarding flow", assignee:"Dev P.", due:"May 25", priority:"High", prColor:"#F59E0B", status:"Review", stColor:"#D946EF" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-start justify-center pt-6 pb-6 px-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">{t.title}</h2>
            <p className="text-sm text-slate-400">by {t.author} · {t.clones} Clones</p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg"
              style={{ background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})` }}>
              Use Template
            </motion.button>
            <button onClick={onClose} className="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-slate-500" />
            </button>
          </div>
        </div>

        {/* Browser frame */}
        <div className="m-5 rounded-xl border border-slate-200 overflow-hidden shadow-lg">
          {/* URL bar */}
          <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="px-4 py-1 bg-white border border-slate-200 rounded-lg text-xs text-slate-400 font-medium">
                app.oneatlas.io/preview
              </div>
            </div>
          </div>

          {/* App content */}
          <div className="flex h-[520px] bg-white">
            {/* Sidebar */}
            <div className="w-52 border-r border-slate-100 bg-slate-50/50 flex flex-col py-4 px-3 shrink-0">
              <div className="text-base font-bold text-slate-900 px-3 mb-5">OneAtlas</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Workspace</div>
              {navItems.map(n => (
                <button key={n.label} onClick={() => setActiveNav(n.label)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium mb-0.5 transition-all ${
                    activeNav === n.label
                      ? "text-white shadow-md"
                      : "text-slate-500 hover:bg-white hover:text-slate-800"
                  }`}
                  style={activeNav === n.label ? { background: `linear-gradient(135deg, ${t.gradFrom}, ${t.gradTo})` } : {}}>
                  {n.icon} {n.label}
                </button>
              ))}
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-2 mt-4">Settings</div>
              {settingsItems.map(n => (
                <button key={n.label}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-500 hover:bg-white hover:text-slate-800 mb-0.5 transition-all">
                  {n.icon} {n.label}
                </button>
              ))}
            </div>

            {/* Main content area */}
            <div className="flex-1 overflow-y-auto p-6">
              {/* Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[{ l:"Total Revenue", v:"$284K", t:"↑ 18.4% vs last month", tc:"text-emerald-500" },
                  { l:"Active Users", v:"12,841", t:"↑ 6.2% vs last month", tc:"text-emerald-500" },
                  { l:"Completion Rate", v:"67.3%", t:"↓ 2.1% vs last month", tc:"text-red-500" },
                  { l:"Open Tasks", v:"142", t:"↑ 3 new today", tc:"text-emerald-500" }].map(m => (
                  <div key={m.l} className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                    <div className="text-xs text-slate-400 font-medium mb-1">{m.l}</div>
                    <div className="text-2xl font-bold text-slate-900 mb-1">{m.v}</div>
                    <div className={`text-xs font-medium ${m.tc}`}>{m.t}</div>
                  </div>
                ))}
              </div>

              {/* Charts row */}
              <div className="flex gap-4 mb-6">
                <div className="flex-1 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-bold text-slate-800">Monthly Performance</span>
                    <span className="text-xs text-slate-400">Last 7 months</span>
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[45,60,35,72,55,80,65].map((h,i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div className="w-full rounded-md" style={{ height: `${h}%`, background: `linear-gradient(180deg, ${t.gradFrom}, ${t.gradTo}40)` }} />
                        <span className="text-[9px] text-slate-400">{["Oct","Nov","Dec","Jan","Feb","Mar","Apr"][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-56 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="text-sm font-bold text-slate-800">Task Distribution</span>
                  <div className="flex items-center justify-center mt-3">
                    <div className="relative w-24 h-24">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#E2E8F0" strokeWidth="4" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke={t.gradFrom} strokeWidth="4" strokeDasharray="50 100" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke={t.gradTo} strokeWidth="4" strokeDasharray="30 100" strokeDashoffset="-50" strokeLinecap="round" />
                        <circle cx="18" cy="18" r="14" fill="none" stroke="#F59E0B" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-80" strokeLinecap="round" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold text-slate-700">142</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 space-y-1.5">
                    {[{l:"In Progress",c:t.gradFrom,v:"50%"},{l:"Backlog",c:t.gradTo,v:"30%"},{l:"Review",c:"#F59E0B",v:"20%"}].map(x => (
                      <div key={x.l} className="flex items-center gap-2 text-xs">
                        <div className="w-2 h-2 rounded-full" style={{background:x.c}} />
                        <span className="text-slate-500">{x.l} · {x.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Activity table */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100">
                  <span className="text-sm font-bold text-slate-800">Recent Activity</span>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs text-slate-400 font-medium">
                      <th className="text-left px-4 py-2.5">Task</th>
                      <th className="text-left px-4 py-2.5">Assignee</th>
                      <th className="text-left px-4 py-2.5">Due Date</th>
                      <th className="text-left px-4 py-2.5">Priority</th>
                      <th className="text-left px-4 py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tasks.map((row, i) => (
                      <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-white transition-colors">
                        <td className="px-4 py-3 font-medium text-slate-700">{row.task}</td>
                        <td className="px-4 py-3 text-slate-500">{row.assignee}</td>
                        <td className="px-4 py-3 text-slate-500">{row.due}</td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{background:row.prColor}}>{row.priority}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="px-2 py-0.5 rounded-full text-xs font-semibold text-white" style={{background:row.stColor}}>{row.status}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Card with scroll animation ───────────────────────────────── */
function Card({ t, i, onOpen }: { t: Tmpl; i: number; onOpen: (t: Tmpl) => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-[0_25px_60px_-12px_rgba(124,58,237,0.15)] transition-shadow duration-500"
    >
      {/* Preview with hover zoom */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <motion.div className="absolute inset-0" whileHover={{ scale: 1.05 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <Preview t={t} />
        </motion.div>
        {/* Browser chrome bar */}
        <div className="absolute top-0 left-0 right-0 h-7 bg-white/90 backdrop-blur-sm border-b border-slate-100 flex items-center px-2.5 gap-1.5 z-10">
          <div className="w-2 h-2 rounded-full bg-red-400/70"/>
          <div className="w-2 h-2 rounded-full bg-yellow-400/70"/>
          <div className="w-2 h-2 rounded-full bg-green-400/70"/>
          <div className="flex-1 flex justify-center">
            <div className="px-3 py-0.5 rounded bg-slate-100/80 text-[8px] font-medium text-slate-400">{t.id}.oneatlas.app</div>
          </div>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3 z-20">
          <motion.button onClick={() => onOpen(t)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 text-sm font-semibold rounded-xl shadow-xl">
            <Copy className="w-4 h-4" /> Use Template
          </motion.button>
          <motion.button onClick={() => onOpen(t)} whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-md text-white text-sm font-semibold rounded-xl border border-white/30">
            <Eye className="w-4 h-4" /> View app
          </motion.button>
        </div>
      </div>

      {/* Meta */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-base font-bold text-slate-900 leading-snug">{t.title}</h3>
          <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 shrink-0">Free</span>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-sm text-slate-400">{t.author}</span>
          <span className="text-slate-300">·</span>
          <span className="text-sm text-slate-400">{t.clones} Clones</span>
        </div>
        <div className="flex items-center justify-between">
          <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${t.catColor}`}>{t.cat}</span>
          <motion.button onClick={() => onOpen(t)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
            style={{background:`linear-gradient(135deg,${t.gradFrom},${t.gradTo})`}}>
            Use Template
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Animated section header ─────────────────────────────────── */
function SectionHeader({ cat }: { cat: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <motion.div whileHover={{ rotate: 8, scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}
          className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-500 to-fuchsia-500 flex items-center justify-center text-white shadow-md shadow-violet-200">
          {CAT_ICONS[cat]}
        </motion.div>
        <h2 className="text-2xl font-bold text-slate-900">{cat}</h2>
      </div>
      <motion.button whileHover={{ x: 4 }} className="text-sm font-medium text-slate-500 hover:text-violet-600 flex items-center gap-1 transition-colors">
        View all <ArrowRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
}

/* ── Page ──────────────────────────────────────────────────────── */
export function TemplatesPage() {
  const [q, setQ] = useState("");
  const [modal, setModal] = useState<Tmpl | null>(null);
  const filtered = q.trim()
    ? T.filter(t => t.title.toLowerCase().includes(q.toLowerCase()) || t.cat.toLowerCase().includes(q.toLowerCase()))
    : null;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60 h-16 flex items-center px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 mr-10">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-200">
            <Sparkles className="w-4.5 h-4.5 text-white" />
          </div>
          <span className="text-lg font-bold text-slate-900">OneAtlas<span className="font-light text-slate-400">.dev</span></span>
        </Link>
        <div className="hidden md:flex items-center gap-7">
          {["Product","Use Cases","Resources","Pricing","Enterprise"].map(l => (
            <span key={l} className="text-sm font-medium text-slate-500 hover:text-violet-600 cursor-pointer transition-colors">{l}</span>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link to="/" className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-200 hover:scale-[1.02] transition-all">
            Start Building
          </Link>
        </div>
      </nav>

      {/* Hero with animated gradient glows + floating marquee */}
      <section className="relative py-20 px-6 overflow-hidden">
        {/* Animated background orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] bg-violet-400/15 rounded-full blur-[120px]" />
          <motion.div animate={{ x: [0, -25, 0], y: [0, 15, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[15%] w-[400px] h-[400px] bg-fuchsia-400/12 rounded-full blur-[100px]" />
          <motion.div animate={{ x: [0, 20, 0], y: [0, -10, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[-20%] left-[40%] w-[600px] h-[300px] bg-blue-400/10 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 10, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-violet-200/60 rounded-full text-xs font-bold text-violet-700 mb-6 shadow-sm">
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
              <Zap className="w-3.5 h-3.5 text-violet-500" />
            </motion.span>
            Over 120+ production-ready templates
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight mb-5 leading-[1.08]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-orange-400">
              Templates
            </span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
            className="text-lg text-slate-500 mb-10 max-w-lg mx-auto leading-relaxed">
            Clone production-ready apps. Customize with AI. Deploy in minutes.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.18, type: "spring" }} className="max-w-lg mx-auto relative">
            <motion.div animate={{ opacity: [0.15, 0.25, 0.15] }} transition={{ duration: 3, repeat: Infinity }}
              className="absolute -inset-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl blur-lg" />
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search templates..."
                className="w-full pl-13 pr-5 py-4 text-base bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 outline-none focus:ring-2 focus:ring-violet-400/40 focus:border-violet-400/60 placeholder:text-slate-400 transition-all" style={{paddingLeft:"3.25rem"}} />
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
            className="flex justify-center gap-3 mt-8">
            {CATS.map((c, i) => (
              <motion.button key={c} onClick={() => setQ(c)}
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-600 hover:border-violet-300 hover:text-violet-700 hover:shadow-md hover:shadow-violet-100 transition-colors">
                {CAT_ICONS[c]} {c}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Floating template marquee */}
        <div className="mt-16 -mx-6 overflow-hidden mask-gradient">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-5 w-max">
            {[...T, ...T].map((t, i) => (
              <div key={i} className="w-72 h-48 shrink-0 rounded-xl overflow-hidden border border-slate-200/60 shadow-md bg-white opacity-70 hover:opacity-100 transition-opacity duration-300">
                <div className="h-6 bg-slate-50 border-b border-slate-100 flex items-center px-2 gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/60"/>
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60"/>
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400/60"/>
                  <span className="ml-1 text-[7px] text-slate-400 font-medium">{t.id}.oneatlas.app</span>
                </div>
                <div className="h-[calc(100%-24px)] overflow-hidden"><Preview t={t} /></div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Templates */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        {filtered ? (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Results <span className="text-slate-400 font-normal text-lg">({filtered.length})</span></h2>
              <button onClick={() => setQ("")} className="text-sm text-violet-600 font-medium hover:underline">Clear search</button>
            </div>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {filtered.map((t,i) => <Card key={t.id} t={t} i={i} onOpen={setModal} />)}
              </div>
            ) : (
              <div className="text-center py-20 rounded-2xl border-2 border-dashed border-slate-200 bg-white">
                <Search className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                <p className="text-lg font-semibold text-slate-500">No templates found</p>
                <p className="text-sm text-slate-400 mt-1">Try a different search term</p>
              </div>
            )}
          </div>
        ) : (
          CATS.map(cat => (
            <section key={cat} className="mb-16 last:mb-0">
              <SectionHeader cat={cat} />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {T.filter(t => t.cat === cat).map((t,i) => <Card key={t.id} t={t} i={i} onOpen={setModal} />)}
              </div>
            </section>
          ))
        )}

        {/* Bottom CTA */}
        <section className="mt-20 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-orange-500" />
          <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"}} />
          <div className="relative z-10 py-16 px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Can't find what you need?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-lg mx-auto">Describe your app in plain English and our AI will build it from scratch in seconds.</p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-3.5 bg-white text-slate-900 text-base font-bold rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                Generate with AI <Sparkles className="w-4 h-4 inline ml-2" />
              </button>
              <button className="px-8 py-3.5 bg-white/10 backdrop-blur text-white text-base font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all flex items-center gap-2">
                Start for Free <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
      {/* Template Modal */}
      <AnimatePresence>
        {modal && <TemplateModal t={modal} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </div>
  );
}
