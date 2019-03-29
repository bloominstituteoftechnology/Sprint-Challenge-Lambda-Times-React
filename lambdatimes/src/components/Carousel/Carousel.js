import React, { Component } from 'react';
import { carouselData } from '../../data';

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      images: carouselData
    };
  }
  componentDidMount() {
    this.setState({
      active: carouselData[this.state.activeIndex]
    });
  }

  leftClick = () => {
    const { activeIndex } = this.state;
    console.log('TCL: Carousel -> leftClick -> activeIndex', activeIndex);
    const newIndex = () => {
      if (activeIndex === 0) return 3;
      else return activeIndex - 1;
    };
    this.setState({
      activeIndex: newIndex(),
      active: carouselData[newIndex()]
    });
  };

  rightClick = () => {
    const { activeIndex } = this.state;
    const newIndex = () => {
      if (activeIndex === 3) return 0;
      else return activeIndex + 1;
    };
    this.setState({
      activeIndex: newIndex(),
      active: carouselData[newIndex()]
    });
  };

  render() {
    const {
      state: { active, activeIndex },
      leftClick,
      rightClick
    } = this;

    const SelectedImage = () => (
      <img src={active} alt={activeIndex} style={{ display: 'block' }} />
    );

    return (
      <div className="carousel">
        <div className="left-button" onClick={leftClick}>
          {'<'}
        </div>
        <SelectedImage />
        <div className="right-button" onClick={rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
