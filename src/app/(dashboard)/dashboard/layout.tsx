import DashboardSidebar from '@/features/user-dashboard/components/dashboard-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  // const headerList = await headers()
  // const path = headerList.get('x-next-url')

  return (
    <SidebarProvider defaultOpen={false}>
      {/* Sidebar */}
      <DashboardSidebar />
      <div>
        {/* Breadcrumbs */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <SidebarTrigger />
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        {/* Child Pages */}
        {children}
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
