import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class LogInModal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        modal: false
      };
  
      this.toggle = this.toggle.bind(this);
    }
  
    toggle() {
      this.setState({
        modal: !this.state.modal
      },()=>console.log(this.state.modal));
    }
  
    render() {
      return (
        <div>
        <Button color="danger" onClick={this.toggle}>{this.props.span}</Button>
        <Modal color="danger" onClick={this.toggle} isOpen={this.state.modal} toggle={this.toggle}>
        <ModalBody>
                <input placeholder='Enter a username' name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}/>
                <input placeholder='Enter a password' name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}/>
                <div><Button color="secondary" size='lg'>Log In</Button></div>
        </ModalBody>
        </Modal>
      </div>
      );
    }
  }
  
  export default LogInModal;