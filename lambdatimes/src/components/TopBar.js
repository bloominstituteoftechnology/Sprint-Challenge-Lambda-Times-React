import React from 'react';
import styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file
const TopBarStyle = styled.div `
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`
const Container = styled.div `
width: 100%;
display: flex;
justify-content: none;
align-items: none;
flex-direction: row;
color: #fff;
letter-spacing: 1px;
padding: 0 10px;
`
const TopBarLeft = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
`

const TopBarRight = styled.div `
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const TopBarCenter = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const TopBar = () => {
  return (
    <TopBarStyle>
      <Container>
        <TopBarLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </TopBarLeft>
        <TopBarCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </TopBarCenter>
        <TopBarRight>
          <span>LOG IN</span>
        </TopBarRight>
      </Container>
    </TopBarStyle>
  )
}

export default TopBar;