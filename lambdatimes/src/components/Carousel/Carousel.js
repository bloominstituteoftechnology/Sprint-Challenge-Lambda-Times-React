import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselContainer>
        <Button left onClick={this.leftClick}>{"<"}</Button>
        <Button right onClick={this.rightClick}>{">"}</Button>
      </CarouselContainer>
    )
  }
}

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;

  top: 50%;
  transform: translate(0, -50%);

  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  left: ${props => props.left ? "25px" : "0px"};
  right: ${props => props.right ? "0px" : "25px"};
`;

// const Image = styled.img`
//   width: 100%;
//   display: none;
// `;