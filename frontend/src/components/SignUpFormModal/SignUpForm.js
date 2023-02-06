import { useState } from "react";
import { useDispatch } from "react-redux";

export const SignUpForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])

    return ( dispatch(signup({ email, password, first_name, last_name }))
        .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json()
            } catch {
                data = await res.text()
            }
            if (data?.errors) setErrors(data.errors)
            else if (data) setErrors([data])
            else setErrors([res.statusText])
            
        })
    )
}

export default SignUpForm;