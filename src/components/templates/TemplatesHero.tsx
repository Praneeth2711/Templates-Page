import { motion } from "framer-motion";
import { Search, Sparkles, Command, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const PROMPTS = [
  "Generate a CRM system with Stripe billing",
  "Create an HR dashboard with payroll",
  "Build a finance analytics platform",
  "Make an AI support agent with GPT-4",
];

export function TemplatesHero({ onSearch }: { onSearch: (q: string) => void }) {
  const [input, setInput] = useState("");
  const [promptIdx, setPromptIdx] = useState(0);

  return (
    <section className="relative pt-28 pb-16 overflow-hidden bg-[#FCFCFD]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-[#4F8CFF]/8 via-[#7C5CFF]/5 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-[#7C5CFF]/6 to-transparent blur-[80px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border shadow-sm text-sm font-medium text-[#0F172A] mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#7C5CFF] animate-pulse" />
            <span>120+ production-ready templates</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] mb-6 leading-[1.06]"
          >
            Start with a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF]">
              Production-Ready
            </span>{" "}
            Template
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Generate dashboards, CRUD systems, admin panels, workflows, and enterprise tools — then customize everything using AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative max-w-2xl mx-auto mb-6"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] rounded-2xl blur opacity-20 hover:opacity-30 transition-opacity duration-300" />
            <div className="relative bg-white rounded-2xl border border-white/80 shadow-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4">
                <Sparkles className="w-5 h-5 text-[#7C5CFF] shrink-0" />
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSearch(input)}
                  placeholder={PROMPTS[promptIdx]}
                  className="flex-1 bg-transparent text-base text-[#0F172A] placeholder:text-muted-foreground/60 outline-none"
                />
                <Button
                  size="sm"
                  onClick={() => onSearch(input)}
                  className="bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl h-9 px-4 shadow-md"
                >
                  <Zap className="w-4 h-4 mr-1.5" /> Generate
                </Button>
              </div>
              <div className="flex gap-2 px-4 pb-3 flex-wrap">
                {PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => { setInput(p); setPromptIdx(i); onSearch(p); }}
                    className="text-xs px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-border text-muted-foreground hover:text-[#0F172A] hover:border-[#0F172A]/30 transition-all"
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <Command className="w-3.5 h-3.5" /> Deploy in seconds
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" /> 120+ templates
            </span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> AI customization
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
