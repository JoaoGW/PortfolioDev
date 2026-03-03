"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

import Image from "next/image";

import { HeaderTop } from "@/components/headerTop";
import { Navbar } from "@/components/navbar";

import ProfilePicture from "../../assets/profile.jpg";

import {
  ArrowRight,
  Send,
  Check,
  RotateCcw,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Phone,
} from "lucide-react";

type Subject =
  | "Oportunidade de trabalho"
  | "Projeto em conjunto"
  | "Dúvidas"
  | "Outro";

const SUBJECTS: Subject[] = [
  "Oportunidade de trabalho",
  "Projeto em conjunto",
  "Dúvidas",
  "Outro",
];

export default function Contato() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<Subject | "">("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 0 || step === 1) inputRef.current?.focus();
      if (step === 3) textareaRef.current?.focus();
    }, 400);
    return () => clearTimeout(timer);
  }, [step]);

  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const advance = () => {
    setError("");
    if (step === 0) {
      if (!name.trim()) {
        setError("Por favor, insira seu nome.");
        return;
      }
      setStep(1);
    } else if (step === 1) {
      if (!validateEmail(email)) {
        setError("E-mail inválido.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!subject) {
        setError("Selecione um assunto.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (!message.trim()) {
        setError("Escreva uma mensagem.");
        return;
      }
      handleSend();
    }
  };

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      advance();
    }
  };

  const handleSend = async () => {
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Ocorreu um erro. Tente novamente.");
        return;
      }

      setSent(true);
    } catch {
      setError("Erro de rede. Tente novamente.");
    } finally {
      setSending(false);
    }
  };

  const reset = () => {
    setStep(0);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSent(false);
    setError("");
  };

  const steps = [
    { question: "Olá! Qual é o seu nome?" },
    { question: `Prazer, ${name || "..."}! Qual é o seu e-mail?` },
    { question: "Sobre o que você gostaria de falar?" },
    { question: "Me conte mais detalhes..." },
  ];

  const completedAnswers = [
    { q: "Nome", a: name },
    { q: "E-mail", a: email },
    { q: "Assunto", a: subject },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <HeaderTop />

      <main className="flex-1 flex flex-col lg:flex-row justify-center gap-28 px-6 md:px-20 pt-32 pb-32 max-w-7xl mx-auto w-full">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="sr-only">Contato com João Pedro Ribeiro</h1>
          {/* Respostas já dadas */}
          <div className="mb-10 flex flex-col gap-3">
            <AnimatePresence>
              {completedAnswers.slice(0, step).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="flex items-baseline gap-3"
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600 w-16 shrink-0">
                    {item.q}
                  </span>
                  <span className="text-neutral-300 text-base font-medium truncate">
                    {item.a}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pergunta e input ativos */}
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                {/* Pergunta */}
                <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight text-white">
                  {steps[step].question}
                </h2>

                {/* Input: Nome */}
                {step === 0 && (
                  <input
                    ref={inputRef}
                    id="contact-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Seu nome..."
                    aria-label="Seu nome"
                    aria-required="true"
                    aria-invalid={Boolean(error && step === 0)}
                    aria-describedby={
                      error && step === 0 ? "contact-error" : undefined
                    }
                    className="bg-transparent border-b-2 border-neutral-700 focus:border-white outline-none text-2xl md:text-3xl font-semibold text-white py-2 transition-colors duration-200 w-full md:w-[480px]"
                  />
                )}

                {/* Input: E-mail */}
                {step === 1 && (
                  <input
                    ref={inputRef}
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="seu@email.com"
                    aria-label="Seu e-mail"
                    aria-required="true"
                    aria-invalid={Boolean(error && step === 1)}
                    aria-describedby={
                      error && step === 1 ? "contact-error" : undefined
                    }
                    className="bg-transparent border-b-2 border-neutral-700 focus:border-white outline-none text-2xl md:text-3xl font-semibold text-white py-2 transition-colors duration-200 w-full md:w-[480px]"
                  />
                )}

                {/* Select: Assunto */}
                {step === 2 && (
                  <div
                    className="flex flex-wrap gap-3 mt-2"
                    role="group"
                    aria-label="Assunto da mensagem"
                  >
                    {SUBJECTS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setSubject(s);
                          setError("");
                        }}
                        aria-pressed={subject === s}
                        className={`px-5 py-2.5 rounded-full border text-sm font-semibold transition-all duration-200 ${
                          subject === s
                            ? "bg-white text-neutral-950 border-white"
                            : "bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-400 hover:text-white"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                {/* Textarea: Mensagem */}
                {step === 3 && (
                  <textarea
                    ref={textareaRef}
                    id="contact-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Escreva aqui..."
                    rows={4}
                    aria-label="Mensagem"
                    aria-required="true"
                    aria-invalid={Boolean(error && step === 3)}
                    aria-describedby={
                      error && step === 3 ? "contact-error" : undefined
                    }
                    className="bg-transparent border-b-2 border-neutral-700 focus:border-white outline-none text-lg md:text-xl font-medium text-white py-2 transition-colors duration-200 w-full resize-none"
                  />
                )}

                {/* Erro */}
                <AnimatePresence>
                  {error && (
                    <motion.p
                      id="contact-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-red-400"
                      role="alert"
                      aria-live="assertive"
                    >
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Botão avançar */}
                <div className="flex items-center gap-4 mt-2">
                  <button
                    type="button"
                    onClick={advance}
                    disabled={sending}
                    aria-label={
                      step < 3
                        ? "Avançar para próxima etapa"
                        : "Enviar mensagem de contato"
                    }
                    className="group flex items-center gap-2 bg-white text-neutral-950 font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 hover:bg-neutral-200 disabled:opacity-50"
                  >
                    {step < 3 ? (
                      <>
                        Próximo
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </>
                    ) : (
                      <>
                        {sending ? "Enviando..." : "Enviar mensagem"}
                        <Send size={16} />
                      </>
                    )}
                  </button>
                  <span className="text-neutral-700 text-xs">
                    ou pressione{" "}
                    <kbd className="px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400 font-mono text-xs">
                      Enter ↵
                    </kbd>
                  </span>
                </div>
              </motion.div>
            ) : (
              /* Confirmação */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <div className="w-14 h-14 rounded-full bg-[#72BF6A]/20 border border-[#72BF6A]/40 flex items-center justify-center">
                  <Check size={26} className="text-[#72BF6A]" />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
                  Mensagem enviada, {name}!<br />
                  <span className="text-neutral-500">
                    Responderei em breve.
                  </span>
                </h2>
                <button
                  type="button"
                  onClick={reset}
                  aria-label="Enviar outra mensagem"
                  className="flex items-center gap-2 text-sm text-neutral-500 hover:text-white transition-colors duration-200 w-fit"
                >
                  <RotateCcw size={14} />
                  Enviar outra mensagem
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Indicador de progresso */}
          {!sent && (
            <div
              className="fixed bottom-28 left-1/2 -translate-x-1/2 flex gap-2"
              aria-hidden="true"
            >
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i < step
                      ? "w-6 bg-[#72BF6A]"
                      : i === step
                        ? "w-8 bg-white"
                        : "w-4 bg-neutral-700"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── Sidebar direita ── */}
        <aside className="lg:w-[340px] shrink-0 flex flex-col gap-8 lg:pt-16">
          {/* Foto */}
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden border border-neutral-800 shadow-lg">
            <Image
              src={ProfilePicture}
              alt="João Pedro Ribeiro"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Nome + cargo */}
          <div className="flex flex-col gap-1">
            <span className="text-white font-bold text-lg leading-tight">
              João Pedro Ribeiro
            </span>
            <span className="text-neutral-500 text-sm">
              Desenvolvedor Full-Stack &amp; Mobile
            </span>
          </div>

          {/* Divisor */}
          <div className="h-px bg-neutral-800 w-full" />

          {/* Links de contato */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:profissional.jpribeiro@gmail.com"
              aria-label="Enviar e-mail para profissional.jpribeiro@gmail.com"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                <Mail size={14} />
              </span>
              <span className="text-sm">profissional.jpribeiro@gmail.com</span>
            </a>

            <a
              href="https://github.com/JoaoGW"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir GitHub de João Pedro Ribeiro em nova aba"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                <Github size={14} />
              </span>
              <span className="text-sm">github.com/JoaoGW</span>
            </a>

            <a
              href="https://www.linkedin.com/in/jo%C3%A3o-pedro-do-carmo-ribeiro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir LinkedIn de João Pedro Ribeiro em nova aba"
              className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors duration-200 group"
            >
              <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-600 transition-colors">
                <Linkedin size={14} />
              </span>
              <span className="text-sm">João Pedro Ribeiro</span>
            </a>

            <div className="flex items-start gap-3 text-neutral-500">
              <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                <MapPin size={14} />
              </span>
              <span className="text-sm leading-relaxed">
                São Paulo, Brasil
                <br />
                <span className="text-neutral-600">& União Europeia</span>
              </span>
            </div>

            <div className="flex items-center gap-3 text-neutral-500">
              <span className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0">
                <Phone size={14} />
              </span>
              <span className="text-sm">+55 (11) 99256-9035</span>
            </div>
          </div>
        </aside>
      </main>

      <Navbar />
    </div>
  );
}
