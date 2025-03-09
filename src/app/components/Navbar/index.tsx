import SignInModal from '@/app/components/auth/SignInModal'
import Link from 'next/link'
import { createClient } from '@/app/utils/supabase/server'
import { signout } from '@/app/lib/auth.actions'

const Navbar = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getUser()
  console.log(data.user?.user_metadata)
  return (
    <nav>
      <div className="drawer">
        <input id="drawer-side-nav" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar bg-base-300 w-full">
            <div className="flex-none lg:hidden">
              <label htmlFor="drawer-side-nav" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            <div className="cursor-pointer mx-2 flex-1 px-2">
              <Link href={"/"}>MSR</Link>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Desktop Navbar Content */}
                {data.user ? (
                  <>
                    <li>
                      <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                      <button className='btn' onClick={signout}>Sign Out</button>
                    </li>

                  </>
                ) : (
                  <>
                    <li>
                      <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                      <SignInModal />
                    </li>
                  </>
                )
                }
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side z-50">
          <label htmlFor="drawer-side-nav" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Mobile Sidebar Content */}
            {data.user ? (
              <>
                <li>
                  <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                  <button className='btn'>Sign Out</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href={'/dashboard'}>Dashboard</Link>
                </li>
                <li>
                  <SignInModal />
                </li>
              </>
            )
            }
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
            <li>
              <SignInModal />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
