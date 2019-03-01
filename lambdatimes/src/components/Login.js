
import React, {Component} from "react";
import styled from 'styled-components';


const LoginContainer  = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    margin:auto;
    margin-top: 50px;
    border-radius: 15px;
    background-color: #333 ;
    color: #f1f1f1;
    font-family: 'PT Sans', sans-serif;
    input {
        margin: 20px;
        max-width:80%;
    }
`

class Login extends Component {
    state = {
    inputText: ""
    };

    handleChanges = e => this.setState({ inputText: e.target.value });

    signIn = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.inputText);
    window.location.reload();
    };

    render() {
    return (
        <LoginContainer>
            <h3>Login</h3>
            <input
                type="text"
                value={this.state.inputText}
                onChange={this.handleChanges}
            />
            <button onClick={this.signIn}>Sign in</button>
            <p>Hint: 'username' </p>
        </LoginContainer>
    );
    }
}
export default Login;