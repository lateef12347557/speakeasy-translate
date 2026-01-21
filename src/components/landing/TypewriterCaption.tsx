import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const captions = [
  {
    original: "Welcome to today's lecture on quantum mechanics...",
    translated: "Bienvenue au cours d'aujourd'hui sur la mécanique quantique...",
    language: "French",
  },
  {
    original: "The principles we'll explore today are fundamental...",
    translated: "Los principios que exploraremos hoy son fundamentales...",
    language: "Spanish",
  },
  {
    original: "Let's begin with the concept of superposition...",
    translated: "让我们从叠加概念开始...",
    language: "Chinese",
  },
  {
    original: "This theory revolutionized our understanding...",
    translated: "Ilana yii yi imọ wa pada patapata...",
    language: "Yoruba",
  },
];

export const TypewriterCaption = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const caption = captions[currentIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayedText.length < caption.translated.length) {
        timeout = setTimeout(() => {
          setDisplayedText(caption.translated.slice(0, displayedText.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      timeout = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % captions.length);
        setDisplayedText("");
        setIsTyping(true);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isTyping, currentIndex]);

  const caption = captions[currentIndex];

  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex + "-original"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-muted-foreground text-sm md:text-base"
        >
          <span className="text-xs uppercase tracking-wider text-muted-foreground/60 mr-2">
            Original:
          </span>
          {caption.original}
        </motion.div>
      </AnimatePresence>

      <div className="relative">
        <div className="flex items-start gap-3">
          <motion.div
            key={currentIndex + "-badge"}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="shrink-0 px-2 py-1 rounded-md bg-secondary/20 text-secondary text-xs font-medium"
          >
            {caption.language}
          </motion.div>
          <div className="flex-1">
            <span className="text-lg md:text-xl lg:text-2xl font-medium text-foreground leading-relaxed">
              {displayedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.5, repeat: Infinity }}
                className="inline-block w-0.5 h-6 bg-primary ml-1 align-middle"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Language indicators */}
      <div className="flex items-center gap-2 pt-4">
        {captions.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
