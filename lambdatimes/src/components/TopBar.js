// libraries imports
import React from 'react';
import styled from 'styled-components';

import {Modal, ModalHeader} from 'reactstrap';
import Login from './Login/Login';

const TopBarComp = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
  z-index: 10;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const LeftContainer = styled(CenterContainer)`
  justify-content: none;
  flex: 1;
  font-size: 11px;
`;

const RightContainer = styled(CenterContainer)`
  justify-content: flex-end;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const RightSpan = styled.span`
  cursor: pointer;
`;

const CenterSpan = styled(RightSpan)`
  margin-right: 5%;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    text-decoration: underline;
  }
`;

const LeftSpan = styled(RightSpan)`
  margin-right: 25%;
  font-weight: bold;
`;

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    }
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <TopBarComp>
        <Container>
          <LeftContainer>
            <LeftSpan>TOPICS</LeftSpan>
            <LeftSpan>SEARCH</LeftSpan>
          </LeftContainer>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
          <Login toggle={this.toggle}/>
        </Modal>
          <CenterContainer>
            <CenterSpan>GENERAL</CenterSpan>
            <CenterSpan>BROWNBAG</CenterSpan>
            <CenterSpan>RANDOM</CenterSpan>
            <CenterSpan>MUSIC</CenterSpan>
            <CenterSpan>ANNOUNCEMENTS</CenterSpan>
          </CenterContainer>
          <RightContainer>
            <RightSpan onClick={this.toggle}>LOG IN</RightSpan>
          </RightContainer>
        </Container>
      </TopBarComp>
    )
  }
}

export default TopBar;