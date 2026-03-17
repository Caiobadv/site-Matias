import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const AbordagemSection = () => (
  <section id="abordagem" className="py-24 md:py-32 px-6 bg-card">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
        <span className="label-caps text-muted-foreground mb-4 block">Abordagem</span>
        <h2 className="text-4xl md:text-5xl font-display text-primary mb-6 leading-[0.95]">
          A clínica psicanalítica
        </h2>
        <p className="text-muted-foreground leading-[1.7] text-lg">
          A psicanálise não busca eliminar o sintoma, mas escutá-lo. Cada sintoma é uma mensagem
          cifrada do inconsciente — um convite para que o sujeito se reconheça em sua própria história.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Escuta Analítica",
            text: "Um espaço onde a fala é acolhida sem julgamento, permitindo que conteúdos inconscientes possam emergir e serem elaborados pelo sujeito.",
          },
          {
            title: "O Tempo do Sujeito",
            text: "O processo analítico respeita a singularidade de cada pessoa. Não há fórmulas prontas — cada análise é única, assim como cada sujeito.",
          },
          {
            title: "Ética e Sigilo",
            text: "A relação terapêutica é fundamentada no sigilo absoluto e na ética psicanalítica, criando as condições para que a verdade subjetiva possa ser dita.",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.12 }}
            className="p-8 rounded-2xl border border-primary/8 bg-background"
          >
            <h3 className="font-display text-xl text-foreground mb-3">{item.title}</h3>
            <p className="text-muted-foreground leading-[1.7] text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AbordagemSection;
