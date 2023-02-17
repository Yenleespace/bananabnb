import React from "react";
import * as sessionActions from "../../store/session";
import { useInput, useSubmit } from "../../hooks";
import { FormErrors, Inputs } from "../Forms";
import { Input, Button, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'
import './SessionForms.css'

function SignupForm({ onSuccess }) {
  const [email, setEmail] = useInput("");
  const [last_name, setLastName] = useInput("");
  const [first_name, setFirstName] = useInput("");
  const [password, setPassword] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const [errors, onSubmit] = useSubmit({
    onSuccess,
    action: sessionActions.signup({ email, password, first_name, last_name }),
    validate: () => {
      if (password !== confirmPassword) {
        return ['Confirm Password field must be the same as the Password field'];
      }
    }
  });

  return (

    <ChakraProvider>
      <form id="form-control" onSubmit={onSubmit}>
        <FormErrors errors={errors} />
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
              type='last_name'
              value={last_name}
              onChange={setLastName}
              placeholder="Last Name" />

            <Input
              focusBorderColor='yellow.400'
              type='first_name'
              value={first_name}
              onChange={setFirstName}
              placeholder="FirstName" />

            <Input
              focusBorderColor='yellow.400'
              type='password'
              value={password}
              onChange={setPassword}
              placeholder="Password" />

            <Input
              focusBorderColor='yellow.400'
              type='password'
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              placeholder=" Confirm Password" />
          </InputGroup>


        </div>

        <Button bgColor={"grey"} color="rgb(255 255 255)" type="submit">Sign Up</Button>
      </form>
    </ChakraProvider>





    // <form onSubmit={onSubmit} className="form">
    //   <FormErrors errors={errors}/>
    //   <Input 
    //     label="Email"
    //     value={email}
    //     onChange={onEmailChange}
    //     required
    //   />
    //   <Input 
    //     label="Username"
    //     value={username}
    //     onChange={onUsernameChange}
    //     required
    //   />
    //   <Input 
    //     label="Password"
    //     type="password"
    //     value={password}
    //     onChange={onPasswordChange}
    //     required
    //   />
    //   <Input 
    //     label="Confirm Password"
    //     type="password"
    //     value={confirmPassword}
    //     onChange={onConfirmPasswordChange}
    //     required
    //   />
    //   <button type="submit" className="button">Sign Up</button>
    // </form>
  );
}

export default SignupForm;