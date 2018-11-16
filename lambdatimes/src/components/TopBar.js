import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBarContainer = styled.div`

  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
  z-index: 15;

  @media (min-width: 1280px) {
    width: 1280px;
  }

`;

const TopBarContainerLeft = styled.div`

  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;

  span {

    cursor: pointer;
    margin-right: 25%;
    font-weight: bold;

  }

`;

const TopBarContainerCenter = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;

  span {

    cursor: pointer;
    margin-right: 5%;

    &:last-child {

      margin-right: 0;

    }

    &:hover {

      text-decoration: underline;

    }

  }

`;

const TopBarContainerRight = styled.div`

  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;

  span {

    cursor: pointer;

  }

`;

class TopBar extends React.Component {

  constructor() {

    super();

    this.state = {

      open: false

    }

  }

  toggle = () => {

    this.setState({open: !this.state.open});

  }

  addPost = () => {

    const newPost = {

      headline: document.querySelector('#title').value,
      tab: document.querySelector('#category').value,
      img: './assets/sir.jpg',
      author: this.props.username

    }

    this.props.addCard(newPost, document.querySelector('#category').value);
    this.toggle();

  }

  render() {

    const {username, setUsername, toggleBtnPress} = this.props;

    return (
      <TopBarContainer>

        <Modal isOpen={this.state.open} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>New Post</ModalHeader>
          <ModalBody>
            <Form style={{display: 'flex', flexDirection: 'column', marginTop: '20px'}} onSubmit={
              e => e.preventDefault()
            }>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="articleTitle" className="mr-sm-2">Title</Label>
                <Input type="text" name="title" id="title" placeholder="title"/>
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="articleCategory" className="mr-sm-2">Category</Label>
                <Input type="text" name="category" id="category" placeholder="category"/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addPost}>Submit</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>

          <TopBarContainerLeft>
            <span>TOPICS</span><span>SEARCH</span>
          </TopBarContainerLeft>
          <TopBarContainerCenter>
            <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
            {username !== '' && <span onClick={this.toggle}>NEW POST</span>}
          </TopBarContainerCenter>
          <TopBarContainerRight>
            <span onClick={() => {
              username == '' ? toggleBtnPress() : setUsername('');
            }}>{username === '' ? 'LOG IN' : username.toUpperCase()}</span>
          </TopBarContainerRight>
        </TopBarContainer>
    );

  }

}

export default TopBar;
