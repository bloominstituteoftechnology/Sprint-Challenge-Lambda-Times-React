import React, { Component } from 'react';
import { carouselData } from '../../data';

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
  }
  componentDidMount() {}

  leftClick = () => {
    const lastIndex = carouselData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  };

  rightClick = () => {
    const lastIndex = carouselData.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  };

  selectedImage = () => {
    console.log(this.state.currentImageIndex, carouselData);
    return (
      <img
        src={carouselData[this.state.currentImageIndex]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
