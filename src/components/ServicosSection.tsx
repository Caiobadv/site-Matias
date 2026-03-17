import { motion } from "framer-motion";
import { User, Video, MapPin } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const services = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    subtitle: "Adultos",
    description:
      "Atendimento clínico com orientação psicanalítica voltado para adultos que buscam compreender seus conflitos internos, angústias e padrões repetitivos.",
  },
  {
    icon: Video,
    title: "Atendimento Online",
    subtitle: "Google Meet / Skype",
    description:
      "Sessões realizadas por videoconferência com a mesma qualidade e ética do atendimento presencial, para pacientes em qualquer localidade.",
  },
  {
    icon: MapPin,
    title: "Atendimento Presencial",
    subtitle: "Recife, PE",
    description:
      "Consultório em Recife com ambiente acolhedor e reservado, projetado para oferecer a privacidade que o processo analítico demanda.",
  },
];

const ServicosSection = () => (
  <section id="servicos" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeIn} className="text-center mb-16">
        <span className="label-caps text-muted-foreground mb-4 block">Serviços</span>
        <h2 className="text-4xl md:text-5xl font-display text-primary leading-[0.95]">
          Modalidades de atendimento
        </h2>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.12 }}
            className="group p-8 rounded-3xl border border-primary/8 bg-card hover:shadow-[0_20px_50px_-12px_hsl(234_66%_30%/0.08)] transition-shadow duration-700"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-700">
              <s.icon size={22} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl text-foreground mb-1">{s.title}</h3>
            <p className="text-xs font-medium text-muted-foreground mb-4">{s.subtitle}</p>
            <p className="text-muted-foreground leading-[1.7] text-sm">{s.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicosSection;
