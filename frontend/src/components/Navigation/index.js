import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import ProfileButton from './ProfileButton';
import logo from './banana.png' //***************** */
import "./Navigation.css"


function Navigation() {
  
  const sessionUser = useSelector(state => state.session.user);
  
  let sessionLinks;
  
  if (sessionUser){
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    )
  } else{    
    sessionLinks= (
    <>
    <LoginButton />      
    <SignupButton/>

    </>)
  }

    return (
      <header className=''>
        <NavLink exact to="/">
          <div className='logo'>
            <img src={logo} alt="logo" className='banana-img' />
            <h1 className='main-title'>BananaBnB</h1>
          </div>
        </NavLink>
          <div className="session-links">
            {sessionLinks}
          </div>  


            
      </header>
    )
}

export default Navigation;
