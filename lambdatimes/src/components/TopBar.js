import React from 'react';
import styled from 'styled-components';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const TopBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 5;
`

const TopBarContainer = styled.div`
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
`

const TopBarLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const TopBarLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`

const TopBarCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const TopBarCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`

const TopBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`

const TopBarRightSpan = styled.span`
  cursor: pointer;
`

class TopBar extends React.Component {
  constructor() {
    super();

    this.state = {
      modal: false,
      username: '',
      password: ''
    }
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  handleInput = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  loginButton = () => {
    if (this.state.username === '' && this.state.password === '') {
      alert('You need to enter a username and password!');
      return;
    }
    if (this.state.username === '') {
      alert('You need to enter a username!');
      return;
    }
    if (this.state.password === '') {
      alert('You need to enter a password!');
      return;
    }

    localStorage.setItem('username', this.state.username);
    localStorage.setItem('password', this.state.password);

    window.location.reload();
  }


  render() {
    return (
      <TopBarWrapper>

        <TopBarContainer>

          <TopBarLeft>
            <TopBarLeftSpan>TOPICS</TopBarLeftSpan><TopBarLeftSpan>SEARCH</TopBarLeftSpan>
          </TopBarLeft>

          <TopBarCenter>
            <TopBarCenterSpan>GENERAL</TopBarCenterSpan><TopBarCenterSpan>BROWNBAG</TopBarCenterSpan><TopBarCenterSpan>RANDOM</TopBarCenterSpan>
            <TopBarCenterSpan>MUSIC</TopBarCenterSpan><TopBarCenterSpan>ANNOUNCEMENTS</TopBarCenterSpan>
          </TopBarCenter>

          <TopBarRight>

            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

              <ModalHeader toggle={this.toggle}>Log in</ModalHeader>

              <Form>

                <FormGroup>
                  <Label for="exampleUsername">Username</Label>
                  <Input onChange={this.handleInput} autoComplete='off' type="username" name="username" id="exampleUsername" placeholder="Username" />
                </FormGroup>

                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Password" />
                </FormGroup>

                <Button onClick={this.loginButton}>Log in</Button>

              </Form>

            </Modal>

            <TopBarRightSpan onClick={this.toggle}>LOG IN</TopBarRightSpan>
          </TopBarRight>

        </TopBarContainer>

      </TopBarWrapper>
    )
  }
}

export default TopBar;