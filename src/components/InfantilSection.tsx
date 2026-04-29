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
              questões aparecem.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Com formação em psicoterapia de criança pelo CPPL, ofereço um
              atendimento especializado que acolhe a criança em sua forma própria
              de se expressar. O trabalho acontece junto à família para construir
              um processo terapêutico seguro e significativo.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              É importante o trabalho da família junto com o processo
              terapêutico. Tendo a compreensão de que às vezes há a necessidade
              desse contato para que a criança possa expressar suas dores e seus
              sentimentos, o setting terapêutico pode ser o ambiente propício
              para que ela tenha a possibilidade de falar ou demonstrar o que
              sente.
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
          <div className="w-full max-w-sm space-y-4">
            {[
              { label: "Formação especializada", detail: "Psicoterapia de Criança pelo CPPL" },
              { label: "Abordagem", detail: "Psicanalítica, adaptada à linguagem e ao tempo da criança" },
              { label: "Envolvimento familiar", detail: "Trabalho conjunto com a família ao longo do processo" },
            ].map((item) => (
              <div
                key={item.label}
                className="p-5 rounded-2xl bg-primary/5 border border-primary/8"
              >
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  {item.label}
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default InfantilSection;
