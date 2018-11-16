import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: [],
      imgIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      carouselImages: carouselData
    });
  }

  leftClick = () => {
    if(this.state.imgIndex === 0){
      this.setState({
        imgIndex: this.state.carouselImages.length - 1,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex - 1,
      });
    }
  }

  rightClick = () => {
    if(this.state.imgIndex === this.state.carouselImages.length - 1){
      this.setState({
        imgIndex: 0,
      });
    } else {
      this.setState({
        imgIndex: this.state.imgIndex + 1,
      });
    }
  }

  selectedImage = () => {
    return <img src={this.state.carouselImages[this.state.imgIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={() => this.leftClick()}>{"<"}</div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}