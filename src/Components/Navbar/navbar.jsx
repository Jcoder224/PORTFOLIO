import React from 'react'
import './navbar.css'
import { motion } from 'framer-motion'
import Sidebar from '../Sidebar/sidebar'

const navbar = () => {
  return (
    <div className='navbar'>
      {/* *Sidebar* */}
      <Sidebar />
      <div className="wrapper">
        <motion.span initial={{opacity:0, scale:0.5}} 
        animate={{opacity:1, scale:1}} 
        transition={{duration:0.5}}>
        
            JCoder224
        
        </motion.span>
        <div className="social">
            <a href="#"><img src="/facebook.png" alt="" /></a>
            <a href="#"><img src="/instagram.png" alt="" /></a>
            <a href="#"><img src="/youtube.png" alt="" /></a>
            <a href="#"><img src="/dribbble.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default navbar
