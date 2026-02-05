import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import MainLayout from "./Layouts/mainLayout"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
