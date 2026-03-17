import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Video, ArrowRight, CheckCircle } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const AgendamentoSection = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ name: "", email: "", reason: "" });
  const [selectedTime, setSelectedTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      setStep(1);
      setFormData({ name: "", email: "", reason: "" });
      setSelectedTime("");
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="agendar" className="py-24 md:py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeIn}>
            <span className="label-caps text-muted-foreground mb-4 block">Agendamento</span>
            <h2 className="text-4xl font-display text-primary mb-6 leading-[0.95]">
              Inicie seu processo
            </h2>
            <p className="text-muted-foreground leading-[1.7] mb-8">
              O primeiro passo é uma entrevista preliminar para entendermos sua demanda e
              alinharmos a modalidade do atendimento.
            </p>
            <div className="space-y-4">
              {[
                { icon: Video, label: "Atendimento Online", sub: "Via Google Meet ou Skype" },
                { icon: () => <span className="text-primary font-display text-lg">R</span>, label: "Atendimento Presencial", sub: "Recife, PE" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4 p-4 rounded-2xl bg-background">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center shadow-sm border border-primary/5">
                    {typeof item.icon === "function" ? (
                      <item.icon />
                    ) : (
                      <item.icon size={18} className="text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeIn}
            transition={{ ...fadeIn.transition, delay: 0.15 }}
            className="p-8 rounded-3xl border border-primary/10 shadow-[0_20px_50px_-12px_hsl(234_66%_30%/0.06)] bg-card"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle size={48} className="text-primary mb-4" />
                  <h3 className="font-display text-2xl text-foreground mb-2">Solicitação enviada</h3>
                  <p className="text-sm text-muted-foreground">
                    Entraremos em contato em breve para confirmar seu horário.
                  </p>
                </motion.div>
              ) : step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Nome Completo</label>
                    <input
                      type="text"
                      value={formData.name}
                      className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Como gostaria de ser chamado?"
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="label-caps text-muted-foreground mb-2 block">E-mail</label>
                    <input
                      type="email"
                      value={formData.email}
                      className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="seu@email.com"
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="label-caps text-muted-foreground mb-2 block">Motivo da consulta</label>
                    <textarea
                      value={formData.reason}
                      rows={3}
                      className="w-full p-3 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                      placeholder="Descreva brevemente o que te traz aqui..."
                      onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                  </div>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.name || !formData.email}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium disabled:opacity-30 transition-all duration-500 flex items-center justify-center gap-2 group"
                  >
                    Próximo Passo
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-5"
                >
                  <div>
                    <p className="text-sm font-medium mb-3">Selecione um período de preferência:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["Manhã", "Tarde", "Noite"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`p-3 text-sm border rounded-lg transition-colors duration-300 ${
                            selectedTime === time
                              ? "bg-primary text-primary-foreground border-primary"
                              : "border-input hover:bg-primary/5"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-3">Dias de preferência:</p>
                    <div className="grid grid-cols-3 gap-2">
                      {["Seg-Qua", "Qui-Sex", "Sábado"].map((day) => (
                        <button
                          key={day}
                          className="p-3 text-sm border border-input rounded-lg hover:bg-primary/5 transition-colors duration-300"
                        >
                          {day}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    onClick={handleSubmit}
                    disabled={!selectedTime}
                    className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-medium disabled:opacity-30 transition-all duration-500"
                  >
                    Confirmar Solicitação
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    ← Voltar
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgendamentoSection;
