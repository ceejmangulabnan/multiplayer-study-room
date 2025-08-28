import { createClient } from '@/utils/supabase/server'

const Dashboard = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <div className="min-h-screen p-6">
      <div>
        <div className="max-w-md">
          <h1 className="text-3xl font-bold">Hi, {user?.user_metadata.name}</h1>
          <p className="py-2 text-muted-foreground">
            Welcome to Multiplayer Study Room
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
