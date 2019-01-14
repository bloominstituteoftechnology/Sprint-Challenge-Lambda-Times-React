import React, { Component } from 'react';
import { carouselData } from '../../data'
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
  max-width: 1200px;

  img {
    width: 100%;
    display: none;
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
  user-select: none;
  left: ${props => props.left ? '25px' : null};
  right: ${props => props.right ? '25px' : null};

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
      data: [],
      index: 0,
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
    });
  }

  leftClick = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index === 0 
          ? prevState.data.length - 1 
          : prevState.index - 1,
      };
    });
  }

  rightClick = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index === prevState.data.length - 1 
          ? 0 
          : prevState.index + 1,
      };
    });
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.index]} style={{display: 'block'}} alt="Carousel" />
  }
  
  render(){
    return (
      <StyledCarousel>
        <Button left onClick={this.leftClick}>{"<"}</Button>
        {this.selectedImage()}
        <Button right onClick={this.rightClick}>{">"}</Button>
      </StyledCarousel>
    )
  }
}