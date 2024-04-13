"use client"
import React, { ReactNode } from 'react'
import {motion} from "framer-motion"
function PageTransition({children}:{children:ReactNode}) {
  return <motion.div 
        initial={{x:20,opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{ease:"easeInOut",duration:0.75}}
  >
    {children}
  </motion.div>
}

export default PageTransition