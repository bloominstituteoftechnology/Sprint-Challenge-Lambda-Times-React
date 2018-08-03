import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

import styled  from 'styled-components'; 

const CarouselStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  button:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
  img {
    width: 100%;
    display: none;
  }
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
const LeftButton = styled.button `
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
  left: 25px;
  transform: translate(0, -50%);
`;

const RightButton = styled.button `
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
  right: 25px;
  transform: translate(0, -50%);
`;


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeImg: 0,
      images: []

    }
  }
  componentDidMount(){
    this.setState({images:carouselData});
  }

  leftClick = () => {
    let newActive; 
    this.state.activeImg === 0 ? newActive = this.state.images.length-1 : newActive = this.state.activeImg -1;
    this.setState({activeImg: newActive});
  }

  rightClick = () => {
    let newActive; 
    this.state.activeImg === this.state.images.length-1 ? newActive = 0 : newActive = this.state.activeImg + 1; 
    this.setState({activeImg: newActive});
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.activeImg]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      
      <CarouselStyled>
        <LeftButton onClick={this.leftClick}> {"<"}</LeftButton>
        <div>{this.selectedImage()}</div>
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </CarouselStyled>
    )
  }
}

