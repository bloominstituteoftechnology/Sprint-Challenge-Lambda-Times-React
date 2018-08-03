import React from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Authenticate from './components/Authentication/Authenticate';

const Page = props =>{
  return (
    <div className="App">
      <TopBar toggleModal={props.toggleModal} />
      <Header />
      <Content />
    </div>
  );
}

const AuthPage = Authenticate(Page);

const App = () => {
  return (
    <AuthPage />
  );
}

export default App;
