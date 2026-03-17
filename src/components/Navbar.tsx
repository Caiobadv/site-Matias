import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-primary/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <span className="font-display text-xl tracking-tight">Matias Lyra de Carvalho</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
          <a href="#sobre" className="hover:text-foreground transition-colors duration-500">Sobre</a>
          <a href="#abordagem" className="hover:text-foreground transition-colors duration-500">Abordagem</a>
          <a href="#servicos" className="hover:text-foreground transition-colors duration-500">Serviços</a>
          <a href="#agendar" className="hover:text-foreground transition-colors duration-500">Agendar</a>
        </div>
        <a
          href="#agendar"
          className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition-opacity duration-500"
        >
          Agendar Consulta
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-t border-primary/5 bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {["Sobre", "Abordagem", "Serviços", "Agendar"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#agendar"
                onClick={() => setOpen(false)}
                className="mt-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-medium text-center"
              >
                Agendar Consulta
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
