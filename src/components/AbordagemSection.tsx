import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const pillars = [
  {
    number: "01",
    title: "Escuta sem julgamento",
    text: "A terapia é um espaço onde sua fala é acolhida integralmente. Sem respostas apressadas, sem direcionamentos impostos. O que importa é o que surge da sua própria história.",
  },
  {
    number: "02",
    title: "Respeito ao seu tempo",
    text: "Não existe um cronograma fixo para o processo terapêutico. Cada pessoa tem seu ritmo, e o trabalho clínico respeita essa singularidade. Sem pressa, sem fórmulas.",
  },
  {
    number: "03",
    title: "Ética e sigilo",
    text: "Tudo o que é compartilhado no espaço terapêutico é protegido pelo sigilo profissional. Esse compromisso é a base para que a confiança se construa e a fala possa acontecer com liberdade.",
  },
];

const AbordagemSection = () => (
  <section id="abordagem" className="py-24 md:py-32 px-6 bg-card">
    <div className="max-w-6xl mx-auto">
      <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center mb-16">
        <span className="label-caps text-muted-foreground mb-4 block">
          Abordagem
        </span>
        <h2 className="text-4xl md:text-5xl font-display text-foreground mb-6 leading-[0.95]">
          Como <span className="italic text-primary">trabalho</span>
        </h2>
        <p className="text-muted-foreground leading-[1.8] text-base md:text-lg">
          A psicanálise não oferece respostas prontas. Ela oferece um espaço para
          que você possa escutar a si mesmo. A partir dessa escuta, encontrar
          seus próprios caminhos.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {pillars.map((item, i) => (
          <motion.div
            key={item.title}
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: i * 0.12 }}
            className="p-8 rounded-2xl border border-primary/6 bg-background group hover:shadow-lg hover:shadow-primary/5 transition-shadow duration-700"
          >
            <span className="text-xs font-semibold text-accent tracking-wider">
              {item.number}
            </span>
            <h3 className="font-display text-xl text-foreground mt-3 mb-4">
              {item.title}
            </h3>
            <p className="text-muted-foreground leading-[1.8] text-sm">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AbordagemSection;
