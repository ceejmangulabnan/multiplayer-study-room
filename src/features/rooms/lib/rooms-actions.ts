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

interface CreateRoomInput {
  name: string
  description?: string
  isPrivate?: boolean
}

export const createRoom = async ({ name, description, isPrivate = false }: CreateRoomInput) => {
  "use server"
  const supabase = await createClient()

  const { data: { user }, error: userError } = await supabase.auth.getUser()

  if (userError || !user) {
    throw new Error("Unauthorized: You must be signed in to create a room.")
  }

  const { data, error } = await supabase
    .from("rooms")
    .insert({
      name,
      description,
      is_private: isPrivate,
      owner_id: user.id,
    })
    .select()
    .single()

  if (error) {
    throw new Error(`Failed to create room: ${error.message}`)
  }

  return data
}
