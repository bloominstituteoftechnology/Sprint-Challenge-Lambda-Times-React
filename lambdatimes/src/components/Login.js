import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

const StyledBtn = styled(Button)`
    margin-top: 10vh;
`;

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            login: false,
            modal: false,
        };
    }

    handleLogin = e => {
        localStorage.setItem('login', true);
        window.location.reload(true);
        this.toggle();
    };

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    
    render() {
        return (
            <div>
                <StyledBtn color="info" onClick={this.toggle}>Click here to login!</StyledBtn>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>Please click login.</ModalHeader>
                <ModalBody>
                    
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.handleLogin}>Login</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
                </Modal>
            </div>
        );
    }
};

export default Login;