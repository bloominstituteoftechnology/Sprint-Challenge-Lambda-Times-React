import React from 'react';
import { Button, Input, NavItem } from 'reactstrap';
import styled from 'styled-components';
import Nav from './Styles/Nav'
import Container from './Styles/Container'
import NavBar from './Styles/NavBar'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

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

const handleLoginSubmit = e => {
  /* const user = this.state.username; */
  /* const password = this.state.password; */
  localStorage.setItem('user', "");
  localStorage.setItem('password', "");
  window.location.reload();
};




const TopBar = () => {
  return (
    <Nav>
      <Container>
        <NavBar>
          <NavLink>TOPICS</NavLink><NavLink>SEARCH</NavLink>
        </NavBar >
        <NavbarCenter >
          <NavLink>GENERAL</NavLink><NavLink>BROWNBAG</NavLink><NavLink>RANDOM</NavLink><NavLink>MUSIC</NavLink><NavLink>ANNOUNCEMENTS</NavLink>
        </NavbarCenter >
        <Navbar2 >
          <NavLink  onClick={handleLoginSubmit}>LOG IN</NavLink>
        </Navbar2 >
      </Container>
    </Nav>
  )
}

export default TopBar;