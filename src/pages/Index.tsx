import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import AbordagemSection from "@/components/AbordagemSection";
import ServicosSection from "@/components/ServicosSection";
import AgendamentoSection from "@/components/AgendamentoSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
    <Navbar />
    <HeroSection />
    <SobreSection />
    <AbordagemSection />
    <ServicosSection />
    <AgendamentoSection />
    <FooterSection />
  </div>
);

export default Index;
