import { createClient } from "@/utils/supabase/server"
import { redirect } from "next/navigation"
import Link from "next/link"
import StudyRoomSection from '@/features/user-dashboard/components/study-room-section'

const Dashboard = async ({
  searchParams,
}: {
  searchParams: Promise<{ skipped?: string }>
}) => {
  const params = await searchParams
  const skipped = params.skipped

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect("/login")
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("user_name, first_name, last_name, full_name")
    .eq("id", user.id)
    .single()

  if (error) {
    console.error("Error fetching profile:", error)
  }

  const profileComplete =
    profile && profile.user_name && profile.first_name && profile.last_name

  if (!profileComplete && !skipped) {
    return (
      <div className="min-h-screen p-6 flex flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome!</h1>
          <p className="py-2 text-muted-foreground">
            Please set up your profile to continue.
          </p>
          <Link
            href="/setup"
            className="mt-4 inline-block px-6 py-3 font-bold text-white bg-sunset-600 rounded-md hover:bg-sunset-700"
          >
            Set Up Profile
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6">
      {skipped && !profileComplete && (
        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50">
          Your profile is incomplete. Please{" "}
          <Link
            href="/setup"
            className="font-bold hover:underline underline-offset-2"
          >
            set it up
          </Link>{" "}
          to get the best experience.
        </div>
      )}
      <div>
        <div>
          <h1 className="text-3xl font-bold">
            Hi, {profile?.first_name || profile?.full_name}
          </h1>
          <p className="py-2 text-muted-foreground">
            Welcome to Multiplayer Study Room
          </p>
        </div>
      </div>

      {/* Preview of Study Rooms, quick create button */}
      <StudyRoomSection />
    </div>
  )
}

export default Dashboard
