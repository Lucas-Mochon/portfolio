import { Route, Routes, useLocation } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import HomePage from "../Pages/Home"
import ProjectPage from "../Pages/projects/Index"

export default function AnimatedRoutes() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Route>
    </Routes>
  )
}