import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SidebarInset } from '@/components/ui/sidebar'
import Navbar from '@/components/common/navbar'

export default function Home() {
  return (
    <SidebarInset className='min-h-screen flex flex-col'>
      <Navbar />
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Turn Studying into a Multiplayer Game!</h1>
          <p className="py-6">
            Your virtual study group—whenever, wherever.
          </p>
          <Link href='/login'>
            <Button className="font-bold">Get Started</Button>
          </Link>
        </div>
      </div>
    </SidebarInset>
  )
}
