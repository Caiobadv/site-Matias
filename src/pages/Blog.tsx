import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

const posts = [
  {
    slug: "o-que-e-psicanalise",
    tag: "Psicanálise",
    title: "O que é psicanálise e como ela funciona na prática clínica?",
    excerpt:
      "A psicanálise é frequentemente mal compreendida. Neste texto, exploro o que de fato acontece dentro de um processo analítico e por que a fala — e o silêncio — são tão centrais nesse trabalho.",
    readTime: "5 min",
  },
  {
    slug: "psicoterapia-para-criancas",
    tag: "Psicoterapia Infantil",
    title: "Quando levar meu filho ao psicólogo?",
    excerpt:
      "Pais e mães frequentemente se perguntam se o comportamento do filho é 'normal' para a idade ou se indica algo que merece atenção. Algumas perguntas podem ajudar a orientar essa decisão.",
    readTime: "4 min",
  },
  {
    slug: "ansiedade-e-psicanalise",
    tag: "Saúde Mental",
    title: "Ansiedade: o que a psicanálise tem a dizer sobre isso?",
    excerpt:
      "Vivemos em um tempo em que a ansiedade virou quase um diagnóstico coletivo. Mas o que está por trás desse mal-estar? A psicanálise oferece uma leitura que vai além dos sintomas.",
    readTime: "6 min",
  },
  {
    slug: "setting-terapeutico",
    tag: "Processo Terapêutico",
    title: "O setting clínico: por que o ambiente importa na terapia?",
    excerpt:
      "O setting terapêutico não é apenas o consultório físico. É um conjunto de condições — tempo, espaço, postura — que cria o terreno necessário para que o trabalho analítico aconteça.",
    readTime: "4 min",
  },
  {
    slug: "terapia-online-funciona",
    tag: "Atendimento Online",
    title: "Terapia online funciona? Uma reflexão honesta",
    excerpt:
      "Com a expansão do atendimento virtual, surgem dúvidas legítimas: é possível construir vínculo terapêutico pela tela? Compartilho minha experiência clínica nesse formato.",
    readTime: "5 min",
  },
  {
    slug: "silencio-na-terapia",
    tag: "Processo Terapêutico",
    title: "O silêncio na terapia não é vazio — é parte do trabalho",
    excerpt:
      "Há momentos em que o silêncio dentro da sessão incomoda. Pacientes se perguntam se estão 'fazendo errado'. Mas o silêncio, quando bem manejado, pode ser um dos movimentos mais ricos do processo.",
    readTime: "3 min",
  },
];

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-foreground">
    <Navbar />

    <main className="pt-32 md:pt-40 pb-24 md:pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div {...fadeIn} className="mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={14} />
            Voltar ao site
          </Link>
          <span className="label-caps text-muted-foreground mb-4 block">Blog</span>
          <h1 className="text-4xl md:text-5xl font-display text-foreground leading-[0.95] mb-4">
            Textos sobre <span className="italic text-primary">psicologia</span>
          </h1>
          <p className="text-muted-foreground leading-[1.8] max-w-xl">
            Reflexões sobre saúde mental, processo terapêutico e psicanálise.
            Em breve, novos textos publicados por Matias Lyra de Carvalho.
          </p>
        </motion.div>

        <div className="space-y-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="group p-8 rounded-3xl border border-primary/6 bg-card hover:shadow-lg hover:shadow-primary/5 transition-all duration-700 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {post.tag}
                </span>
                <span className="text-primary/20">·</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={11} />
                  {post.readTime} de leitura
                </span>
              </div>
              <h2 className="font-display text-xl md:text-2xl text-foreground mb-3 leading-snug group-hover:text-primary transition-colors duration-500">
                {post.title}
              </h2>
              <p className="text-muted-foreground text-sm leading-[1.8]">
                {post.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary/50 italic">
                Em breve
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </main>

    <FooterSection />
    <WhatsAppButton />
  </div>
);

export default Blog;
