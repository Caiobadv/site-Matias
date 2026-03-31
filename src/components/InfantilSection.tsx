import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const InfantilSection = () => (
  <section id="infantil" className="py-24 md:py-32 px-6 bg-card">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div {...fadeIn}>
          <span className="label-caps text-accent mb-4 block">
            Atendimento Especializado
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mb-8 leading-[0.95]">
            Psicoterapia de{" "}
            <span className="italic text-primary">crianças</span>
          </h2>
          <div className="space-y-5">
            <p className="text-muted-foreground leading-[1.8]">
              Crianças nem sempre expressam o que sentem por meio de palavras.
              Muitas vezes, é no brincar, no desenho e no comportamento que suas
              questões se manifestam.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Com formação em psicoterapia de criança pelo CPPL, ofereço um
              atendimento especializado que acolhe a criança em sua forma própria
              de se expressar — e que trabalha junto à família para construir um
              processo terapêutico seguro e significativo.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Se você é pai, mãe ou responsável e percebe que sua criança está
              passando por dificuldades emocionais, comportamentais ou
              relacionais, a psicoterapia pode ser um caminho de cuidado.
            </p>
          </div>
          <a
            href="https://wa.me/5581995448555?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20psicoterapia%20infantil."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full font-medium group hover:opacity-90 transition-opacity duration-500"
          >
            Agende uma conversa sobre seu filho
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-500"
            />
          </a>
        </motion.div>

        <motion.div
          {...fadeIn}
          transition={{ ...fadeIn.transition, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-sm">
            <div className="aspect-square rounded-3xl bg-primary/5 border border-primary/8 flex items-center justify-center">
              <div className="text-center px-8">
                <Heart
                  size={48}
                  className="text-primary/30 mx-auto mb-6"
                  strokeWidth={1.5}
                />
                <p className="font-display text-xl text-foreground italic leading-relaxed mb-2">
                  "Acolher a criança em sua forma própria de se expressar."
                </p>
                <p className="text-xs text-muted-foreground mt-4">
                  Formação em Psicoterapia de Criança — CPPL
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InfantilSection;
