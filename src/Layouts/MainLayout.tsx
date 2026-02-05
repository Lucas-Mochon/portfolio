import { Outlet, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Background from "../Components/Background"
import PageTransition from "../Components/PageTransition"
import BottomNavbar from "../Components/BottomNavbar"

export default function MainLayout() {
  const location = useLocation()

  return (
    <Background>
      <AnimatePresence mode="wait">
        <PageTransition key={location.pathname}>
          <Outlet />
        </PageTransition>
      </AnimatePresence>

      <BottomNavbar />
    </Background>
  )
}