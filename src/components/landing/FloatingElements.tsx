import { motion } from "framer-motion";
import { Mic, Globe, Wallet, Languages, Volume2, Sparkles } from "lucide-react";

const floatingIcons = [
  { Icon: Mic, delay: 0, x: "10%", y: "20%", color: "text-primary" },
  { Icon: Globe, delay: 0.5, x: "85%", y: "15%", color: "text-secondary" },
  { Icon: Wallet, delay: 1, x: "5%", y: "60%", color: "text-accent" },
  { Icon: Languages, delay: 1.5, x: "90%", y: "55%", color: "text-primary" },
  { Icon: Volume2, delay: 2, x: "15%", y: "80%", color: "text-secondary" },
  { Icon: Sparkles, delay: 2.5, x: "80%", y: "75%", color: "text-accent" },
];

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingIcons.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color} opacity-20`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <div className="p-4 rounded-2xl glass-card">
              <Icon className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-primary/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};
