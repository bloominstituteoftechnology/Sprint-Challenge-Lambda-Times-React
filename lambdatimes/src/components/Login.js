import React from 'react';
import styled from 'styled-components'

const LoginContainer = styled.div`
  width: 40%;
  margin: 0 auto;
`
const LoginTitle = styled.h1`
  font-size: 60px;
  font-family: Didot, serif;
  font-weight: bold;
  color: #000;
  width: 62%;
  margin: 0 auto;
`
const Form = styled.form`
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Label = styled.label`
  width: 22%;
  margin: 0 auto;
`
const Input = styled.input`
  width: 70%;
  height: 30px;
  background-color: lightyellow;
  margin: 0 auto;
`
const Button = styled.button`
  width: 70%;
  height: 30px;
  margin: 0 auto;
`

class Login extends React.Component{
 constructor(props){
  super(props);
  this.state = {
   username: '',
   password: '',
  };
 };

 inputChangeHandler = e => {
  this.setState({ [e.target.name]: e.target.value });
 };

 loginSubmitHandler = e => {
 const user = this.state.username;
 localStorage.setItem('user', user);
 window.location.reload();
};

 render(){
  return(
   <LoginContainer>
    < LoginTitle> Lambda Times </ LoginTitle>
    <Form>
      <Label> Please login... </Label><br />
     <Input
      placeholder="Email or username"
      type="text"
      name="username"
      value={this.state.username}
      onChange={this.inputChangeHandler} /><br />
     <Input
      placeholder="password"
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.inputChangeHandler} /><br />
     <Button
      className="login-submit"
      type="subimt"
      onClick={this.loginSubmitHandler}> Submit </Button>
    </Form>
   </LoginContainer>
  )
 }
}

export default Login