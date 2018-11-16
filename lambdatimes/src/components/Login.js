import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handlesChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <Modal isOpen={this.props.modal}> 
                    <ModalHeader>
                    <h3>LOGIN TO YOUR ACCOUNT</h3>
                        <input
                            type="text"
                            name="username"
                            placeholder="EMAIL ADDRESS"
                            value={this.state.username}
                            onChange={this.handlesChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="PASSWORD"
                            value={this.state.password}
                            onChange={this.handlesChange}
                        />
                    </ModalHeader>
                    <ModalFooter>
                    <button type="submit">LOG IN</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Login;