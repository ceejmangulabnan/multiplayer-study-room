import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />

      <main className='flex-1 flex items-center justify-center'>
        <div>
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">Turn Studying into a Multiplayer Game!</h1>
              <p className="py-6">
                Your virtual study group—whenever, wherever.
              </p>
              <Link href='/login'>
                <Button className="font-bold">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
