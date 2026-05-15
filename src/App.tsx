import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { SocialProof } from "./components/sections/SocialProof";
import { Features } from "./components/sections/Features";
import { Showcase } from "./components/sections/Showcase";
import { Marketplace } from "./components/sections/Marketplace";
import { EnterprisePricing } from "./components/sections/EnterprisePricing";
import { TemplatesPage } from "./pages/TemplatesPage";

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FCFCFD] text-[#0F172A] font-sans overflow-x-hidden selection:bg-[#7C5CFF]/20 selection:text-[#7C5CFF]">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Showcase />
        <Marketplace />
        <EnterprisePricing />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/templates" element={<TemplatesPage />} />
    </Routes>
  );
}

export default App;
