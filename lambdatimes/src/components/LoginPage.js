import React from 'react'
import styled from 'styled-components'

const LoginDiv = styled.div`
     width: 300px;
    height: 200px;
    background: red;
    position: relative;
    display: block
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%,50%)
`;
const Content = styled.h1`
    color: white;
`;
const LoginPage = props => {
    return (
        <LoginDiv>
            <Content>PAYWALL</Content>
            <Content>Please give me money, no one buys papers anymore</Content>
            <button onClick = {props.handler}>click to disable Paywall</button>
        </LoginDiv>
    )
}

export default LoginPage


