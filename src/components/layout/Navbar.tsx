import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50"
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight text-[#0F172A]">OneAtlas.dev</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#product" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Product</a>
          <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Solutions</a>
          <Link to="/templates" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Templates</Link>
          <a href="#enterprise" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Enterprise</a>
          <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Docs</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#login" className="hidden md:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Login</a>
          <Button className="bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-full px-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5">
            Start Building
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}
