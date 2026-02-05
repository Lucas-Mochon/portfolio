import { motion } from "framer-motion"

export default function BrandName() {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50 cursor-default select-none px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-base md:text-lg font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
        Lucas Mochon
      </h1>
    </motion.div>
  )
}