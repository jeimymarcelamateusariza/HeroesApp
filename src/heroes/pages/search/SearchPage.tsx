import CustomJumbotron from "@/components/custom/CustomJumbotron"
import HeroStats from "@/heroes/components/HeroStats"
import SearchControls from "./ui/SearchControls"
import CustomBreadcrumb from "@/components/custom/CustomBreadcrumb"

const SearchPage = () => {
  return (
    <>
      <CustomJumbotron
        title="Busqueda de Héroes"
        description="Descubre, explora y administra tus superhéroes y villanos favoritos con el poder de HeroVerse."
      />

      <CustomBreadcrumb
        currentPage="Buscar Héroes"
        breadcrumbs={[
          { label: "Inicio", to: "/" },
          { label: "Buscar Héroes", to: "/search" },
        ]}
      />

      {/* HeroStats */}
      <HeroStats />

      {/* Filter and Search */}
      <SearchControls />
    </>
  )
}

export default SearchPage
