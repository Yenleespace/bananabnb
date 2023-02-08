import React, { useEffect } from 'react';
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
  const [loginstatus, setLoginStatus] = useState('');
  const [userInfo, setUserInfo] = useState({ isShown: false })


  const handleChange = (field) => {
    return (e) => {
      if (field === "email") {
        setEmail(e.currentTarget.value)
      } else {
        setPassword(e.currentTarget.value)
      }
    }
  }

  useEffect(() => {
    if (userInfo.isShown) {
      setLoginStatus(sessionStorage.getItem("currentUser"))
    }
  }, [userInfo.isShown])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("test")

    return dispatch(loginUser({ email: email, password: password }, setUserInfo))


  }

  const handleClickDemo = () => {
    return (e) => {
      e.preventDefault();
      dispatch(loginUser({ email: "user@gmail.com", password: "123456" }, setUserInfo))
    }


  }

  return (
    <>
      <h1>{loginstatus}</h1>
      <ChakraProvider>
        <form id="form-control" onSubmit={handleSubmit}>
          <FormLabel className='login-form'>Welcome to Airbnb</FormLabel>
          <div className='input-box'>
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
            <Button bgColor={"grey"} color="rgb(255 255 255)" type="submit">Sign In</Button>
            <Button bgColor={"grey"} color="rgb(255 255 255)" onClick={handleClickDemo()}>Demo Sign In</Button>
          </div>
        </form>
      </ChakraProvider>
    </>

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