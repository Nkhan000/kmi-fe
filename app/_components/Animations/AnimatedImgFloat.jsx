"use client";
import { motion } from "framer-motion";

function AnimatedImgFloat({ num, children }) {
  const totalDuration = num % 2 == 0 ? 1 : 0.5;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
        y: [0, -10, 0],
      }}
      transition={{
        scale: { duration: totalDuration, ease: "easeOut" },
        opacity: { duration: totalDuration, ease: "easeOut" },
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedImgFloat;
