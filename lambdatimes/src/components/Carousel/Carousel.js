import React, { Component } from 'react';
import { CarouselWrapper } from '../../styles/CarouselStyles';
// import { carouselData } from '../../data';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import image1 from '../../assets/carousel/mountains.jpeg';
import image2 from '../../assets/carousel/computer.jpeg';
import image3 from '../../assets/carousel/trees.jpeg';
import image4 from '../../assets/carousel/turntable.jpeg';

let carouselData = [image1, image2, image3, image4];
let items = carouselData.map((img, i) => {
      const alt = "";
      const cap = "";
      return ({ src: img,
                altText: alt,
                caption: cap
              }
      )
    });

// Complete this Carousel 
export default class CarouselLambda extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeIndex: 0,
      images: []
    };
  }

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <CarouselWrapper>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </CarouselWrapper>
    );
  }
}