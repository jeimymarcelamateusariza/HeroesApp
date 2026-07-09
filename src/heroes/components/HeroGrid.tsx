import { Badge } from "@/components/ui/badge"
import HeroGridCard from "./HeroGridCard"

const HeroGrid = () => {
  return (
    <>
      {/* Character Grid */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* <HeroGridCard /> */}

        {/* Hero Card 1 - Superman */}
        <HeroGridCard status="Active" universe="DC" clasification="Hero">
          <Badge className="absolute top-3 right-3 bg-blue-600 text-xs text-white"></Badge>
        </HeroGridCard>
      </div>
    </>
  )
}

export default HeroGrid
