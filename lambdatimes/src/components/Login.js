import React from 'react';
import styled from 'styled-components';

const LoginHeader = styled.div`
	font-family: Didot, serif;
	width: 100%;
	height: 6rem;
	padding: auto;
	color: #fff;
	background-color: #333333;
	h1 {
		text-align: center;
		margin: unset;
		font-size: 5rem;
		font-weight: 100;
	}
`;
const LoginScreen = styled.div`
	display: ${(props) => (props.loginState ? 'flex' : 'none')};
	flex-direction: column;
	position: fixed;
	z-index: 99;
	width: 100%;
	height: 100%;
	background-color: rgba(35, 35, 35, 0.48);
	.login-section {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		background-color: #fff;
		justify-content: center;
		padding-bottom: 5rem;
		h1 {
			font-family: Didot, serif;
			text-align: center;
			padding-bottom: 3rem;
			font-size: 3rem;
		}
		form {
			display: flex;
			flex-direction: column;
			width: 50%;
			margin: 0 auto;
			padding-bottom: 15px;
			input {
				padding: 1rem 2rem;
				margin-bottom: 1.5rem;
				border: none;
				border-radius: 5px;
				background-color: #f5f5f5;
				font-family: Didot, serif;
				font-size: 1.5rem;

				&::placeholder {
					font-size: 1.5rem;
				}
			}
		}
	}
`;
const LoginButton = styled.button`
	font-size: 1.6rem;
	font-family: Didot, serif;
	background-color: #444;
	border: unset;
	color: #eefffe;
	font-weight: 600;
	border-radius: 5px;
	margin-bottom: 1.5rem;
	padding: 0.5rem 1rem;
	&:hover {
		cursor: pointer;
		background-color: #555;
	}
`;

class Login extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	setLocalStorage = (e) => {
		localStorage.setItem('email', e.target.email.value);
		localStorage.setItem('password', e.target.password.value);
		localStorage.setItem('loggedIn', true);
	};

	render() {
		return (
			<LoginScreen loginState={this.props.loginState}>
				<LoginHeader>
					<h1>Lambda Times</h1>
				</LoginHeader>
				<div className="login-section">
					<h1>LOG IN</h1>
					<form onSubmit={this.setLocalStorage}>
						<input type="text" placeholder="Email" name="email" required />
						<input type="password" placeholder="Password" name="password" required />
						<LoginButton color="#4591e0" type="submit">
							Log In
						</LoginButton>
						<LoginButton color="#999" onClick={this.props.loginToggle}>
							Cancel
						</LoginButton>
					</form>
				</div>
			</LoginScreen>
		);
	}
}

export default Login;
