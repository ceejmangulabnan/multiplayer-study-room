"use client"

import { Button } from '@/components/ui/button'
import { createClient } from '@/utils/supabase/client'
import { studyRooms } from '@/lib/study-rooms-mock-data'
import RoomCard from '@/features/rooms/components/room-card'

const StudyRoomSection = () => {
  const supabase = createClient()

  const createRoom = async () => {
    const response = await supabase.from('rooms').insert({ name: "test" })
    console.log("insert response", response)
  }

  return (
    <section className="my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your study rooms</h2>
        <Button onClick={createRoom}>Create room</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {studyRooms.map((room) => (
          <RoomCard room={room} />
        ))}
      </div>
    </section>
  )
}

export default StudyRoomSection
