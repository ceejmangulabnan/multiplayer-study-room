import { studyRooms } from '@/lib/study-rooms-mock-data'
import { createClient } from '@/utils/supabase/server';
import StudyRoomSection from '@/features/user-dashboard/components/study-room-section';

const RoomsPage = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase.from('rooms').select().eq('owner_id', user?.id)

  console.log("user", user)
  console.log(data, error)


  return (
    <div className="min-h-screen p-6">
      <StudyRoomSection rooms={studyRooms} />
    </div>
  )
}

export default RoomsPage
