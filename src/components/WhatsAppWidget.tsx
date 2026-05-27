import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Check } from "lucide-react";

export interface WhatsAppWidgetProps {
  phoneNumber: string;
  message: string;
  bubbleText: string;
  position: "bottom-right" | "bottom-left";
  animation: "pulse" | "shake" | "float" | "none";
  colorTheme: "whatsapp" | "emerald" | "teal" | "dark" | "blue";
  useChatPopup: boolean;
  alwaysShowBubble: boolean;
  showNotificationDot: boolean;
  avatarUrl?: string;
  agentName: string;
  agentSubtitle: string;
  onWidgetClick?: () => void;
}

export default function WhatsAppWidget({
  phoneNumber = "5511999999999",
  message = "Olá! Gostaria de agendar uma consulta.",
  bubbleText = "Agendar Consulta",
  position = "bottom-right",
  animation = "pulse",
  colorTheme = "whatsapp",
  useChatPopup = true,
  alwaysShowBubble = true,
  showNotificationDot = true,
  avatarUrl = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
  agentName = "Dra. Ana Carolina",
  agentSubtitle = "Pediatra & Clínica Geral",
  onWidgetClick,
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showTextBubble, setShowTextBubble] = useState(false);
  const [userInputText, setUserInputText] = useState(message);
  const [showNotification, setShowNotification] = useState(showNotificationDot);

  // Sync inputs
  useEffect(() => {
    setUserInputText(message);
  }, [message]);

  useEffect(() => {
    setShowNotification(showNotificationDot);
  }, [showNotificationDot]);

  // Text bubble delay appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTextBubble(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Format the raw WhatsApp URL
  const getWhatsAppUrl = (textToSend: string) => {
    const cleanNum = phoneNumber.replace(/\D/g, "");
    const encodedText = encodeURIComponent(textToSend);
    return `https://wa.me/${cleanNum}?text=${encodedText}`;
  };

  const handleButtonClick = () => {
    if (onWidgetClick) onWidgetClick();
    
    if (useChatPopup) {
      setIsOpen(!isOpen);
      setShowNotification(false);
    } else {
      window.open(getWhatsAppUrl(userInputText), "_blank", "noopener,noreferrer");
      setShowNotification(false);
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(getWhatsAppUrl(userInputText), "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  // Color theme definitions
  const themeClasses = {
    whatsapp: {
      bg: "bg-[#25D366]",
      hover: "hover:bg-[#20ba5a]",
      textBg: "bg-white",
      textColor: "text-[#25D366]",
      accentBorder: "border-[#25D366]",
      chatHeader: "bg-[#075E54]",
      iconColor: "text-white",
      badgeBg: "bg-[#25D366]",
      ringColor: "ring-emerald-400"
    },
    emerald: {
      bg: "bg-emerald-600",
      hover: "hover:bg-emerald-700",
      textBg: "bg-white",
      textColor: "text-emerald-700",
      accentBorder: "border-emerald-600",
      chatHeader: "bg-emerald-800",
      iconColor: "text-white",
      badgeBg: "bg-emerald-500",
      ringColor: "ring-emerald-400"
    },
    teal: {
      bg: "bg-teal-600",
      hover: "hover:bg-teal-700",
      textBg: "bg-white",
      textColor: "text-teal-700",
      accentBorder: "border-teal-600",
      chatHeader: "bg-teal-800",
      iconColor: "text-white",
      badgeBg: "bg-teal-500",
      ringColor: "ring-teal-400"
    },
    dark: {
      bg: "bg-neutral-800",
      hover: "hover:bg-neutral-900",
      textBg: "bg-white",
      textColor: "text-neutral-800",
      accentBorder: "border-neutral-800",
      chatHeader: "bg-neutral-900",
      iconColor: "text-white",
      badgeBg: "bg-emerald-500",
      ringColor: "ring-neutral-400"
    },
    blue: {
      bg: "bg-sky-600",
      hover: "hover:bg-sky-700",
      textBg: "bg-white",
      textColor: "text-sky-700",
      accentBorder: "border-sky-600",
      chatHeader: "bg-sky-800",
      iconColor: "text-white",
      badgeBg: "bg-sky-500",
      ringColor: "ring-sky-400"
    }
  };

  const selectedTheme = themeClasses[colorTheme] || themeClasses.whatsapp;

  // Determine animations
  const getAnimationVariants = () => {
    switch (animation) {
      case "pulse":
        return {
          animate: {
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              "0 20px 25px -5px rgba(37, 211, 102, 0.4), 0 10px 10px -5px rgba(37, 211, 102, 0.2)",
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            ],
            transition: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };
      case "shake":
        return {
          animate: {
            rotate: [0, -6, 6, -6, 6, 0],
            transition: {
              delay: 4,
              duration: 0.6,
              repeat: Infinity,
              repeatDelay: 5,
              ease: "easeInOut",
            },
          },
        };
      case "float":
        return {
          animate: {
            y: [0, -8, 0],
            transition: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          },
        };
      default:
        return {};
    }
  };

  const widgetAnim = getAnimationVariants();

  // Position alignment style
  const positionClasses = {
    "bottom-right": "bottom-6 right-6 flex-row-reverse",
    "bottom-left": "bottom-6 left-6 flex-row",
  };

  const alignmentClass = positionClasses[position] || positionClasses["bottom-right"];

  return (
    <div className={`fixed z-50 flex items-center gap-3 ${alignmentClass}`} id="whatsapp-widget-container">
      {/* Target button */}
      <motion.button
        id="whatsapp-trigger-btn"
        onClick={handleButtonClick}
        variants={widgetAnim}
        animate="animate"
        whileTap={{ scale: 0.95 }}
        aria-label="Contatar via WhatsApp"
        className={`relative flex items-center justify-center w-14 h-14 rounded-full text-white cursor-pointer select-none border border-black/10 focus:outline-none transition-colors duration-200 outline-none ${selectedTheme.bg} ${selectedTheme.hover}`}
        title="Agendar pelo WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" id="whatsapp-icon-close" />
        ) : (
          <MessageCircle className="w-7 h-7 fill-white/15" id="whatsapp-icon-chat" />
        )}
        
        {/* Notification badge */}
        {showNotification && !isOpen && (
          <span 
            id="whatsapp-notification-badge"
            className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-rose-600 text-[10px] font-bold text-white ring-2 ring-white animate-bounce"
          >
            1
          </span>
        )}
      </motion.button>

      {/* Floating expanded "Agendar Consulta" Text Bubble next to it */}
      <AnimatePresence>
        {showTextBubble && !isOpen && (alwaysShowBubble || !alwaysShowBubble) && (
          <motion.div
            id="whatsapp-bubble-text-wrapper"
            initial={{ opacity: 0, x: position === "bottom-right" ? 25 : -25, scale: 0.85 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: position === "bottom-right" ? 15 : -15, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className={`shadow-md rounded-xl px-4 py-2.5 border text-sm font-semibold tracking-wide flex items-center justify-center max-w-xs cursor-pointer select-none transition-all duration-300 ${
              alwaysShowBubble ? "flex" : "hidden sm:flex opacity-0 hover:opacity-100"
            } ${selectedTheme.textBg} ${selectedTheme.textColor} ${selectedTheme.accentBorder}`}
            onClick={handleButtonClick}
          >
            <span className="relative flex h-2 w-2 mr-2" id="whatsapp-pulse-dot">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${selectedTheme.badgeBg}`}></span>
              <span className={`relative inline-flex rounded-full h-2 w-2 ${selectedTheme.badgeBg}`}></span>
            </span>
            {bubbleText}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Actual Chat Popover screen */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="whatsapp-chat-popup"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 24 }}
            className={`absolute bottom-16 ${
              position === "bottom-right" ? "right-0" : "left-0"
            } w-80 max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-neutral-100 flex flex-col bg-neutral-50 font-sans`}
          >
            {/* Header */}
            <div className={`p-4 text-white flex items-center justify-between ${selectedTheme.chatHeader}`} id="chat-popup-header">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img
                    id="chat-agent-avatar"
                    src={avatarUrl}
                    alt={agentName}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20 bg-neutral-200"
                  />
                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-sm leading-tight text-white">{agentName}</h4>
                  <p className="text-[11px] text-white/80 font-medium leading-none mt-0.5">{agentSubtitle}</p>
                </div>
              </div>
              <button
                id="chat-popup-close-btn"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-black/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content area simulating real-life typing chat message */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 max-h-60 min-h-36 bg-neutral-50 relative bg-[radial-gradient(#ddd_1px,transparent_1px)] [background-size:16px_16px]" id="chat-msg-area">
              <div className="bg-white rounded-2xl rounded-tl-none p-3 shadow-sm border border-neutral-100 text-xs text-neutral-700 max-w-[85%]">
                <p className="leading-relaxed">
                  Olá! 👋 Como podemos lhe ajudar hoje?
                </p>
                <p className="mt-1 leading-relaxed">
                  Digite sua dúvida ou mensagem abaixo para iniciarmos seu agendamento de consulta diretamente.
                </p>
                <span className="text-[9px] text-neutral-400 float-right mt-1">Agora</span>
              </div>
            </div>

            {/* Input Form Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-neutral-100 flex items-center gap-2" id="chat-msg-form">
              <input
                id="chat-user-text-input"
                type="text"
                value={userInputText}
                onChange={(e) => setUserInputText(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="flex-1 bg-neutral-100 rounded-full px-4 py-2 text-xs text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-emerald-500 border-none"
                required
              />
              <button
                id="chat-user-send-btn"
                type="submit"
                className={`p-2 rounded-full text-white cursor-pointer flex items-center justify-center transition-colors ${selectedTheme.bg} ${selectedTheme.hover}`}
              >
                <Send className="w-3.5 h-3.5 fill-white/10" />
              </button>
            </form>

            <div className="bg-neutral-100 text-center py-1.5 text-[10px] text-neutral-400 font-medium tracking-wide" id="chat-popup-footer">
              Abriremos conversa oficial no WhatsApp
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
