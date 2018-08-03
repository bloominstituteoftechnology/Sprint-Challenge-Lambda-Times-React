import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';
// Complete this Carousel
const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;

  img {
    width: 100%;
    display: none;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const LeftButton = styled.div`
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

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const RightButton = styled.div`
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
  cursor: pointer;top: 50%;
  right: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: [],
      index: 0,
      length: 0
    }
  }
  componentDidMount(){
    this.setState({
      links: carouselData,
      length: carouselData.length
    });
  }

  leftClick = () => {
    let i = this.state.index;
    let length = this.state.length;
    i--;
    if (i===-1) {
      i=length-1;
    }
    this.setState({
      index: i
    });
  }

  rightClick = () => {
    let i = this.state.index;
    let length = this.state.length;
    i++;
    if (i===length) {
      i=0;
    }
    this.setState({
      index: i
    });
  }

  selectedImage = () => {
    console.log(this.state.index);
    return <img src={this.state.links[this.state.index]} style={{display: 'block'}} alt='carousel' />
  }

  render(){
    return (
      <StyledCarousel>
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        {this.selectedImage()}
        <RightButton onClick={this.rightClick}>{">"}</RightButton>
      </StyledCarousel>
    )
  }
}
