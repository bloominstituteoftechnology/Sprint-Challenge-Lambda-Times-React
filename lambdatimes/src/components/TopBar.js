import React from 'react';
import { TopBarWrapper, TopBarContainer, TopBarContainerLeft, TopBarContainerCenter, TopBarContainerRight } from '../styles/TopBarStyles';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { InputLabel, InputBox, Button, LoginForm } from '../styles/LoginStyles';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  setUsername = (event) => {
    if(event.target.value) this.setState({username: event.target.value});
  }

  setPassword = (event) => {
    if(event.target.value) this.setState({password: event.target.value});
  }

  loginUser = () => {
    this.toggle();
    if(this.state.username) localStorage.setItem("currentUser", this.state.username);
  }

  render() {
    return (
      <TopBarWrapper>
        <TopBarContainer>
          <TopBarContainerLeft>
            <span>TOPICS</span><span>SEARCH</span>
          </TopBarContainerLeft>
          <TopBarContainerCenter>
            <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
          </TopBarContainerCenter>
          <TopBarContainerRight>
            <span  onClick={this.toggle}>LOG IN</span>
          </TopBarContainerRight>
        </TopBarContainer>
      
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <LoginForm  onSubmit = {this.loginUser}>
              <div>
                <InputLabel htmlFor="username">Username</InputLabel>
                <InputBox name="username" type="text" placeholder="Username" onChange={this.setUsername} value={this.state.username} /> 
              </div>
              <div>
                <InputLabel htmlFor="inputPassword">Password</InputLabel>
                <InputBox name="inputPassword" type="password" placeholder="Password" onChange={this.setPassword} value={this.state.password}/>
              </div>
              <Button type="submit" color="primary">Login</Button>
            </LoginForm>          
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

      </TopBarWrapper>
    )
  }
}

export default TopBar;