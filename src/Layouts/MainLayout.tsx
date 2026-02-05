import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Background from "../components/Background"
import PageTransition from "../components/PageTransition"
import BottomNavbar from "../components/BottomNavbar"
import BrandName from "../components/BrandName"

export default function MainLayout() {
  const location = useLocation()

  return (
    <Background>
      <BrandName />
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>

      <BottomNavbar />
    </Background>
  )
}