import React from 'react'

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {

  return (
    <main>
      {children}
    </main>
  )
}

export default DashboardLayout
