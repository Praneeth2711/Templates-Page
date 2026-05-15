import { motion } from "framer-motion";
import { GitBranch, Zap, Database, MessageSquare, Mail, ArrowRight } from "lucide-react";

const NODES = [
  { id: "trigger", x: 40, y: 140, icon: <Zap className="w-4 h-4 text-amber-500" />, label: "Webhook", sub: "POST", color: "bg-amber-50 border-amber-200" },
  { id: "ai", x: 220, y: 80, icon: <MessageSquare className="w-4 h-4 text-[#7C5CFF]" />, label: "AI Router", sub: "GPT-4", color: "bg-violet-50 border-violet-200" },
  { id: "db", x: 220, y: 200, icon: <Database className="w-4 h-4 text-blue-500" />, label: "Database", sub: "Users", color: "bg-blue-50 border-blue-200" },
  { id: "slack", x: 400, y: 60, icon: <MessageSquare className="w-4 h-4 text-emerald-500" />, label: "Slack", sub: "Notify", color: "bg-emerald-50 border-emerald-200" },
  { id: "email", x: 400, y: 200, icon: <Mail className="w-4 h-4 text-rose-500" />, label: "Email", sub: "Resend", color: "bg-rose-50 border-rose-200" },
];

const EDGES = [
  { from: "trigger", to: "ai", path: "M 152 148 C 200 148, 200 98, 220 98" },
  { from: "trigger", to: "db", path: "M 152 148 C 200 148, 200 208, 220 208" },
  { from: "ai", to: "slack", path: "M 332 88 C 370 88, 370 78, 400 78" },
  { from: "db", to: "email", path: "M 332 208 C 370 208, 370 208, 400 208" },
];

export function WorkflowSection() {
  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8FAFC] border border-border text-sm font-medium text-[#0F172A] mb-6">
              <GitBranch className="w-4 h-4 text-[#7C5CFF]" />
              Workflow Automation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-5 leading-tight">
              Automate workflows <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF]">
                with AI at every step
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Pick a workflow template and let AI connect your triggers, actions, APIs, and databases — all through a visual builder. No code needed.
            </p>
            <div className="space-y-3 mb-8">
              {["Stripe → PostgreSQL → Slack alerts", "Form Submit → AI classify → Email", "Cron job → Scrape → Notion"].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-[#0F172A]">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  {item}
                </div>
              ))}
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F172A] text-white text-sm font-medium hover:bg-[#0F172A]/90 transition-colors shadow-md">
              <Zap className="w-4 h-4" /> Explore Workflow Templates
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative h-[300px] bg-[#F8FAFC] rounded-2xl border border-border overflow-hidden shadow-inner"
          >
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none">
              {EDGES.map((edge, i) => (
                <motion.path
                  key={edge.from + edge.to}
                  d={edge.path}
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth={1.5}
                  strokeDasharray="5 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: "easeOut" }}
                />
              ))}
            </svg>
            {NODES.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className={`absolute w-32 rounded-xl border p-2.5 bg-white shadow-md ${node.color}`}
                style={{ left: node.x, top: node.y, transform: "translate(-50%, -50%)" }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {node.icon}
                  <span className="text-[11px] font-bold text-[#0F172A]">{node.label}</span>
                </div>
                <span className="text-[9px] text-muted-foreground font-mono">{node.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
