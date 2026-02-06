import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"
import { useLanguage } from "../hooks/useLanguage"
import { useTranslation } from "react-i18next"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "home", path: "/" },
  { name: "projects", path: "/projects" },
  { name: "course", path: "/course" },
  { name: "skill", path: "/skills" },
  { name: "contact", path: "/contact" },
]

export default function BottomNavbar() {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage()
  const [open, setOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <>
      <motion.nav
        className="hidden 2xl:flex fixed bottom-6 left-1/2 -translate-x-1/2 z-50 items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20"
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

      <motion.nav
        className="2xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="relative flex justify-center"> 
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 backdrop-blur-md shadow-xl border border-white/20 text-white hover:bg-white/20 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              className="absolute bottom-full left-1/2 -translate-x-[53%] mb-2 w-48 origin-bottom
                        bg-neutral-900/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20
                        overflow-hidden flex flex-col p-4 space-y-2"
            >
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative px-4 py-3 font-medium text-white transition-all rounded-lg text-center
                    ${isActive ? "bg-cyan-400/20 text-cyan-400" : "hover:bg-white/10"}`
                  }
                >
                  {t(item.name)}
                </NavLink>
              ))}

              <div className="border-t border-white/10 pt-2 mt-2">
                <p className="text-xs text-neutral-400 px-4 py-2">{t("language")}</p>
                <div className="flex flex-col gap-1">
                  {availableLanguages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code)
                        setMobileMenuOpen(false)
                      }}
                      className={`w-full px-4 py-2 text-sm rounded-lg transition-colors ${
                        lang.code === currentLanguage.code
                          ? "bg-cyan-400/20 text-cyan-400 font-semibold"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

      </motion.nav>
    </>
  )
}
