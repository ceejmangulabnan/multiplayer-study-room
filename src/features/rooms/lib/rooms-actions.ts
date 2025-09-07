'use server'

import { createClient } from '@/utils/supabase/server'
import { Room } from '@/types/rooms-types'

export const fetchRooms = async () => {
  const supabase = await createClient()

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
