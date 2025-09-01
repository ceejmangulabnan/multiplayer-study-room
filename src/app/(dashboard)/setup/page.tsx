"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { createClient } from "@/utils/supabase/client"
import { useRouter } from "next/navigation"
import { SetupValidator, SetupRequest } from "@/lib/validators/setup"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function SetupPage() {
  const router = useRouter()
  const form = useForm<SetupRequest>({
    resolver: zodResolver(SetupValidator),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
    },
  })

  const onSubmit = async (values: SetupRequest) => {
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      const { error } = await supabase
        .from("profiles")
        .update({
          username: values.username,
          first_name: values.firstName,
          last_name: values.lastName,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) {
        console.error("Error updating profile:", error)
      } else {
        router.push("/dashboard")
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-foreground dark:bg-foreground/5">
      <div className="border-2 w-full max-w-md p-8 space-y-4 rounded-lg shadow-lg bg-background">
        <h1 className="text-2xl font-bold text-center">Set Up Your Profile</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="ilovemsr" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className='flex flex-col items-center gap-2'>
              <Button type="submit" className='w-full'>Submit</Button>
              <Link
                href={"/dashboard?skipped=true"}
                className="text-sm text-gray-600 hover:underline dark:text-gray-400"
              >
                Skip for now
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
