import React from 'react';
import styled from 'styled-components';

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

const LoginButton = styled.button`

`;

export const Login = () => {
    return (
        <LoginContainer>
            <input/>
            <input/>
            <LoginButton>Button</LoginButton>
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




    render() {
        if (this.state.loggedIn){
            return <Component />
        } else {
            return <Login />
        }
    }
}

export default Authenticate;