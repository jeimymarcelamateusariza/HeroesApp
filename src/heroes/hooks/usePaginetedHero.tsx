import { useQuery } from "@tanstack/react-query"
import { getHeroesByPageAction } from "../actions/get-heroes-by-page.action"

const usePaginetedHero = (page: number, limit: number) => {
  return useQuery({
    queryKey: ["heroes", { page, limit }], //Cuando la función que está dentro de tanStack query, recibe argumentos, esos argumentos deben ser parte del querykey
    queryFn: () => getHeroesByPageAction(+page, +limit),
    staleTime: 1000 * 60 * 5, // 5 minutos
  })
}

export default usePaginetedHero
