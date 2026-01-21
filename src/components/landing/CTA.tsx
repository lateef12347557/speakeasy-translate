import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowRight, Sparkles, Zap, Star } from "lucide-react";

const badges = [
  { emoji: "🔒", text: "Wallet-Only Auth" },
  { emoji: "⚡", text: "Instant Access" },
  { emoji: "🌍", text: "50+ Languages" },
  { emoji: "♿", text: "WCAG Compliant" },
];

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background with multiple layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        {/* Morphing gradient blob */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[800px] morphing-blob"
          animate={{
            background: [
              "radial-gradient(ellipse at 30% 30%, hsl(175 100% 45% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 70% 70%, hsl(20 100% 55% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 50% 30%, hsl(265 100% 60% / 0.15) 0%, transparent 50%)",
              "radial-gradient(ellipse at 30% 70%, hsl(175 100% 45% / 0.15) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Animated particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              background: i % 3 === 0 
                ? "hsl(var(--primary))" 
                : i % 3 === 1 
                  ? "hsl(var(--secondary))" 
                  : "hsl(var(--accent))",
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, (Math.random() - 0.5) * 50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}

        {/* Floating icons */}
        <motion.div
          className="absolute top-20 left-20 text-primary/20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Star className="w-8 h-8" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 right-32 text-secondary/20"
          animate={{
            y: [0, 20, 0],
            rotate: [360, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <Zap className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative element with enhanced animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden cursor-pointer"
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "linear-gradient(0deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))",
                  "linear-gradient(180deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))",
                  "linear-gradient(360deg, hsl(var(--primary) / 0.2), hsl(var(--secondary) / 0.2))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-10 h-10 text-primary relative z-10" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Break
            </motion.span>
            <br />
            <motion.span 
              className="gradient-text-animated inline-block"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Language Barriers?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Join thousands of students already using Gossiper to learn without limits.
            <motion.span 
              className="text-foreground font-medium"
              animate={{
                textShadow: [
                  "0 0 0px hsl(var(--primary))",
                  "0 0 20px hsl(var(--primary))",
                  "0 0 0px hsl(var(--primary))"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            > Start for just ₦50.</motion.span>
          </motion.p>

          {/* CTA buttons with enhanced animations */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="hero" size="xl" className="group relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: ["100%", "-100%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  animate={{
                    boxShadow: [
                      "0 0 20px hsl(var(--primary) / 0.3) inset",
                      "0 0 40px hsl(var(--primary) / 0.5) inset",
                      "0 0 20px hsl(var(--primary) / 0.3) inset",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Wallet className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Connect Wallet Now</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="heroOutline" size="xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust badges with staggered animation */}
          <motion.div
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          >
            {badges.map((badge, index) => (
              <motion.span 
                key={index} 
                className="text-sm flex items-center gap-2 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.1, 
                  color: "hsl(var(--foreground))",
                  y: -5
                }}
              >
                <motion.span
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, 0, -10, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  {badge.emoji}
                </motion.span>
                {badge.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
