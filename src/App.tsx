import { BrowserRouter } from "react-router-dom"
import AnimatedRoutes from "./routes/AnimatedRoutes"
import { LanguageProvider } from "./providers/LanguageProvider"
import './i18n'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App