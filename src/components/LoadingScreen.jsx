import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const loadingText = "Shashank Tripathi".split("");

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          {loadingText.map((letter, index) => (
            <motion.span
              key={index}
              variants={itemVariants}
              className={`inline-block text-4xl md:text-6xl font-bold ${
                letter === " " ? "mx-2" : ""
              } ${index < 8 ? "text-secondary" : "text-white"}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-secondary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </motion.div>
        
        <motion.p
          className="mt-8 text-accent font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Loading Portfolio...
        </motion.p>
      </div>
    </div>
  );
};

export default LoadingScreen;