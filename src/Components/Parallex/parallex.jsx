import React, { useRef } from "react";
import "./parallex.css";
import { motion, useScroll, useTransform } from "framer-motion";

const parallex = () => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0,1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);

  return (
    <div className="parallex" ref={ref}>
      <motion.h1 style={{y: yText}}>What we do?</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{y: yBg}} className="planets"></motion.div>
      <motion.div style={{x: yBg}} className="stars"></motion.div>
    </div>
  );
};

export default parallex;
