import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Wallet, Sparkles, Zap } from "lucide-react";

const features = [
  "Real-time captions in your language",
  "50+ languages supported",
  "Collaborative funding pool",
  "No signup required",
  "Instant access via wallet",
];

export const Pricing = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ filter: "blur(150px)" }}
      />
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6 cursor-default"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4" />
            </motion.div>
            Simple Pricing
          </motion.span>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-foreground">Education Should Be</span>
            <br />
            <motion.span 
              className="gradient-text-animated"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Affordable
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            No subscriptions. No hidden fees. Just pay-as-you-go micro-payments.
          </motion.p>

          {/* Pricing card with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="relative max-w-md mx-auto perspective-card"
          >
            {/* Animated glow effect */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ filter: "blur(40px)" }}
            />
            
            <motion.div 
              className="relative glass-card rounded-3xl p-8 md:p-10 border border-primary/20 overflow-hidden"
              whileHover={{ 
                y: -10,
                boxShadow: "0 30px 60px hsl(0 0% 0% / 0.5), 0 0 60px hsl(var(--primary) / 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Electric pulse border effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.3), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={{
                  backgroundPosition: ["200% 0%", "-200% 0%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Badge */}
              <motion.div 
                className="absolute -top-4 left-1/2 -translate-x-1/2"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring" }}
              >
                <motion.div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
                  animate={{
                    boxShadow: [
                      "0 0 0px hsl(var(--primary))",
                      "0 0 30px hsl(var(--primary))",
                      "0 0 0px hsl(var(--primary))"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                  Per Session
                </motion.div>
              </motion.div>

              {/* Price with animated number */}
              <div className="mt-4 mb-8 relative">
                <motion.div 
                  className="flex items-baseline justify-center gap-1"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <span className="text-2xl font-medium text-muted-foreground">₦</span>
                  <motion.span 
                    className="text-7xl md:text-8xl font-bold gradient-text-animated"
                    animate={{
                      textShadow: [
                        "0 0 0px hsl(var(--primary))",
                        "0 0 40px hsl(var(--primary))",
                        "0 0 0px hsl(var(--primary))"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    50
                  </motion.span>
                </motion.div>
                <motion.p 
                  className="text-muted-foreground mt-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  That's about <span className="text-foreground font-medium">$0.10 USD</span>
                </motion.p>
              </div>

              {/* Features with staggered animation */}
              <div className="space-y-4 mb-8 text-left relative z-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <motion.div 
                      className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0"
                      whileHover={{ 
                        scale: 1.2,
                        backgroundColor: "hsl(var(--primary) / 0.4)"
                      }}
                      animate={{
                        boxShadow: [
                          "0 0 0px hsl(var(--primary))",
                          "0 0 10px hsl(var(--primary))",
                          "0 0 0px hsl(var(--primary))"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <Check className="w-3 h-3 text-primary" />
                    </motion.div>
                    <span className="text-foreground group-hover:text-primary transition-colors">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA with enhanced animation */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button variant="hero" size="xl" className="w-full group relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <Wallet className="w-5 h-5" />
                  Start Learning Now
                </Button>
              </motion.div>

              <motion.p 
                className="text-sm text-muted-foreground mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
              >
                Connect any Solana wallet to get started
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
