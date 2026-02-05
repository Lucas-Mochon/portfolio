import { createContext } from "react"
import type { Language } from "../i18n/languages"

export interface LanguageContextProps {
  currentLanguage: Language
  setLanguage: (code: string) => void
  availableLanguages: Language[]
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)