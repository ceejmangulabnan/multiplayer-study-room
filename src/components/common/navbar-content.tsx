"use client"

import { User } from '@supabase/supabase-js'
import Link from 'next/link'
import { signOut } from '@/lib/auth.actions'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LogIn, LogOut, Menu } from 'lucide-react'
import ThemeToggle from '@/components/common/theme-toggle'
import { motion, useScroll, useMotionValueEvent } from 'motion/react'
import { useRef, useState } from 'react'

const NavbarContent = ({ user }: { user: User | null }) => {
  const { scrollY } = useScroll()
  const lastScrollY = useRef(0)
  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY.current && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    lastScrollY.current = latest
  })

  return (
    <motion.nav
      className='z-50 px-6 py-3 top-0 left-0 right-0 fixed bg-background shadow-md'
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Desktop */}
      <div className='items-center justify-between hidden md:flex'>
        <Link href={'/'} className='text-xl font-bold'>MSR</Link>
        {
          user && user.user_metadata ? (
            <div className='flex items-center gap-4'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src={user?.user_metadata.avatar_urls} />
                    <AvatarFallback>{user?.user_metadata.full_name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem className='flex gap-2 py-1 px-2' onClick={signOut}>
                    <LogOut />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <ThemeToggle />
            </div>
          ) : (
            <div className='flex items-center gap-4'>
              <Button className='font-bold'>
                <Link href={'/login'}>Sign In</Link>
              </Button>
              <ThemeToggle />
            </div>
          )
        }
      </div>

      {/* Mobile */}
      <div className='justify-between flex md:hidden'>
        <Link href={'/'} className='font-bold'>MSR</Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {
              user && user.user_metadata ? (
                <>
                  <DropdownMenuItem className='flex gap-2 py-1 px-2' onClick={signOut}>
                    <LogOut />
                    Sign Out
                  </DropdownMenuItem>
                  <ThemeToggle dropdownItem={true} />
                </>
              ) : (
                <>
                  <DropdownMenuItem className='flex gap-2 py-1 px-2'>
                    <LogIn />
                    Sign In
                  </DropdownMenuItem>
                  <ThemeToggle dropdownItem={true} />
                </>
              )
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div >
    </motion.nav>
  )
}

export default NavbarContent
