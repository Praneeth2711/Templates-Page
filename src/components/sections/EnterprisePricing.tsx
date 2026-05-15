import { Button } from "@/components/ui/button";
import { Check, ShieldCheck } from "lucide-react";

export function EnterprisePricing() {
  const plans = [
    {
      name: "Starter",
      price: "$0",
      description: "For individuals and small side projects.",
      features: ["Up to 3 apps", "Community support", "10,000 workflow runs", "Basic analytics"],
      buttonText: "Start Free",
      isPopular: false
    },
    {
      name: "Pro",
      price: "$49",
      description: "For professional developers and growing teams.",
      features: ["Unlimited apps", "Priority support", "1M workflow runs", "Advanced analytics", "Custom domains", "Team collaboration"],
      buttonText: "Get Pro",
      isPopular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale organizations and high security.",
      features: ["SSO & RBAC", "Dedicated support", "Unlimited runs", "Audit logs", "VPC peering", "99.99% SLA"],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <>
      <section className="py-24 bg-[#0F172A] text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Ready</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Security and scale, built-in.
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-lg leading-relaxed">
                OneAtlas provides the infrastructure, compliance, and isolation needed for the world's most demanding organizations.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">SOC2 Type II</h4>
                  <p className="text-sm text-slate-500">Audited and certified for security and availability.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Role-based Access</h4>
                  <p className="text-sm text-slate-500">Granular permissions for teams of all sizes.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SSO Integration</h4>
                  <p className="text-sm text-slate-500">Connect with Okta, Google Workspace, and more.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Audit Logs</h4>
                  <p className="text-sm text-slate-500">Track every change across your entire workspace.</p>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden flex items-center justify-center p-8">
              <div className="w-full max-w-sm space-y-4">
                <div className="p-4 rounded-xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <div className="font-medium">User Authentication</div>
                    <div className="text-xs text-emerald-400">Enforced • SSO Active</div>
                  </div>
                  <div className="w-10 h-6 bg-emerald-500/20 rounded-full border border-emerald-500/50 flex items-center px-1">
                    <div className="w-4 h-4 rounded-full bg-emerald-400 ml-auto" />
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-slate-300">Audit Logging</div>
                    <div className="text-xs text-slate-500">30 days retention</div>
                  </div>
                  <Button variant="outline" size="sm" className="h-7 text-xs bg-transparent border-white/20 text-white hover:bg-white/10">Configure</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F172A] mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Start building for free, then scale with us as you grow.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div 
                key={plan.name}
                className={`relative rounded-3xl p-8 bg-white ${plan.isPopular ? 'border-2 border-[#7C5CFF] shadow-xl scale-105 z-10' : 'border border-border shadow-sm'} transition-transform duration-300 hover:scale-[1.02]`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#4F8CFF] to-[#7C5CFF] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground min-h-[40px]">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-[#0F172A]">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-[#0F172A]">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-emerald-600" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full h-12 rounded-xl text-base ${plan.isPopular ? 'bg-[#0F172A] hover:bg-[#0F172A]/90 text-white' : 'bg-[#F8FAFC] hover:bg-[#E5E7EB] text-[#0F172A] border border-border'}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-[#F8FAFC] to-white border border-border shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#4F8CFF]/10 to-[#7C5CFF]/10 blur-[80px] rounded-full pointer-events-none" />
            
            <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-6 relative z-10">
              Start Building with <span className="gradient-text">AI</span> Today
            </h2>
            <p className="text-xl text-muted-foreground mb-10 relative z-10">
              From internal tools to enterprise platforms — build everything with OneAtlas.
            </p>
            <div className="flex justify-center relative z-10">
              <Button size="lg" className="h-14 px-10 text-lg bg-[#0F172A] hover:bg-[#0F172A]/90 text-white shadow-xl transition-all hover:scale-105 rounded-full">
                Get Started for Free
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
