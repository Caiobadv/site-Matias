import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const HeroSection = () => (
  <section className="pt-36 md:pt-44 pb-20 md:pb-28 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
        className="max-w-3xl"
      >
        <span className="inline-block py-1.5 px-4 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-6">
          Psicólogo Clínico • CRP 02/23083
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display leading-[0.9] mb-8 tracking-tight">
          A palavra como caminho para o{" "}
          <span className="italic text-primary">sujeito.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          Um espaço de escuta analítica dedicado à investigação do inconsciente
          e ao acolhimento do sofrimento psíquico.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#agendar"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group hover:opacity-90 transition-opacity duration-500"
          >
            Agendar Consulta
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-500" />
          </a>
          <a
            href="#abordagem"
            className="px-8 py-4 rounded-full border border-primary/10 font-medium hover:bg-primary/5 transition-colors duration-500 text-center"
          >
            Conhecer Abordagem
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
