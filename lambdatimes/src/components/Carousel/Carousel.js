import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    if(this.index <= 0) { this.index = this.state.carousel.length() - 1; }
    this.selectedImage(this.state.index);
  }

  rightClick = () => {
    if(this.index >= this.state.carousel.length() - 1) { this.index = 0; }
    this.selectedImage(this.state.index);
  }

  selectedImage = (i) => {
    return <img src={this.state.carousel[i]} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
