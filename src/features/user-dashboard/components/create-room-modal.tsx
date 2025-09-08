"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { createRoom } from "@/features/rooms/lib/rooms-actions"
import { Room } from "@/types/rooms-types"

const roomFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().optional(),
  isPrivate: z.boolean(),
})

type RoomFormValues = z.infer<typeof roomFormSchema>

const CreateRoomModal = () => {
  const [open, setOpen] = useState(false)
  const queryClient = useQueryClient()

  const form = useForm<RoomFormValues>({
    resolver: zodResolver(roomFormSchema),
    defaultValues: {
      name: "",
      description: "",
      isPrivate: false,
    },
  })

  const { mutate, isPending } = useMutation({
    mutationFn: createRoom,
    onMutate: async (newRoomData: RoomFormValues) => {
      setOpen(false)
      await queryClient.cancelQueries({ queryKey: ["rooms"] })

      const previousRooms = queryClient.getQueryData<Room[]>(["rooms"])

      queryClient.setQueryData<Room[]>(["rooms"], (old) => {
        const optimisticRoom: Room = {
          id: `temp-${Date.now()}`,
          created_at: new Date().toISOString(),
          owner_id: "optimistic-user-id",
          name: newRoomData.name,
          description: newRoomData.description || '',
          is_private: newRoomData.isPrivate,
          short_id: ""
        }
        return old ? [...old, optimisticRoom] : [optimisticRoom]
      })

      return { previousRooms }
    },
    onError: (_err, _newRoom, context) => {
      if (context?.previousRooms) {
        queryClient.setQueryData(["rooms"], context.previousRooms)
      }
      // TODO: show error toast
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["rooms"] })
    },
    onSuccess: () => {
      form.reset()
      // TODO: show success toast
    },
  })

  const onSubmit = (values: RoomFormValues) => {
    mutate(values)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create Room</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new study room</DialogTitle>
          <DialogDescription>
            Fill in the details below to create your new room.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 mt-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Room Name</FormLabel>
                  <FormControl>
                    <Input placeholder="My awesome study room" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="A place to study and collaborate"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="isPrivate"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                  <div className="space-y-0.5">
                    <FormLabel>Private Room</FormLabel>
                    <FormDescription>
                      Only invited members can join.
                    </FormDescription>
                  </div>
                  <FormControl>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={isPending}>
                {isPending ? "Creating..." : "Create Room"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateRoomModal
