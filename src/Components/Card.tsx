import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <motion.div
      className={`
        relative
        max-w-lg w-full
        mx-auto
        p-6 md:p-8
        rounded-2xl
        bg-neutral-900/80
        backdrop-blur-md
        shadow-xl shadow-black/40
        border border-neutral-800/50
        ${className}
      `}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.98 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}