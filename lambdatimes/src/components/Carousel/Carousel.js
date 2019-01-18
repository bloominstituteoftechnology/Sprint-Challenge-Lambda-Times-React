import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import { carouselData } from '../../data'
// Complete this Carousel 
const items = [
  {
    src: carouselData[0],
  },
  {
    src: carouselData[1],
  },
  {
    src: carouselData[2],
  },
  {
    src: carouselData[3],
  }
];

const Carousel = () => <UncontrolledCarousel items={items} />;

export default Carousel;