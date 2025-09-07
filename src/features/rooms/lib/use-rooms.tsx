import { useQuery } from '@tanstack/react-query'
import { createClient } from '@/utils/supabase/client'
import { Room } from '@/types/rooms-types'

const useRooms = () => {
  const fetchRooms = async () => {
    const supabase = createClient()

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      return []
    }

    const { data, error } = await supabase
      .from('rooms')
      .select()
      .eq('owner_id', user.id)

    if (error) {
      console.error('Error fetching rooms:', error)
    }

    return data as Room[]
  }


  const { data: rooms, ...query } = useQuery({
    queryKey: ['rooms'],
    queryFn: fetchRooms
  })

  return { rooms, ...query }
}

export default useRooms
