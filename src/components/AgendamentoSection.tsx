import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Video, MapPin, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const AgendamentoSection = () => {
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = [
      `Olá, me chamo ${formData.name}.`,
      formData.contact ? `Meu contato: ${formData.contact}.` : "",
      formData.message ? formData.message : "",
    ].filter(Boolean).join(" ");
    window.open(`https://wa.me/5581995448555?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="agendar" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeIn}>
            <span className="label-caps text-muted-foreground mb-4 block">
              Contato
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6 leading-[0.95]">
              Vamos{" "}
              <span className="italic text-primary">conversar?</span>
            </h2>
            <p className="text-muted-foreground leading-[1.8] mb-8">
              O primeiro passo é uma conversa inicial para entendermos sua
              demanda e encontrarmos a melhor forma de caminhar juntos.
              Entre em contato pelo WhatsApp ou envie uma mensagem pelo formulário.
            </p>

            <a
              href="https://wa.me/5581995448555?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-7 py-4 rounded-full font-medium group hover:bg-[#20bd5a] transition-colors duration-500 mb-6"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
              <ArrowRight
                size={16}
                className="ml-auto group-hover:translate-x-1 transition-transform duration-500"
              />
            </a>

            <div className="space-y-3">
              {[
                { Icon: Video, label: "Atendimento Online", sub: "Todo o Brasil" },
                { Icon: MapPin, label: "Atendimento Presencial", sub: "Recife, PE" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-primary/6"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center">
                    <item.Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.15 }}
          >
            <div className="p-8 rounded-3xl border border-primary/8 bg-card shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-5">
                <p className="text-sm font-medium text-foreground mb-1">
                  Ou envie uma mensagem
                </p>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full p-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Como gostaria de ser chamado?"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">
                    E-mail ou telefone
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) =>
                      setFormData({ ...formData, contact: e.target.value })
                    }
                    className="w-full p-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Seu melhor contato"
                  />
                </div>
                <div>
                  <label className="label-caps text-muted-foreground mb-2 block">
                    Mensagem
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={4}
                    className="w-full p-3.5 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Conte brevemente o que te traz aqui..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={!formData.name || !formData.contact}
                  className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium disabled:opacity-30 transition-all duration-500 flex items-center justify-center gap-2 group"
                >
                  Enviar pelo WhatsApp
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgendamentoSection;
