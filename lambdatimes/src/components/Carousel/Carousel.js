import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselImages: carouselData,
      selectedIndex: 0
    }
  }

  leftClick = () => {
    this.setState((prevState) => {
      if (prevState.selectedIndex === 0) {
        return {
          ...this.state,
          selectedIndex: this.state.carouselImages.length - 1
        }
      }
      else {
        return {
          ...this.state,
          selectedIndex: prevState.selectedIndex - 1
        }
      }
    })
  }

  rightClick = () => {
    this.setState((prevState) => {
      if (prevState.selectedIndex === this.state.carouselImages.length - 1) {
        return {
          ...this.state,
          selectedIndex: 0
        }
      }
      else {
        return {
          ...this.state,
          selectedIndex: prevState.selectedIndex + 1
        }
      }
    })
  }

  selectedImage = () => {
    return <img src={this.state.carouselImages[this.state.selectedIndex]} style={{display: 'block'}} alt="carousel" />
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