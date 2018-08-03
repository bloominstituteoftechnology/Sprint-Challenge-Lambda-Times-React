import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Topbar = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
z-index:1;
`

const TopContain = styled.div`
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

const LeftContain = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const CenterContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const RightContain = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const Span = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const CSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
`;
const Span3 = styled.span`
  cursor: pointer;
`;


const TopBar = () => {
  return (
    <Topbar>
      <TopContain>
        <LeftContain>
          <Span>TOPICS</Span><Span>SEARCH</Span>
        </LeftContain>
        <CenterContain>
          <CSpan>GENERAL</CSpan><CSpan>BROWNBAG</CSpan><CSpan>RANDOM</CSpan><CSpan>MUSIC</CSpan><CSpan>ANNOUNCEMENTS</CSpan>
        </CenterContain>
        <RightContain>
          <Span3>LOG IN</Span3>
        </RightContain>
      </TopContain>
    </Topbar>
  )
}

export default TopBar;
