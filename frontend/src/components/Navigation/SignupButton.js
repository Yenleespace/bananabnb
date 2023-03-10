import React, { useState } from 'react';
import { SignUpModal } from '../LoginForms';


function SignupButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <p style={{ cursor: "pointer" }}  onClick={() => setShowModal(true)}>
                Sign Up
            </p>
            {showModal && <SignUpModal onClose={() => setShowModal(false)} />}
        </>
    );
}


export default SignupButton;