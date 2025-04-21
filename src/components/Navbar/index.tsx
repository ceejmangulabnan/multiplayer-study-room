import Link from 'next/link'
import { createClient } from '@/utils/supabase/server'
import { signOut } from '@/lib/auth.actions'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { LogIn, LogOut, Menu } from 'lucide-react'
import ThemeToggle from '@/components/ThemeToggle'

const Navbar = async () => {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    <nav className='z-50 px-6 py-4'>
      {/* Desktop */}
      <div className='justify-between hidden md:flex'>
        <Link href={'/'} className='font-bold'>MSR</Link>
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
          <DropdownMenuTrigger >
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
                  <DropdownMenuItem className='flex gap-2 py-1 px-2' >
                    <LogIn />
                    Sign In
                  </DropdownMenuItem>
                  <ThemeToggle dropdownItem={true} />
                </>
              )
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>

  )
}

export default Navbar
