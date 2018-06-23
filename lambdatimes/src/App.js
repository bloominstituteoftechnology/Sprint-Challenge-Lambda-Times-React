import React, { Component } from 'react';
import Login from './components/Login';

const NewLogin = Login();

function App() {
  return (
    <div className="App">
      <NewLogin />
    </div>
  );
}

export default App;