import React from "react";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.25rem 0;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  color: white;
  margin: 0.25rem 0;
  padding: 0.5rem;
  background-color: black;
  border: none;
  border-radius: 3px;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userText: "",
      passText: ""
    };
  }
  typingUser = e => {
    this.setState({
      userText: e.target.value
    });
  };
  typingPass = e => {
    this.setState({
      passText: e.target.value
    });
  };
  render() {
    return (
      <Container action="submit">
        <h3>Sign in to see Articles</h3>
        <Input
          type="username"
          value={this.state.userText}
          placeholder="Username"
          onChange={this.typingUser}
          required
        />
        <Input
          type="password"
          value={this.state.passText}
          placeholder="Password"
          onChange={this.typingPass}
          required
        />
        <Button
          onSubmit={e =>
            this.props.signIn(e, this.state.userText, this.state.passText)
          }
          onClick={e =>
            this.props.signIn(e, this.state.userText, this.state.passText)
          }
        >
          Log In
        </Button>
      </Container>
    );
  }
}

export default Login;
