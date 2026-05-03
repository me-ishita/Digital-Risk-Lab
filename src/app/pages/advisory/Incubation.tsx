import { motion } from "motion/react";

export function Incubation() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 text-foreground">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Incubation
          </h1>
          <p className="text-2xl md:text-xl font-semibold text-primary uppercase tracking-widest text-center max-w-4xl mx-auto leading-relaxed px-4 whitespace-normal">
            please give content
          </p>
        </motion.div>
      </div>
    </div>
  );
}
