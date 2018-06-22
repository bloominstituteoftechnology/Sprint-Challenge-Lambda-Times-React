import React from 'react';
import styled, { css } from 'styled-components';

const TopBarDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainerDiv = styled.div`
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

const TopBarInnerContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  ${props => props.left && css`
    justify-content: none;
    flex: 1;
    font-size: 11px;

    & > span {
      cursor: pointer;
      margin-right: 25%;
      font-weight: bold;
    }
  `}

  ${props => props.center && css`
    justify-content: center;
    flex: 3;
    font-size: 9px;

    & > span {
      cursor: pointer;
      margin-right: 5%;

      &:last-child {
        margin-right: 0;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  `}

  ${props => props.right && css`
    justify-content: flex-end;
    flex: 1;
    font-size: 11px;

    & > span {
      cursor: pointer;
    }
  `}

`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarInnerContainerDiv left>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarInnerContainerDiv>
        <TopBarInnerContainerDiv center>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarInnerContainerDiv>
        <TopBarInnerContainerDiv right>
          <span>LOG IN</span>
        </TopBarInnerContainerDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;