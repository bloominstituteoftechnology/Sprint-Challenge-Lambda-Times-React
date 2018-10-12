import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel: [],
      index: 0
    };
  }
  componentDidMount() {
    this.setState({
      carousel: carouselData
    });
  }

  leftClick = () => {
    if (this.state.index <= 0) {
      this.setState({
        index: this.state.carousel.length - 1
      });
    } else {
      this.setState(prevState => ({
        index: prevState.index - 1
      }));
    }
  };

  rightClick = () => {
    if (this.state.index >= 0) {
      this.setState({
        index: this.state.carousel.length + 1
      });
    } else {
      this.setState(prevState => ({
        index: prevState.index + 1
      }));
    }
  };

  selectedImage = index => {
    return (
      <img
        src={this.state.carousel[index]}
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
        {this.selectedImage(this.state.index)}
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
