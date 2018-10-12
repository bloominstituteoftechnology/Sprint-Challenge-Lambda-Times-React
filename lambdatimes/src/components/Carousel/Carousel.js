import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselData: [],
      index: 0
    }
  }

  componentDidMount() {
    this.setState({ carouselData: carouselData });
  }

  leftClick = () => {
    let index = this.state.index;
    const imagesLength = this.state.carouselData.length;

    if (index === 0) {
      index = imagesLength - 1;
      this.setState({ index });
    } else {
      index -= 1;
      this.setState({ index });
    }
  }

  rightClick = () => {
    let index = this.state.index;
    const imagesLength = this.state.carouselData.length;

    if (index === imagesLength - 1) {
      index = 0;
      this.setState({ index });
    } else {
      index += 1;
      this.setState({ index });
    }
  }

  selectedImage = (idx) => {
    return <img src={this.state.carouselData[idx]} style={{ display: 'block' }} alt="img" />
  }

  previewCarousel = () => {
    let index = this.state.index;
    const imagesLength = this.state.carouselData.length;

    setInterval(() => {
      if (index === imagesLength) {
        console.log('if idx', index, imagesLength)
        index = 0;
        this.setState({ index });
      }
      console.log('else idx', index)
      index += 1;
      this.setState({ index });
    }, 3000)
  }

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage(this.state.index)}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}