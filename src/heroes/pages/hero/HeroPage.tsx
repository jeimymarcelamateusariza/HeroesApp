import { useParams } from "react-router"

const HeroPage = () => {
  const { idSlug = "" } = useParams()

  console.log("slugId", idSlug)

  return <div>HeroPage</div>
}

export default HeroPage
