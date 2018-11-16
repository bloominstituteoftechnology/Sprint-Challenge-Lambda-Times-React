import React, { Component } from "react";
import styled from "styled-components";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
const ContainLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {
    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;
  }
`;
const ContainCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {
    cursor: pointer;
    margin-right: 5%;

    &:last-child {
      margin-right: 0;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContainRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {
    cursor: pointer;
  }
`;
class TopBar extends Component {
  constructor() {
    super();
    this.state = {
      modal: false,
      username: "",
      password: ""
    };
  }

  handleChange = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onSubmit = ev => {
    ev.preventDefault();
    let username = this.state.username;
    localStorage.setItem("username", username);
    console.log(localStorage);
    window.location.reload();
  };

  render() {
    let modal;
    if (this.state.modal) {
      modal = (
        <div>
          <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            className={this.props.className}
          >
            <ModalHeader>Login Please</ModalHeader>
            <ModalBody>
              <form onSubmit={this.onSubmit}>
                username:
                <input
                  type="text"
                  name="username"
                  onChange={this.handleChange}
                  value={this.state.username}
                  required
                />
                <br />
                password:
                <input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                  required
                />
                <Button color="primary">Login</Button>
              </form>
            </ModalBody>
            <ModalFooter />
          </Modal>
        </div>
      );
    }

    return (
      <Bar>
        <Container>
          <ContainLeft>
            <span>TOPICS</span>
            <span>SEARCH</span>
          </ContainLeft>
          <ContainCenter>
            <span>GENERAL</span>
            <span>BROWNBAG</span>
            <span>RANDOM</span>
            <span>MUSIC</span>
            <span>ANNOUNCEMENTS</span>
          </ContainCenter>
          <ContainRight>
            <span onClick={this.toggle}>LOG IN</span>
            {modal}
          </ContainRight>
        </Container>
      </Bar>
    );
  }
}
// const TopBar = () => {};

export default TopBar;
