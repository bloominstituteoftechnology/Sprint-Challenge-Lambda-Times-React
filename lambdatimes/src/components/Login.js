import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            modal: false
        }
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        },()=>console.log(this.state.modal));
      }
    
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    render() {
        return (
          <div>
          <Button color="danger" onClick={this.toggle}>{'Log In'}</Button>
          <Modal isOpen={this.state.modal}>
          <ModalBody>
            <form onSubmit={()=>localStorage.setItem('username',this.state.username)}>
            <input placeholder='Enter a username' name='username' value={this.state.username} onChange={(e)=>this.handleChange(e)}/>
            <input placeholder='Enter a password' type='password' name='password' value={this.state.password} onChange={(e)=>this.handleChange(e)}/>
            <div><Button color="secondary" size='lg'>Log In</Button></div>
            </form>

          </ModalBody>
          </Modal>
        </div>
        );
      }
}
export default Login;