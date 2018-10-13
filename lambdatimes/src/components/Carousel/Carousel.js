import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components'

// Styling Components
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

  img{
    width: 100%;
    display: none;
  }

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

  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const LeftButton = styled(Button)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const RightButton = styled(Button)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselURLs: carouselData,
      currentIndex: 0
    }
  }
  componentDidMount(){

  }

  leftClick = () => {
    const nextIndex = this.state.currentIndex - 1 < 0 ? this.state.carouselURLs.length - 1 : this.state.currentIndex - 1;
    this.setState({
      currentIndex: nextIndex
    })
  }

  rightClick = () => {
    const nextIndex = this.state.currentIndex + 1 < this.state.carouselURLs.length ? this.state.currentIndex + 1 : 0;
    this.setState({
      currentIndex: nextIndex
    })
  }

  selectedImage = () => {
    return <img src={this.state.carouselURLs[this.state.currentIndex]} style={{display: 'block'}}  alt="Assets"/>
  }
  
  render(){
    return (
      <CarouselContainer>
        {this.selectedImage()}
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </CarouselContainer>
    )
  }
}