import React from 'react';

import styled from 'styled-components';

const logOut = () => {
  localStorage.setItem('username', "");
  localStorage.setItem('password', "");
  window.location.reload();
}

const TopBar = () => {

  return (
    <TopBarDiv>
      <ContainerDiv>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <p>Hello, {localStorage.getItem('username'  )}</p>
          {(localStorage.getItem('loggedIn')) ? <p className='log' onClick={logOut}>LOG OUT</p> : <p className='log'>LOG IN</p>}
        </ContainerRight>
      </ContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  ${'' /* height: 66px; */}
  background-color: #333;
`;

const ContainerDiv = styled.div`
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
`;

const ContainerLeft = styled.div`
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
`;

const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 11px;
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
`;

const ContainerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  margin: 5px;
  p {
    padding: 0;
    margin: 10px;
  }
  .log:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
