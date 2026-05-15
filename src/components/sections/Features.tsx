import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, GitBranch, Zap, BarChart, Users, Shield } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#7C5CFF]" />,
      title: "AI App Generation",
      description: "Describe your app in plain English. OneAtlas builds the full-stack architecture instantly.",
      preview: "bg-gradient-to-br from-[#7C5CFF]/10 to-[#4F8CFF]/10"
    },
    {
      icon: <GitBranch className="w-5 h-5 text-[#4F8CFF]" />,
      title: "Workflow Automation",
      description: "Connect APIs, databases, and third-party tools with our visual node-based builder.",
      preview: "bg-[#F8FAFC]"
    },
    {
      icon: <Zap className="w-5 h-5 text-amber-500" />,
      title: "One-Click Deployments",
      description: "Push to production instantly. We handle the infrastructure, scaling, and CI/CD.",
      preview: "bg-amber-50"
    },
    {
      icon: <BarChart className="w-5 h-5 text-emerald-500" />,
      title: "Enterprise Analytics",
      description: "Built-in telemetry, custom dashboards, and real-time monitoring for your apps.",
      preview: "bg-emerald-50"
    },
    {
      icon: <Users className="w-5 h-5 text-rose-500" />,
      title: "Team Collaboration",
      description: "Multiplayer editing, version history, and real-time cursor presence for remote teams.",
      preview: "bg-rose-50"
    },
    {
      icon: <Shield className="w-5 h-5 text-slate-700" />,
      title: "RBAC & Security",
      description: "Enterprise-grade role-based access control, SSO, and compliance out of the box.",
      preview: "bg-slate-100"
    }
  ];

  return (
    <section className="py-24 bg-[#FCFCFD]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Everything you need to build at scale
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete platform that combines the speed of AI with the power of enterprise architecture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="group h-full p-6 border border-border bg-white shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden">
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${feature.preview}`} />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F172A] mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Fake UI Snippet */}
                  <div className="mt-8 h-24 rounded-lg bg-[#F8FAFC] border border-border/50 overflow-hidden relative group-hover:border-border transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] to-transparent z-10" />
                    <div className="p-3 space-y-2 opacity-50 group-hover:opacity-100 transition-opacity">
                      <div className="h-2 w-1/3 bg-[#E5E7EB] rounded" />
                      <div className="h-2 w-full bg-[#E5E7EB] rounded" />
                      <div className="h-2 w-2/3 bg-[#E5E7EB] rounded" />
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
