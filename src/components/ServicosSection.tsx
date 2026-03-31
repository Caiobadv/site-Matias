import { motion } from "framer-motion";
import { User, Video, MapPin, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    subtitle: "Adultos",
    description:
      "Atendimento voltado para adultos que buscam compreender seus conflitos, angústias e padrões que se repetem. Um espaço para olhar para si com profundidade.",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    subtitle: "Todo o Brasil",
    description:
      "Sessões por videoconferência com a mesma qualidade e cuidado do atendimento presencial. Para quem está em qualquer lugar do Brasil.",
  },
  {
    icon: MapPin,
    title: "Atendimento Presencial",
    subtitle: "Recife, PE",
    description:
      "Consultório em Recife com ambiente reservado e acolhedor, pensado para oferecer a privacidade que o processo terapêutico pede.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeIn} className="text-center mb-16">
        <span className="label-caps text-muted-foreground mb-4 block">
          Serviços
        </span>
        <h2 className="text-4xl md:text-5xl font-display text-foreground leading-[0.95]">
          Formas de{" "}
          <span className="italic text-primary">atendimento</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.12 }}
            className="group p-8 rounded-3xl border border-primary/6 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-700"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center mb-6 group-hover:bg-primary/12 transition-colors duration-700">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-1">
              {s.title}
            </h3>
            <p className="text-xs font-medium text-accent mb-4">{s.subtitle}</p>
            <p className="text-muted-foreground leading-[1.8] text-sm mb-5">
              {s.description}
            </p>
            <a
              href="#agendar"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all duration-400"
            >
              Agendar
              <ArrowRight size={14} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
