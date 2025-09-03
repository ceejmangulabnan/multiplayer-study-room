import { Card, CardContent, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

const RoomCard = ({ room }: { room: any }) => {
  return (
    <Card key={room.name} className="flex flex-col">
      <CardContent className="p-4 flex flex-col grow justify-between">
        <div className="grow">
          <CardTitle className="text-lg hover:underline underline-offset-4">
            <Link href="/dashboard">{room.name}</Link>
          </CardTitle>
          <p>{room.description}</p>
        </div>
        <div className="flex justify-between text-xs text-muted-foreground mt-8">
          <p>{room.members} members</p>
          <p>{room.online} online</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default RoomCard
