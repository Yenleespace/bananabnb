import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit, useToggle } from "../../hooks";
import { Input, Button, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'
import './SessionForms.css'
import { useDispatch } from "react-redux";
import { login } from "../../store/session";

const LoginForm = ({ onSuccess }) => {
  const dispatch = useDispatch()
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");
  const [show, setShow] = useToggle(false)
  const [demo, setDemo] = useToggle(false)
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    setErrors([])

    return dispatch(login({ email, password }))
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
  }

  const handleDemo = (e) => {
    e.preventDefault()
    setErrors([])

    return dispatch(login({ email: 'test@gmail.com', password: '123456' }))
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
  }

  
  
  return (

    <ChakraProvider>
      {errors}
      <form id="form-control" onSubmit={handleSubmit}>
        <FormLabel className='login-form'>Welcome to Bananabnb</FormLabel>

        <div className='input-box'>

          <InputGroup className="sign_up_and_sign_in">
            <Input
              focusBorderColor='yellow.400'
              type='email'
              value={email}
              onChange={setEmail}
              placeholder="Email" />
            <Input
              focusBorderColor='yellow.400'
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              value={password}
              onChange={setPassword}
              placeholder='Enter password' />

            <InputRightElement width='4.5rem'>
              <Button h='1.75rem' size='sm' onClick={setShow}>
                {show ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>

          <Button className="login-btn" bgColor={"grey"} color="rgb(255 255 255)" type="submit">Sign In</Button>
        <Button className="demo-btn" bgColor={"grey"} color="rgb(255 255 255)" onClick={handleDemo} >Demo Sign In</Button>
      </form>
    </ChakraProvider>
  )
}

export default LoginForm;