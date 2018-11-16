import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentImage: 0,

    }
  }
  componentDidMount(){
    this.setState({ images: carouselData });

  }

  leftClick = () => {
    const length = this.state.images.length;
    let nextImg = this.state.currentImage - 1;
    if (nextImg < 0) {
      nextImg = length  -1;
    }
    this.setState({ currentImage: nextImg});

  }

  rightClick = () => {
    const length = this.state.images.length;
    let nextImg = this.state.currentImage + 1;
    if (nextImg >= length) {
      nextImg = 0;
    }
    this.setState({ currentImage: nextImg});

  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.currentImage]} alt="" style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}