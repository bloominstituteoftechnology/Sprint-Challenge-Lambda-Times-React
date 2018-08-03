import React from 'react';
import styled from 'styled-components';

import Login from '../Login/Login';

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`;

const Authenticate = App =>
  class extends React.Component{
    constructor(){
      super();
      this.state = {
        showModal: false,
      }
    }

    handleFormSubmit = event =>{
      event.preventDefault();
      this.handleToggleModal();
    }

    handleToggleModal = () =>{
      this.setState({ showModal: !this.state.showModal });
    }

    handleShowModal = () =>{
      if(this.state.showModal){
        return(
          <PageWrapper>
            <Login toggleModal={this.handleFormSubmit} />
            <App />
          </PageWrapper>
        )
      }else{
        return <App toggleModal={this.handleToggleModal} />
      }
    }

    render(){
      return(
        this.handleShowModal()
      );
    }
  }


export default Authenticate;
