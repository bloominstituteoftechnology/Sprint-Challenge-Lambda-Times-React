import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled, { css } from 'styled-components';

const CarouselDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  ${props =>
    props.mediaBreak &&
    css`
    min-width: 1200px;
    width: 1200px;
    `};
`;

const CarouselArrowDiv = styled.div`
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

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  ${props =>
    props.leftBtn &&
    css`
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
    `};

    ${props =>
      props.rightBtn &&
      css`
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
      `};
`;

const CarouselImg = styled.div`
  width: 100%;
  display: none;
`;



// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      imgIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData
    });
  }

  leftClick = () => {
    if(this.state.imgIndex === 0){
      this.setState({
        imgIndex: this.state.carouselImages.length - 1,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex - 1,
      });
    }
  }

  rightClick = () => {
    if(this.state.imgIndex === this.state.carouselImages.length - 1){
      this.setState({
        imgIndex: 0,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
      });
    }
  }

  selectedImage = () => {
    return <img src={this.state.carouselImages[this.state.imgIndex]} style={{display: 'block'}} alt='carousel'/>
  }
  
  render(){
    return (
      <CarouselDiv >
        <CarouselArrowDiv leftBtn onClick={() => this.leftClick()}>{"<"}</CarouselArrowDiv>
        <div>{this.selectedImage()}</div>
        <CarouselArrowDiv rightBtn onClick={this.rightClick}>{">"}</CarouselArrowDiv>
      </CarouselDiv>
    )
  }
}