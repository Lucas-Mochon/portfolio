import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useState, type ChangeEvent, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import Socials from "../../components/Social"
import type { FormData } from "../../types/interfaces/FormData"
import type { ContactMethod } from "../../types/interfaces/ContactMethod"

emailjs.init("fg9qI0WH59cr3lJe3")

export default function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState<boolean>(false)
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  const contactMethods: ContactMethod[] = [
    {
      icon: FaEnvelope,
      title: t("contactPage.email"),
      value: t("contactPage.emailValue"),
      link: `mailto:${t("contactPage.emailValue")}`,
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-cyan-400/10 border-cyan-400/30 hover:border-cyan-400/60",
    },
    {
      icon: FaGithub,
      title: t("contactPage.github"),
      value: t("contactPage.githubValue"),
      link: "https://github.com/Lucas-Mochon",
      color: "from-purple-400 to-indigo-400",
      bgColor: "bg-purple-400/10 border-purple-400/30 hover:border-purple-400/60",
    },
    {
      icon: FaLinkedin,
      title: t("contactPage.linkedin"),
      value: t("contactPage.linkedinValue"),
      link: "https://www.linkedin.com/in/lucas-mochon-4116082b5/",
      color: "from-indigo-400 to-cyan-400",
      bgColor: "bg-indigo-400/10 border-indigo-400/30 hover:border-indigo-400/60",
    },
  ]

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        setError(t("contactPage.errorRequired"))
        setLoading(false)
        return
      }

      const response = await emailjs.send(
        "service_gspj24c",
        "template_quo89em",
        {
          to_email: t("contactPage.emailValue"),
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )

      if (response.status === 200) {
        setSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSuccess(false), 5000)
      }
    } catch (err) {
      console.error("Erreur:", err)
      setError(t("contactPage.errorSending"))
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-3 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20">
      <motion.div
        className="mb-16 sm:mb-24 md:mb-32 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 mb-4 sm:mb-6">
          {t("contactPage.title")}
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          {t("contactPage.subtitle")}
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-24 md:mb-32 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {contactMethods.map((method, idx) => {
          const Icon = method.icon
          return (
            <motion.a
              key={idx}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 sm:p-8 rounded-xl sm:rounded-2xl ${method.bgColor} border backdrop-blur-md transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/20`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <motion.div
                  className={`mb-4 p-4 rounded-full bg-gradient-to-br ${method.color} text-white`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon size={32} />
                </motion.div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {method.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 break-all group-hover:text-white transition-colors">
                  {method.value}
                </p>

                <motion.div
                  className="mt-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 5 }}
                >
                  ↗
                </motion.div>
              </div>
            </motion.a>
          )
        })}
      </motion.div>

      <motion.div
        className="mb-16 sm:mb-24 md:mb-32 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Socials />
      </motion.div>

      <motion.div
        className="max-w-2xl mx-auto p-6 sm:p-8 md:p-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-neutral-900/80 to-neutral-800/50 backdrop-blur-md border border-neutral-800/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
          {t("contactPage.sendMessage")}
        </h2>

        {success && (
          <motion.div
            className="mb-6 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ✅ {t("contactPage.successMessage")}
          </motion.div>
        )}

        {error && (
          <motion.div
            className="mb-6 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-300"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ❌ {error}
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="block text-sm sm:text-base font-semibold text-neutral-300 mb-2">
              {t("contactPage.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contactPage.namePlaceholder")}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="block text-sm sm:text-base font-semibold text-neutral-300 mb-2">
              {t("contactPage.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contactPage.emailPlaceholder")}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <label className="block text-sm sm:text-base font-semibold text-neutral-300 mb-2">
              {t("contactPage.subjectLabel")}
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder={t("contactPage.subjectPlaceholder")}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <label className="block text-sm sm:text-base font-semibold text-neutral-300 mb-2">
              {t("contactPage.messageLabel")}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contactPage.messagePlaceholder")}
              rows={6}
              className="w-full px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-neutral-800/50 border border-neutral-700/50 text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
            />
          </motion.div>

          <motion.button
            type="submit"
            disabled={loading}
            className="w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 text-neutral-950 font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? t("contactPage.sendingButton") : t("contactPage.submitButton")}
          </motion.button>
        </form>
      </motion.div>
    </section>
  )
}
