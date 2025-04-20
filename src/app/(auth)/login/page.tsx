import Navbar from '@/app/components/Navbar';
import { signInWithGoogle } from '@/app/lib/auth.actions'
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Welcome!</h1>
            <p className="py-6">
              Ready to up your study game? Create an account now!
            </p>
            <form action={signInWithGoogle}>
              <button className='btn btn-accent hover:btn-outline'>
                <FcGoogle />
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </main>

    </>
  )
}

export default LoginPage
