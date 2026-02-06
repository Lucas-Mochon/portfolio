import { Route, Routes, useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../Pages/Home"
import ProjectPage from "../Pages/projects/Index"
import CoursePage from "../Pages/courses/Index"
import ProjectDetail from "../Pages/projects/Detail"
import SkillPage from "../Pages/skills/Index"
import ContactPage from "../Pages/contact/Index"

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/course" element={<CoursePage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}