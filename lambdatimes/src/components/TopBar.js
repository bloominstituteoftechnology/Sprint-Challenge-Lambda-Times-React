import React from 'react';
import styled from 'styled-components';

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;

  > div {
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
  }
`;

const LeftContainer = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  > span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  > span {
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

const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  > span {
    cursor: pointer;
  }
`;

const TopBar = props => {
  return (
    <StyledTopBar>
      <div>
        <LeftContainer>
          <span>TOPICS</span><span>SEARCH</span>
        </LeftContainer>
        <CenterContainer>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </CenterContainer>
        <RightContainer>
          <span onClick={props.isLoggedIn ? props.logOut : props.toggle}>
            {props.isLoggedIn ? 'LOG OUT' : 'LOG IN'}
          </span>
        </RightContainer>
      </div>
    </StyledTopBar>
  )
}

export default TopBar;