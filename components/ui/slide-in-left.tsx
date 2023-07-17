"use client"

import clsx from "clsx"
import { motion } from "framer-motion"

interface SlideInLeftProps {
  className?: string
  children?: React.ReactNode
  delay?: number
  duration?: number
}

export const SlideInLeft = ({ className, children, delay, duration }: SlideInLeftProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: delay ?? 0 } }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: duration ?? 0.3 }}
    >
      {children}
    </motion.div>
  )
}
