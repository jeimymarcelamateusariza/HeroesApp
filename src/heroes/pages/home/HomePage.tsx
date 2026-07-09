import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import HeroGrid from "@/heroes/components/HeroGrid"
import { useState } from "react"
import CustomPagination from "@/components/custom/CustomPagination"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"

export default function SuperheroApp() {
  const [activeTab, setActiveTab] = useState<
    "all" | "favorites" | "heroes" | "villains"
  >("all")

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
        <Tabs value={activeTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all" onClick={() => setActiveTab("all")}>
              Todos los personajes (16)
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="flex items-center gap-2"
              onClick={() => setActiveTab("favorites")}
            >
              Favoritos (3)
            </TabsTrigger>
            <TabsTrigger value="heroes" onClick={() => setActiveTab("heroes")}>
              Héroes (12)
            </TabsTrigger>
            <TabsTrigger
              value="villains"
              onClick={() => setActiveTab("villains")}
            >
              Villanos (2)
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <h2>Todos los personajes</h2>
            {/** Mostrar todos los personajes */}
            <HeroGrid />
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
        <CustomPagination totalPages={5} />
      </>
    </>
  )
}
