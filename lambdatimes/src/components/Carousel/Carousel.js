import React, { Component } from 'react';
import { carouselData } from '../../data'
import { CarouselBox, CarouselLeft, CarouselRight } from '../../CSS/ReusableStyles';

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selected: 0
    }
  }
  componentDidMount(){
    this.setState({images: carouselData});
  }

  leftClick = () => {
    let i = this.state.selected;
    if(i !== 0) {
      i--;
    }
    this.setState({selected: i});
  }

  rightClick = () => {
    let i = this.state.selected;
    if(i !== this.state.images.length - 1) {
      i++;
    }
    this.setState({selected: i});
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selected]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselBox>
        <CarouselLeft onClick={this.leftClick}>{"<"}</CarouselLeft>
          {this.selectedImage()}
        <CarouselRight onClick={this.rightClick}>{">"}</CarouselRight>
      </CarouselBox>
    )
  }
}