"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { supabase } from "@/lib/supabase/client";
import { SITE } from "@/lib/constants";
import ChatWindow from "./ChatWindow";
import type { ChatMessage, ChatStep } from "./ChatWindow";

// ============ TOOL DEFINITIONS ============

const TOOLS = [
  { id: "seo", label: "Audit SEO complet", emoji: "\uD83D\uDD0D", api: "/api/chatbot-audit", reportApi: "/api/seo-check", desc: "60+ points de controle SEO" },
  { id: "speed", label: "Test de vitesse", emoji: "\u26A1", api: "/api/speed-check", reportApi: "/api/speed-check", desc: "Performance et temps de chargement" },
  { id: "design", label: "Audit UX/Design", emoji: "\uD83C\uDFA8", api: "/api/design-score", reportApi: "/api/design-score", desc: "6 categories UX analysees" },
  { id: "compare", label: "Comparer 2 sites", emoji: "\u2696\uFE0F", api: "/api/comparateur-sites", reportApi: "/api/comparateur-sites", desc: "Votre site vs la concurrence" },
] as const;

type ToolId = typeof TOOLS[number]["id"];

// ============ HELPERS ============

let msgCounter = 0;
function makeId(): string {
  msgCounter += 1;
  return `msg-${msgCounter}-${Date.now()}`;
}

function botMsg(content: string, overrides?: Partial<ChatMessage>): ChatMessage {
  return { id: makeId(), role: "bot", content, type: "text", ...overrides };
}

function userMsg(content: string): ChatMessage {
  return { id: makeId(), role: "user", content, type: "text" };
}

// ============ AUDIT API RESPONSE ============

interface AuditResponse {
  domain?: string;
  score?: number;
  grade?: string;
  gradeLabel?: string;
  topStrengths?: string[];
  topIssues?: string[];
  scores?: Record<string, number>;
  [key: string]: unknown;
}

// ============ MAIN WIDGET ============

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [step, setStep] = useState<ChatStep>(null);
  const [auditData, setAuditData] = useState<AuditResponse | null>(null);
  const [selectedTool, setSelectedTool] = useState<ToolId | null>(null);
  const [userInputs, setUserInputs] = useState<{
    url: string;
    urlB: string;
    name: string;
    email: string;
  }>({ url: "", urlB: "", name: "", email: "" });

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
      setStep(1);
      setMessages([
        botMsg(
          "Bonjour ! Je suis l\u2019assistant ConvertiLab. Que souhaitez-vous faire ?",
          {
            type: "buttons",
            buttons: [
              ...TOOLS.map(t => `${t.emoji} ${t.label}`),
              "\uD83D\uDCE7 Contacter l\u2019agence",
            ],
          }
        ),
      ]);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  function getToolByLabel(label: string) {
    return TOOLS.find(t => label.includes(t.label));
  }

  // ----- Button clicks -----
  function handleButtonClick(label: string) {
    push(userMsg(label));

    // Step 1: tool selection
    if (step === 1) {
      if (label.includes("Contacter")) {
        setStep(null);
        pushDelayed([
          botMsg("Bien s\u00FBr ! Voici comment nous contacter :", {
            type: "link",
            link: { label: "Contacter ConvertiLab", href: `mailto:${SITE.email}` },
          }),
        ]);
        pushDelayed([
          botMsg("Ou prenez rendez-vous directement :", {
            type: "link",
            link: { label: "Prendre RDV (gratuit)", href: SITE.calendly },
          }),
        ], 1000);
        return;
      }

      const tool = getToolByLabel(label);
      if (tool) {
        setSelectedTool(tool.id);
        setStep(2);

        if (tool.id === "compare") {
          pushDelayed([botMsg("Entrez l\u2019URL de votre site web :")]);
        } else {
          pushDelayed([botMsg(`${tool.emoji} ${tool.desc}\n\nEntrez l\u2019URL de votre site web :`)]);
        }
      }
      return;
    }

    // Step 4: after results
    if (step === 4) {
      if (label.includes("rapport") || label.includes("Oui")) {
        setStep(5);
        pushDelayed([botMsg("Parfait ! Quel est votre pr\u00E9nom ?")]);
      } else if (label.includes("autre outil")) {
        // Reset for new tool
        setStep(1);
        setAuditData(null);
        setSelectedTool(null);
        pushDelayed([
          botMsg("Quel outil souhaitez-vous utiliser ?", {
            type: "buttons",
            buttons: [
              ...TOOLS.map(t => `${t.emoji} ${t.label}`),
              "\uD83D\uDCE7 Contacter l\u2019agence",
            ],
          }),
        ]);
      } else {
        setStep(7);
        pushDelayed([
          botMsg("Souhaitez-vous discuter de ces r\u00E9sultats avec un expert ?", {
            type: "buttons",
            buttons: ["Prendre rendez-vous (gratuit)", "Essayer un autre outil", "Non merci"],
          }),
        ]);
      }
      return;
    }

    // Step 7: final actions
    if (step === 7) {
      if (label.startsWith("Prendre")) {
        window.open(SITE.calendly, "_blank");
        pushDelayed([botMsg("La page Calendly s\u2019est ouverte. \u00C0 tr\u00E8s bient\u00F4t !")]);
        setStep(null);
      } else if (label.includes("autre outil")) {
        setStep(1);
        setAuditData(null);
        setSelectedTool(null);
        pushDelayed([
          botMsg("Quel outil souhaitez-vous utiliser ?", {
            type: "buttons",
            buttons: [
              ...TOOLS.map(t => `${t.emoji} ${t.label}`),
              "\uD83D\uDCE7 Contacter l\u2019agence",
            ],
          }),
        ]);
      } else {
        pushDelayed([botMsg("D\u2019accord ! N\u2019h\u00E9sitez pas si vous changez d\u2019avis. Bonne journ\u00E9e !")]);
        setStep(null);
      }
      return;
    }
  }

  // ----- Text input submissions -----
  async function handleSendMessage(text: string) {
    push(userMsg(text));

    const tool = TOOLS.find(t => t.id === selectedTool);

    // Step 2: URL submitted
    if (step === 2) {
      const url = text.trim();
      setUserInputs((prev) => ({ ...prev, url }));

      // For comparator, need a second URL
      if (selectedTool === "compare") {
        setStep("2b");
        pushDelayed([botMsg("Et l\u2019URL du site concurrent ?")]);
        return;
      }

      // Run analysis
      await runAnalysis(url, tool);
      return;
    }

    // Step 2b: Second URL for comparator
    if (step === "2b") {
      const urlB = text.trim();
      setUserInputs((prev) => ({ ...prev, urlB }));
      await runComparison(userInputs.url, urlB);
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

      // Store lead in Supabase
      supabase
        .from("chatbot_leads")
        .insert({
          website_url: url,
          domain: auditData?.domain || "",
          name,
          email,
          phone: null,
          score_global: auditData?.score || (auditData?.scores as Record<string, number>)?.global || 0,
          grade: auditData?.grade || "",
          email_sent: false,
        })
        .then(() => {}, (err: unknown) => console.error("Supabase error:", err));

      // Fire-and-forget: send full PDF report via the tool's report API
      if (tool?.reportApi) {
        const body: Record<string, string> = { url, name, email };
        if (selectedTool === "compare" && userInputs.urlB) {
          body.urlA = url;
          body.urlB = userInputs.urlB;
        }
        fetch(tool.reportApi, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }).catch(() => {});
      }

      setStep(7);
      pushDelayed([
        botMsg(`Merci ${name} ! Le rapport complet a \u00E9t\u00E9 envoy\u00E9 \u00E0 ${email}.`),
      ]);
      pushDelayed([
        botMsg("Que souhaitez-vous faire ensuite ?", {
          type: "buttons",
          buttons: ["Prendre rendez-vous (gratuit)", "Essayer un autre outil", "Non merci, \u00E7a ira"],
        }),
      ], 1200);
      return;
    }
  }

  // ----- Run URL-based analysis -----
  async function runAnalysis(url: string, tool: typeof TOOLS[number] | undefined) {
    setStep(3);
    const loadingMsg = botMsg(`Analyse de ${url} en cours...`, { type: "loading" });
    push(loadingMsg);

    try {
      // For SEO audit, use dedicated chatbot-audit endpoint
      // For other tools, call their API with just the URL to get quick results
      const apiUrl = selectedTool === "seo" ? "/api/chatbot-audit" : (tool?.api || "/api/chatbot-audit");

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, name: "chatbot", email: "chatbot@temp.com" }),
      });

      setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));

      if (!res.ok) throw new Error("audit failed");

      const data: AuditResponse = await res.json();
      setAuditData(data);
      setStep(4);

      // Extract score from different response formats
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const d = data as any;
      const score: number = d.score || d.scores?.global || d.audit?.scores?.global || 0;
      const grade: string = d.grade || d.audit?.grade || "?";
      const gradeLabel: string = d.gradeLabel || d.audit?.gradeLabel || "";
      const strengths: string[] = d.topStrengths || d.audit?.strengths || [];
      const issues: string[] = d.topIssues || (d.audit?.issues || []).map((i: { title: string }) => i.title);

      const toolEmoji = tool?.emoji || "\uD83D\uDD0D";
      const resultMsgs: ChatMessage[] = [
        botMsg(`${toolEmoji} Analyse termin\u00E9e !`, {
          type: "score",
          scoreData: { score, grade, gradeLabel },
        }),
      ];

      if (strengths.length > 0) {
        resultMsgs.push(botMsg("Points forts :", { type: "strengths", items: (strengths as string[]).slice(0, 3) }));
      }
      if (issues.length > 0) {
        resultMsgs.push(botMsg("\u00C0 am\u00E9liorer :", { type: "issues", items: (issues as string[]).slice(0, 3) }));
      }

      resultMsgs.push(
        botMsg("Que souhaitez-vous faire ?", {
          type: "buttons",
          buttons: ["Oui, envoyer le rapport par email", "Essayer un autre outil", "Non merci"],
        })
      );

      resultMsgs.forEach((msg, i) => pushDelayed([msg], 400 * (i + 1)));
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));
      setStep(2);
      push(botMsg("Hmm, je n\u2019arrive pas \u00E0 acc\u00E9der \u00E0 ce site. V\u00E9rifiez l\u2019URL et r\u00E9essayez."));
    }
  }

  // ----- Run comparison -----
  async function runComparison(urlA: string, urlB: string) {
    setStep(3);
    const loadingMsg = botMsg(`Comparaison de ${urlA} vs ${urlB} en cours...`, { type: "loading" });
    push(loadingMsg);

    try {
      const res = await fetch("/api/comparateur-sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ urlA, urlB, name: "chatbot", email: "chatbot@temp.com" }),
      });

      setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));
      if (!res.ok) throw new Error("comparison failed");

      const data = await res.json();
      setAuditData(data);
      setStep(4);

      const scoreA = data.siteA?.scores?.global || data.scoreA || 0;
      const scoreB = data.siteB?.scores?.global || data.scoreB || 0;
      const winner = scoreA >= scoreB ? urlA : urlB;

      const resultMsgs: ChatMessage[] = [
        botMsg(`\u2696\uFE0F Comparaison termin\u00E9e !`),
        botMsg(`${urlA} : ${scoreA}/100\n${urlB} : ${scoreB}/100\n\nGagnant : ${winner}`, {
          type: "score",
          scoreData: { score: Math.max(scoreA, scoreB), grade: scoreA >= scoreB ? "A" : "B", gradeLabel: `Gagnant: ${winner}` },
        }),
        botMsg("Que souhaitez-vous faire ?", {
          type: "buttons",
          buttons: ["Oui, envoyer le rapport par email", "Essayer un autre outil", "Non merci"],
        }),
      ];

      resultMsgs.forEach((msg, i) => pushDelayed([msg], 400 * (i + 1)));
    } catch {
      setMessages((prev) => prev.filter((m) => m.id !== loadingMsg.id));
      setStep(2);
      push(botMsg("Hmm, je n\u2019arrive pas \u00E0 analyser ces sites. V\u00E9rifiez les URLs et r\u00E9essayez."));
    }
  }

  return (
    <>
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-purple-500/30" />
        )}
      </motion.button>
    </>
  );
}
