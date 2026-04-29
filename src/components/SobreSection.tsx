import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Baby, MapPin } from "lucide-react";

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
    detail: "Formação em Psicologia, 2019",
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
  {
    icon: MapPin,
    label: "Recife, PE · Online",
    detail: "Atendimento presencial e online para todo o Brasil",
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
              Sou Matias Lyra de Carvalho, psicólogo formado pela Universidade
              Católica de Pernambuco em 2019. Tenho especialização em
              intervenções clínicas na abordagem psicanalítica e formação em
              psicoterapia de criança pelo CPPL. Atendo de forma online e
              presencial.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Acredito que seja fundamental o paciente se sentir à vontade e
              seguro no setting clínico, afinal é o espaço no qual ele
              compartilhará sua história, e certamente haverá momentos árduos
              nesse processo.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Penso que é muito importante o psicólogo ter um conhecimento para
              além da sua abordagem. Por isso busco ampliar minha formação para
              melhor atender meus pacientes, compreendendo o meio social ao qual
              eles pertencem e os processos que os atravessam: questões de
              gênero, sexualidade, raça, violência, entre tantos outros aspectos
              que fazem parte de suas vivências.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Considero que muitas vezes o silêncio é essencial para se fazer
              terapia, porém esse silêncio não pode ser algo que paralise o
              paciente. Por isso, como psicólogo, busco me adequar a cada
              pessoa e ao momento pelo qual ela está passando.
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
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreSection;
