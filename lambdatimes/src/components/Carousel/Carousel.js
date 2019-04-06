import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selectedIndex: 0
    };
  }
  componentDidMount() {
    this.setState({ images: carouselData });
  }

  leftClick = () => {
    const { images, selectedIndex } = this.state;
    const atFirstImg = selectedIndex === 0;
    const lastImg = images.length - 1;

    if (atFirstImg) {
      this.setState({ selectedIndex: lastImg });
    } else {
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex - 1
      }));
    }
  };

  rightClick = () => {
    const { images, selectedIndex } = this.state;
    const lastImg = images.length - 1;
    const atLastImg = selectedIndex === lastImg;

    if (atLastImg) {
      this.setState({ selectedIndex: 0 });
    } else {
      this.setState(prevState => ({
        selectedIndex: prevState.selectedIndex + 1
      }));
    }
  };

  selectedImage = () => {
    const { images, selectedIndex } = this.state;
    return <img src={images[selectedIndex]} style={{ display: 'block' }} alt='img' />;
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
