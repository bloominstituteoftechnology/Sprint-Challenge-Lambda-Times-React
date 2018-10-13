import React from 'react';
import styled from 'styled-components';

const Navbar = styled.div`
   display: flex; 
   justify-content: center;
   align-items: none;
   width: 100%;
   flex-direction: row;
   height: 50px;
   background-color: #333;
`
const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 0 10px;
    color: #fff;
    letter-spacing: 2px;
`
const LeftPage = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 10px;
`
const Span1 = styled.span `
    margin-right: 50px;
    font-weight: 600;
    cursor: pointer;
`
const CenterPage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 10px; 
`
const CenterSpan = styled.span `
    cursor: pointer;
    margin-right: 35px; 
`
const RightPage = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    font-weight: 600;
    font-size: 10px;
    
`
const RightSpan = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    margin-right: 5px; 
    font-weight: 600;
    font-size: 10;
    
`


const TopBar = () => {
  return (
    <Navbar>
    <NavContainer>
      <LeftPage>
       <Span1>TOPICS</Span1><Span1>SEARCH</Span1>
      </LeftPage>
      <CenterPage>
        <CenterSpan>GENERAL</CenterSpan><CenterSpan>BROWNBAG</CenterSpan><CenterSpan>RANDOM</CenterSpan><CenterSpan>MUSIC</CenterSpan><CenterSpan>ANNOUNCEMENTS</CenterSpan>
      </CenterPage>
      <RightPage>
        <RightSpan>LOG IN</RightSpan>
      </RightPage>
    </NavContainer>
  </Navbar>
  )
}

export default TopBar;