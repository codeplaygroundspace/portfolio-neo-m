"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Components
import Stairs from "@/components/Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>

          {/* This motion.div is used for the transition effect. It fades out the background color after a delay of 1 second. */}
          <motion.div
            className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
            }}
          />
        </div>
      </AnimatePresence>
    </>
  );
};
export default StairTransition;
