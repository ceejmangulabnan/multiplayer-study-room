import { LayoutDashboard, Home, NotebookTabs, Settings } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from 'next/link'
import ThemeToggle from '@/components/common/theme-toggle'

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Study Rooms",
    url: "/rooms",
    icon: NotebookTabs,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
]

const DashboardSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar collapsible='offcanvas' variant='inset' {...props}>
      <SidebarHeader>
        <Link href={'/'} className='font-bold'>MSR</Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuItem key={"Theme"}>
          <SidebarMenuButton asChild>
            <ThemeToggle />
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar >
  )
}

export default DashboardSidebar
