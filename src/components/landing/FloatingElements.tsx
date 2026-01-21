import { motion } from "framer-motion";
import { Mic, Globe, Wallet, Languages, Volume2, Sparkles, Zap, Shield, Star, Heart } from "lucide-react";

const floatingIcons = [
  { Icon: Mic, delay: 0, x: "10%", y: "20%", color: "text-primary", size: "md" },
  { Icon: Globe, delay: 0.5, x: "85%", y: "15%", color: "text-secondary", size: "lg" },
  { Icon: Wallet, delay: 1, x: "5%", y: "60%", color: "text-accent", size: "sm" },
  { Icon: Languages, delay: 1.5, x: "90%", y: "55%", color: "text-primary", size: "md" },
  { Icon: Volume2, delay: 2, x: "15%", y: "80%", color: "text-secondary", size: "lg" },
  { Icon: Sparkles, delay: 2.5, x: "80%", y: "75%", color: "text-accent", size: "sm" },
  { Icon: Zap, delay: 0.3, x: "25%", y: "10%", color: "text-secondary", size: "sm" },
  { Icon: Shield, delay: 0.8, x: "70%", y: "85%", color: "text-primary", size: "md" },
  { Icon: Star, delay: 1.3, x: "95%", y: "35%", color: "text-accent", size: "sm" },
  { Icon: Heart, delay: 1.8, x: "3%", y: "40%", color: "text-secondary", size: "sm" },
];

const sizeClasses = {
  sm: "w-5 h-5 md:w-6 md:h-6",
  md: "w-6 h-6 md:w-8 md:h-8",
  lg: "w-8 h-8 md:w-10 md:h-10",
};

const containerSizes = {
  sm: "p-3",
  md: "p-4",
  lg: "p-5",
};

export const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating icons with enhanced animations */}
      {floatingIcons.map(({ Icon, delay, x, y, color, size }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: -180 }}
          animate={{ opacity: 0.3, scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.5, duration: 0.8, type: "spring" }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0, -10, 0],
              x: [0, 5, 0, -5, 0],
              rotate: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1, 0.95, 1],
            }}
            transition={{
              duration: 8 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay,
            }}
          >
            <motion.div 
              className={`${containerSizes[size as keyof typeof containerSizes]} rounded-2xl glass-card relative overflow-hidden`}
              whileHover={{ scale: 1.2 }}
            >
              {/* Shimmer effect on icons */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              />
              <Icon className={sizeClasses[size as keyof typeof sizeClasses]} />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}

      {/* Enhanced particles with varied animations */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: i % 3 === 0 
              ? "hsl(var(--primary) / 0.5)" 
              : i % 3 === 1 
                ? "hsl(var(--secondary) / 0.5)" 
                : "hsl(var(--accent) / 0.5)",
          }}
          animate={{
            y: [0, -(30 + Math.random() * 50), 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Orbiting elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`orbit-${i}`}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full bg-primary/30"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 10 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: `${80 + i * 40}px 0px`,
            }}
          />
        ))}
      </div>

      {/* Floating rings */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full border border-primary/10"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full border border-secondary/10"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-[15%] right-[20%] w-2 h-2 rounded-full bg-primary"
        animate={{
          boxShadow: [
            "0 0 10px 5px hsl(var(--primary) / 0.3)",
            "0 0 30px 15px hsl(var(--primary) / 0.5)",
            "0 0 10px 5px hsl(var(--primary) / 0.3)",
          ],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-secondary"
        animate={{
          boxShadow: [
            "0 0 10px 5px hsl(var(--secondary) / 0.3)",
            "0 0 30px 15px hsl(var(--secondary) / 0.5)",
            "0 0 10px 5px hsl(var(--secondary) / 0.3)",
          ],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-[60%] right-[10%] w-2 h-2 rounded-full bg-accent"
        animate={{
          boxShadow: [
            "0 0 10px 5px hsl(var(--accent) / 0.3)",
            "0 0 30px 15px hsl(var(--accent) / 0.5)",
            "0 0 10px 5px hsl(var(--accent) / 0.3)",
          ],
          scale: [1, 1.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </div>
  );
};
