import { MessageCircle, MapPin, Instagram } from "lucide-react";

const FooterSection = () => (
  <footer className="bg-footer-bg text-primary-foreground py-20 md:py-24 px-6">
    <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-2xl mb-6">Matias Lyra de Carvalho</h3>
        <p className="text-primary-foreground/40 text-sm leading-relaxed">
          Psicologia Clínica com orientação psicanalítica.
          <br />
          CRP 02/23083
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="label-caps text-primary-foreground/40">Contato</h4>
        <a
          href="https://wa.me/5581995448555"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
        >
          <MessageCircle size={18} /> (81) 99544-8555
        </a>
        <div className="flex items-center gap-3 text-primary-foreground/80">
          <MapPin size={18} /> Recife, PE & Online
        </div>
      </div>
      <div className="space-y-4">
        <h4 className="label-caps text-primary-foreground/40">Social</h4>
        <a
          href="https://instagram.com/matiaslcpsicologia"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-500"
        >
          <Instagram size={18} /> @matiaslcpsicologia
        </a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-primary-foreground/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] uppercase tracking-widest text-primary-foreground/30">
      <p>© 2024 Matias Lyra. Todos os direitos reservados.</p>
      <p>Desenvolvido com foco em privacidade.</p>
    </div>
  </footer>
);

export default FooterSection;
