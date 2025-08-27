import { SidebarProvider } from '@/components/ui/sidebar'
import DashboardSidebar from '@/features/user-dashboard/components/dashboard-sidebar'
import DashboardBreadcrumbs from '@/features/user-dashboard/components/dashboard-breadcrumbs.tsx'

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <SidebarProvider defaultOpen={false}>
      <DashboardSidebar />
      <div>
        <DashboardBreadcrumbs />
        {children}
      </div>
    </SidebarProvider>
  )
}

export default DashboardLayout
