import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUGGESTIONS = [
  "Add Stripe billing",
  "Generate RBAC permissions",
  "Connect to PostgreSQL",
  "Add AI search",
];

export function AICopilotBanner() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border bg-white shadow-[0_4px_40px_rgba(0,0,0,0.06)]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/5 via-transparent to-[#7C5CFF]/5 pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center mb-6 shadow-lg">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4 leading-tight">
                Customize any template <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF]">
                  with AI in seconds
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md">
                Pick a template. Tell the AI what you need. It adds features, connects APIs, adjusts layouts, and deploys — all without writing code.
              </p>
              <div className="flex gap-3">
                <Button className="bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl h-11 px-6 shadow-md">
                  <Sparkles className="w-4 h-4 mr-2" /> Try AI Copilot Free
                </Button>
                <Button variant="outline" className="rounded-xl h-11 border-border hover:bg-[#F8FAFC]">
                  Watch Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

            <div className="border-l border-border p-8 lg:p-10 flex flex-col justify-center bg-[#FCFCFD]">
              <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
                <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-[#F8FAFC]">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0F172A]">OneAtlas Copilot</div>
                    <div className="flex items-center gap-1.5 text-[11px] text-[#7C5CFF] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7C5CFF] animate-pulse inline-block" /> Ready
                    </div>
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#0F172A] text-white text-sm px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
                      Add Stripe billing with a pricing table
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-2.5"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center shrink-0">
                      <Sparkles className="w-3 h-3 text-white" />
                    </div>
                    <div className="bg-[#F8FAFC] border border-border text-sm px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[80%] shadow-sm text-[#0F172A]">
                      I've added a Stripe pricing table with 3 tiers, a checkout flow, and webhook handling. Your billing portal is ready. 🎉
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-xl px-3 py-2 text-xs"
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-700 font-medium">Deployed</span>
                    <span className="text-emerald-600 ml-auto">crm.oneatlas.app</span>
                  </motion.div>
                </div>

                <div className="px-4 pb-4">
                  <p className="text-[11px] text-muted-foreground mb-2 font-medium">Suggested:</p>
                  <div className="flex flex-wrap gap-2">
                    {SUGGESTIONS.map((s) => (
                      <button key={s} className="text-[11px] px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-border text-muted-foreground hover:text-[#0F172A] hover:border-[#0F172A]/20 transition-all">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
