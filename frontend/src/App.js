import React from "react";
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginFormModal/LoginForm';
import SignUpForm from './components/SignUpFormModal/SignUpForm';
import { logoutUser } from './store/usersReducer';
import Navigation  from './components/Navigation';


function App() {
  const loginstatus = sessionStorage.getItem("currentUser")
  const dispatch=useDispatch();
  return (
    <>
    <Navigation />
    {/* {loginstatus}<br/> */}
      <button onClick={() => dispatch(logoutUser())} >Log Out</button>
      <LoginForm />
      <SignUpForm />
    </>

  );
}

export default App;
