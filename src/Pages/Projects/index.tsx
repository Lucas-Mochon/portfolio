import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import chessImage from "../../assets/pictures/projects/chess/home.png"
import trainingImage from "../../assets/pictures/projects/trainingApp/home_page.png"
import pokemonImage from "../../assets/pictures/projects/pokemonApp/home_page.png"
import movieImage from "../../assets/pictures/projects/movieStreamingApp/home_page.png"
import Card from "../../components/Card"
import type { Project } from "../../types/interfaces/Project"

const projectImages = {
  pokemon: pokemonImage,
  movie: movieImage,
  training: trainingImage,
  chess: chessImage,
}

export default function ProjectPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const projects: Project[] = [
    { 
      key: "pokemon", 
      type: "swift", 
      ...(t("projectsList.pokemon", { returnObjects: true }) as Omit<Project, "key" | "type">)
    },
    { 
      key: "movie", 
      type: "swift", 
      ...(t("projectsList.movie", { returnObjects: true }) as Omit<Project, "key" | "type">)
    },
    { 
      key: "training", 
      type: "training", 
      ...(t("projectsList.training", { returnObjects: true }) as Omit<Project, "key" | "type">)
    },
    { 
      key: "chess", 
      type: "web", 
      ...(t("projectsList.chess", { returnObjects: true }) as Omit<Project, "key" | "type">)
    },
  ]

  const swiftProjects = projects.filter(p => p.type === "swift")
  const trainingProject = projects.find(p => p.type === "training")!
  const chessProject = projects.find(p => p.type === "web")!

  const handleProjectClick = (projectKey: string) => {
    navigate(`/projects/${projectKey}`)
  }

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-12 sm:py-16 md:py-20 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 text-center mb-16 sm:mb-24 md:mb-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects")}
      </motion.h1>

      <motion.div
        className="mb-24 sm:mb-32 md:mb-48 cursor-pointer group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => handleProjectClick("training")}
      >
        <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl shadow-black/40 border border-neutral-800/50 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20 transition-all duration-300">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-indigo-300 transition-all duration-300">
              {trainingProject.title}
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
              <div className="w-full lg:w-[380px] lg:flex-shrink-0">
                <div className="relative w-full aspect-[303/358] overflow-hidden rounded-lg sm:rounded-xl border border-white/10 shadow-xl bg-neutral-900 group-hover:shadow-xl group-hover:shadow-cyan-400/20 transition-all duration-300">
                  <img
                    src={projectImages.training}
                    alt={trainingProject.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4 sm:space-y-5 md:pt-2 min-w-0">
                <p className="text-base sm:text-lg font-semibold text-cyan-400">{trainingProject.stack}</p>
                <p className="text-lg sm:text-xl text-neutral-100 leading-relaxed">{trainingProject.description}</p>

                <ul className="list-disc list-inside text-neutral-200 space-y-1.5 sm:space-y-2 text-base sm:text-lg">
                  {trainingProject.features.map((f: string, i: number) => (
                    <li key={i} className="break-words">{f}</li>
                  ))}
                </ul>

                <motion.button
                  className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-400 to-indigo-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le détail
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-24 sm:mb-32 md:mb-48 cursor-pointer group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onClick={() => handleProjectClick("chess")}
      >
        <div className="relative p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl shadow-black/40 border border-neutral-800/50 group-hover:border-cyan-400/50 group-hover:shadow-cyan-400/20 transition-all duration-300">
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-indigo-300 transition-all duration-300">
              {chessProject.title}
            </h2>

            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 items-start">
              <div className="w-full lg:w-[700px] lg:flex-shrink-0">
                <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] lg:aspect-auto lg:max-h-[400px] rounded-lg sm:rounded-xl overflow-hidden border border-white/10 shadow-xl bg-neutral-900 group-hover:shadow-xl group-hover:shadow-cyan-400/20 transition-all duration-300">
                  <img
                    src={projectImages.chess}
                    alt={chessProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-4 sm:space-y-5 md:pt-2 min-w-0">
                <p className="text-base sm:text-lg font-semibold text-cyan-400">{chessProject.stack}</p>
                <p className="text-lg sm:text-xl text-neutral-100 leading-relaxed">{chessProject.description}</p>

                <ul className="list-disc list-inside text-neutral-200 space-y-1.5 sm:space-y-2 text-base sm:text-lg">
                  {chessProject.features.map((f: string, i: number) => (
                    <li key={i} className="break-words">{f}</li>
                  ))}
                </ul>

                <motion.button
                  className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-400 to-indigo-400 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le détail
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid p-4 sm:p-8 md:p-14 grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 max-w-7xl mx-auto">
        {swiftProjects.map((project, idx) => (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            onClick={() => handleProjectClick(project.key)}
            className="cursor-pointer"
          >
            <Card>
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-10 items-start md:items-center group">
                <div className="w-full md:w-[240px] md:flex-shrink-0">
                  <div className="relative aspect-[9/19.5] overflow-hidden bg-neutral-900 shadow-xl rounded-lg">
                    <img
                      src={projectImages[project.key as keyof typeof projectImages]}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-3 sm:space-y-4 md:space-y-5 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400 group-hover:from-cyan-300 group-hover:to-indigo-300 transition-all duration-300">
                    {project.title}
                  </h2>

                  <p className="text-sm sm:text-base font-semibold text-cyan-400">{project.stack}</p>
                  <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">{project.description}</p>

                  <ul className="list-disc list-inside text-neutral-300 space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {project.features.map((f: string, i: number) => (
                      <li key={i} className="break-words">{f}</li>
                    ))}
                  </ul>

                  <motion.button
                    className="mt-3 sm:mt-4 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors text-sm sm:text-base"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Voir le détail
                  </motion.button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
