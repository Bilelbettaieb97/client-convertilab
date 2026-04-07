"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { SITE } from "@/lib/constants";
import ChatWindow from "./ChatWindow";
import type { ChatMessage, ChatStep } from "./ChatWindow";

// ============ HELPERS ============

let msgCounter = 0;
function makeId(): string {
  msgCounter += 1;
  return `msg-${msgCounter}-${Date.now()}`;
}

function botMsg(
  content: string,
  overrides?: Partial<ChatMessage>
): ChatMessage {
  return {
    id: makeId(),
    role: "bot",
    content,
    type: "text",
    ...overrides,
  };
}

function userMsg(content: string): ChatMessage {
  return { id: makeId(), role: "user", content, type: "text" };
}

// ============ AUDIT API RESPONSE ============

interface AuditResponse {
  domain: string;
  score: number;
  grade: string;
  gradeLabel: string;
  topStrengths: string[];
  topIssues: string[];
  criticalCount: number;
}

// ============ MAIN WIDGET ============

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ChatStep>(null);
  const [auditData, setAuditData] = useState<AuditResponse | null>(null);
  const [userInputs, setUserInputs] = useState<{
    url: string;
    name: string;
    email: string;
  }>({ url: "", name: "", email: "" });

  // ----- Push helpers -----
  const push = useCallback((...msgs: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...msgs]);
  }, []);

  const pushDelayed = useCallback(
    (msgs: ChatMessage[], delayMs = 600) => {
      setTimeout(() => push(...msgs), delayMs);
    },
    [push]
  );

  // ----- Open / Close -----
  function handleOpen() {
    setOpen(true);
    if (messages.length === 0) {
      // Step 1: greeting
      setStep(1);
      setMessages([
        botMsg(
          "Bonjour ! Je suis l\u2019assistant ConvertiLab. Voulez-vous un diagnostic gratuit de votre site web ?",
          {
            type: "buttons",
            buttons: ["Oui, analyser mon site", "Non merci"],
          }
        ),
      ]);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  // ----- Button clicks -----
  function handleButtonClick(label: string) {
    push(userMsg(label));

    // Step 1 responses
    if (step === 1) {
      if (label === "Oui, analyser mon site") {
        setStep(2);
        pushDelayed([
          botMsg("Super ! Entrez l\u2019URL de votre site web :"),
        ]);
      } else {
        setStep(null);
        pushDelayed([
          botMsg(
            "Pas de souci ! N\u2019h\u00e9sitez pas \u00e0 revenir. Vous pouvez aussi nous contacter directement.",
            {
              type: "link",
              link: {
                label: "Contacter ConvertiLab",
                href: `mailto:${SITE.email}`,
              },
            }
          ),
        ]);
      }
      return;
    }

    // Step 4: after results shown
    if (step === 4) {
      if (label === "Oui, envoyer le rapport") {
        setStep(5);
        pushDelayed([botMsg("Parfait ! Quel est votre pr\u00e9nom ?")]);
      } else {
        setStep(7);
        pushDelayed([
          botMsg(
            "Pas de souci ! Souhaitez-vous discuter de ces r\u00e9sultats avec un expert ?",
            {
              type: "buttons",
              buttons: [
                "Prendre rendez-vous (gratuit)",
                "Non merci, \u00e7a ira",
              ],
            }
          ),
        ]);
      }
      return;
    }

    // Step 7: final actions
    if (step === 7) {
      if (label.startsWith("Prendre")) {
        window.open(SITE.calendly, "_blank");
        pushDelayed([
          botMsg(
            "La page Calendly s\u2019est ouverte dans un nouvel onglet. \u00c0 tr\u00e8s bient\u00f4t !"
          ),
        ]);
        setStep(null);
      } else {
        pushDelayed([
          botMsg(
            "D\u2019accord ! N\u2019h\u00e9sitez pas si vous changez d\u2019avis. Bonne journ\u00e9e !"
          ),
        ]);
        setStep(null);
      }
      return;
    }
  }

  // ----- Text input submissions -----
  async function handleSendMessage(text: string) {
    push(userMsg(text));

    // Step 2: URL submitted
    if (step === 2) {
      const url = text.trim();
      setUserInputs((prev) => ({ ...prev, url }));
      setStep(3);

      // Show loading
      const loadingMsg = botMsg(`Analyse de ${url} en cours...`, {
        type: "loading",
      });
      push(loadingMsg);

      try {
        const res = await fetch("/api/chatbot-audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });

        // Remove loading message
        setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));

        if (!res.ok) throw new Error("audit failed");

        const data: AuditResponse = await res.json();
        setAuditData(data);
        setStep(4);

        // Build results messages
        const resultMsgs: ChatMessage[] = [
          botMsg("Analyse termin\u00e9e ! Voici les r\u00e9sultats :", {
            type: "score",
            scoreData: {
              score: data.score,
              grade: data.grade,
              gradeLabel: data.gradeLabel,
            },
          }),
        ];

        if (data.topStrengths.length > 0) {
          resultMsgs.push(
            botMsg("Points forts :", {
              type: "strengths",
              items: data.topStrengths,
            })
          );
        }

        if (data.topIssues.length > 0) {
          resultMsgs.push(
            botMsg("\u00c0 am\u00e9liorer :", {
              type: "issues",
              items: data.topIssues,
            })
          );
        }

        resultMsgs.push(
          botMsg(
            "Voulez-vous recevoir le rapport complet par email ?",
            {
              type: "buttons",
              buttons: ["Oui, envoyer le rapport", "Non merci"],
            }
          )
        );

        // Push results with staggered delays
        resultMsgs.forEach((msg, i) => {
          pushDelayed([msg], 400 * (i + 1));
        });
      } catch {
        setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));
        setStep(2);
        push(
          botMsg(
            "Hmm, je n\u2019arrive pas \u00e0 acc\u00e9der \u00e0 ce site. V\u00e9rifiez l\u2019URL et r\u00e9essayez."
          )
        );
      }
      return;
    }

    // Step 5: Name submitted
    if (step === 5) {
      setUserInputs((prev) => ({ ...prev, name: text.trim() }));
      setStep(6);
      pushDelayed([botMsg("Et votre adresse email ?")]);
      return;
    }

    // Step 6: Email submitted
    if (step === 6) {
      const email = text.trim();
      setUserInputs((prev) => ({ ...prev, email }));

      const name = userInputs.name;
      const url = userInputs.url;

      // Store lead in Supabase (non-blocking)
      supabase
        .from("chatbot_leads")
        .insert({
          website_url: url,
          domain: auditData?.domain || "",
          name,
          email,
          phone: null,
          score_global: auditData?.score || 0,
          grade: auditData?.grade || "",
          email_sent: false,
        })
        .then(() => {}, (err: unknown) => console.error("Supabase insert error:", err));

      // Fire-and-forget: trigger the full PDF report via seo-check API
      fetch("/api/seo-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name, email }),
      }).catch(() => {});

      // Move to step 7
      setStep(7);
      pushDelayed([
        botMsg(
          `Merci ${name} ! Le rapport complet a \u00e9t\u00e9 envoy\u00e9 \u00e0 ${email}.`
        ),
      ]);
      pushDelayed(
        [
          botMsg(
            "Souhaitez-vous discuter de ces r\u00e9sultats avec un expert ?",
            {
              type: "buttons",
              buttons: [
                "Prendre rendez-vous (gratuit)",
                "Non merci, \u00e7a ira",
              ],
            }
          ),
        ],
        1200
      );
      return;
    }
  }

  return (
    <>
      {/* ===== Chat Window ===== */}
      <AnimatePresence>
        {open && (
          <ChatWindow
            messages={messages}
            currentStep={step}
            onSendMessage={handleSendMessage}
            onButtonClick={handleButtonClick}
            onClose={handleClose}
          />
        )}
      </AnimatePresence>

      {/* ===== Floating Bubble ===== */}
      <motion.button
        onClick={open ? handleClose : handleOpen}
        className="fixed bottom-6 right-6 z-50 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6c5ce7] text-white shadow-lg shadow-purple-900/30 transition-colors hover:bg-[#5b4bd5]"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={open ? "Fermer le chat" : "Ouvrir le chat"}
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <MessageCircle className="h-6 w-6" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring when closed */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-purple-500/30" />
        )}
      </motion.button>
    </>
  );
}
