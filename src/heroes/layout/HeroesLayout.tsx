import { Outlet } from "react-router"
const HeroesLayout = () => {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-7xl p-6">
        <Outlet />
      </div>
    </div>
  )
}

export default HeroesLayout
