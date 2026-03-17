import { motion } from "framer-motion";
import { User } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const SobreSection = () => (
  <section id="sobre" className="py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <motion.div {...fadeIn}>
          <span className="label-caps text-muted-foreground mb-4 block">Sobre</span>
          <h2 className="text-4xl md:text-5xl font-display text-primary mb-8 leading-[0.95]">
            Uma escuta que acolhe o que não se diz.
          </h2>
        </motion.div>
        <motion.div {...fadeIn} transition={{ ...fadeIn.transition, delay: 0.15 }}>
          <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6">
            <User size={24} className="text-primary" />
          </div>
          <p className="text-muted-foreground leading-[1.7] mb-6">
            Matias Lyra de Carvalho é psicólogo clínico com orientação psicanalítica, registrado
            sob o CRP 02/23083. Sua formação é fundamentada na teoria freudiana e lacaniana, com
            foco na escuta do sujeito e na investigação das formações do inconsciente.
          </p>
          <p className="text-muted-foreground leading-[1.7] mb-6">
            Com experiência em atendimento individual de adultos, tanto presencial em Recife quanto
            online, dedica-se a oferecer um espaço onde a fala possa emergir sem julgamento —
            permitindo que o paciente reconheça seus próprios caminhos de elaboração.
          </p>
          <p className="text-muted-foreground leading-[1.7]">
            O trabalho clínico é pautado pela ética psicanalítica: sigilo, respeito ao tempo
            singular de cada sujeito e compromisso com um processo terapêutico que privilegia
            a profundidade sobre a superficialidade.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default SobreSection;
