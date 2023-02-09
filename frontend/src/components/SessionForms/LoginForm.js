import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit, useToggle } from "../../hooks";
import './LoginForm.css'
import { Input, Button, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'

const LoginForm = ({ onSuccess }) => {
  const [email, setEmail] = useInput("");
  const [password, setPassword] = useInput("");  
  const [show, setShow] = useToggle(false)  
  const [errors, onSubmit] = useSubmit({
    onSuccess,action: sessionActions.login({ email, password })
  });
  return (
    
      <ChakraProvider>
        <form id="form-control" onSubmit={onSubmit}>
          <FormLabel className='login-form'>Welcome to Airbnb</FormLabel>
          <div className='input-box'>
            <Input
              focusBorderColor='yellow.400'
              type='email'
              value={email}
              onChange={setEmail}
              placeholder="Email" />
            <InputGroup id="form-input-group">
              <Input
                focusBorderColor='yellow.400'
                pr='4.5rem'
                type={show ? 'text' : 'password'}
                value={password}
                onChange={setPassword}
                placeholder='Enter password'
              />
              <InputRightElement width='4.5rem'>
                <Button h='1.75rem' size='sm' onClick={setShow}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button bgColor={"grey"} color="rgb(255 255 255)" type="submit">Sign In</Button>
            <Button bgColor={"grey"} color="rgb(255 255 255)" >Demo Sign In</Button>
          </div>
        </form>
      </ChakraProvider>
    
   
  )
}

export default LoginForm;