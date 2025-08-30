import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import DashboardSidebar from '@/features/user-dashboard/components/dashboard-sidebar'
import DashboardBreadcrumbs from '@/features/user-dashboard/components/dashboard-breadcrumbs'
import { Separator } from '@/components/ui/separator'

const DashboardLayout = async ({
  children
}: {
  children: React.ReactNode
}) => {

  return (
    <SidebarProvider defaultOpen={true}>
      <DashboardSidebar />
      <SidebarInset>
        <nav className='flex items-center border-b border-solid  px-4 py-4'>
          <SidebarTrigger />
          <Separator orientation='vertical' className='mx-4' />
          <DashboardBreadcrumbs />
        </nav>
        <div>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
