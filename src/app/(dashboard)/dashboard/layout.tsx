import React from 'react'
import { createClient } from '@/app/utils/supabase/server';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main>
      {children}
    </main>
  )
}

export default DashboardLayout
