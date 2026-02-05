import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const navItems = [
  { name: "Accueil", path: "/" },
  { name: "Projets", path: "/projects" },
  { name: "Parcours", path: "/about" },
  { name: "Compétences", path: "/skills" },
  { name: "Contact", path: "/contact" },
]

export default function BottomNavbar() {
  return (
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-8 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 shadow-xl border border-white/20"
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
            {item.name}
          </motion.span>
        </NavLink>
      ))}
    </motion.nav>
  )
}
