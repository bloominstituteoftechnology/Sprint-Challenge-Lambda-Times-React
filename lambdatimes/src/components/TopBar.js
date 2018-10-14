import React from 'react';
import { Button, Input, NavItem } from 'reactstrap';
import styled from 'styled-components';
import Nav from './Styles/Nav'
import Container from './Styles/Container'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file


const Navbar = styled.div`
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
flex: 1;
font-size: 11px;
cursor: pointer;
margin-right: 25%;
font-weight: bold;
`
const Navbar2 = styled.div`
display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
  cursor: pointer;
`
const NavLink = styled.a`
margin-right: 10px;
color: white;
`
const NavbarCenter = styled.div`
cursor: pointer;
  margin-right: 20%;
`

const TopBar = () => {
  return (
    <Nav>
      <Container>
        <Navbar>
          <NavLink>TOPICS</NavLink><NavLink>SEARCH</NavLink>
        </Navbar >
        <NavbarCenter >
          <NavLink>GENERAL</NavLink><NavLink>BROWNBAG</NavLink><NavLink>RANDOM</NavLink><NavLink>MUSIC</NavLink><NavLink>ANNOUNCEMENTS</NavLink>
        </NavbarCenter >
        <Navbar2 >
          <NavLink>LOG IN</NavLink>
        </Navbar2 >
      </Container>
    </Nav>
  )
}

export default TopBar;