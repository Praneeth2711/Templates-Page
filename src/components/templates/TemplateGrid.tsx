import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CATEGORIES, TEMPLATES } from "@/data/templates";
import { TemplateCard } from "./TemplateCard";
import { Search, Sparkles, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TemplateGrid({ searchQuery }: { searchQuery: string }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = TEMPLATES.filter((t) => {
    const matchesCat = activeCategory === "All" || t.category === activeCategory;
    const q = (searchQuery || "").trim().toLowerCase();
    
    if (!q) return matchesCat;

    const matchesSearch =
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      (t.tags && t.tags.some((tag) => tag.toLowerCase().includes(q))) ||
      (t.stack && t.stack.some((s) => s.toLowerCase().includes(q)));
      
    return matchesCat && matchesSearch;
  });

  return (
    <section className="py-12 bg-[#FCFCFD] border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Base44 Style Sidebar Filters */}
          <div className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-8">
              <div>
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 flex items-center gap-2">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeCategory === cat
                          ? "bg-[#0F172A] text-white shadow-md"
                          : "text-muted-foreground hover:bg-[#F8FAFC] hover:text-[#0F172A]"
                      }`}
                    >
                      {cat}
                      {cat === "All" && (
                        <span className="float-right bg-white/20 px-1.5 py-0.5 rounded text-[10px]">
                          {TEMPLATES.length}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#4F8CFF]/5 to-[#7C5CFF]/5 border border-[#7C5CFF]/10">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#4F8CFF] to-[#7C5CFF] flex items-center justify-center mb-3">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-sm font-bold text-[#0F172A] mb-1.5">AI Copilot</h4>
                <p className="text-xs text-muted-foreground mb-4">Need something custom? Describe your app and AI will build the template.</p>
                <Button className="w-full text-xs h-8 bg-white border border-border text-[#0F172A] hover:bg-[#F8FAFC] shadow-sm">
                  Generate Now
                </Button>
              </div>
            </div>
          </div>

          {/* Base44 Style Massive Cards Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#0F172A]">
                {activeCategory === "All" ? "All Templates" : activeCategory}
              </h2>
              <div className="text-sm text-muted-foreground">
                <span className="font-semibold text-[#0F172A]">{filtered.length}</span> results
              </div>
            </div>

            <AnimatePresence mode="wait">
              {filtered.length > 0 ? (
                <motion.div
                  key={activeCategory + searchQuery}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {filtered.map((template, i) => (
                    <TemplateCard key={template.id} template={template} index={i} />
                  ))}
                </motion.div>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 bg-white rounded-3xl border border-border border-dashed">
                  <div className="w-16 h-16 bg-[#F8FAFC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <p className="text-lg font-semibold text-[#0F172A] mb-2">No templates found</p>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                    We couldn't find anything matching your criteria. Try adjusting your filters or search term.
                  </p>
                  <Button className="bg-[#0F172A] hover:bg-[#0F172A]/90 text-white rounded-xl">
                    Clear Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
