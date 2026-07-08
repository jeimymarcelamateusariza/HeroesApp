import { Outlet } from "react-router"

const AdminLayout = () => {
  return (
    <div className="bg-secondary">
      AdminLayout
      <Outlet />
    </div>
  )
}

export default AdminLayout
