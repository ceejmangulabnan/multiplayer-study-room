import Link from 'next/link'
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import { ArrowRight, Lock } from 'lucide-react'
import { Room } from '@/types/rooms-types'

const RoomCard = ({ room }: { room: Room }) => {
  return (
    <Card key={room.name} className="flex flex-col">
      <CardContent className="p-4 flex flex-col grow justify-between">
        <div className="grow">
          <div className="flex justify-between items-start">
            <CardTitle className="text-lg hover:underline underline-offset-4">
              <Link href="/dashboard">{room.name}</Link>
            </CardTitle>
            {
              room.is_private && <Lock size={16} className='m-1 text-muted-foreground flex-shrink-0' />
            }
          </div>
          <p>{room.description}</p>
        </div>
        <div className="flex justify-end text-xs text-muted-foreground mt-8">
          <Button asChild>
            <Link href={`/rooms/room/${room.short_id}`}>
              View Room <ArrowRight />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default RoomCard
