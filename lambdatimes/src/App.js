import React from 'react';
import Authenticate from './components/Login/Authenticate';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div className="App">
    	<Login />
    </div>
  );
}

export default Authenticate(App);


      
