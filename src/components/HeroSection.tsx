import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const transition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const };

const HeroSection = () => (
  <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transition}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-primary/8 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
            Psicólogo Clínico · CRP 02/23083
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display leading-[0.92] mb-7 tracking-tight text-foreground">
            Um espaço de{" "}
            <span className="italic text-primary">escuta</span> para o
            que precisa ser dito.
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
            Psicólogo clínico com abordagem psicanalítica. Atendimento
            presencial em Recife e online para todo o Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#agendar"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 group hover:opacity-90 transition-opacity duration-500"
            >
              Agendar Consulta
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-500"
              />
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 rounded-full border border-primary/15 font-medium hover:bg-primary/5 transition-colors duration-500 text-center text-foreground"
            >
              Conhecer mais
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...transition, delay: 0.2 }}
          className="relative order-first md:order-last"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded-3xl overflow-hidden bg-primary/5">
            <img
              src="/photo-matias.jpeg"
              alt="Matias Lyra de Carvalho — Psicólogo Clínico"
              className="w-full h-full object-cover object-center"
              loading="eager"
              onError={(e) => {
                const target = e.currentTarget;
                target.style.display = 'none';
                const placeholder = target.nextElementSibling as HTMLElement;
                if (placeholder) placeholder.style.display = 'flex';
              }}
            />
            {/* Placeholder elegante enquanto a foto não é enviada */}
            <div
              className="absolute inset-0 hidden flex-col items-center justify-center text-center px-8"
              style={{ display: 'none' }}
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-primary/40">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <p className="font-display text-lg italic text-primary/40 leading-relaxed">
                Matias Lyra de Carvalho
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Psicólogo Clínico · CRP 02/23083
              </p>
            </div>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
          </div>
          {/* Elemento decorativo */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-accent/15 -z-10" />
          <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-primary/6 -z-10" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
