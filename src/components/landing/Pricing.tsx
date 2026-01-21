import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Wallet, Sparkles } from "lucide-react";

export const Pricing = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
          >
            Simple Pricing
          </motion.span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Education Should Be</span>
            <br />
            <span className="gradient-text">Affordable</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            No subscriptions. No hidden fees. Just pay-as-you-go micro-payments.
          </p>

          {/* Pricing card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-md mx-auto"
          >
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            
            <div className="relative glass-card rounded-3xl p-8 md:p-10 border border-primary/20">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  Per Session
                </div>
              </div>

              {/* Price */}
              <div className="mt-4 mb-8">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-medium text-muted-foreground">₦</span>
                  <span className="text-7xl md:text-8xl font-bold gradient-text-animated">50</span>
                </div>
                <p className="text-muted-foreground mt-2">
                  That's about <span className="text-foreground font-medium">$0.10 USD</span>
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8 text-left">
                {[
                  "Real-time captions in your language",
                  "50+ languages supported",
                  "Collaborative funding pool",
                  "No signup required",
                  "Instant access via wallet",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Button variant="hero" size="xl" className="w-full group">
                <Wallet className="w-5 h-5" />
                Start Learning Now
              </Button>

              <p className="text-sm text-muted-foreground mt-4">
                Connect any Solana wallet to get started
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
