import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "../hooks/useLanguage"
import { useTranslation } from "react-i18next"

const navItems = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "course", path: "/about" },
  { name: "skill", path: "/skills" },
  { name: "contact", path: "/contact" },
]

export default function BottomNavbar() {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            `relative px-4 py-2 font-medium text-white transition-all
             ${isActive ? "text-cyan-400" : "hover:text-purple-400"}`
          }
        >
          <motion.span
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            {t(item.name)}
          </motion.span>
        </NavLink>
      ))}

      <div className="relative ml-4">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="px-3 py-1 rounded-full text-sm font-semibold text-white bg-white/10 hover:bg-white/20 transition-colors"
        >
          {currentLanguage.label}
        </button>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 bottom-full mb-2 w-24 bg-neutral-900/80 backdrop-blur-md rounded-lg shadow-lg border border-white/20 overflow-hidden flex flex-col"
          >
            {availableLanguages
              .filter((l) => l.code !== currentLanguage.code)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setOpen(false)
                  }}
                  className="w-full px-3 py-2 text-sm text-white hover:bg-white/20 transition-colors text-center"
                >
                  {lang.label}
                </button>
              ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}