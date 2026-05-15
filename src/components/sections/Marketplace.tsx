import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Star, Download, Search, Filter, ChevronRight, Flame } from "lucide-react";

export function Marketplace() {
  const templates = [
    { title: "CRM Dashboard", stack: "React + Node", rating: 4.9, downloads: "12k", tags: ["Sales", "Analytics"], color: "from-blue-500/20 to-cyan-500/20", trending: true },
    { title: "SaaS Starter Kit", stack: "React + Supabase", rating: 4.8, downloads: "24k", tags: ["Auth", "Payments"], color: "from-emerald-500/20 to-teal-500/20", trending: true },
    { title: "AI Chat App", stack: "Next.js + OpenAI", rating: 5.0, downloads: "18k", tags: ["AI", "Messaging"], color: "from-[#4F8CFF]/20 to-[#7C5CFF]/20", trending: true },
    { title: "Finance Dashboard", stack: "Vue + Go", rating: 4.7, downloads: "5k", tags: ["Fintech", "Charts"], color: "from-amber-500/20 to-orange-500/20", trending: false },
    { title: "HR Management", stack: "React + PostgreSQL", rating: 4.6, downloads: "3k", tags: ["Internal", "Admin"], color: "from-rose-500/20 to-pink-500/20", trending: false },
    { title: "Admin Panel", stack: "Svelte + Firebase", rating: 4.8, downloads: "15k", tags: ["Dashboard", "CRUD"], color: "from-slate-500/20 to-gray-500/20", trending: false },
    { title: "Workflow Automation", stack: "React + Node", rating: 4.9, downloads: "9k", tags: ["Automations", "No-code"], color: "from-indigo-500/20 to-blue-500/20", trending: false },
    { title: "AI Support Agent", stack: "Next.js + Pinecone", rating: 5.0, downloads: "8k", tags: ["AI", "Support"], color: "from-violet-500/20 to-fuchsia-500/20", trending: true },
  ];

  const categories = ["All", "Dashboards", "AI Agents", "Internal Tools", "Starter Kits"];

  const integrations = [
    "Slack", "Gmail", "Stripe", "Supabase", "PostgreSQL", "Notion", "GitHub", "OpenAI"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 mb-24">
        <div className="flex flex-col mb-12">
          <div className="max-w-xl mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
              Start faster with templates
            </h2>
            <p className="text-lg text-muted-foreground">
              Don't build from scratch. Use our community-driven templates to jumpstart your next project in one click.
            </p>
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-[#F8FAFC] p-4 rounded-2xl border border-border">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search templates..." 
                className="pl-9 bg-white border-border shadow-sm w-full h-10"
              />
            </div>
            
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              <div className="flex items-center gap-2 px-2 border-r border-border mr-2 shrink-0 hidden md:flex">
                <Filter className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">Filters</span>
              </div>
              {categories.map((cat, i) => (
                <Button 
                  key={cat} 
                  variant={i === 0 ? "default" : "outline"}
                  size="sm"
                  className={i === 0 ? "bg-[#0F172A] text-white rounded-full shrink-0" : "bg-white text-muted-foreground border-border rounded-full shrink-0"}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((tpl, i) => (
            <motion.div 
              key={tpl.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group rounded-2xl border border-border overflow-hidden bg-white hover:shadow-lg transition-all flex flex-col h-full relative"
            >
              {tpl.trending && (
                <div className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-white/90 backdrop-blur text-xs font-bold text-orange-500 px-2 py-1 rounded-md shadow-sm border border-orange-500/20">
                  <Flame className="w-3 h-3 fill-orange-500" /> Trending
                </div>
              )}
              
              <div className={`h-36 bg-gradient-to-br ${tpl.color} relative overflow-hidden flex items-center justify-center`}>
                <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
                {/* Abstract UI Preview */}
                <div className="w-20 h-14 bg-white/80 backdrop-blur-md rounded-lg border border-white/50 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-3 bg-[#F8FAFC] border-b border-white/50 flex items-center px-1 gap-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                  </div>
                  <div className="absolute top-4 left-1 w-4 h-4 rounded bg-[#E5E7EB]"></div>
                  <div className="absolute top-4 left-6 right-1 h-2 rounded bg-[#E5E7EB]"></div>
                  <div className="absolute top-7 left-6 right-1 h-2 rounded bg-[#E5E7EB]"></div>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  {tpl.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-[#F8FAFC] text-[10px] uppercase tracking-wider text-[#475569] font-medium border-border/50">{tag}</Badge>
                  ))}
                </div>
                <h3 className="font-semibold text-[#0F172A] mb-1">{tpl.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tpl.stack}</p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50 mb-4">
                  <div className="flex items-center gap-3 text-xs font-medium text-[#475569]">
                    <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> {tpl.rating}</span>
                    <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> {tpl.downloads}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-[#F8FAFC] hover:bg-[#0F172A] text-[#0F172A] hover:text-white border border-border hover:border-[#0F172A] transition-colors rounded-xl font-medium group/btn">
                  Use Template
                  <ChevronRight className="w-4 h-4 ml-1 opacity-50 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="border-y border-border bg-[#F8FAFC] py-16 overflow-hidden">
        <div className="container mx-auto px-6 mb-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Integrations OS</p>
          <h3 className="text-2xl font-bold text-[#0F172A]">Connect to your favorite tools</h3>
        </div>
        
        {/* Infinite Marquee */}
        <div className="relative w-full flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-4">
            {[...integrations, ...integrations, ...integrations].map((item, i) => (
              <div key={i} className="inline-flex items-center justify-center px-8 py-4 glass rounded-xl shadow-sm text-lg font-medium text-[#0F172A] border border-border/50 min-w-[200px]">
                {item}
              </div>
            ))}
          </div>
          {/* Gradients to hide edge */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#F8FAFC] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#F8FAFC] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
