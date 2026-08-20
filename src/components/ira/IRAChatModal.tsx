"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Bot, ArrowRight, MessageCircle, Square } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import { sendIRAMessage, IRAChatResponse } from "@/lib/ira/actions";
import { getOrGenerateSessionId, resetSessionId } from "@/lib/ira/session";
import { IRA_AVATAR_SRC } from "@/data/ira";
import { cn } from "@/lib/cn";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  knowledge_ids?: string[];
  suggested_actions?: { label: string; query: string }[];
  isComplete?: boolean;
};

// Typewriter component that handles Markdown and the blinking cursor
function TypewriterMessage({ 
  text, 
  onComplete 
}: { 
  text: string; 
  onComplete: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let frameId: number;
    let chars = 0;
    
    const tick = () => {
      chars += 3; // 3 chars per frame as requested
      if (chars >= text.length) {
        setDisplayedText(text);
        setIsTyping(false);
        onComplete();
      } else {
        setDisplayedText(text.slice(0, chars));
        frameId = requestAnimationFrame(tick);
      }
    };
    
    frameId = requestAnimationFrame(tick);
    
    return () => {
      cancelAnimationFrame(frameId);
    };
  }, [text, onComplete]);

  return (
    <div className="relative">
      <div className={cn("markdown-body", isTyping ? "typing-active" : "")}>
        <ReactMarkdown
          components={{
            strong: ({ node, ...props }) => (
              <strong className="text-[#00F5FF] font-semibold" {...props} />
            ),
            a: ({ node, ...props }) => (
              <a className="text-[#00F5FF] underline decoration-[#00F5FF]/30 underline-offset-2 hover:decoration-[#00F5FF]" target="_blank" rel="noopener noreferrer" {...props} />
            )
          }}
        >
          {displayedText + (isTyping ? "█" : "")}
        </ReactMarkdown>
      </div>
      <style jsx global>{`
        .markdown-body p { margin-bottom: 0.5em; }
        .markdown-body p:last-child { margin-bottom: 0; }
        .typing-active p:last-child::after {
          content: '|';
          color: #00F5FF;
          animation: pulse 1s infinite;
          margin-left: 2px;
        }
      `}</style>
    </div>
  );
}

export function IRAChatModal({ 
  isOpen, 
  onClose 
}: { 
  isOpen: boolean; 
  onClose: () => void;
}) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I am IRA, the InheritX AI Assistant. How can I help you today?",
      isComplete: true
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const fetchIdRef = useRef(0);

  useEffect(() => {
    setSessionId(getOrGenerateSessionId());
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isFetching, isTyping]);

  const handleNewChat = () => {
    setSessionId(resetSessionId());
    setMessages([{
      id: "welcome-" + Date.now(),
      role: "assistant",
      content: "Started a new conversation! How can I help you?",
      isComplete: true
    }]);
  };

  const handleSend = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isFetching || isTyping) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
      isComplete: true
    };
    
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsFetching(true);

    const currentFetchId = ++fetchIdRef.current;

    try {
      const data = await sendIRAMessage(trimmed, sessionId);
      
      if (fetchIdRef.current !== currentFetchId) return;
      
      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.response,
        knowledge_ids: data.knowledge_ids,
        suggested_actions: data.suggested_actions,
        isComplete: false
      };
      
      setIsFetching(false);
      setIsTyping(true);
      setMessages(prev => [...prev, assistantMsg]);
    } catch (error: any) {
      if (fetchIdRef.current !== currentFetchId) return;
      setIsFetching(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: error.message || "Sorry, I encountered an error communicating with the server.",
        isComplete: true
      }]);
    }
  };

  const handleStop = () => {
    fetchIdRef.current += 1; // Invalidate current fetch
    
    if (isFetching) {
      setIsFetching(false);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: "assistant",
        content: "Request cancelled.",
        isComplete: true
      }]);
    } else if (isTyping) {
      setIsTyping(false);
      setMessages(prev => prev.map((m, idx) => idx === prev.length - 1 ? { ...m, isComplete: true } : m));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-auto fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 sm:right-5 sm:bottom-5 md:right-6 md:bottom-6 z-[60] w-[calc(100vw-2rem)] sm:w-[380px] h-[600px] max-h-[80vh] flex flex-col bg-ink-soft/85 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-[0_16px_40px_rgba(7,9,13,0.6),0_0_32px_rgba(0,190,212,0.15)] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-ink/60 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={cn(
                  "size-10 rounded-full overflow-hidden border border-cyan/40 shadow-[0_0_12px_rgba(0,190,212,0.15)]",
                  isTyping && "animate-pulse shadow-[0_0_20px_rgba(0,245,255,0.6)] border-cyan", // Talking state
                )}>
                  <Image src={IRA_AVATAR_SRC} alt="IRA" fill className="object-cover rounded-full" />

                </div>
                {/* Active indicator */}
                <div className="absolute bottom-0 right-0 size-3 rounded-full bg-[#00F5FF] border-2 border-ink" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm tracking-wide">IRA Assistant</h3>
                <p className="text-xs text-white/50">
                  {isTyping ? "Typing..." : isFetching ? "Thinking..." : "Online"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleNewChat}
                className="p-2 text-white/50 hover:text-white transition-colors"
                title="New Chat"
              >
                <MessageCircle size={16} />
              </button>
              <button 
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white transition-colors"
                title="Close"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div 
            ref={scrollRef} 
            data-lenis-prevent
            className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
          >
            {messages.map((msg, idx) => {
              const isLast = idx === messages.length - 1;
              const isAssitant = msg.role === "assistant";
              
              // Only apply typing effect to the very last assistant message if it's not marked complete
              const shouldType = isLast && isAssitant && !msg.isComplete;
              
              return (
                <div key={msg.id} className={cn("flex flex-col", isAssitant ? "items-start" : "items-end")}>
                  <div className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-relaxed shadow-sm",
                    isAssitant ? "bg-white/5 border border-white/10 text-white/95 rounded-tl-sm backdrop-blur-sm" : "bg-gradient-to-br from-cyan to-cyan/90 text-ink font-medium rounded-tr-sm shadow-[0_4px_12px_rgba(0,245,255,0.2)]"
                  )}>
                    {shouldType ? (
                      <TypewriterMessage 
                        text={msg.content} 
                        onComplete={() => {
                          setIsTyping(false);
                          setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, isComplete: true } : m));
                        }} 
                      />
                    ) : (
                      <ReactMarkdown
                        components={{
                          strong: ({ node, ...props }) => (
                            <strong className="text-[#00F5FF] font-semibold" {...props} />
                          ),
                          a: ({ node, ...props }) => (
                            <a className="text-[#00F5FF] underline decoration-[#00F5FF]/30 underline-offset-2 hover:decoration-[#00F5FF]" target="_blank" rel="noopener noreferrer" {...props} />
                          )
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                  
                  {/* Actions & Contact CTA (rendered after typing completes) */}
                  {isAssitant && (msg.isComplete || !shouldType) && (
                    <div className="mt-2.5 flex flex-wrap items-center gap-2 max-w-[95%]">
                      {msg.suggested_actions?.map((action, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(action.query)}
                          className="text-[11.5px] text-cyan border border-cyan/30 rounded-full px-3 py-1.5 hover:bg-cyan hover:text-ink transition-colors text-left font-medium"
                        >
                          {action.label}
                        </button>
                      ))}
                      
                      {msg.knowledge_ids && msg.knowledge_ids.length > 0 && !msg.content.includes("sales@inheritx.com") && (
                        <a 
                          href="/contact"
                          className="flex items-center gap-1.5 text-[11.5px] font-semibold text-white bg-white/10 border border-white/10 hover:bg-white/20 rounded-full px-3 py-1.5 transition-colors"
                        >
                          Contact our team <ArrowRight size={12} strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
            
            {/* Thinking indicator */}
            {isFetching && (
              <div className="flex items-start">
                <div className="bg-ink border border-white/5 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1.5">
                  <motion.div className="size-1.5 bg-cyan rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} />
                  <motion.div className="size-1.5 bg-cyan rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} />
                  <motion.div className="size-1.5 bg-cyan rounded-full" animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} />
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-white/10 bg-ink/60 backdrop-blur-md">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask IRA anything..."
                className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 text-sm rounded-full pl-4 pr-12 py-3 focus:outline-none focus:border-cyan/50 focus:ring-1 focus:ring-cyan/50 focus:bg-white/10 transition-colors"
              />
              {isFetching || isTyping ? (
                <button
                  type="button"
                  onClick={handleStop}
                  className="absolute right-1.5 p-2 bg-white/10 text-white/70 rounded-full hover:bg-white/20 hover:text-white transition-colors"
                  title="Stop generating"
                >
                  <Square size={16} fill="currentColor" />
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="absolute right-1.5 p-2 bg-cyan text-ink rounded-full disabled:opacity-50 disabled:bg-white/10 disabled:text-white/40 hover:bg-cyan/90 transition-colors"
                >
                  <Send size={16} />
                </button>
              )}
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
