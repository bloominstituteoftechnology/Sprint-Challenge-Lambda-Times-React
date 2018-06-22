import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';

// Complete this Carousel 

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
  @media (min-width: 1200px) {
    width: 1200px;
  }
 `
const CarouselButton = styled.div`
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
  left: ${props => props.left?'25px':null};
  right: ${props => props.right?'25px':null};
  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  };
`
const CarouselImg= styled.img`
  width: 100%;
  display: none;
`

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selected: 0,
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    this.setState({
      selected: this.state.selected===0 ? 3 : this.state.selected-1
    })

  }

  rightClick = () => {
    this.setState({
      selected: this.state.selected===3 ? 0 : this.state.selected+1
    })
  }

  selectedImage = () => {
    return <CarouselImg src={this.state.carousel[this.state.selected]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselDiv>
        <CarouselButton left onClick={this.leftClick}>{"<"}</CarouselButton>
        {this.selectedImage()}
        <CarouselButton right onClick={this.rightClick}>{">"}</CarouselButton>
      </CarouselDiv>
    )
  }
}