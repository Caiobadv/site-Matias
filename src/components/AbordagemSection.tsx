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
    title: "A cura pela palavra",
    text: "A abordagem psicanalítica tem como objetivo buscar a cura pela palavra. É fundamental que o paciente possa falar e se escutar, de maneira que possibilite encontrar o melhor caminho para resolver as suas questões.",
  },
  {
    number: "02",
    title: "Acolhimento e escuta",
    text: "A escuta precisa ser isenta de julgamento moral por parte do terapeuta. Por isso, busco proporcionar um ambiente clínico acolhedor, onde o paciente se sinta à vontade para trabalhar seus pontos.",
  },
  {
    number: "03",
    title: "Sigilo absoluto",
    text: "Tudo o que é dito na terapia não irá sair do setting clínico. O sigilo é um compromisso ético fundamental, e é ele que permite que a fala aconteça com liberdade.",
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
          Minha abordagem é psicanalítica. Não raro, lidar consigo mesmo é um
          caminho árduo e penoso. Sabendo disso, busco proporcionar que o
          paciente se sinta à vontade para trabalhar seus pontos.
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
