import React, { useState } from 'react'
import './sidebar.css'
import Links from './Links/links'
import Togglebutton from './Togglebutton/togglebutton'
import { delay, motion } from 'framer-motion'
import {clipPath} from 'framer-motion/client'

const varients = {
  open:{
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: { 
    clipPath: "circle(30px at 50px 50px)",
    transition:{
    type:"spring",
    delay: 0.5,
    stiffness:400,
    damping:40,
    },
  },
};

const sidebar = () => {

  const [open, setOpen] = useState(false)


  return (
    <motion.div className='sidebar' animate={open ? "open" : "closed" }>
      <motion.div className="bg" variants={varients}>
        <Links/>
      </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default sidebar
