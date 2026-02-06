import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import cSharpCert from "../../assets/certifications/c_sharp_basic certificate.pdf"
import jsBasicCert from "../../assets/certifications/javascript_basic certificate.pdf"
import jsIntermediateCert from "../../assets/certifications/javascript_intermediate certificate.pdf"
import nodeJsCert from "../../assets/certifications/nodejs_basic certificate.pdf"
import problemSolvingCert from "../../assets/certifications/problem_solving_basic certificate.pdf"
import sqlAdvancedCert from "../../assets/certifications/sql_advanced certificate.pdf"
import sqlBasicCert from "../../assets/certifications/sql_basic certificate.pdf"
import sqlIntermediateCert from "../../assets/certifications/sql_intermediate certificate.pdf"

export default function SkillPage() {
  const { t } = useTranslation()

  const certifications = [
    { name: t("skillPage.certifications.0.name"), file: cSharpCert, level: t("skillPage.certifications.0.level") },
    { name: t("skillPage.certifications.1.name"), file: jsBasicCert, level: t("skillPage.certifications.1.level") },
    { name: t("skillPage.certifications.2.name"), file: jsIntermediateCert, level: t("skillPage.certifications.2.level") },
    { name: t("skillPage.certifications.3.name"), file: nodeJsCert, level: t("skillPage.certifications.3.level") },
    { name: t("skillPage.certifications.4.name"), file: problemSolvingCert, level: t("skillPage.certifications.4.level") },
    { name: t("skillPage.certifications.5.name"), file: sqlAdvancedCert, level: t("skillPage.certifications.5.level") },
    { name: t("skillPage.certifications.6.name"), file: sqlBasicCert, level: t("skillPage.certifications.6.level") },
    { name: t("skillPage.certifications.7.name"), file: sqlIntermediateCert, level: t("skillPage.certifications.7.level") },
  ]

  const techCategories = {
    frontend: [
      "JavaScript",
      "TypeScript",
      "Vue.js (Nuxt optionnel)",
      "React (Vite optionnel)",
      "Angular",
      "Sass / TailwindCSS",
      "HTML / CSS / PHP",
    ],
    backend: ["Laravel", "Symfony", "Node.js", "C# (.NET)", "Java", "Go"],
    mobile: ["Swift", "Flutter"],
    database: ["SQL (MySQL, PostgreSQL, etc.)", "MongoDB"],
    tools: ["Git / GitHub"],
  }

  const competences = t("skillPage.competences", { returnObjects: true }) as string[]
  const softSkills = t("skillPage.softSkills", { returnObjects: true }) as string[]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Basic":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "Intermediate":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "Advanced":
        return "bg-cyan-500/20 text-cyan-400 border-cyan-500/30"
      default:
        return "bg-neutral-500/20 text-neutral-400 border-neutral-500/30"
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-3 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
      <motion.div
        className="mb-16 sm:mb-24 md:mb-32"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 mb-4 sm:mb-6">
          {t("skillPage.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
          {t("skillPage.subtitle")}
        </p>
      </motion.div>

      <motion.div
        className="mb-16 sm:mb-24 md:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          {t("skillPage.technologiesSection")}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <motion.div
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 hover:border-cyan-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">🎨</span> {t("skillPage.frontend")}
            </h3>
            <div className="space-y-2">
              {techCategories.frontend.map((tech, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓ {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 hover:border-purple-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚙️</span> {t("skillPage.backend")}
            </h3>
            <div className="space-y-2">
              {techCategories.backend.map((tech, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓ {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 hover:border-indigo-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">📱</span> {t("skillPage.mobile")}
            </h3>
            <div className="space-y-2">
              {techCategories.mobile.map((tech, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓ {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 hover:border-green-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">🗄️</span> {t("skillPage.database")}
            </h3>
            <div className="space-y-2">
              {techCategories.database.map((tech, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓ {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50 hover:border-orange-400/50 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">🛠️</span> {t("skillPage.tools")}
            </h3>
            <div className="space-y-2">
              {techCategories.tools.map((tech, idx) => (
                <motion.p
                  key={idx}
                  className="text-sm sm:text-base text-neutral-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  ✓ {tech}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mb-16 sm:mb-24 md:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          {t("skillPage.technicalSkillsSection")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {competences.map((comp, idx) => (
            <motion.div
              key={idx}
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/30 hover:border-cyan-400/60 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm sm:text-base font-semibold text-cyan-300">{comp}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mb-16 sm:mb-24 md:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          {t("skillPage.softSkillsSection")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {softSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-purple-400/10 to-indigo-400/10 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm sm:text-base font-semibold text-purple-300">{skill}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12">
          {t("skillPage.certificationsSection")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certifications.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-neutral-900/80 backdrop-blur-md border border-neutral-800/50 hover:border-cyan-400/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex-1">
                    {cert.name}
                  </h3>
                  <span className="text-2xl ml-2">📄</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 mb-4 flex-1">
                  {t("hacker_rank_certification")}
                </p>

                <div className="flex items-center justify-between">
                  <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border ${getLevelColor(cert.level)}`}>
                    {cert.level}
                  </span>
                  <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">
                    ↗
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          className="text-center text-sm sm:text-base text-neutral-400 mt-8 sm:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          {t("skillPage.certificationsHint")}
        </motion.p>
      </motion.div>
    </section>
  )
}
