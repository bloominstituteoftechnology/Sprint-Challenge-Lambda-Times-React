import React from 'react';
import styled from './../../node_modules/styled-components';


const TopBarSection = styled.section `
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
`
const ContainerDiv = styled.div `
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
`
const LeftDiv = styled.div `
display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const Span1 = styled.span `
cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const CenterDiv = styled.div `
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
flex: 3;
font-size: 9px;
`
const Span2 = styled.span `
cursor: pointer;
margin-right: 5%;
:hover {
  text-decoration: underline;
}
`
const RightDiv = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
font-weight: bold;
`

const Span3 = styled.span `
cursor: pointer;
`
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarSection>
      <ContainerDiv>
      <LeftDiv>
          <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
        </LeftDiv>
        <CenterDiv >
          <Span2>GENERAL</Span2><Span2>BROWNBAG</Span2><Span2>RANDOM</Span2><Span2>MUSIC</Span2><Span2>ANNOUNCEMENTS</Span2>
        </CenterDiv>
        <RightDiv>
          <Span3>LOG IN</Span3>
        </RightDiv>
      </ContainerDiv>
    </TopBarSection>
  )
}

export default TopBar;