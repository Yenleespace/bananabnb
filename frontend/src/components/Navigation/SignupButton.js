import React, { useState } from 'react';
import { SingUpModal } from '../SessionForms';


function LoginButton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)} className="button">
                Sign Up
            </button>
            {showModal && <SingUpModal onClose={() => setShowModal(false)} />}
        </>
    );
}


export default LoginButton;