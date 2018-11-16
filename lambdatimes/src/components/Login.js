import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends React.Component {

  constructor() {

    super();

    this.state = {

      showUserMsg: false,
      showPassMsg: false,
      userMsg: '',
      passMsg: ''

    }

  }

  checkInfo = () => {

    const username = document.querySelector('#userInput').value;
    const password = document.querySelector('#passInput').value;

    if (username === '') {

      this.setState({showUserMsg: true, userMsg: 'Please enter a username.'});

    }

    else if (!localStorage[username]) {

      this.setState({showUserMsg: true, userMsg: 'Username does not exist.'});

    }

    else {

      console.log(localStorage[username]);
      console.log(password);

      if (password === '') {

        this.setState({showPassMsg: true, passMsg: 'Please enter a password.'});

      }

      else if (localStorage[username] !== password) {

        this.setState({showPassMsg: true, passMsg: 'Incorrect password!'});
        console.log("TEST");

      }

      else {

        this.props.setUsername(username);
        this.props.toggleBtnPress();
        this.setState({showUserMsg: false, showPassMsg: false});

      }

    }

  }

  handleChange = e => {

    if (e.target.name === 'username')
      this.setState({showUserMsg: false});

    if (e.target.name === 'password')
      this.setState({showPassMsg: false});

  }

  signup = () => {

    const username = document.querySelector('#userInput').value;
    const password = document.querySelector('#passInput').value;

    if (username === '') {

      this.setState({showUserMsg: true, userMsg: 'Please enter a username.'});

    }

    else if (localStorage[username]) {

      this.setState({showUserMsg: true, userMsg: 'Username already exists!'});

    }

    else {

      if (password === '') {

        this.setState({showPassMsg: true, passMsg: 'Please enter a password.'});

      }

      else {

        this.setState({showUserMsg: false, showPassMsg: false});
        localStorage[username] = password;
        this.props.setUsername(username);
        this.props.toggleBtnPress();

      }

    }

  }

  render() {

    return (

      <Modal isOpen={this.props.logBtnPressed} toggle={this.props.toggleBtnPress}>
          <ModalHeader toggle={this.props.toggleBtnPress}>Log In</ModalHeader>
          <ModalBody>
            <Form style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}} onSubmit={
              e => e.preventDefault()
            }>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                {this.state.showUserMsg && <p style={{color: 'red'}}>{this.state.userMsg}</p>}
                <Label for="exampleUsername" className="mr-sm-2">Username</Label>
                <Input type="email" name="username" id="userInput" placeholder="username" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup style={{marginTop: '20px'}} className="mb-2 mr-sm-2 mb-sm-0">
                {this.state.showPassMsg && <p style={{color: 'red'}}>{this.state.passMsg}</p>}
                <Label for="examplePassword" className="mr-sm-2">Password</Label>
                <Input type="password" name="password" id="passInput" placeholder="password" onChange={this.handleChange} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.checkInfo}>Log In</Button>
            <Button color="primary" onClick={this.signup}>Sign Up</Button>
            <Button color="secondary" onClick={this.props.toggleBtnPress}>Cancel</Button>
          </ModalFooter>
        </Modal>

    );

  }

}
