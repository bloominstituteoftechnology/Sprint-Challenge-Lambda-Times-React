import React, { Component } from 'react';
import Authenticate from './components/Login/Authenticat';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
    	<Login />
    </div>
  );
}

export default Authenticate(App);