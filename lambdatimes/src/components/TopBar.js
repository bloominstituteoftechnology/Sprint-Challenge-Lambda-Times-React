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
const Containerleft = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
`
const Leftspan = styled.span `
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
`
const Containercenter = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex: 3;
    font-size: 9px;
`
const Centerspan = styled.span `
    cursor: pointer;
    margin-right: 5%;
`
const Containerright = styled.div `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`
const Rightspan = styled.span `
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: row;
    flex: 1;
    font-size: 11px;
    font-weight: bold;
`


const TopBar = () => {
  return (
    <Topbar>
      <Container>
        <Containerleft>
          <Leftspan>TOPICS</Leftspan><Leftspan>SEARCH</Leftspan>
        </Containerleft>
        <Containercenter>
          <Centerspan>GENERAL</Centerspan><Centerspan>BROWNBAG</Centerspan><Centerspan>RANDOM</Centerspan><Centerspan>MUSIC</Centerspan><Centerspan>ANNOUNCEMENTS</Centerspan>
        </Containercenter>
        <Containerright>
          <Rightspan>LOG IN</Rightspan>
        </Containerright>
      </Container>
    </Topbar>
  )
}

export default TopBar;