import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
{/*
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="container-left">
          <span>TOPICS</span><span>SEARCH</span>
        </div>
        <div className="container-center">
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </div>
        <div className="container-right">
          <span>LOG IN</span>
        </div>
      </div>
    </div>
  )
}
*/}

const TopBar = () => {
  return (
    <TopBarClass>
      <TopBarContainer>
        <TopBarContainerLeft>
          <TopBarContainerLeftSpan>
            TOPICS
          </TopBarContainerLeftSpan>
          <TopBarContainerLeftSpan>
            SEARCH
          </TopBarContainerLeftSpan>
        </TopBarContainerLeft>
          <TopBarContainerCenter>
            <TopBarContainerCenterSpan>
              GENERAL
            </TopBarContainerCenterSpan>
            <TopBarContainerCenterSpan>
              BROWNBAG
            </TopBarContainerCenterSpan>
            <TopBarContainerCenterSpan>
              RANDOM
            </TopBarContainerCenterSpan>
            <TopBarContainerCenterSpan>
              MUSIC
            </TopBarContainerCenterSpan>
            <TopBarContainerCenterSpanLastChild>
              ANNOUNCEMENTS
            </TopBarContainerCenterSpanLastChild>
          </TopBarContainerCenter>
          <TopBarContainerRight>
            <TopBarContainerRightSpan>
              LOG IN
            </TopBarContainerRightSpan>
          </TopBarContainerRight>
      </TopBarContainer>
    </TopBarClass>
  )
}

export default TopBar;

const TopBarClass = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const TopBarContainer = styled.div`
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
const TopBarContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const TopBarContainerLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const TopBarContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  text-decoration: underline;
`;
const TopBarContainerCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;
const TopBarContainerCenterSpanLastChild = styled.span`
  margin-right: 0;
`;
const TopBarContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const TopBarContainerRightSpan = styled.span`
  cursor: pointer;
`;
