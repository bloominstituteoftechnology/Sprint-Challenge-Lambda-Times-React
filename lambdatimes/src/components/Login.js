import React from 'react';
import styled from 'styled-components'
import Header from './Header'

const Title = styled.h1`
  display: block;
  margin: 0 auto 10%;
  font-size: 90px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const BarWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: none;
flex-direction: row;
position: fixed;
height: 44px;
background-color: #333;
position: absolute;
top: 0;
`

const IntroMessage = styled.h2`
  display: block;
  margin: 3% auto 4%;
  font-size: 40px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`
const Input = styled.input`
  display: block;
  margin: 2% auto 0;
  font-size: 20px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`

const Button = styled.button`
  display: block;
  border-radius: 3px;
  padding: 0.5rem 0.7rem;
  margin: 4% auto 0;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  `

const SubMessage = styled.p`
  display: block;
  margin: 6% auto 0;
  font-size: 20px;
  font-family: Didot, serif;
  font-weight: bold;
  flex: 8;
  text-align: center;
  color: #000;
`


class Login extends React.Component{
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

    handleChange = e =>{
      console.log(e.target)
      console.log(e.placeholder)
    this.setState({
      [e.target.name] : e.target.value
    })
  }

    login = e => {
      if (this.state.username){
        localStorage.setItem(this.state.username, this.state.password)
        this.setState({
          username:"", password:""
        })} else {alert('Please enter a username & password')
        }
      window.location.reload()
    }
  render() {
    return(
      <div>
        <BarWrapper></BarWrapper>
          <Header></Header>
          <IntroMessage> Please create a username and password to log in </IntroMessage>
          <form onSubmit={this.login}>
            <Input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
              className="username"
              onChange={this.handleChange} ></Input>
            <Input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              className="password"
              onChange={this.handleChange}></Input>
              <Button>Submit</Button>
          </form>
          <SubMessage> No need to sign up or have an account </SubMessage>
      </div>
    )
  }
}

export default Login
