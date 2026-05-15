import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Command, Layout, BarChart3, Database, MessageSquare, Terminal, GitBranch, CheckCircle2, Zap } from "lucide-react";

export function Hero() {
  const floatingTemplates = [
    { title: "CRM Dashboard", icon: <BarChart3 className="w-4 h-4 text-blue-500" />, color: "bg-blue-50" },
    { title: "AI Chat Agent", icon: <MessageSquare className="w-4 h-4 text-violet-500" />, color: "bg-violet-50" },
    { title: "Workflow API", icon: <GitBranch className="w-4 h-4 text-emerald-500" />, color: "bg-emerald-50" },
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center bg-[#FCFCFD]">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-b from-[#4F8CFF]/10 to-[#7C5CFF]/10 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-[#7C5CFF]/10 to-[#4F8CFF]/5 blur-[100px] rounded-full mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT SIDE: Copy & Prompt */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-[#0F172A] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#7C5CFF] animate-pulse" />
              OneAtlas OS is live
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.05]">
              The OS for <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF]">AI-Native</span> <br/>
              Software.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-lg">
              Stop writing boilerplate. Generate full-stack apps, automated workflows, and enterprise dashboards directly from your thoughts.
            </p>

            {/* Conversational AI Prompt Box */}
            <div className="relative group max-w-lg mb-6">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-3 border border-white shadow-xl flex flex-col gap-3">
                <div className="flex items-center gap-3 px-2">
                  <Sparkles className="w-5 h-5 text-[#7C5CFF]" />
                  <Input 
                    type="text" 
                    placeholder="What do you want to build?" 
                    className="border-0 focus-visible:ring-0 bg-transparent text-lg shadow-none px-0 h-auto placeholder:text-muted-foreground/60"
                    defaultValue="Build a CRM dashboard with a Stripe integration..."
                  />
                </div>
                <div className="flex items-center justify-between px-2 pt-2 border-t border-border/50">
                  <div className="flex gap-2">
                    <button className="text-xs font-medium text-muted-foreground hover:text-[#0F172A] transition-colors bg-[#F8FAFC] px-2 py-1 rounded-md border border-border">Use Template</button>
                    <button className="text-xs font-medium text-muted-foreground hover:text-[#0F172A] transition-colors bg-[#F8FAFC] px-2 py-1 rounded-md border border-border">Attach DB</button>
                  </div>
                  <Button size="icon" className="h-8 w-8 shrink-0 bg-[#0F172A] hover:bg-[#0F172A]/90 rounded-lg shadow-md transition-transform hover:scale-105">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Free to start</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> No credit card</span>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Immersive AI Workspace Ecosystem */}
          <div className="lg:col-span-7 relative h-[650px] w-full perspective-1000 hidden md:block">
            
            {/* Main Generated App Window */}
            <motion.div
              initial={{ opacity: 0, rotateY: 10, x: 50 }}
              animate={{ opacity: 1, rotateY: -5, x: 0, y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-[600px] h-[400px] bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-border/50 overflow-hidden z-20 backdrop-blur-sm"
            >
              <div className="h-12 border-b border-border bg-[#FCFCFD] flex items-center px-4 gap-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-[#F8FAFC] border border-border text-xs font-medium text-muted-foreground w-64 justify-center">
                  <Layout className="w-3 h-3" /> crm-dashboard.app
                </div>
              </div>
              <div className="p-5 flex gap-5 h-[calc(100%-48px)] bg-[#FCFCFD]">
                <div className="w-48 flex flex-col gap-3">
                  <div className="h-20 bg-gradient-to-br from-[#4F8CFF]/10 to-[#7C5CFF]/10 rounded-xl border border-[#7C5CFF]/20 p-3 flex flex-col justify-end">
                    <div className="text-xs font-semibold text-[#7C5CFF]">Total MRR</div>
                    <div className="text-xl font-bold text-[#0F172A]">$45,231</div>
                  </div>
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                </div>
                <div className="flex-1 bg-white border border-border rounded-xl shadow-sm p-4 relative overflow-hidden">
                  <div className="h-4 w-1/3 bg-[#E5E7EB] rounded mb-6" />
                  <div className="flex items-end gap-3 h-40">
                    {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-gradient-to-t from-[#4F8CFF] to-[#7C5CFF] rounded-t-md opacity-80" />
                    ))}
                  </div>
                  {/* Live Generation Overlay Effect */}
                  <motion.div 
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                  />
                </div>
              </div>
            </motion.div>

            {/* AI Assistant Chat Panel */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: [0, -15, 0], scale: 1 }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-[280px] -right-10 w-[320px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 z-30 p-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center shadow-sm">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0F172A]">OneAtlas Copilot</div>
                  <div className="text-xs text-[#7C5CFF] font-medium flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C5CFF] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7C5CFF]"></span>
                    </span>
                    Generating UI...
                  </div>
                </div>
              </div>
              <div className="space-y-3 mb-3">
                <div className="bg-[#F8FAFC] border border-border p-3 rounded-2xl rounded-tl-sm text-sm text-[#0F172A] shadow-sm">
                  I've scaffolded the dashboard. Connecting to your PostgreSQL database now.
                </div>
                <div className="flex gap-2 items-center">
                  <div className="h-6 flex-1 bg-[#E5E7EB] rounded-md animate-pulse" />
                  <div className="h-6 w-12 bg-[#E5E7EB] rounded-md animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Workflow Builder Node */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: [0, 10, 0], y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 w-[240px] bg-white rounded-xl shadow-lg border border-border z-40 p-3 flex flex-col gap-2"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center"><Zap className="w-3 h-3 text-emerald-600" /></div>
                <span className="text-sm font-semibold text-[#0F172A]">Stripe Webhook</span>
              </div>
              <svg className="w-full h-8 overflow-visible" preserveAspectRatio="none">
                <path d="M 20 0 C 20 20, 80 20, 80 40" fill="none" stroke="#7C5CFF" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_1s_linear_infinite]" />
                <style>{`@keyframes dash { to { stroke-dashoffset: -8; } }`}</style>
              </svg>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-[#7C5CFF]/10 flex items-center justify-center"><Database className="w-3 h-3 text-[#7C5CFF]" /></div>
                <span className="text-sm font-semibold text-[#0F172A]">Update User Tier</span>
              </div>
            </motion.div>

            {/* Floating Templates */}
            {floatingTemplates.map((tpl, i) => (
              <motion.div
                key={tpl.title}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                className={`absolute z-10 glass px-4 py-3 rounded-xl border border-white/60 shadow-xl flex items-center gap-3 backdrop-blur-md`}
                style={{
                  top: i === 0 ? '-20px' : i === 1 ? '180px' : 'auto',
                  bottom: i === 2 ? '150px' : 'auto',
                  right: i === 0 ? '50px' : i === 2 ? '-40px' : 'auto',
                  left: i === 1 ? '-20px' : 'auto',
                }}
              >
                <div className={`w-8 h-8 rounded-lg ${tpl.color} flex items-center justify-center`}>
                  {tpl.icon}
                </div>
                <div>
                  <div className="text-xs font-medium text-muted-foreground">Template</div>
                  <div className="text-sm font-bold text-[#0F172A]">{tpl.title}</div>
                </div>
              </motion.div>
            ))}

            {/* Terminal / Code Gen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute -top-10 left-[200px] w-[300px] bg-[#0F172A] rounded-xl shadow-2xl border border-slate-800 z-0 overflow-hidden"
            >
              <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-3 gap-2">
                <Terminal className="w-3 h-3 text-slate-500" />
                <span className="text-[10px] text-slate-400 font-mono">deploy.sh</span>
              </div>
              <div className="p-3 text-[10px] font-mono text-emerald-400 opacity-80 leading-relaxed">
                $ building project...<br/>
                $ resolving dependencies...<br/>
                $ compiling AI components...<br/>
                <span className="text-blue-400">$ deployed successfully! ✨</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
