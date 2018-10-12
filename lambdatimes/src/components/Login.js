import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vh;
  display: flex;
  align-items: center;
`;
const Form = styled.form`
  margin: 75px 0;
  background-color: white;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 300px;
  align-items: baseline;
`;
const Input = styled.input`
  margin: 0 auto;
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 175px;
  background-color: F1F1F1;
`;
const Nobutton = styled.button`
  display: none;
`;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ""
    };
  }

  loginHandler = e => {
    localStorage.setItem("user", this.state.user);
    
  };

  fillin = e => {
    this.setState({ user: e.target.value });
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.loginHandler}>
          <h4>Log-in</h4>
          <Input
            type="text"
            placeholder="user"
            value={this.state.user}
            onChange={this.fillin}
          />
          <Input type="password" placeholder="password" />
          <Nobutton type="submit" />
        </Form>
      </Container>
    );
  }
}

export default Login;
