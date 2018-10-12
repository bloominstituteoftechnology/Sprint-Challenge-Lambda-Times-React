import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.setState({
      carousel: carouselData
    });
  }

  leftClick = () => {};

  rightClick = () => {};

  selectedImage = () => {
    return (
      <img
        src={this.state.carousel}
        style={{ display: 'block' }}
        alt="carousel"
      />
    );
  };

  render() {
    console.log(this.state.carousel);
    return (
      <div className="carousel">
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
