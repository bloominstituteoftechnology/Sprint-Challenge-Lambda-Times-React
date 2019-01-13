import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: lavender;
width: 50opx;
margin: 15px auto;
padding: 5px;
border-radius: 20px;
`;

const Header1 = styled.h1`
font-weight: bold;
`;

const TheLogin = styled.div`
font-size: 20px;
`;

const Button = styled.button`
width: 200px;
background-color: black;
color: white;
font-size: 16px;
`;


class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginState = e => {
        this.setState({ [e.target.name] : e.target.value })
    }

    validateLogin = e => {
        // e.preventDefault()
        return this.state.username > 0 && this.state.password > 3
    }

    handleSubmit = e => {
        // e.preventDefault()
        localStorage.setItem('user', this.state.username )
        window.location.reload()
    }

    render (){
        return (
            <Form>
                <Header1>Welcome to the LA Times!</Header1>
                <TheLogin>Please log in</TheLogin>
                <input 
                    type="text"
                    placeholder="User Name"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleLoginState}
                />
                  <input 
                    type="text"
                    placeholder="enter password (must be greater than 3 characters)"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleLoginState}
                />
                <Button onClick={this.handleSubmit} type="submit" disabled={!this.validateLogin}>Login</Button>
            </Form>
            
        )
    }

}

export default Login;