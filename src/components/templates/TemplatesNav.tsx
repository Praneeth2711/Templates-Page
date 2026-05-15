import { Link, useLocation } from "react-router-dom";
import { Sparkles, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function TemplatesNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const links = [
    { label: "Templates", href: "/templates" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Docs", href: "/docs" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-xl border-b border-border/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="container mx-auto px-6 h-full flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center shadow-md">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-base font-bold text-[#0F172A]">OneAtlas</span>
          <span className="text-base font-light text-muted-foreground">.dev</span>
        </Link>

        <div className="hidden md:flex flex-1 max-w-sm relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            placeholder="Search templates..."
            className="w-full pl-9 pr-4 py-2 text-sm bg-[#F8FAFC] border border-border rounded-xl outline-none focus:ring-2 focus:ring-[#7C5CFF]/20 focus:border-[#7C5CFF]/50 transition-all placeholder:text-muted-foreground"
          />
        </div>

        <div className="hidden md:flex items-center gap-6 ml-2">
          {links.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href ? "text-[#0F172A]" : "text-muted-foreground hover:text-[#0F172A]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex text-muted-foreground hover:text-[#0F172A]">
            Log in
          </Button>
          <Button
            size="sm"
            className="hidden md:inline-flex bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl h-9 px-4 shadow-md group"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1.5 group-hover:rotate-12 transition-transform" />
            Generate with AI
          </Button>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-[#F8FAFC]">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-border p-4 flex flex-col gap-3 shadow-lg">
          {links.map((l) => (
            <Link key={l.href} to={l.href} onClick={() => setOpen(false)} className="text-sm font-medium text-[#0F172A] py-2">
              {l.label}
            </Link>
          ))}
          <Button size="sm" className="bg-[#0F172A] text-white rounded-xl mt-2">
            <Sparkles className="w-3.5 h-3.5 mr-1.5" /> Generate with AI
          </Button>
        </div>
      )}
    </nav>
  );
}
