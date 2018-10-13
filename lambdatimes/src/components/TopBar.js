import React from 'react';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

import styled from 'styled-components';

const NavWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`
const Container = styled.div`
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`
const LeftWrapper = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`
const CenterWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const RightWrapper = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`
const LeftSpan = styled.span`
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const CenterSpan = styled.span`
cursor: pointer;
margin-right: 5%;
`
const RightSpan = styled.span`
    cursor: pointer;
`

const TopBar = () => {
  return (
    <NavWrapper>
      <Container>
        <LeftWrapper>
            <LeftSpan>TOPICS</LeftSpan><LeftSpan>SEARCH</LeftSpan>
        </LeftWrapper>
          <CenterWrapper>
            <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
          </CenterWrapper>
          <RightWrapper>
            <RightSpan>LOG IN</RightSpan>
          </RightWrapper>
      </Container>
    </NavWrapper>
  )
}

export default TopBar;
