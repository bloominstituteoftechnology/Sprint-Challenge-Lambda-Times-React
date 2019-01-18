import React from 'react'
import styled from 'styled-components';

const LoginHeader = styled.div`
    width: 100%;
    height: 40px;
    color: white;
    background-color: #333333;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.25);
    h1{
        text-align: center;
        margin: unset;
        font-size: 1.6rem;
        font-weight: 100;
    }
`;
const LoginScreen = styled.div`
    display: ${props => props.loginState ? 'flex' : 'none'};
    flex-direction: column;
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100vw;
    background-color: rgba(35, 35, 35, 0.48);
    .login-section{
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 60vh;
        background-color: white;   
        h1{
            text-align: center;
            font-weight: lighter;
        } 
        form{
            display: flex;
            flex-direction: column;
            width: 450px;
            margin: 0 auto;
            padding-bottom: 15px;
            border-bottom: 1px solid lightgray;
            input{
                padding: 10px 18px;
                margin-bottom: 4px;
                &::placeholder{
                    font-size: 15px;
                }
            }
            h2{
                margin: 0 0 15px 0;
                font-size: 1rem;
                font-weight: 500;
                color: #4591e0;
            }
        }
        .register{
            text-align: center;
            margin: 15px 0;
            h2{
                margin: unset;
                font-size: 1rem;
                font-weight: 500;
                color: ${props => props.color};
            }
            i{
                color: white;
                width: 40px;
                height: 40px;
                padding: 8px;
                margin: 10px 5px;
                font-size: 20px;
                border-radius: 50px;
                background-color: #333333;
            }
            }
        }

`;
const LoginButton = styled.button`
    font-size: 17px;
    background-color: ${props => props.color};
    border: unset;
    color: white;
    font-weight: 600;
    height: 40px;
    border-radius: 2px;
    margin-bottom: 15px;
`;

class Login extends React.Component{
    constructor(){
        super();
        this.state = {}
    }

    setLocalStorage = e => {
        localStorage.setItem('email', e.target.email.value)
        localStorage.setItem('password', e.target.password.value)
        localStorage.setItem('loggedIn', true)
    }

    render(){
        return(
            <LoginScreen loginState={this.props.loginState}>
                <LoginHeader>
                    <h1>Los Angeles Times</h1>
                </LoginHeader>
                <div className="login-section">
                    <h1>LOG IN TO YOUR ACCOUNT</h1>
                    <form onSubmit={this.setLocalStorage}>
                        <input type="text" placeholder="EMAIL ADDRESS" name="email" required/>
                        <h2>PRINT SUBSCRIBERS: ACTIVATE HERE</h2>
                        <input type="password" placeholder="PASSWORD" name="password" required/>
                        <h2>FORGOT YOUR PASSWORD?</h2>
                        <LoginButton color="#4591e0" type="submit">LOG IN</LoginButton>
                        <LoginButton color="#999" onClick={this.props.loginToggle}>CANCEL</LoginButton>
                    </form>
                    <div className="register">
                        <h2 color="grey">OR LOG IN WITH:</h2>
                        <div className="icons">
                            <i className="fab fa-facebook-f" />
                            <i className="fab fa-twitter" />
                            <i className="fab fa-yahoo" />
                            <i className="fab fa-google-plus-g" />
                        </div>
                        <h2 color="grey">DON'T HAVE AN ACCOUNT?</h2>
                        <h2 color="#4591e0">REGISTER</h2>
                    </div>
                </div>
            </LoginScreen>
        )
    }
}

export default Login