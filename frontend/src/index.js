import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import { restoreSession } from './store/csrf';
import { createUser, loginUser, logoutUser } from './store/usersReducer.js';
import { Provider } from 'react-redux';
import { ChakraProvider, extendBaseTheme } from '@chakra-ui/react'


let currentUser;

if (sessionStorage.getItem('currentUser') !== "undefined") {
  currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
}

let initialState = {};
if (currentUser) {
  initialState = {
    user: currentUser
  };
};

const store = configureStore(initialState);

window.createUser = createUser
window.loginUser = loginUser
window.logoutUser = logoutUser

const InitializeApp = () => {
  ReactDOM.render(
      <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
      </React.StrictMode>,
      document.getElementById('root')
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
        <InitializeApp />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

restoreSession().then(InitializeApp)





