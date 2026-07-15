import { lazy } from "react"
import { createBrowserRouter, Navigate } from "react-router"
import AdminPage from "@/admin/pages/AdminPage"
import HeroPage from "@/heroes/pages/home/HomePage"
import HomePage from "@/heroes/pages/home/HomePage"
//import SearchPage from "@/heroes/pages/search/SearchPage"
import HeroesLayout from "@/heroes/layout/HeroesLayout"
import AdminLayout from "../admin/layout/AdminLayout"

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"))

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "heroes/:idSlug",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
  //Rutas externas
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
])
