import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './airbnb_logo.jpeg'
import "./Navigation.css"
import NavButton from './NavButton';

function Navigation() {

    return (
      <header className='nav-header'>
        <NavLink exact to="/">
          <div className='logo'>
            <img src={logo} alt="logo" />
            <h1>BananaBnB</h1>
          </div>
        </NavLink>
        <NavButton/>
      </header>
    )
}

export default Navigation;
