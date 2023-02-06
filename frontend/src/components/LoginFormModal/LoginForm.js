import { useState } from 'react'
import { useDispatch } from 'react-redux'

export const LoginForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')

  return (
    <>
      <form>
        <input 
        type="email"
        value={email}
        placeholder="Email"
         />
        <input 
        type="password"
        value={password}
        placeholder="Password"
         />
      </form>
    </>
  )
}