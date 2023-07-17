"use client"

import clsx from "clsx"
import { motion } from "framer-motion"

interface ColorBlockProps {
  classes?: string
  children?: React.ReactNode
  i: number
}

export const ColorBlock = ({ classes, children, i }: ColorBlockProps) => {
  return (
    <motion.div
      className={clsx(
        "w-28 h-14 flex items-center justify-center rounded-xl shadow-md",
        classes
      )}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0, transition: { delay: i * 0.05 } }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
