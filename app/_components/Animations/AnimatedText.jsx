"use client";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedText({ className, text }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures animations only run on client
  }, []);

  const childVariants = {
    hidden: { opacity: 0.1, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <p className={className} ref={ref}>
      <span className="sr-only">{text}</span>
      {isClient ? (
        <motion.span
          key={isClient} // Forces re-render after mounting
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          aria-hidden
        >
          {text.split(" ").map((char, idx) => (
            <motion.span
              className="inline-block mr-2"
              key={idx}
              variants={childVariants}
            >
              {`${char} `}{" "}
            </motion.span>
          ))}
        </motion.span>
      ) : (
        <span>{text}</span> // Show normal text before mounting
      )}
    </p>
  );
}

export default AnimatedText;
