import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: carouselData,
      index: 0,
      lastIndex: carouselData.length
    }
  }

  leftClick = () => {
    if (this.state.lastIndex === 1) {
      this.setState({
        index: 0,
        lastIndex: carouselData.length
      })
    } else {
      this.setState({
        index:  this.state.lastIndex - 1,
        lastIndex: this.state.lastIndex - 1
      })
    }
  }

  rightClick = () => {
    if (this.state.index === this.state.carouselData.length - 1) {
      this.setState({
        index: 0
      })
    } else {
         this.setState({
          index:  this.state.index + 1
        })
      }
  }

  selectedImage = () => {
    return <img src={carouselData[this.state.index]} alt='Carousel view' style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}