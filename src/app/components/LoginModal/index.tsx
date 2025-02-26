"use client"

import { useRef } from 'react'

const LoginModal = () => {
  const loginRef = useRef<HTMLDialogElement>(null)

  const handleOpen = () => {
    loginRef.current?.showModal()
  }


  return (
    <div>
      <button onClick={handleOpen}>Login</button>
      <dialog ref={loginRef} id="login-modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default LoginModal
