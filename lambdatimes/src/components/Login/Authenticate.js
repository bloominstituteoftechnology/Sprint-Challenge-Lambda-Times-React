import React from 'react';
import userData from './UserData';
import Login from './Login';
import TopBar from '../TopBar';
import Header from '../Header';
import Content from '../Content/Content';
import styled from 'styled-components';

const TopDiv = styled.div`
  top: 0px;
  overflow: auto;
  z-index: 99;
`;

const Authenticate = App =>
  // set up our state so that we have some conditional logging
  class extends React.Component {
	  constructor(){
			super();
			this.state = {
				loginSuccess: false,
				possibleUsers: userData,
			};
		}

    render() {
    	const name = Object.keys(localStorage);
    	const login = Object.values(localStorage);
      const userList = this.state.possibleUsers.map(item => item.name);
      const logs = this.state.possibleUsers.map(item => item.login);

      console.log(userList)
      console.log(logs)
      // console.log(name[0], login[0])

    	const newState = {...this.state};
    	
      if(userList.includes(name[0]) && logs.includes(login[0])){
        newState.loginSuccess = true;
      }

    	if (newState.loginSuccess === true){
    		return (
          <TopDiv>
            <TopBar />
            <Header />
            <Content />
          </TopDiv>
    		)
    	} else {
    		localStorage.clear();
    		return (
          <Login />
    		)
    	}

    }
  };
export default Authenticate;