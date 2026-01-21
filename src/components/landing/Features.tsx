import { motion } from "framer-motion";
import { 
  Mic, 
  Globe2, 
  Wallet, 
  Shield, 
  Zap, 
  Eye,
  Languages,
  Users
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-Time Transcription",
    description: "Sub-second latency using AssemblyAI's advanced models. Hear it, see it, instantly.",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Languages,
    title: "50+ Languages",
    description: "Including African languages like Yoruba, Swahili, and Hausa. Everyone belongs.",
    gradient: "from-secondary to-orange-400",
  },
  {
    icon: Wallet,
    title: "Web3 Payments",
    description: "Connect Phantom or Solflare. Pay ₦50 to join. No bank accounts needed.",
    gradient: "from-accent to-purple-400",
  },
  {
    icon: Users,
    title: "Collaborative Funding",
    description: "Students pool resources together. Affordable education for everyone.",
    gradient: "from-primary to-teal-400",
  },
  {
    icon: Eye,
    title: "Accessibility First",
    description: "WCAG 2.1 AA compliant. Screen readers, high contrast, font scaling.",
    gradient: "from-secondary to-amber-400",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built on Solana for instant micro-transactions. No waiting, no fees.",
    gradient: "from-accent to-violet-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export const Features = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-6"
          >
            Powerful Features
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Everything You Need</span>
            <br />
            <span className="gradient-text">Built Right In</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge AI, blockchain payments, and accessibility features combined
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="feature-card h-full relative overflow-hidden">
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Icon with gradient background */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative w-14 h-14 rounded-xl mb-6 flex items-center justify-center overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20`} />
                  <feature.icon className="w-7 h-7 text-foreground relative z-10" />
                </motion.div>

                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
