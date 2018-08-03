import React from 'react';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

class Login extends React.Component {
    constructor() {
        super();
    }

    handleLogin = e => {
        localStorage.setItem('login', true);
        window.location.reload();
        this.props.toggle();
    };
    
    render() {
        return (
            <div>
                <Modal isOpen={this.props.isOpen} 
                    toggle={this.props.toggle}>
                <ModalHeader toggle={this.props.toggle}>Please click login.</ModalHeader>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleLogin}>Login</Button>{' '}
                    <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export default Login;