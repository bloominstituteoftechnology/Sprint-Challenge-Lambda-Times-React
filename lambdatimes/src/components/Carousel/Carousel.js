import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      activeImage: 0
    };
  }

  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState(prevState => ({
      activeImage:
        prevState.activeImage - 1 < 0
          ? this.state.images.length - 1
          : prevState.activeImage - 1
    }));
  };

  rightClick = () => {
    this.setState(prevState => ({
      activeImage: (prevState.activeImage + 1) % this.state.images.length
    }));
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.activeImage]}
        style={{ display: 'block' }}
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
