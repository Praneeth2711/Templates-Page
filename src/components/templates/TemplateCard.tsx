import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Star, Clock, DownloadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Template } from "@/data/templates";

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  return (
    <div className="flex items-end gap-1 h-14 w-full">
      {data.map((v, i) => (
        <motion.div
          key={i}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
          style={{ height: `${(v / max) * 100}%`, backgroundColor: color, originY: 1 }}
          className="flex-1 rounded-sm opacity-80"
        />
      ))}
    </div>
  );
}

function TemplatePreviewWindow({ template }: { template: Template }) {
  return (
    <div className="w-full h-full bg-white rounded-xl border border-border/80 overflow-hidden shadow-lg flex flex-col">
      <div className="h-10 border-b border-border/50 bg-[#F8FAFC]/80 backdrop-blur-md flex items-center px-4 gap-2 shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 rounded-md bg-white border border-border/60 shadow-sm text-[10px] font-medium text-muted-foreground">
            {template.id}.app
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#FCFCFD] p-5 flex flex-col gap-4 overflow-hidden relative">
        {template.metrics && (
          <div className="flex gap-3">
            {template.metrics.map((m) => (
              <div key={m.label} className="flex-1 bg-white border border-border/60 rounded-xl p-3 shadow-sm">
                <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">{m.label}</div>
                <div className="text-lg font-bold text-[#0F172A]">{m.value}</div>
              </div>
            ))}
          </div>
        )}
        {template.chartData && (
          <div className="flex-1 bg-white border border-border/60 rounded-xl p-4 shadow-sm flex flex-col">
            <div className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-3">Live Activity</div>
            <div className="flex-1 flex items-end">
                <MiniChart data={template.chartData} color={template.accentColor} />
            </div>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none" />
      </div>
    </div>
  );
}

export function TemplateCard({ template, index }: { template: Template; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white rounded-3xl border border-border/80 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-border transition-all duration-500 flex flex-col h-[520px]"
    >
      <div className={`relative h-[280px] bg-gradient-to-br ${template.gradient} overflow-hidden p-6 pb-0 flex flex-col justify-end`}>
        <motion.div
          animate={{ x: hovered ? ["-100%", "300%"] : "-100%" }}
          transition={{ duration: 1.5, ease: "linear" }}
          className="absolute inset-y-0 w-32 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
        />
        <div className="absolute top-4 left-4 flex gap-2">
           {template.aiPowered && (
            <span className="flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-[#7C5CFF] text-[10px] font-bold px-3 py-1 rounded-full border border-[#7C5CFF]/20 shadow-sm">
              <Sparkles className="w-3 h-3" /> Built with AI
            </span>
          )}
        </div>
        
        <motion.div
          animate={{ y: hovered ? -8 : 0, scale: hovered ? 1.02 : 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full h-[220px] rounded-t-xl overflow-hidden shadow-2xl relative z-10 translate-y-4 group-hover:translate-y-2 transition-transform duration-500"
        >
          <TemplatePreviewWindow template={template} />
        </motion.div>
      </div>

      <div className="p-6 flex flex-col flex-1 bg-white relative z-20">
        <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl font-bold text-[#0F172A]">{template.title}</h3>
            <div className="flex items-center gap-1 text-xs font-semibold text-amber-500 bg-amber-50 px-2 py-1 rounded-md border border-amber-100">
                <Star className="w-3.5 h-3.5 fill-amber-500" /> {template.rating}
            </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{template.description}</p>
        
        <div className="flex gap-2 mb-6 flex-wrap">
          {template.stack.map((s) => (
            <Badge key={s} variant="outline" className="text-[10px] uppercase tracking-wider font-semibold bg-[#F8FAFC] text-[#475569] border-border/80">
              {s}
            </Badge>
          ))}
        </div>
        
        <div className="flex gap-3">
          <Button className="flex-1 h-11 text-sm bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl group/btn shadow-md hover:shadow-lg transition-all">
             Use Template <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
