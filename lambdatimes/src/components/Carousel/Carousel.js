import React, { Component } from "react";
import { carouselData } from "../../data";
import styled from "styled-components";

const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin: 16px 0;
  @media (min-width: 1200px) {
    width: 1200px;
  }
  img {
    width: 100%;
    display: none;
  }
`;
const CarouselButton = styled.div(props => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "none",
  flexDirection: "row",
  color: "#fff",
  backgroundColor: "#333",
  fontSize: "40px",
  borderRadius: "50%",
  position: "absolute",
  width: "50px",
  height: "50px",
  cursor: "pointer",

  top: "50%",
  [props.dir]: "25px",
  transform: "translate(0, -50%)"
}));

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caroselImgs: [],
      selectedImageIndex: 0
    };
  }
  componentDidMount() {
    this.setState({
      caroselImgs: carouselData
    });
  }

  leftClick = () => {
    if (this.state.selectedImageIndex === 0) {
      this.setState({
        selectedImageIndex: this.state.caroselImgs.length - 1
      });
    } else {
      this.setState({
        selectedImageIndex: this.state.selectedImageIndex - 1
      });
    }
  };

  rightClick = () => {
    if (this.state.caroselImgs.length - 1 === this.state.selectedImageIndex) {
      this.setState({
        selectedImageIndex: 0
      });
    } else {
      this.setState({
        selectedImageIndex: this.state.selectedImageIndex + 1
      });
    }
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.caroselImgs[this.state.selectedImageIndex]}
        style={{ display: "block" }}
      />
    );
  };

  render() {
    return (
      <CarouselContainer>
        {this.selectedImage()}
        <CarouselButton dir="left" onClick={this.leftClick}>
          {"<"}
        </CarouselButton>
        <CarouselButton dir="right" onClick={this.rightClick}>
          {">"}
        </CarouselButton>
      </CarouselContainer>
    );
  }
}
