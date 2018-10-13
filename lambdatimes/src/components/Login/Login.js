import React from 'react';

import styled from 'styled-components';

const LoginDiv = styled.div`
	height: 300px;
	margin-top: 50px;
	border-radius: 10px;
	> form {
		display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    margin: 54px auto;
    padding: 6%;
	background-color: #e4e1e8;
    border-radius: 10px;
    border: solid #443f39 3px;
	}
	> form > input {
		font-size: 1.6rem;
		padding: 1%;
		margin: 10px 0;
		border: solid #707072 1px;
	}
	> form > button {
		font-size: 1.6rem;
		border: solid #707072 1px;
		&:hover{
			background-color:#443f39;
			color: white;
		}
	}
`

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			login: '',
		};
	}

	loginHandler = event => {
		this.setState({[event.target.name]: event.target.value})
	}

	login = event => {
		localStorage.setItem(this.state.name, this.state.login)
	}

	render(){
		return (
		<LoginDiv>
			<form>
				<input placeholder="user name" value={this.state.name} onChange={this.loginHandler} name="name" />
				<input placeholder="password" value={this.state.login} onChange={this.loginHandler} name="login"/>
				<button onClick={this.login}>Login in Here</button>
			</form>
		</LoginDiv>
		)
	}
}

export default Login;