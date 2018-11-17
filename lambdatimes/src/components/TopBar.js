import React from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

import Login from './Login/Login';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopbarOuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 1;
`
const TopbarMainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`
const TopbarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
    }
`

const TopbarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;
  
    &:last-child {
      margin-right: 0;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`

const TopbarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }

  button {
    padding: 2px 10px;
    font-size: 0.7rem;
    background: #333;
    border-radius: 0;
    letter-spacing: 0.05rem;

    ${() => (window.localStorage.getItem('username') ? null : `display: none`)}
  }
`

const logOut = () => {
  // if (window.localStorage.getItem('username')) {
  //   window.localStorage.removeItem('username');
  // } 
  
}

const loginCheck = () => {
  if (window.localStorage.getItem('username')) {
    return 'LOG OUT'
  } else {
    window.localStorage.removeItem('username');
    return 'LOG IN'
  }
}

const TopBar = () => {
  return (
    <TopbarOuterWrapper>
      <TopbarMainContainer>
        <TopbarContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopbarContainerLeft>
        <TopbarContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopbarContainerCenter>
        <TopbarContainerRight>
          <Button color="secondary" onClick={logOut()}>LOG OUT</Button>{' '}
          <span></span>
        </TopbarContainerRight>
      </TopbarMainContainer>
    </TopbarOuterWrapper>
  )
}

export default TopBar;