import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Input, Button, FormControl, FormLabel, FormHelperText, ChakraProvider, InputGroup, InputRightElement } from '@chakra-ui/react'
import { createUser } from '../../store/usersReducer';

export const SignUpForm = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [errors, setErrors] = useState([]);

    const handleChange = (field) => {
        return (e) => {
            if (field === "email") {
                setEmail(e.currentTarget.value)
            } else if (field === "password") {
                setPassword(e.currentTarget.value)
            } else if (field === "last_name") {
                setLastName(e.currentTarget.value)
            } else if (field === "first_name") {
                setFirstName(e.currentTarget.value)
            }
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors([])

        dispatch(createUser({ email, password, first_name, last_name }))

        //     .catch(async (res) => {
        //         let data;
        //         try {
        //             data = await res.clone().json()
        //         } catch {
        //             data = await res.text()
        //         }
        //         if (data?.errors) setErrors(data.errors)
        //         else if (data) setErrors([data])
        //         else setErrors([res.statusText])

        //     })
        // )
    }

    return (
        <>
            <ChakraProvider>
                <form id="form-control" onSubmit={handleSubmit}>
                    <FormLabel className='signup-form'>Create Account</FormLabel>
                    <Input
                        focusBorderColor='yellow.400'
                        type='email'
                        value={email}
                        onChange={handleChange("email")}
                        placeholder="Email" />

                    <Input
                        focusBorderColor='yellow.400'
                        type='password'
                        value={password}
                        onChange={handleChange("password")}
                        placeholder="Password" />

                    <Input
                        focusBorderColor='yellow.400'
                        type='Last Name'
                        value={last_name}
                        onChange={handleChange("last_name")}
                        placeholder="Last Name" />
                    <Input
                        focusBorderColor='yellow.400'
                        type='First Name'
                        value={first_name}
                        onChange={handleChange("first_name")}
                        placeholder="First Name" />

                    <Button type="submit" bgColor={"grey"} color="rgb(255 255 255)">Sign Up</Button>
                </form>
            </ChakraProvider>
        </>

    )
}

export default SignUpForm;