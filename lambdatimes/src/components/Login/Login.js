import React from 'react';
import styled from 'styled-components';

const StyledLoginForm = styled.div`
  width:30rem;
  margin: 2rem auto;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  all: unset;
  padding: 1rem;
  font-size: 1.4rem;
  border: 1px solid gray;
  border-radius: .5rem;
  margin-bottom: 1rem;
  
  &:active,
  &:focus{
    background-color: lightyellow;
  }
`;

const StyledButton = styled.button`
  padding: 1rem;
  font-size: 2.4rem;
  font-weight: bold;
  border: 2px solid white;
  color: white;
  background-color: lightgray;
  border-radius: .5rem;

  &:hover {
    color: darkgray;
    background-color: white;
    border-color: darkgray;
  }

  &:active {
    background-color: cyan;
  }
`;

const Hint = styled.ul`
  margin: 1rem;
  list-style: square inside;
  font-size: 1rem;
  color: gray;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      hint: false,
    }
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login() {
    if (this.state.username && this.state.password === 'lambda') {
      localStorage.setItem('timesLogin', JSON.stringify({
        username: this.state.username
      }))
      window.location.reload()
    } else {
      this.setState({
        hint: true,
      });
    }
  }

  handleKey(e) {
    if (e.key === 'Enter') this.login();
  }

  render() {
    return (
      <StyledLoginForm className="login--form">
        <StyledForm>
          <StyledInput name="username" onChange={e => this.handleChange(e)} type="text" placeholder="Username"/>
          <StyledInput name="password" onKeyPress={e => this.handleKey(e)} onChange={e => this.handleChange(e)} type="password" placeholder="Password"/>
          <StyledButton type="button" onClick={() => this.login()}>Log In</StyledButton>
        </StyledForm>
        <Hint className="login--hint" style={{display: this.state.hint ? 'block' : 'none' }}>
          <li>
            Username must have at least one character
          </li>
          <li>
            Password: lambda
          </li>
        </Hint>
      </StyledLoginForm>
    );
  }
}

export default Login;