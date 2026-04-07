"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Globe,
  User,
  Mail,
  CheckCircle,
  AlertTriangle,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { SITE } from "@/lib/constants";

// ============ TYPES ============

export type MessageRole = "bot" | "user";
export type MessageType =
  | "text"
  | "score"
  | "buttons"
  | "loading"
  | "strengths"
  | "issues"
  | "link";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  type: MessageType;
  buttons?: string[];
  scoreData?: {
    score: number;
    grade: string;
    gradeLabel: string;
  };
  items?: string[];
  link?: { label: string; href: string };
}

export type ChatStep = 1 | 2 | 3 | 4 | 5 | 6 | 7 | null;

interface ChatWindowProps {
  messages: ChatMessage[];
  currentStep: ChatStep;
  onSendMessage: (text: string) => void;
  onButtonClick: (text: string) => void;
  onClose: () => void;
}

// ============ HELPERS ============

function getScoreColor(score: number): string {
  if (score >= 80) return "#22c55e";
  if (score >= 60) return "#eab308";
  if (score >= 40) return "#f97316";
  return "#ef4444";
}

function getGradeBg(grade: string): string {
  if (grade === "A" || grade === "A+") return "bg-green-500/20 text-green-400";
  if (grade === "B" || grade === "B+") return "bg-yellow-500/20 text-yellow-400";
  if (grade === "C" || grade === "C+") return "bg-orange-500/20 text-orange-400";
  return "bg-red-500/20 text-red-400";
}

function getInputConfig(step: ChatStep): {
  placeholder: string;
  icon: typeof Globe;
  type: string;
} | null {
  if (step === 2)
    return {
      placeholder: "https://monsite.com",
      icon: Globe,
      type: "url",
    };
  if (step === 5)
    return {
      placeholder: "Votre pr\u00e9nom",
      icon: User,
      type: "text",
    };
  if (step === 6)
    return {
      placeholder: "votre@email.com",
      icon: Mail,
      type: "email",
    };
  return null;
}

// ============ SUB-COMPONENTS ============

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-3 py-2">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="block h-2 w-2 rounded-full bg-purple-400"
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function BotAvatar() {
  return (
    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
      CL
    </div>
  );
}

function ScoreCard({
  score,
  grade,
  gradeLabel,
}: {
  score: number;
  grade: string;
  gradeLabel: string;
}) {
  const color = getScoreColor(score);

  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="my-2 rounded-xl border border-white/10 bg-white/5 p-4 text-center"
    >
      <div className="text-4xl font-black" style={{ color }}>
        {score}
        <span className="text-lg font-medium text-white/40">/100</span>
      </div>
      <div className="mt-1 flex items-center justify-center gap-2">
        <span
          className={`inline-block rounded-md px-2 py-0.5 text-xs font-bold ${getGradeBg(grade)}`}
        >
          {grade}
        </span>
        <span className="text-xs text-white/50">{gradeLabel}</span>
      </div>
    </motion.div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isBot = message.role === "bot";

  if (message.type === "loading") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <BotAvatar />
        <div className="rounded-xl rounded-tl-sm bg-purple-600/20 px-3 py-2">
          <TypingIndicator />
        </div>
      </motion.div>
    );
  }

  if (message.type === "score" && message.scoreData) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <BotAvatar />
        <div className="max-w-[280px]">
          <div className="rounded-xl rounded-tl-sm bg-purple-600/20 px-3 py-2 text-sm text-white/90">
            {message.content}
          </div>
          <ScoreCard {...message.scoreData} />
        </div>
      </motion.div>
    );
  }

  if (message.type === "strengths" && message.items) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <BotAvatar />
        <div className="max-w-[280px] rounded-xl rounded-tl-sm bg-purple-600/20 px-3 py-2">
          <p className="mb-1.5 text-sm font-semibold text-white/90">
            {message.content}
          </p>
          <ul className="space-y-1">
            {message.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-xs text-white/70"
              >
                <CheckCircle className="mt-0.5 h-3 w-3 shrink-0 text-green-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  if (message.type === "issues" && message.items) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <BotAvatar />
        <div className="max-w-[280px] rounded-xl rounded-tl-sm bg-purple-600/20 px-3 py-2">
          <p className="mb-1.5 text-sm font-semibold text-white/90">
            {message.content}
          </p>
          <ul className="space-y-1">
            {message.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-1.5 text-xs text-white/70"
              >
                <AlertTriangle className="mt-0.5 h-3 w-3 shrink-0 text-orange-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  }

  if (message.type === "link" && message.link) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-start gap-2"
      >
        <BotAvatar />
        <div className="max-w-[280px] rounded-xl rounded-tl-sm bg-purple-600/20 px-3 py-2">
          <p className="mb-2 text-sm text-white/90">{message.content}</p>
          <a
            href={message.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-purple-300 underline decoration-purple-300/40 hover:text-purple-200"
          >
            {message.link.label}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </motion.div>
    );
  }

  // Default text + buttons
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isBot ? "items-start" : "justify-end"} gap-2`}
    >
      {isBot && <BotAvatar />}
      <div className={`max-w-[280px] ${isBot ? "" : "text-right"}`}>
        <div
          className={`inline-block rounded-xl px-3 py-2 text-sm ${
            isBot
              ? "rounded-tl-sm bg-purple-600/20 text-white/90"
              : "rounded-tr-sm bg-white/10 text-white/80"
          }`}
        >
          {message.content}
        </div>
        {message.type === "buttons" && message.buttons && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {message.buttons.map((btn) => (
              <ButtonOption key={btn} label={btn} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// We use a context-free button; the click handler is attached in the parent
function ButtonOption({ label }: { label: string }) {
  return (
    <button
      data-chat-button={label}
      className="rounded-lg border border-purple-500/40 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-300 transition-colors hover:bg-purple-500/25 hover:text-purple-200"
    >
      {label.startsWith("Prendre") && (
        <Calendar className="mr-1 inline h-3 w-3" />
      )}
      {label}
    </button>
  );
}

// ============ MAIN COMPONENT ============

export default function ChatWindow({
  messages,
  currentStep,
  onSendMessage,
  onButtonClick,
  onClose,
}: ChatWindowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const inputConfig = getInputConfig(currentStep);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  // Auto-focus input when step changes
  useEffect(() => {
    if (inputConfig && inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep, inputConfig]);

  // Handle button clicks via event delegation
  function handleMessagesClick(e: React.MouseEvent) {
    const target = (e.target as HTMLElement).closest(
      "[data-chat-button]"
    ) as HTMLElement | null;
    if (target) {
      const value = target.getAttribute("data-chat-button");
      if (value) onButtonClick(value);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = inputRef.current?.value.trim();
    if (!value) return;
    onSendMessage(value);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 28 }}
      className="fixed bottom-24 right-6 z-50 flex w-[400px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a1a] shadow-2xl shadow-purple-900/20 max-sm:inset-0 max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:rounded-none max-sm:border-0"
      style={{ height: "520px" }}
    >
      {/* ===== Header ===== */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0d0d24] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-600 text-xs font-bold text-white">
            CL
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{SITE.name}</p>
            <p className="text-[10px] text-white/40">Diagnostic SEO gratuit</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-white/40 transition-colors hover:bg-white/10 hover:text-white/70"
          aria-label="Fermer le chat"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* ===== Messages ===== */}
      <div
        ref={scrollRef}
        onClick={handleMessagesClick}
        className="flex-1 space-y-3 overflow-y-auto p-4 max-sm:flex-1"
        style={{ scrollBehavior: "smooth" }}
      >
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </AnimatePresence>
      </div>

      {/* ===== Input ===== */}
      <div className="border-t border-white/10 bg-[#0d0d24] p-3">
        {inputConfig ? (
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <div className="relative flex-1">
              <inputConfig.icon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input
                ref={inputRef}
                type={inputConfig.type}
                placeholder={inputConfig.placeholder}
                className="w-full rounded-xl bg-white/5 py-2.5 pl-10 pr-4 text-sm text-white placeholder-white/30 outline-none ring-1 ring-white/10 transition-all focus:ring-purple-500/50"
                autoComplete={
                  inputConfig.type === "email" ? "email" : "off"
                }
              />
            </div>
            <button
              type="submit"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-600 text-white transition-colors hover:bg-purple-500"
              aria-label="Envoyer"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        ) : (
          <div className="rounded-xl bg-white/5 px-4 py-2.5 text-center text-xs text-white/25">
            Choisissez une option ci-dessus
          </div>
        )}
      </div>
    </motion.div>
  );
}
