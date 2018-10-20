import React from 'react';
import {LoginStyle, LoginInput, LoginSubmit, LoginHeader} from './StyledComponents';

export default class Login extends React.Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        };
    }

    setUsername = (e) => {
        const {value} = e.target;
        this.setState({
            username: value 
        })
    }

    setPassword = (e) => {
        const {value} = e.target;
        this.setState({
            password: value 
        })
    }

    login = (e) => {
        e.preventDefault();
        localStorage.setItem('username', this.state.username);
        window.location.reload();
    }

    render(){
        return(
            <LoginStyle>

                <LoginHeader>Login to Lambda Times!</LoginHeader>

                <LoginInput
                    type='text'
                    placeholder='Username'
                    onChange={this.setUsername}
                >
                </LoginInput>

                <LoginInput
                    type='text'
                    placeholder='Password'
                    onChange={this.setPassword}
                >
                </LoginInput>

                <LoginSubmit onClick={this.login}>
                    Log In
                </LoginSubmit>
            

            </LoginStyle>
        )
    }
}