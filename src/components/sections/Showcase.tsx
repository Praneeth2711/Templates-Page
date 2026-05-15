import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, LayoutDashboard, Database, Zap, Sparkles } from "lucide-react";

export function Showcase() {
  return (
    <section className="py-24 bg-[#F8FAFC] border-y border-border overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-6">
            Production-grade by default
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop worrying about boilerplate. OneAtlas generates beautiful, scalable, and secure applications that look and feel handcrafted.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="w-full max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white border border-border p-1 rounded-xl shadow-sm">
              <TabsTrigger value="dashboard" className="rounded-lg data-[state=active]:bg-[#F8FAFC] data-[state=active]:shadow-sm"><LayoutDashboard className="w-4 h-4 mr-2" /> Admin Panel</TabsTrigger>
              <TabsTrigger value="workflow" className="rounded-lg data-[state=active]:bg-[#F8FAFC] data-[state=active]:shadow-sm"><Database className="w-4 h-4 mr-2" /> Visual Workflows</TabsTrigger>
              <TabsTrigger value="code" className="rounded-lg data-[state=active]:bg-[#F8FAFC] data-[state=active]:shadow-sm"><Code2 className="w-4 h-4 mr-2" /> Export Code</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="dashboard" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              <div className="h-12 border-b border-border bg-[#FCFCFD] flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <div className="text-sm font-medium text-muted-foreground">users-dashboard.tsx</div>
                <div className="w-16" />
              </div>
              <div className="p-8 grid md:grid-cols-4 gap-6 bg-[#FCFCFD]">
                <div className="md:col-span-1 space-y-4">
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                  <div className="h-8 bg-[#F8FAFC] border border-border rounded-lg" />
                  <div className="h-8 bg-gradient-to-r from-[#4F8CFF]/10 to-[#7C5CFF]/10 border border-[#7C5CFF]/20 rounded-lg" />
                </div>
                <div className="md:col-span-3 space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1 h-32 bg-white border border-border rounded-xl shadow-sm p-5">
                      <div className="text-sm text-muted-foreground mb-2">Total Revenue</div>
                      <div className="text-3xl font-bold text-[#0F172A]">$124,563</div>
                    </div>
                    <div className="flex-1 h-32 bg-white border border-border rounded-xl shadow-sm p-5">
                      <div className="text-sm text-muted-foreground mb-2">Active Users</div>
                      <div className="text-3xl font-bold text-[#0F172A]">8,234</div>
                    </div>
                  </div>
                  <div className="h-64 bg-white border border-border rounded-xl shadow-sm flex items-end p-6 gap-2">
                    {[40, 70, 45, 90, 65, 80, 55, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-[#4F8CFF] to-[#7C5CFF] rounded-t-md opacity-80"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="workflow" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl border border-border shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] overflow-hidden h-[500px] relative"
            >
              {/* Grid Background */}
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#E5E7EB 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
              
              {/* Nodes */}
              <div className="absolute top-20 left-20 w-48 bg-white border border-border shadow-md rounded-xl p-4 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-emerald-100 flex items-center justify-center"><Zap className="w-3 h-3 text-emerald-600" /></div>
                  <span className="text-sm font-semibold">Webhook Trigger</span>
                </div>
                <div className="text-xs text-muted-foreground">Listens for Stripe events</div>
              </div>

              <svg className="absolute top-28 left-64 w-32 h-20 overflow-visible z-0">
                <path d="M 0 0 C 60 0, 40 40, 100 40" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                <circle cx="100" cy="40" r="4" fill="#7C5CFF" />
              </svg>

              <div className="absolute top-40 left-[350px] w-48 bg-white border border-[#7C5CFF]/30 shadow-md rounded-xl p-4 z-10 ring-1 ring-[#7C5CFF]/20">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-[#7C5CFF]/10 flex items-center justify-center"><Sparkles className="w-3 h-3 text-[#7C5CFF]" /></div>
                  <span className="text-sm font-semibold">AI Processor</span>
                </div>
                <div className="text-xs text-muted-foreground">Classifies user intent</div>
              </div>

              <svg className="absolute top-48 left-[530px] w-32 h-20 overflow-visible z-0">
                <path d="M 0 0 C 60 0, 40 -40, 100 -40" fill="none" stroke="#CBD5E1" strokeWidth="2" />
                <circle cx="100" cy="-40" r="4" fill="#4F8CFF" />
              </svg>

              <div className="absolute top-20 left-[620px] w-48 bg-white border border-border shadow-md rounded-xl p-4 z-10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-blue-100 flex items-center justify-center"><Database className="w-3 h-3 text-blue-600" /></div>
                  <span className="text-sm font-semibold">PostgreSQL</span>
                </div>
                <div className="text-xs text-muted-foreground">Inserts user record</div>
              </div>
              
            </motion.div>
          </TabsContent>

          <TabsContent value="code" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0F172A] rounded-2xl border border-slate-800 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden h-[500px]"
            >
              <div className="h-12 border-b border-slate-800 bg-[#0F172A] flex items-center px-4 justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-700" />
                </div>
                <div className="text-sm font-mono text-slate-400">api/webhook.ts</div>
                <div className="w-16" />
              </div>
              <div className="p-6 font-mono text-sm text-slate-300">
                <p><span className="text-rose-400">import</span> &#123; createClient &#125; <span className="text-rose-400">from</span> <span className="text-amber-300">'@supabase/supabase-js'</span>;</p>
                <br/>
                <p><span className="text-rose-400">export default async function</span> <span className="text-blue-400">handler</span>(req, res) &#123;</p>
                <p className="pl-4"><span className="text-rose-400">const</span> payload = req.body;</p>
                <p className="pl-4"><span className="text-slate-500">// AI generated intent classification</span></p>
                <p className="pl-4"><span className="text-rose-400">const</span> intent = <span className="text-rose-400">await</span> <span className="text-blue-400">analyzeIntent</span>(payload.text);</p>
                <br/>
                <p className="pl-4"><span className="text-rose-400">if</span> (intent === <span className="text-amber-300">'upgrade'</span>) &#123;</p>
                <p className="pl-8"><span className="text-rose-400">await</span> db.<span className="text-blue-400">updateTier</span>(payload.userId);</p>
                <p className="pl-4">&#125;</p>
                <br/>
                <p className="pl-4"><span className="text-rose-400">return</span> res.<span className="text-blue-400">status</span>(<span className="text-emerald-400">200</span>).<span className="text-blue-400">json</span>(&#123; success: <span className="text-rose-400">true</span> &#125;);</p>
                <p>&#125;</p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
