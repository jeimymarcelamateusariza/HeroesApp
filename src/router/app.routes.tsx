import AdminPage from "@/admin/pages/AdminPage"
import HeroPage from "@/heroes/pages/home/HomePage"
import HomePage from "@/heroes/pages/home/HomePage"
import SearchPage from "@/heroes/pages/search/SearchPage"
import { createBrowserRouter } from "react-router"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/heroes",
    Component: HeroPage,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/admin",
    Component: AdminPage,
  },
])
