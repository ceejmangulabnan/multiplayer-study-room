import { z } from "zod"

export const SetupValidator = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
  firstName: z.string().min(1, {
    message: "First Name is required",
  }),
  lastName: z.string().min(1, {
    message: "Last Name is required",
  }),
})

export type SetupRequest = z.infer<typeof SetupValidator>
