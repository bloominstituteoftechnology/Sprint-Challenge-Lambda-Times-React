/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import { FooterMsgDiv } from './LoginModalStyles';
import PropTypes from 'prop-types';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
              <Form onSubmit = { this.props.handleSubmit }>
                <FormGroup>
                    <Label for="username">Username</Label>
                    <Input type="text" name="username" placeholder="Enter username..." />
                </FormGroup>
                
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input type="password" name="password" placeholder="Enter password..." />
                </FormGroup>

                <Button type="submit" color="success">Log in</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </Form>
            <ModalFooter>
                <FooterMsgDiv>{ this.props.footerMsg }</FooterMsgDiv>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

LoginModal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['static'])
    ]),
    // allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    innerRef: PropTypes.object,
}

export default LoginModal;
