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

const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledFormGroup = styled(FormGroup)`
  width: 60%;
`

const StyledButton = styled(Button)`
  width: 60%;
  margin-bottom: 30px;
`

const StyledModalHeader = styled(ModalHeader)`
  display: flex;
  justify-content: center;
  text-align: center;
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
    if (this.loggedIn()) {
      localStorage.removeItem('username');
      localStorage.removeItem('password');

      window.location.reload();
    } else {
      this.setState({ modal: !this.state.modal });
    }
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

  loggedIn = () => {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      return true;
    }
    return false;
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

              <StyledModalHeader toggle={this.toggle}>Log in</StyledModalHeader>

              <StyledForm>

                <StyledFormGroup>
                  <Label for="exampleUsername">Username</Label>
                  <Input onChange={this.handleInput} autoComplete='off' type="username" name="username" id="exampleUsername" placeholder="Username" />
                </StyledFormGroup>

                <StyledFormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Password" />
                </StyledFormGroup>

                <StyledButton onClick={this.loginButton}>Log in</StyledButton>

              </StyledForm>

            </Modal>

            <TopBarRightSpan onClick={this.toggle}>{this.loggedIn() ? 'LOG OUT' : 'LOG IN'}</TopBarRightSpan>
          </TopBarRight>

        </TopBarContainer>

      </TopBarWrapper>
    )
  }
}

export default TopBar;