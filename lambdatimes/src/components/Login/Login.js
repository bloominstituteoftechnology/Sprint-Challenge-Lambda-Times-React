import React from 'react';
import styled from 'styled-components';

export const Login = (props) => {

    const LoginContainer = styled.div`
    display: flex;
    height: 100%;
    margin: auto;
    max-width: 400px;
    `;

    const Username = styled.input`
    `;

    const Password = styled.input`
    `;

    const LoginButton = styled.button.attrs({
        onClick: (() => props.login),
    })`
    `;

    return (
        <LoginContainer>
            <form>
                <Username/>
                <Password/>
                <LoginButton>Button</LoginButton>
            </form>
        </LoginContainer>
    )
}

const Authenticate = Component => class extends React.Component {
    constructor() {
        super();
        this.state={
            loggedIn:false
        }
    }

    loginButton = (e) => {
    e.preventDefault;
    
    this.setState({
        loggedIn:true
    })
    }

    render() {
        if (this.state.loggedIn){
            return <Component />
        } else {
            return <Login login={this.loginButton}/>
        }
    }
}

export default Authenticate;
