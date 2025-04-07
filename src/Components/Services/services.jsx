import React, { useRef } from "react";
import "./services.css";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Local Experience Marketplace</h2>
          <p>
            <b>Concept:</b> Think Airbnb, but for local experiences. Let locals
            host workshops, tours, cooking classes, or art sessions.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Personalized Fitness Dashboard</h2>
          <p>
            <b>Concept:</b> A fitness tracker dashboard that tailors workout and
            meal plans based on user input and progress.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Freelancer Skill Builder with Live Projects</h2>
          <p>
            <b>Concept:</b> A platform where aspiring freelancers build
            real-world projects submitted by clients (like internships or
            practice gigs).
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Smart Grocery Planner</h2>
          <p>
            <b>Concept:</b> A weekly meal planner that auto-generates a grocery
            list based on recipes and lets you shop online.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default services;
