import React from "react";
import { loginUser } from "../../store/usersReducer";

const demoUser = () => {

    const user = {
        email: "user@gmail.com",
        password: "123456"
    }

    loginUser(user)
}

export default demoUser;