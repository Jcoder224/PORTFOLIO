import { motion } from 'framer-motion'
import React from 'react'
const Test = () => {
  return (
    <div className='course'>
      <motion.div className="box" animate={{ rotate: 360 }} f></motion.div>
    </div>
  )
}

export default Test
