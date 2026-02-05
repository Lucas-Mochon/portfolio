import { motion } from "framer-motion"
import Socials from "../components/Social"
import BrandName from "../components/BrandName"
import { useTranslateWithHtml } from "../helpers/translateWithHtml"
import MyPhoto from "../assets/pictures/me.jpg"
import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function HomePage() {
  const { t } = useTranslation()
  const techs = t("technologies", { returnObjects: true }) as string[]

  const { translateWithHtml } = useTranslateWithHtml()
    const [randomStyles] = useState(() =>
    techs.map(() => ({
      rotate: Math.random() * 6 - 3,
      marginTop: Math.random() * 6,
    }))
  )

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center px-4 md:px-20">
      
      <BrandName />

      <motion.div
        className="absolute inset-0 -z-10"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        style={{
          background: "radial-gradient(circle at 25% 25%, rgba(99,102,241,0.1), transparent 70%), radial-gradient(circle at 75% 75%, rgba(16,185,129,0.08), transparent 70%)",
          backgroundSize: "200% 200%"
        }}
      />
      <motion.div
        className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ y: [0, 60, 0], x: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ y: [0, -80, 0], x: [0, -60, 0] }}
        transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
            Lucas Mochon
          </h1>
          <p
            className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-lg"
            dangerouslySetInnerHTML={translateWithHtml("hero_presentation")}
          />
          <motion.div
            className="flex justify-center md:justify-start gap-6 mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Socials />
          </motion.div>
        </motion.div>

        <motion.div
          className="flex-1 flex flex-col md:flex-row items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)] gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex-shrink-0 w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-white/30 shadow-lg">
            <img src={MyPhoto} alt="Lucas Mochon" className="w-full h-full object-cover" />
          </div>

          <div className="flex-1 flex flex-wrap justify-center md:justify-start gap-2">
            {techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs md:text-sm bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-cyan-400/40"
                style={{
                  transform: `rotate(${randomStyles[idx].rotate}deg)`,
                  marginTop: `${randomStyles[idx].marginTop}px`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}