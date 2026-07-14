import HeroGridCard from "./HeroGridCard"
import type { Hero } from "../types/hero.interface"

interface Props {
  heroes: Hero[]
}

const HeroGrid = ({ heroes }: Props) => {
  return (
    <>
      {/* Character Grid */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* <HeroGridCard /> */}

        {heroes.map((hero) => (
          <HeroGridCard key={hero.id} hero={hero} />
        ))}
      </div>
    </>
  )
}

export default HeroGrid
