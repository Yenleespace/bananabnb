import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/userReducer'; 



let currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
let initialState = {};

if (currentUser) {
    initialState = {
        users: {
        [currentUser.id]: currentUser
        }
    };
};

const initializeApp = () => {
  ReactDOM.render(
      <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser

restoreSession().then(initializeApp)