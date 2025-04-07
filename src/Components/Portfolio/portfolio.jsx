import React, { useRef } from "react";
import "./portfolio.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "FastBite-App",
    image:
      "/fastBite.png",
    desc: " FastBite is a fast and user-friendly food ordering web application that allows users to explore various cuisines, add items to their cart, and order their favorite meals effortlessly. Built with React, React Router, and Context API, FastBite provides a seamless browsing and ordering experience with a modern and responsive UI",
    link: "https://fastbite-app-1.onrender.com",
  },
  {
    id: 2,
    title: "My-Dentist",
    image:
      "/myDentist.png",
    desc: "•	MyDentist stands out for its commitment to patient-centered care. Our experienced team strives to create a warm and welcoming environment where every patient feels valued and respected.",
    link: "https://jcoder224.github.io/My_Dentist/",
  },
  {
    id: 3,
    title: "Morita",
    image:
      "/morita.png",
    desc: "The 'Morita' website is designed to provide an online presence for a dental clinic, showcasing its services, expertise, and commitment to patient care. Built with HTML, CSS, and JavaScript, it offers a user-friendly and visually appealing platform for patients to learn about dental treatments, book appointments, and connect with the clinic.",
    link: "https://jcoder224.github.io/morita/"
  },
  
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300 , 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button><a href={item.link} target="_blank" rel="noopener noreferrer" className="btn">See Demo</a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default portfolio;
