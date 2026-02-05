import { Outlet } from "react-router-dom"
import Background from "../Components/Background"
import BottomNavbar from "../Components/BottomNavbar"

export default function MainLayout() {
  return (
    <Background>
      <main className="relative min-h-screen">
        <Outlet />
      </main>

      <BottomNavbar />
    </Background>
  )
}
