import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from "react-router"

interface BreadCrumb {
  label: string
  to: string
}

interface Props {
  currentPage: string
  breadcrumbs?: BreadCrumb[]
}

const CustomBreadcrumb = ({ currentPage, breadcrumbs = [] }: Props) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {breadcrumbs.map((crumb) => (
          <div className="flex items-center">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={crumb.to}>{crumb.label}</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default CustomBreadcrumb
