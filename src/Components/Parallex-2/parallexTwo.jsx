import React, { useRef } from "react";
import "./parallexTwo.css";
import { motion, useScroll, useTransform } from "framer-motion";

const parallexTwo = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,

    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallexTwo" ref={ref}>
      <motion.h1 style={{ y: yText }}>What we did?</motion.h1>
      <motion.div className="Mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default parallexTwo;
