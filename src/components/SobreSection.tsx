import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Baby } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const credentials = [
  {
    icon: GraduationCap,
    label: "Universidade Católica de Pernambuco",
    detail: "Formação em Psicologia — 2019",
  },
  {
    icon: BookOpen,
    label: "Especialização em Psicanálise",
    detail: "Intervenções clínicas na abordagem psicanalítica",
  },
  {
    icon: Baby,
    label: "Psicoterapia de Criança",
    detail: "Formação pelo CPPL",
  },
];

const SobreSection = () => (
  <section id="sobre" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div {...fadeIn}>
          <span className="label-caps text-muted-foreground mb-4 block">
            Sobre
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-8 leading-[0.95]">
            Quem <span className="italic text-primary">sou</span>
          </h2>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-[1.8]">
              Sou Matias Lyra de Carvalho, psicólogo clínico formado pela
              Universidade Católica de Pernambuco, com especialização em
              intervenções clínicas na abordagem psicanalítica e formação em
              psicoterapia de criança pelo CPPL.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Acredito que o espaço terapêutico precisa ser, antes de tudo, um
              lugar onde você se sinta à vontade. É ali que sua história será
              compartilhada — e sei que haverá momentos difíceis nesse caminho.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Busco ampliar constantemente minha formação para além da abordagem
              clínica, porque entendo que cuidar de alguém é também compreender
              o mundo em que essa pessoa vive: suas questões de gênero,
              sexualidade, raça, e os processos sociais que a atravessam.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Cada pessoa traz um ritmo próprio. Como psicólogo, procuro me
              adequar a cada paciente e ao momento que ele está vivendo — porque
              escutar de verdade é também saber quando o silêncio é parte do
              processo.
            </p>
          </div>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.15 }}
        >
          <div className="space-y-4">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-primary/6"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                  <cred.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-snug">
                    {cred.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {cred.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-primary/5 border border-primary/8">
            <p className="font-display text-lg text-foreground italic leading-relaxed">
              "Escutar de verdade é também saber quando o silêncio é parte do
              processo."
            </p>
            <p className="text-xs text-muted-foreground mt-3 font-medium">
              — Matias Lyra de Carvalho
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreSection;
