import { motion } from "framer-motion"
import { useTranslateWithHtml } from "../helpers/translateWithHtml"
import { useTranslation } from "react-i18next"

interface CourseCardProps {
  title: string
  period?: string
  description: string
  image?: string
  location?: string;
}

export default function CourseCard({ title, period, description, image, location }: CourseCardProps) {
    const { translateWithHtml } = useTranslateWithHtml()
    const { t } = useTranslation()

    return (
        <motion.div
        className="flex flex-col md:flex-row bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.3)] gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        >
        {image && (
            <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-xl overflow-hidden border border-white/20 shadow-lg">
            <img src={image} alt={t(title)} className="w-full h-full object-cover" />
            </div>
        )}
        <div className="flex-1 space-y-2">
            <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400"
            dangerouslySetInnerHTML={translateWithHtml(title)}>
            
            </h3>
            {location && (
                <span className="text-sm text-neutral-400"
                dangerouslySetInnerHTML={translateWithHtml(location)}></span>
            )}
            {period && <span className="text-sm text-neutral-400"> {t(period)}</span>
            }
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed" 
            dangerouslySetInnerHTML={translateWithHtml(description)}></p>
        </div>
        </motion.div>
    )
}