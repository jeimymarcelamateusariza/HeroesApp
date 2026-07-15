import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "react-router"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useMemo } from "react"

export default function SuperheroApp() {
  const [searchParams, setSearchParams] = useSearchParams()
  // console.log("searchParams", searchParams)

  const activeTab = searchParams.get("tab") ?? "all"
  const page = searchParams.get("page") ?? "1"
  const limit = searchParams.get("limit") ?? "6"

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"]
    return validTabs.includes(activeTab) ? activeTab : "all"
  }, [activeTab])

  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes", { page, limit }], //Cuando la función que está dentro de tanStack query, recibe argumentos, esos argumentos deben ser parte del querykey
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })

  return (
    <>
      <>
        {/* Header */}
        <CustomJumbotron
          title="Bienvenido a HeroVerse"
          description="Descubre, explora y administra tus superhéroes y villanos favoritos con el poder de HeroVerse."
        />

        <CustomBreadcrumb currentPage="Super Héroes" />

        {/* Stats Dashboard */}
        <HeroStats />

        {/* Tabs */}
        <Tabs value={selectedTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger
              value="all"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "all")
                  return prev
                })
              }
            >
              Todos los personajes (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "favorites")
                  return prev
                })
              }
            >
              Favoritos (3)
            </TabsTrigger>
            <TabsTrigger
              value="heroes"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "heroes")
                  return prev
                })
              }
            >
              Héroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() =>
                setSearchParams((prev) => {
                  prev.set("tab", "villains")
                  return prev
                })
              }
            >
              Villanos (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h2>Todos los personajes</h2>
            {/** Mostrar todos los personajes */}
            <HeroGrid heroes={heroesResponse?.heroes ?? []} />
          </TabsContent>
          <TabsContent value="favorites">
            <h2>Favoritos</h2>
            {/** Mostrar todos los favoritos */}
          </TabsContent>
          <TabsContent value="heroes">
            <h2>Héroes</h2>
            {/** Mostrar todos los héroes */}
          </TabsContent>
          <TabsContent value="villains">
            <h2>Villanos</h2>
            {/** Mostrar todos los villanos */}
          </TabsContent>
        </Tabs>

        {/* Pagination */}
        <CustomPagination totalPages={heroesResponse?.pages ?? 0} />
      </>
    </>
  )
}
