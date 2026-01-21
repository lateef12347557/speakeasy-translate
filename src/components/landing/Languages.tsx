import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

const languages = [
  { code: "EN", name: "English", region: "Global" },
  { code: "YO", name: "Yoruba", region: "Nigeria" },
  { code: "FR", name: "French", region: "France" },
  { code: "ES", name: "Spanish", region: "Spain" },
  { code: "PT", name: "Portuguese", region: "Portugal" },
  { code: "AR", name: "Arabic", region: "Middle East" },
  { code: "ZH", name: "Chinese", region: "China" },
  { code: "HI", name: "Hindi", region: "India" },
  { code: "SW", name: "Swahili", region: "East Africa" },
  { code: "HA", name: "Hausa", region: "West Africa" },
  { code: "DE", name: "German", region: "Germany" },
  { code: "JA", name: "Japanese", region: "Japan" },
];

const stats = [
  { value: "50+", label: "Languages" },
  { value: "100ms", label: "Latency" },
  { value: "99.9%", label: "Accuracy" },
];

export const Languages = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0 aurora-bg"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 cursor-default"
            >
              <motion.span
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🌍
              </motion.span>
              {" "}Global Reach
            </motion.span>
            
            <motion.h2 
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                50+ Languages
              </motion.span>
              <br />
              <span className="text-foreground">One Platform</span>
            </motion.h2>
            
            <motion.p 
              className="text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              From English to Yoruba, Spanish to Swahili. We support the languages 
              your students actually speak, including African languages often 
              overlooked by other platforms.
            </motion.p>
            
            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <AnimatedCounter
                  key={index}
                  value={stat.value}
                  label={stat.label}
                />
              ))}
            </div>
          </motion.div>

          {/* Right - Language cloud with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            {/* Animated globe background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full border border-border/30 opacity-30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-primary/20"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full border border-secondary/20"
              />
              <motion.div
                className="absolute"
                animate={{ 
                  scale: [1, 1.2, 1], 
                  opacity: [0.2, 0.4, 0.2],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              >
                <Globe className="w-24 h-24 text-primary/30" />
              </motion.div>
            </div>

            {/* Language badges with wave animation */}
            <div className="relative grid grid-cols-3 gap-3 p-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0, rotate: -20 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.08,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -8,
                    rotate: [0, -5, 5, 0],
                    boxShadow: "0 20px 40px hsl(0 0% 0% / 0.3), 0 0 30px hsl(var(--primary) / 0.2)"
                  }}
                  className="glass-card rounded-xl p-4 text-center cursor-pointer group relative overflow-hidden"
                >
                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <motion.div 
                    className="text-lg font-bold text-foreground group-hover:text-primary transition-colors relative z-10"
                    animate={index < 3 ? {
                      color: [
                        "hsl(var(--foreground))",
                        "hsl(var(--primary))",
                        "hsl(var(--foreground))"
                      ]
                    } : {}}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    {lang.code}
                  </motion.div>
                  <div className="text-xs text-muted-foreground mt-1 relative z-10">{lang.name}</div>
                  <div className="text-[10px] text-muted-foreground/60 mt-0.5 relative z-10">
                    {lang.region}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
