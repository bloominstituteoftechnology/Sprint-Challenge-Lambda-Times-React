import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const LoginFormContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 35%;
    min-width: 400px;
    background-color: #fff;
    /* opacity: 0.4; */
    border: 1px solid #E6E6E6;
    border-radius: 5px;
    margin: 200px auto;
    padding: 0 100px 20px;

    .ig-logo {
        max-width: 100%;
    }
    
    .login-form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
    }

    h3 {
        text-align: center;
    }

    a {
        text-decoration: none;
        text-align: center;
        margin-top: 40px;
        font-family: Helvetica, sans-serif;
        color: #999999;

        .strong {
            font-weight: bold;
            
            &:hover {
            text-decoration: underline;
            color: #333;
            } 
        }
    &:hover {
        text-decoration: none;
        color: #999999;
    }
        
    }
`
const LoginInput = styled.input`
    width: 100%;
    min-width: 200px;
    background-color: #FAFAFA;
    color: #999999;
    border: 1px solid #EFEFEF;
    border-radius: 2px;
    padding: 10px;
    margin: 10px;
    font-size: 0.8rem;

`

const LoginButton = styled.button`
    width: 30%;
    min-width: 200px;
    padding: 10px 40px;
    background: #333333;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    letter-spacing: 0.1rem;

    &:hover {
        background-color: #565656;
    }


`




class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: this.username,
            password: this.password,
        }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        localStorage.setItem('username', this.state.username);
        localStorage.setItem('password', this.state.password);
    }

    render(){
        return (
        <LoginFormContainer>
            <h3>You must be logged in to view this content</h3>
            <form className='login-form' onSubmit={this.login}>
                <LoginInput
                    type="text"
                    placeholder="username"
                    className="username-input"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    required
                />
                <LoginInput 
                    type="password"
                    placeholder="password"
                    className="password-input"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                />
                <LoginButton type="submit" onSubmit={this.login}>LOG IN</LoginButton>
                <a href="#">Don't have an account? <br/><span className="strong">Subscribe to Lambda Times</span></a>
            </form>
        </LoginFormContainer>
        )
    }

}

export default Login;