"use client";
import { motion } from "framer-motion";

// Variants

const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculate reverse index

const reverseIndex = (index: number) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion divs, each represending a step o the stairs. 
      Each div will have the same animation defined by stairAnimation object.
      The delay for each div will be calculated dinamically
      */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-accent relative"
          />
        );
      })}
    </>
  );
};
export default Stairs;
