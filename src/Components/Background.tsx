import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface BackgroundProps {
  children: ReactNode
}

export default function Background({ children }: BackgroundProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100">
      
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-cyan-500/20"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
        }}
      />

      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, -80, 0], x: [0, -60, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\" stitchTiles=\"stitch\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\"/></svg>')",
        }}
      />

      <div className="relative z-20">
        {children}
      </div>
    </div>
  )
}
