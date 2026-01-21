import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

export const AnimatedCounter = ({ value, label, suffix = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState("0");
  
  // Parse the numeric part
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, "")) || 0;
  const hasDecimal = value.includes(".");
  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const originalSuffix = value.match(/[^0-9.]*$/)?.[0] || suffix;

  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 20,
    duration: 2000,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (hasDecimal) {
        setDisplayValue(latest.toFixed(1));
      } else {
        setDisplayValue(Math.round(latest).toString());
      }
    });
    return unsubscribe;
  }, [springValue, hasDecimal]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, type: "spring" }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="text-center group cursor-default"
    >
      <motion.div 
        className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-2 relative"
        animate={isInView ? { 
          textShadow: [
            "0 0 0px hsl(var(--primary))",
            "0 0 30px hsl(var(--primary))",
            "0 0 0px hsl(var(--primary))"
          ]
        } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {prefix}{displayValue}{originalSuffix}
        <motion.div
          className="absolute -inset-4 bg-primary/10 rounded-full -z-10"
          initial={{ opacity: 0, scale: 0 }}
          whileHover={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          style={{ filter: "blur(20px)" }}
        />
      </motion.div>
      <motion.div 
        className="text-sm text-muted-foreground group-hover:text-foreground transition-colors"
      >
        {label}
      </motion.div>
    </motion.div>
  );
};
