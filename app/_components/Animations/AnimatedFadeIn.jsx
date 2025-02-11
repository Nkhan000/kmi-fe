"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedFadeIn({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures animations only run on client
  }, []);

  const animationVariants = {
    hidden: { opacity: 0, filter: "blur(5px)", y: 50 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
  };

  return (
    <div ref={ref}>
      {isClient ? (
        <motion.div
          key={isClient}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.8 }}
          variants={animationVariants}
        >
          {children}
        </motion.div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
}

export default AnimatedFadeIn;
