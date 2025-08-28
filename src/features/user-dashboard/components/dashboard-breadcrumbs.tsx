'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { SidebarTrigger } from '@/components/ui/sidebar'

const DashboardBreadcrumbs = () => {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  return (
    <Breadcrumb className='border-b border-solid border-black p-4'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <SidebarTrigger />
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        {
          segments.map((segment, i) => {
            const href = '/' + segments.slice(0, i + 1).join('/')
            const isLast = i === segments.length - 1
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ')

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  {isLast ? (
                    <span className="text-muted-foreground capitalize">{label}</span>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={href} className='capitalize'>
                        {label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )
          })
        }
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default DashboardBreadcrumbs
