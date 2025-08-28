import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import DashboardSidebar from '@/features/user-dashboard/components/dashboard-sidebar'
import DashboardBreadcrumbs from '@/features/user-dashboard/components/dashboard-breadcrumbs'

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardSidebar />
      <SidebarInset>
        <DashboardBreadcrumbs />
        <div className='my-4'>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
