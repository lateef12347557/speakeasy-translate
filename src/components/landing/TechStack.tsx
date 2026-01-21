import { motion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    description: "React Framework",
    color: "bg-foreground text-background",
  },
  {
    name: "Solana",
    description: "Blockchain",
    color: "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white",
  },
  {
    name: "AssemblyAI",
    description: "Speech-to-Text",
    color: "bg-gradient-to-r from-blue-500 to-blue-600 text-white",
  },
  {
    name: "TypeScript",
    description: "Type Safety",
    color: "bg-[#3178C6] text-white",
  },
  {
    name: "Tailwind",
    description: "Styling",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500 text-white",
  },
  {
    name: "Vercel",
    description: "Deployment",
    color: "bg-foreground text-background",
  },
];

export const TechStack = () => {
  return (
    <section className="py-20 border-t border-border/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Powered by Modern Technology
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className={`px-5 py-3 rounded-xl ${tech.color} font-medium text-sm flex items-center gap-2 cursor-pointer transition-shadow hover:shadow-lg`}
            >
              <span className="font-semibold">{tech.name}</span>
              <span className="opacity-70 text-xs">• {tech.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
