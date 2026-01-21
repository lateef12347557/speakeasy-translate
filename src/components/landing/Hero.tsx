import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowRight, Globe2, Mic, Zap } from "lucide-react";
import { TypewriterCaption } from "./TypewriterCaption";
import { FloatingElements } from "./FloatingElements";
import { useRef } from "react";

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={containerRef} className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      {/* Morphing animated background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/10 morphing-blob"
          animate={{
            scale: [1, 1.2, 1.1, 1],
            x: [0, 50, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(80px)" }}
        />
        <motion.div
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-secondary/10 morphing-blob"
          animate={{
            scale: [1.2, 1, 1.3, 1.2],
            x: [0, -40, 30, 0],
            y: [0, 40, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(100px)" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 morphing-blob"
          animate={{
            scale: [1, 1.3, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{ filter: "blur(120px)" }}
        />

        {/* Electric grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} />

        {/* Animated scan line */}
        <motion.div
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          animate={{ y: ["-100vh", "100vh"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Rotating glow ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <motion.div
          className="w-full h-full rounded-full rotating-ring"
          style={{
            background: "conic-gradient(from 0deg, transparent 0%, hsl(var(--primary) / 0.3) 10%, transparent 20%)"
          }}
        />
      </div>

      <FloatingElements />

      <motion.div 
        style={{ y, opacity, scale }}
        className="container relative z-10 pt-32 pb-20"
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge with shimmer */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 shimmer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm text-muted-foreground">
              Real-Time AI Transcription • 50+ Languages
            </span>
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-secondary" />
            </motion.span>
          </motion.div>

          {/* Main headline with staggered letters */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Break Language
            </motion.span>
            <br />
            <motion.span 
              className="gradient-text-animated inline-block"
              initial={{ opacity: 0, y: 50, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Barriers in Class
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Students get real-time captions in their language. 
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
            > Pay as little as ₦50</motion.span> to join a session.
            Powered by AI and Web3.
          </motion.p>

          {/* CTA Buttons with 3D effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
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
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <Wallet className="w-5 h-5" />
                Connect Wallet
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button variant="heroOutline" size="xl">
                <Globe2 className="w-5 h-5" />
                See How It Works
              </Button>
            </motion.div>
          </motion.div>

          {/* Live Caption Demo with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.9, type: "spring" }}
            className="relative max-w-4xl mx-auto perspective-card"
          >
            <motion.div 
              className="caption-container rounded-2xl p-6 md:p-8"
              whileHover={{ 
                boxShadow: "0 30px 80px hsl(0 0% 0% / 0.7), 0 0 60px hsl(var(--primary) / 0.2)",
                y: -5
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Mock browser bar */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border/50">
                <div className="flex gap-1.5">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-destructive/50"
                    whileHover={{ scale: 1.3, backgroundColor: "hsl(0 100% 55%)" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-secondary/50"
                    whileHover={{ scale: 1.3, backgroundColor: "hsl(20 100% 55%)" }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-primary/50"
                    whileHover={{ scale: 1.3, backgroundColor: "hsl(175 100% 45%)" }}
                  />
                </div>
                <div className="flex-1 flex justify-center">
                  <motion.div 
                    className="px-4 py-1.5 rounded-lg bg-muted/50 text-xs text-muted-foreground"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    gossiper.app/session/live-demo
                  </motion.div>
                </div>
              </div>

              {/* Caption display */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20"
                    animate={{ 
                      boxShadow: [
                        "0 0 0px hsl(var(--primary) / 0.5)",
                        "0 0 20px hsl(var(--primary) / 0.5)",
                        "0 0 0px hsl(var(--primary) / 0.5)"
                      ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      <Mic className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span className="text-sm text-primary font-medium">Live</span>
                  </motion.div>
                  <div className="px-3 py-1.5 rounded-full bg-muted/50 text-xs text-muted-foreground">
                    English → Your Language
                  </div>
                </div>
                
                <TypewriterCaption />
              </div>
            </motion.div>

            {/* Enhanced decorative glow */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl -z-10"
              animate={{ 
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ filter: "blur(40px)" }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2 relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              opacity: [1, 0.3, 1], 
              y: [0, 12, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent"
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <motion.p
          className="text-xs text-muted-foreground mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </section>
  );
};
