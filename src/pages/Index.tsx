import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SobreSection from "@/components/SobreSection";
import AbordagemSection from "@/components/AbordagemSection";
import ServicosSection from "@/components/ServicosSection";
import InfantilSection from "@/components/InfantilSection";
import AgendamentoSection from "@/components/AgendamentoSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
    <Navbar />
    <main>
      <HeroSection />
      <SobreSection />
      <AbordagemSection />
      <ServicosSection />
      <InfantilSection />
      <AgendamentoSection />
    </main>
    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Index;
