"use client"

import { Button } from '@/components/ui/button'
import RoomCard from '@/features/rooms/components/room-card'
import RoomCardSkeleton from '@/features/rooms/components/room-card-skeleton'
import useRooms from '@/features/rooms/lib/use-rooms'
import { motion } from 'motion/react'

const skeletons = Array.from({ length: 3 }, (_, i) => <RoomCardSkeleton key={i} />)

const StudyRoomSection = () => {
  const { rooms, isLoading, isError } = useRooms()

  return (
    <motion.section
      className="my-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.05 }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Your study rooms</h2>
        <Button>Create room</Button>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4"
      >
        {isLoading && skeletons}
        {isError && <p className="text-red-500">Failed to load rooms.</p>}
        {!isLoading && !isError && rooms?.length === 0 && (
          <p className="text-muted-foreground">No rooms yet. Create one!</p>
        )}
        {!isLoading &&
          !isError &&
          rooms?.map((room, idx) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <RoomCard key={room.id} room={room} />
            </motion.div>))}
      </div>
    </motion.section>
  )
}

export default StudyRoomSection
