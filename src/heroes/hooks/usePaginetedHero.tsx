import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action"

const usePaginetedHero = (page: number, limit: number, category = "all") => {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }], //Cuando la función que está dentro de tanStack query, recibe argumentos, esos argumentos deben ser parte del querykey
    queryFn: () => getHeroesByPageAction(+page, +limit, category),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}

export default usePaginetedHero
