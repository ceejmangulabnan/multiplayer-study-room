"use client"

import { signInWithGoogle } from '@/lib/auth.actions';
import { useRef } from 'react'
import { FcGoogle } from "react-icons/fc";

const SignInModal = () => {
  const signInRef = useRef<HTMLDialogElement>(null)

  const handleOpen = () => {
    signInRef.current?.showModal()
  }

  const handleGoogleSignIn = async () => {
    await signInWithGoogle()
  }
  return (
    <div>
      <button onClick={handleOpen}>Sign In</button>
      <dialog ref={signInRef} id="signin-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Sign In</h3>
          <div className="modal-action">
            <form action={handleGoogleSignIn}>
              <button className='btn'>
                <FcGoogle />
                Sign in with Google
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default SignInModal
