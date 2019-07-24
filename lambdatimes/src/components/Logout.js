import React from 'react';
import styled from 'styled-components'

const Button = styled.button`
  border-radius: 3px;
  padding: 0.5rem 0.7rem;
  width: 5rem;
  background: transparent;
  color: white;
  border: 2px solid white;
  `

class Logout extends React.Component {
  constructor(){
    super();
  }

  logout = () =>{
    localStorage.clear();
    window.location.reload()
}

  render () {
  return (
    <Button onClick={this.logout}>Log Out</Button>
  )
}
}


export default Logout
