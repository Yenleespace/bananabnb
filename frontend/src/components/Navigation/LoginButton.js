import React, { useState } from 'react';
import {LoginModal} from '../LoginForms';


function LoginButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <p onClick={() => setShowModal(true)} >
                Log In
            </p>
            {showModal && <LoginModal onClose={() => setShowModal(false)} />}
        </>
    );
}


export default LoginButton;