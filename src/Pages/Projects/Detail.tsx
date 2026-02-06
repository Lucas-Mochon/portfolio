import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import chessHome from "../../assets/pictures/projects/chess/home.png"
import chessGame from "../../assets/pictures/projects/chess/game.png"
import chessLogin from "../../assets/pictures/projects/chess/login_page.png"
import chessRegister from "../../assets/pictures/projects/chess/register_page.png"
import chessConnexion from "../../assets/pictures/projects/chess/connexion_choice_page.png"
import chessStarted from "../../assets/pictures/projects/chess/started_page.png"
import trainingHome from "../../assets/pictures/projects/trainingApp/home_page.png"
import trainingExerciseDetail from "../../assets/pictures/projects/trainingApp/exercise_detail_page.png"
import trainingGenerateWorkout from "../../assets/pictures/projects/trainingApp/genrate_workout_page.png"
import trainingListExercise from "../../assets/pictures/projects/trainingApp/list_exercise_page.png"
import trainingLogin from "../../assets/pictures/projects/trainingApp/login_page.png"
import trainingProfile from "../../assets/pictures/projects/trainingApp/profil_page.png"
import trainingRealisedWorkout from "../../assets/pictures/projects/trainingApp/realised_workout.png"
import trainingWorkoutDetail from "../../assets/pictures/projects/trainingApp/workout_detail.png"
import trainingWorkout from "../../assets/pictures/projects/trainingApp/workout_page.png"
import pokemonHome from "../../assets/pictures/projects/pokemonApp/home_page.png"
import pokemonDetail from "../../assets/pictures/projects/pokemonApp/detail_page.png"
import pokemonSearch from "../../assets/pictures/projects/pokemonApp/search_page.png"
import movieHome from "../../assets/pictures/projects/movieStreamingApp/home_page.png"
import movieFavorite from "../../assets/pictures/projects/movieStreamingApp/favorite_page.png"
import movieLogin from "../../assets/pictures/projects/movieStreamingApp/login_page.png"
import movieDetail from "../../assets/pictures/projects/movieStreamingApp/movie_detail_page.png"
import movieProfile from "../../assets/pictures/projects/movieStreamingApp/profile_page.png"
import movieRegister from "../../assets/pictures/projects/movieStreamingApp/register_page.png"
import type { Project } from "../../types/interfaces/Project"
import type { ProjectData } from "../../types/interfaces/ProjectData"

const projectsData: Record<string, ProjectData> = {
  chess: {
    key: "chess",
    type: "web",
    images: [
      { src: chessHome, alt: "Chess Home" },
      { src: chessGame, alt: "Chess Game" },
      { src: chessConnexion, alt: "Connection Choice" },
      { src: chessLogin, alt: "Login Page" },
      { src: chessRegister, alt: "Register Page" },
      { src: chessStarted, alt: "Started Page" },
    ],
    isWeb: true,
  },
  training: {
    key: "training",
    type: "training",
    images: [
      { src: trainingHome, alt: "Training Home" },
      { src: trainingWorkout, alt: "Workout Page" },
      { src: trainingListExercise, alt: "List Exercise" },
      { src: trainingExerciseDetail, alt: "Exercise Detail" },
      { src: trainingGenerateWorkout, alt: "Generate Workout" },
      { src: trainingWorkoutDetail, alt: "Workout Detail" },
      { src: trainingRealisedWorkout, alt: "Realised Workout" },
      { src: trainingLogin, alt: "Login Page" },
      { src: trainingProfile, alt: "Profile Page" },
    ],
    isWeb: false,
    isFeatured: true,
  },
  pokemon: {
    key: "pokemon",
    type: "swift",
    images: [
      { src: pokemonHome, alt: "Pokemon Home" },
      { src: pokemonSearch, alt: "Pokemon Search" },
      { src: pokemonDetail, alt: "Pokemon Detail" },
    ],
    isWeb: false,
  },
  movie: {
    key: "movie",
    type: "swift",
    images: [
      { src: movieHome, alt: "Movie Home" },
      { src: movieFavorite, alt: "Favorite Movies" },
      { src: movieDetail, alt: "Movie Detail" },
      { src: movieLogin, alt: "Login Page" },
      { src: movieRegister, alt: "Register Page" },
      { src: movieProfile, alt: "Profile Page" },
    ],
    isWeb: false,
  },
}

export default function ProjectDetail() {
    const { projectId } = useParams<{ projectId: string }>()
    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [projectId])

    const project = projectId ? projectsData[projectId] : null
    const projectInfo = project
        ? (t(`projectsList.${project.key}`, { returnObjects: true }) as Project)
        : null

    if (!project || !projectInfo) {
        return (
        <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 flex items-center justify-center">
            <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
            <h1 className="text-3xl font-bold text-white mb-4">
                {t("projects")} {t("contact")}
            </h1>
            <button
                onClick={() => navigate("/projects")}
                className="px-6 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors"
            >
                {t("home")}
            </button>
            </motion.div>
        </section>
        )
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 px-3 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16">
            <motion.div
                className="mb-12 sm:mb-16 flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="space-y-3 sm:space-y-4 flex-1">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
                        {projectInfo.title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg font-semibold text-cyan-400">{projectInfo.stack}</p>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-3xl leading-relaxed">
                        {projectInfo.description}
                    </p>
                </div>
            </motion.div>

            <motion.div
                className="mb-12 sm:mb-20 p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/50 backdrop-blur-md border border-neutral-800/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">{t("skill")}</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {projectInfo.features.map((feature: string, idx: number) => (
                        <motion.li
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 text-neutral-200"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        >
                            <span className="text-cyan-400 text-lg sm:text-xl mt-0.5 flex-shrink-0">✓</span>
                            <span className="text-sm sm:text-base md:text-lg">{feature}</span>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12">Galerie</h2>

                {project.isFeatured ? (
                <div className="mb-12">
                    <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl shadow-black/40 border border-neutral-800/50">
                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-start">
                            <div className="w-full lg:flex-1">
                                <div className="flex flex-wrap justify-around gap-2 sm:gap-3">
                                    {project.images.map((image, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="group relative rounded-lg sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
                                        style={{ 
                                        width: "clamp(70px, calc(50% - 6px), calc(33.333% - 6px))",
                                        minWidth: "70px"
                                        }}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                                        whileHover={{ y: -5 }}
                                    >
                                        <div className="relative w-full aspect-[303/358] overflow-hidden">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-1.5 sm:p-2">
                                                <p className="text-white font-semibold text-xs line-clamp-2">{image.alt}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : project.isWeb ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12">
                    {project.images.map((image, idx) => (
                    <motion.div
                        key={idx}
                        className="group relative rounded-lg sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] overflow-hidden">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                                <p className="text-white font-semibold text-xs sm:text-sm md:text-base">{image.alt}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                ) : (
                <div className="flex flex-wrap justify-around gap-2 sm:gap-3 mb-12">
                    {project.images.map((image, idx) => (
                    <motion.div
                        key={idx}
                        className="group relative rounded-lg sm:rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/50 shadow-lg hover:shadow-xl hover:shadow-cyan-400/20 transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        whileHover={{ y: -3 }}
                    >
                        <div className="relative h-[420px] sm:h-[490px] md:h-[560px] aspect-[9/19.5] rounded-[2.2rem] overflow-hidden bg-neutral-900 shadow-xl border border-white/10 group-hover:shadow-xl group-hover:shadow-cyan-400/20 transition-all duration-300">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover group-hover:scale-100 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-1 sm:p-1.5">
                                <p className="text-white font-semibold text-xs line-clamp-1">{image.alt}</p>
                            </div>
                        </div>
                    </motion.div>
                    ))}
                </div>
                )}
            </motion.div>
            <motion.button
                onClick={() => navigate("/projects")}
                className="px-3 sm:px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors text-xs sm:text-sm font-semibold flex-shrink-0 whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                >
                ← Retour
            </motion.button>
        </section>
    )
}
