"use client"

import { useRef } from 'react'
import { FcGoogle } from "react-icons/fc";

const SignInModal = () => {
  const signInRef = useRef<HTMLDialogElement>(null)

  const handleOpen = () => {
    signInRef.current?.showModal()
  }

  return (
    <div>
      <button onClick={handleOpen}>Login</button>
      <dialog ref={signInRef} id="login-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <div className="modal-action">
            <form>
              {/* if there is a button in form, it will close the modal */}
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
