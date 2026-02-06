import type { ProjectImage } from "./ProjectImage"

export interface ProjectData {
  key: string
  type: "web" | "swift" | "training"
  images: ProjectImage[]
  isWeb: boolean
  isFeatured?: boolean
}