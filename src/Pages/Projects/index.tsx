import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
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

  return (
    <section className="px-4 md:px-20 py-16 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400 text-center mb-28"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("projects")}
      </motion.h1>

      <motion.div
        className="mb-48"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-6 md:p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl shadow-black/40 border border-neutral-800/50">
          <div className="space-y-10 text-left">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              {trainingProject.title}
            </h2>

            <div className="flex gap-12 items-start">
              <div className="w-[380px] flex-shrink-0">
                <div className="relative w-full max-h-[520px] overflow-hidden rounded-xl border border-white/10 shadow-xl bg-neutral-900">
                  <img
                    src={projectImages.training}
                    alt={trainingProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-5 pt-2 min-w-0">
                <p className="text-lg font-semibold text-cyan-400">{trainingProject.stack}</p>
                <p className="text-xl text-neutral-100 leading-relaxed">{trainingProject.description}</p>

                <ul className="list-disc list-inside text-neutral-200 space-y-2 text-lg">
                  {trainingProject.features.map((f: string, i: number) => (
                    <li key={i} className="break-words">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mb-48"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-6 md:p-8 rounded-2xl bg-neutral-900/80 backdrop-blur-md shadow-xl shadow-black/40 border border-neutral-800/50">
          <div className="space-y-8 text-left">
            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              {chessProject.title}
            </h2>

            <div className="flex gap-12 items-start">
              <div className="w-[700px] flex-shrink-0">
                <div className="relative w-full rounded-xl overflow-hidden border border-white/10 shadow-xl bg-neutral-900">
                  <img
                    src={projectImages.chess}
                    alt={chessProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-5 pt-2 min-w-0">
                <p className="text-lg font-semibold text-cyan-400">{chessProject.stack}</p>
                <p className="text-xl text-neutral-100 leading-relaxed">{chessProject.description}</p>

                <ul className="list-disc list-inside text-neutral-200 space-y-2 text-lg">
                  {chessProject.features.map((f: string, i: number) => (
                    <li key={i} className="break-words">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid p-14 grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
        {swiftProjects.map((project, idx) => (
          <motion.div
            key={project.key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <Card>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-[240px] flex-shrink-0">
                  <div className="relative aspect-[9/19.5] rounded-[2.2rem] overflow-hidden bg-neutral-900 shadow-xl border border-white/10">
                    <img
                      src={projectImages[project.key as keyof typeof projectImages]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-5">
                  <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
                    {project.title}
                  </h2>

                  <p className="text-base font-semibold text-cyan-400">{project.stack}</p>
                  <p className="text-lg text-neutral-200 leading-relaxed">{project.description}</p>

                  <ul className="list-disc list-inside text-neutral-300 space-y-2 text-base">
                    {project.features.map((f: string, i: number) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
