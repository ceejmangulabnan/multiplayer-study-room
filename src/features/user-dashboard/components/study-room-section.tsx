"use client"

import { Button } from '@/components/ui/button'
import RoomCard from '@/features/rooms/components/room-card'
import { Room } from '@/types/rooms-types'

const StudyRoomSection = ({ rooms }: { rooms: Room[] }) => {
  return (
    <section className="my-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your study rooms</h2>
        <Button>Create room</Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </section>
  )
}

export default StudyRoomSection
