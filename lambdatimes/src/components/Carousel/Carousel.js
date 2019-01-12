import React, { Component } from "react";
import { carouselData } from "../../data";
import styled from "styled-components";

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

  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const StyledLeft = styled(Button)`
  top: 50%;
  left: 25px;
  transform: translate(0, -50%);
`;

const StyledRight = styled(Button)`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
`;

const StyledImg = styled.img`
  width: 100%;
  display: none;
`;
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: carouselData,
      current: 0
    };
  }
  componentDidMount() {}

  leftClick = () => {
    this.setState(prevState => ({
      current:
        prevState.current > 0
          ? prevState.current - 1
          : this.state.carousel.length - 1
    }));
  };

  rightClick = () => {
    this.setState(prevState => ({
      current:
        prevState.current < this.state.carousel.length - 1
          ? prevState.current + 1
          : 0
    }));
  };

  selectedImage = () => {
    return (
      <StyledImg
        src={this.state.carousel[this.state.current]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <StyledCarousel>
        <StyledLeft onClick={this.leftClick}>{"<"}</StyledLeft>
        {this.selectedImage()}
        <StyledRight onClick={this.rightClick}>{">"}</StyledRight>
      </StyledCarousel>
    );
  }
}
