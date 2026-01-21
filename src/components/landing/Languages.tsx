import { motion } from "framer-motion";
import { Globe } from "lucide-react";

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

export const Languages = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
            >
              Global Reach
            </motion.span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">50+ Languages</span>
              <br />
              <span className="text-foreground">One Platform</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              From English to Yoruba, Spanish to Swahili. We support the languages 
              your students actually speak, including African languages often 
              overlooked by other platforms.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Languages" },
                { value: "100ms", label: "Latency" },
                { value: "99.9%", label: "Accuracy" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Language cloud */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                className="absolute"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Globe className="w-24 h-24 text-primary/20" />
              </motion.div>
            </div>

            {/* Language badges */}
            <div className="relative grid grid-cols-3 gap-3 p-8">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.code}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="glass-card rounded-xl p-4 text-center cursor-pointer group"
                >
                  <div className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {lang.code}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">{lang.name}</div>
                  <div className="text-[10px] text-muted-foreground/60 mt-0.5">
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
