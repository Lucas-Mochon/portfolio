import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CourseCard from "../../components/CourseCard";
import arduinoPicture from "../../assets/pictures/arduino.jpg";
import graphicRefontePicture from "../../assets/pictures/graphic_refonte.jpg";
import officeWorkPicture from "../../assets/pictures/office_work.jpg";
import studyingPicture from "../../assets/pictures/studying.jpg";
import warehousePicture from "../../assets/pictures/warehouse.jpg";
import webDevelopmentPicture from "../../assets/pictures/web_development.jpg";

const courseImages: Record<string, string> = {
  course1: arduinoPicture,
  course2: studyingPicture,
  course3: officeWorkPicture,
  course4: graphicRefontePicture,
  course5: webDevelopmentPicture,
  course6: warehousePicture
};

export default function CoursePage() {
    const { t } = useTranslation()
    const coursesKeys = ["course1", "course2", "course3", "course4", "course5", "course6"];

    return (
        <section className="relative min-h-screen overflow-x-auto overflow-y-auto px-4 md:px-20 py-12 flex flex-col gap-12 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
        
        <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            {t("courses.pageTitle")}
        </motion.h1>

        <div className="flex flex-col md:flex-col gap-8">
            {coursesKeys.map((courseKey) => (
            <CourseCard
                key={courseKey}
                title={`courses.${courseKey}.subsection1.title`}
                period={`courses.${courseKey}.subsection1.period`}
                image={courseImages[courseKey]}
                description={`courses.${courseKey}.subsection1.description`}
                location={`courses.${courseKey}.subsection1.location`}
            />
            ))}
        </div>
        </section>
    );
}