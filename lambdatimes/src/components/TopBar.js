import React from 'react';
import styled from 'styled-components';


// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarCont = styled.div `
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

const TBContLeft = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TBLeftSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const TBContCenter = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const TBCenterSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const TBContRight = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const TBRightSpan = styled.span `
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarCont>
        <TBContLeft>
          <TBLeftSpan>TOPICS</TBLeftSpan><TBLeftSpan>SEARCH</TBLeftSpan>
        </TBContLeft>
        <TBContCenter>
          <TBCenterSpan>GENERAL</TBCenterSpan><TBCenterSpan>BROWNBAG</TBCenterSpan><TBCenterSpan>RANDOM</TBCenterSpan><TBCenterSpan>MUSIC</TBCenterSpan><TBCenterSpan>ANNOUNCEMENTS</TBCenterSpan>
        </TBContCenter>
        <TBContRight>
          <TBRightSpan>LOG IN</TBRightSpan>
        </TBContRight>
      </TopBarCont>
    </TopBarDiv>
  )
}

export default TopBar;
