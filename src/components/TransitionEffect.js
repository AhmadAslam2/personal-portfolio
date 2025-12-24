import { motion } from "framer-motion";
import React from "react";

const TransitionEffect = () => {
  return (
    <>
      {/* Main overlay - elegant fade with subtle scale and slide */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-light dark:bg-dark"
        initial={{
          opacity: 1,
          scale: 1.02,
          x: 0,
        }}
        animate={{
          opacity: 0,
          scale: 1,
          x: 0,
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3 },
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94], // Smooth, natural easing
        }}
        style={{ pointerEvents: "none" }}
      />
      {/* Accent layer - subtle gradient fade */}
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-40 bg-gradient-to-br from-light/60 via-light/40 to-light/20 dark:from-dark/60 dark:via-dark/40 dark:to-dark/20"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 0.5,
          delay: 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{ pointerEvents: "none" }}
      />
    </>
  );
};

export default TransitionEffect;
