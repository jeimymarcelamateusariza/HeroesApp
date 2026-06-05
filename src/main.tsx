import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import HeroesApp from "./HeroesApp.tsx"

import { ThemeProvider } from "@/components/theme-provider.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <HeroesApp />
    </ThemeProvider>
  </StrictMode>
)
