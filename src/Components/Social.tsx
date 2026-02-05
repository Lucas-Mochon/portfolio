import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Socials() {
  return (
    <motion.div
      className="flex justify-center space-x-6 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <a
        href="https://github.com/Lucas-Mochon"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-400 transition-colors"
      >
        <FaGithub size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/lucas-mochon-4116082b5/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white hover:text-indigo-400 transition-colors"
      >
        <FaLinkedin size={32} />
      </a>
    </motion.div>
  )
}