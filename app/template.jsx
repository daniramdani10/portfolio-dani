"use client";

import { motion } from "framer-motion";

import useScrollProgress from "@/hooks/useScrollProgress";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -20 },
};
const Template = ({ children }) => {
  const completion = useScrollProgress();
  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{
          type: "linear",
          duration: 0.5,
          delay: 0.2,
        }}
      >
        {children}
      </motion.main>
      {/* completion bar */}
      <span
        style={{
          transform: `translateY(${completion}%)`,
        }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      {/* <div className="h-[4000px]"></div> */}
    </>
  );
};

export default Template;
