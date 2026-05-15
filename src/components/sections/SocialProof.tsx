import { motion } from "framer-motion";

export function SocialProof() {
  const logos = [
    { name: "Google", url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Notion", url: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Vercel", url: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
    { name: "Stripe", url: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
    { name: "GitHub", url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" }
  ];

  const stats = [
    { value: "2M+", label: "Apps Generated" },
    { value: "150K+", label: "Teams" },
    { value: "99.99%", label: "Uptime" },
    { value: "12M+", label: "Workflow Runs" },
  ];

  return (
    <section className="py-20 bg-white border-y border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-8">
            Trusted by innovative teams worldwide
          </p>
          
          {/* Logos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo) => (
              <img 
                key={logo.name}
                src={logo.url}
                alt={logo.name}
                className={`h-8 ${logo.name === 'Notion' || logo.name === 'GitHub' ? 'h-8 object-contain w-8' : 'object-contain'}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
