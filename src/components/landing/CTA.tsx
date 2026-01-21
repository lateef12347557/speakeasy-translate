import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wallet, ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px]"
          animate={{
            background: [
              "radial-gradient(ellipse at center, hsl(174 84% 50% / 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, hsl(16 85% 60% / 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, hsl(262 83% 65% / 0.1) 0%, transparent 70%)",
              "radial-gradient(ellipse at center, hsl(174 84% 50% / 0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
          >
            <Sparkles className="w-10 h-10 text-primary" />
          </motion.div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to Break</span>
            <br />
            <span className="gradient-text-animated">Language Barriers?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join thousands of students already using Gossiper to learn without limits.
            <span className="text-foreground font-medium"> Start for just ₦50.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group pulse-glow">
              <Wallet className="w-5 h-5" />
              Connect Wallet Now
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground"
          >
            {[
              "🔒 Wallet-Only Auth",
              "⚡ Instant Access",
              "🌍 50+ Languages",
              "♿ WCAG Compliant",
            ].map((badge, index) => (
              <span key={index} className="text-sm">
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
