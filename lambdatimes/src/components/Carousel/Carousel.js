import React, { Component } from 'react';
import styled from 'styled-components';
import { carouselData } from '../../data';

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

  @media (min-width: 1200px) {
    width: 1200px;
  }

  > img {
    width: 100%;
    display: none;
  }

  > div {
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

    &:hover {
      color: #333;
      background-color: #fff;
      border: 2px solid #333;
    }

    &:first-child {
      top: 50%;
      left: 25px;
      transform: translate(0, -50%);
    }

    &:last-child {
      top: 50%;
      right: 25px;
      transform: translate(0, -50%);
    }
  }
`;

export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      active: 0,
    }
  }

  componentDidMount() {
    this.setState({
      images: carouselData,
    });
  }

  leftClick = () => {
    this.setState({
      active: this.state.active - 1 < 0 ?
        this.state.images.length - 1 : 
        this.state.active - 1
    });
  }

  rightClick = () => {
    this.setState({
      active: this.state.active + 1 === this.state.images.length ?
        0 : this.state.active + 1
    });
  }

  selectedImage = () => {
    return <img 
      src={this.state.images[this.state.active]} 
      style={{display: 'block'}} alt="" />
  }
  
  render(){
    return (
      <StyledCarousel>
        <div onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div onClick={this.rightClick}>{">"}</div>
      </StyledCarousel>
    )
  }
}