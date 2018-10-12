import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';
// Complete this Carousel 

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
    }
  }
  componentDidMount(){
    console.log(carouselData)
    this.setState({
      images: carouselData,
    })
  }

  leftClick = () => {
    let index = this.state.currentIndex;
    this.setState({
      currentIndex: index - 1
    })
    if (index === 0) {
      this.setState({
        currentIndex: 3,
      })
    }
  }

  rightClick = () => {
    let index = this.state.currentIndex;
    this.setState({
      currentIndex: index + 1
    })
    if (index === 3) {
      this.setState({
        currentIndex: 0,
      })
    }
  }

  selectedImage = () => {
    return <CarouselImg src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} alt="Carousel"/>
  }
  
  render(){
    return (
      <StyledCarousel>
        <Button Left="25px" onClick={this.leftClick}>{"<"}</Button>
        <this.selectedImage />
        <Button Right="25px" onClick={this.rightClick}>{">"}</Button>
      </StyledCarousel>
    )
  }
}

let StyledCarousel = styled.div`
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

let Button = styled.div`
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
  left: ${props => props.Left || null};
  right: ${props => props.Right || null};
  transform: translate(0, -50%);
  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

let CarouselImg = styled.img`
  width: 100%;
  display: none;
`;