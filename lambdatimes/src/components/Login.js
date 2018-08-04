import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input} from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username:'', modal: false }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() { 
        return ( 
            <div>
                <Button color="info" onClick={this.toggle}>Login</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Login to Lambda Times!</ModalHeader>
                    <ModalBody>
                        <Input type="username" name="username" placeholder="Username" required></Input>
                        <Input type="password" name="password" placeholder="Password" required></Input>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Login!</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
         );
    }
}
 
export default Login;