import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const RoomCardSkeleton = () => {
  return (
    <Card className="flex flex-col">
      <CardContent className="p-4 flex flex-col grow justify-between">
        <div className="grow">
          <Skeleton className="h-5 w-3/4" />
          <Skeleton className="h-4 w-full mt-2" />
        </div>
        <div className="flex justify-end mt-8">
          <Skeleton className="h-10 w-28" />
        </div>
      </CardContent>
    </Card>
  )
}

export default RoomCardSkeleton