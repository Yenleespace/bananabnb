import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import ProfileButton from './ProfileButton';
import logo from './banana.png'
import account from './account.png'
import "./Navigation.css"


function Navigation() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  let sessionLinks;

  if (sessionUser) {
    sessionLinks = (
      <div className="dropdown-login-signup">
        <p>{sessionUser.email}</p>
        <p onClick={logout}>Log Out</p>
      </div>
    )
  } else {
    sessionLinks = (
      <div className="dropdown-login-signup">
        <li><LoginButton/></li>
        <li><SignupButton/></li>
      </div>)
  }

  return (
    <header className='navbar-main'>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid container-flex">
          <NavLink exact to="/" style={{ textDecoration: 'none', color: "black" }} className="navbar-brand">
            <div className='brand'>
              <img src={logo} className="logo" alt="logo" />
              <p className='main-title'>BananaBnB</p>
            </div>
          </NavLink>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          </form>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={account} className="logo" />
              </a>
              <ul className="dropdown-menu">
                {sessionLinks}
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">github</a></li>
                <li><a className="dropdown-item" href="#">linkedin</a></li>

              </ul>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  )
}

export default Navigation;
