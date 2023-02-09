import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignupForm, SingUpModal } from "../SessionForms";


function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);

  return sessionUser ? (
    <Redirect to="/" />
  ) : (
    <div className="signup-page">
      <SignupForm />
    </div>
  );
}


export default SignupFormPage;
