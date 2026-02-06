import { FaEnvelope } from "react-icons/fa"

export interface ContactMethod {
  icon: typeof FaEnvelope
  title: string
  value: string
  link: string
  color: string
  bgColor: string
}