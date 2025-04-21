import Navbar from '@/components/Navbar';
import { signInWithGoogle } from '@/lib/auth.actions'
import { Button } from '@/components/ui/button';
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              Ready to up your study game? Create an account now!
            </p>
            <form action={signInWithGoogle}>
              <Button className='flex font-bold mx-auto'>
                <FcGoogle />
                Sign in with Google
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginPage
