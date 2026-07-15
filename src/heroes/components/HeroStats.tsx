import { Badge } from "@/components/ui/badge"
import { Heart, Trophy, Users, Zap } from "lucide-react"
import HeroStatCard from "./HeroStatCard"

import useHeroSummary from "../hooks/useHeroSummary"

const HeroStats = () => {
  const { data: summary } = useHeroSummary()

  return (
    <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
      <HeroStatCard
        title="Total de personajes"
        icon={
          <Users className="h-12 w-12 rounded-xl bg-primary/20 p-2 text-muted-foreground" />
        }
      >
        <div className="text-2xl font-bold"> {summary?.totalHeroes}</div>
        <div className="flex gap-1">
          <Badge variant="secondary" className="text-xs">
            {summary?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summary?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favoritos"
        icon={
          <Heart className="h-12 w-12 rounded-xl bg-destructive/20 p-2 text-destructive" />
        }
      >
        <div className="text-2xl font-bold">3</div>
        <Badge
          variant="outline"
          className="bg-destructive/10 text-xs text-destructive"
        >
          18.8% of total
        </Badge>
      </HeroStatCard>
      <HeroStatCard
        title="Strongest"
        icon={
          <Zap className="h-12 w-12 rounded-xl bg-tertiary/20 p-2 text-tertiary/90" />
        }
      >
        <div className="text-2xl font-bold">{summary?.strongestHero.alias}</div>
        <Badge className="bg-tertiary/5 text-xs text-tertiary">
          Strength: {summary?.strongestHero.strength}
        </Badge>
      </HeroStatCard>

      <HeroStatCard
        title="Smartest"
        icon={
          <Trophy className="h-12 w-12 rounded-xl bg-primary/20 p-2 text-muted-foreground" />
        }
      >
        <div className="text-2xl font-bold">{summary?.smartestHero.alias}</div>
        <Badge className="bg-primary/10 text-xs text-primary">
          Intelligence: {summary?.smartestHero.intelligence}
        </Badge>
      </HeroStatCard>
    </div>
  )
}

export default HeroStats
