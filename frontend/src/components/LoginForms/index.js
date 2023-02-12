import React, { useState } from "react";
import { Modal } from '../../context/Modal'

import LoginForm from './LoginForm'
import SignupForm from "./SignupForm";
import './SessionForms.css'

export { SignupForm, LoginForm };


export function LoginModal({ onClose, onSuccess }) {
  return (
    <Modal onClose={onClose}>
      <div className="session-modal">
        <h1>Log In</h1>
        <LoginForm onSuccess={onSuccess} />
      </div>
    </Modal>
  )
}

export function SignUpModal({ onClose, onSuccess }) {
  return (
    <Modal onClose={onClose}>
      <div className="session-modal">
        <h1>Sign Up</h1>
        <SignupForm onSuccess={onSuccess} />
      </div>
    </Modal>
  )
}

export function SessionModal({ onClose, onSuccess }) {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Modal onClose={onClose}>
      <div className="session-modal">
        <h1>{showSignup ? "Sign Up" : "Log In"}</h1>
        {showSignup ? (
          <SignupForm onSuccess={onSuccess} />
        ) : (
          <LoginForm onSuccess={onSuccess} />
        )}
        <button
          className="link"
          onClick={() => setShowSignup(prev => !prev)}
        >
          {showSignup ? "Log in" : "Sign up"} instead
        </button>
      </div>
    </Modal>
  );
}