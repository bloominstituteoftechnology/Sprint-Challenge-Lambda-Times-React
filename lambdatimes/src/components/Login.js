import React from 'react';
import styled, { css } from "styled-components";


const LoginContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    margin-top: 200px;
`;

const LoginFormContent = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoginTitleContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

const LoginSpan = styled.span`
    font-size: 30px;
    font-weight: bold;
`;

const LoginInput = styled.input`
    text-align: center;
    width: 300px;
    height: 50px;
    margin: 10px 0;
`;

const LoginButton = styled.button`
    width: 300px;
    height: 50px;
    margin-bottom: 10px;
`;

class Login extends React.Component {
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(e.target.value);
    }

    handleSubmit = e => {
        const user = this.state.username;
        const pass = this.state.password;
        localStorage.setItem('user', user);
        localStorage.setItem('password', pass);
        window.location.reload();
    }

    render() {
        return (
            <LoginContainer >
                <LoginFormContent >
                    <LoginTitleContainer >
                        <LoginSpan>Lambda Times</LoginSpan>
                    </LoginTitleContainer>
                    <LoginInput 
                        className='username-content' 
                        type='text'
                        placeholder='Username'
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <LoginInput 
                        className='password-content'
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                    <LoginButton onClick={this.handleSubmit}>Login</LoginButton>
                </LoginFormContent>
            </LoginContainer>
        );
    }
}

export default Login;