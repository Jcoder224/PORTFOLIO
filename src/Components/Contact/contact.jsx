import React, { useRef, useState } from "react";
import "./contact.css";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState(""); // "success", "error", or ""

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus(""); // Clear status on new submission

    emailjs
      .sendForm('service_i8szlfj', 'template_2g9xj6f', formRef.current, {
        publicKey: '89wStXgx7zaBnNx-t',
      })
      .then(
        (result) => {
          setStatus("success");
          formRef.current.reset(); // Clear the form inputs
        },
        (error) => {
          setStatus("error");
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>Gulshan020204@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Anpara Sonbhadra Uttar Pradesh</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Phone</h2>
          <span>+91-930-550-4804</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.div
          className="contactimg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <img src="/contact.jpg" alt="" />
        </motion.div>

        <motion.form
          onSubmit={sendEmail}
          ref={formRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <input type="text" required placeholder="Enter Your Name Here" name="name" />
          <input type="email" required placeholder="Enter Your Email Here" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button type="submit">Submit</button>

          {/* Status messages */}
          {status === "success" && <p className="success">Message sent successfully!</p>}
          {status === "error" && <p className="error">Failed to send message. Try again later.</p>}

          
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
