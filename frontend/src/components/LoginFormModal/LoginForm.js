import React from 'react';
import { useState } from 'react'
import './LoginForm.css'
import { useDispatch } from 'react-redux'
import { Input, Button, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'
import { loginUser } from '../../store/usersReducer';


const LoginForm = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const handleChange = (field) => {
    return (e) => {
      if (field === "email") {
        setEmail(e.currentTarget.value)
      } else {
        setPassword(e.currentTarget.value)
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    return dispatch(loginUser())

  }

  return (
    // <>
    <ChakraProvider>
      <FormControl id="form-control" onSubmit={handleSubmit}>
        <FormLabel className='login-form'>Welcome to Airbnb</FormLabel>
        <Input
          focusBorderColor='yellow.400'
          type='email'
          value={email}
          onChange={handleChange("email")}
          placeholder="Email" />
        <InputGroup id="form-input-group">
          <Input
            focusBorderColor='yellow.400'
            pr='4.5rem'
            type={show ? 'text' : 'password'}
            value={password}
            onChange={handleChange("password")}
            placeholder='Enter password'
          />
          <InputRightElement width='4.5rem'>
            <Button h='1.75rem' size='sm' onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button bgColor={"grey"} color="rgb(255 255 255)" type="submit">Sign In</Button>
    </ChakraProvider>

    // {/* <form>
    //     <Input 
    //     type="email"
    //     value={email}
    //     onChange={handleChange('email')}
    //     placeholder="Email"
    //      />
    //     <Input 
    //     type="password"
    //     value={password}
    //     onChange={handleChange('passowrd')}
    //     placeholder="Password"
    //      />
    //      <Button bgColor={'red'} type="submit" >Sign In </Button>
    //   </form>
    // </> */}
  )
}

export default LoginForm;