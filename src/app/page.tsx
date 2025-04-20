import Navbar from '@/app/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content text-center">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold">Turn Studying into a Multiplayer Game!</h1>
              <p className="py-6">
                Your virtual study group—whenever, wherever.
              </p>
              <Link href='/login'>
                <button className="btn btn-primary">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
