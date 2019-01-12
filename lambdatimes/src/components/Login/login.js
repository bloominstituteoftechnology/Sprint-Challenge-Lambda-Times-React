import React from 'react';
import { InputLabel, InputBox, Button, LoginForm } from '../../styles/LoginStyles';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
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
      <div>
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
      </div>
    );
  }

}

export default Login;