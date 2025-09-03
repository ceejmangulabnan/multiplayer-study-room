import { studyRooms } from '@/lib/study-rooms-mock-data'
import RoomCard from '@/features/rooms/components/room-card';
import { createClient } from '@/utils/supabase/server';

const RoomsPage = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const { data, error } = await supabase.from('rooms').select().eq('owner_id', user?.id)

  console.log("user", user)
  console.log(data, error)

  return (
    <div className="min-h-screen p-6">
      <section className="my-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Your study rooms</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {studyRooms.map((room) => (
            <RoomCard key={room.name} room={room} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default RoomsPage
