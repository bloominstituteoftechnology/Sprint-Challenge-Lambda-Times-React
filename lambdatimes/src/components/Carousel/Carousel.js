import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel : [],
      imageIndex : 0
    }
  }
  componentDidMount(){
    this.setState({carousel:carouselData})

  }

  leftClick = () => {
    let i = this.state.imageIndex - 1;
    if (i < 0){
      i = this.state.carousel.length -1
    }
    this.setState({imageIndex:i})
  }

  rightClick = () => {
    let i = this.state.imageIndex + 1;
    if (i >= this.state.carousel.length){
      i = 0;
    }
    this.setState({imageIndex:i})
  }

  selectedImage = () => {
    let carousel = this.state.carousel
    return <img src={carousel[this.state.imageIndex]} alt='' style={{display: 'block'}} />
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