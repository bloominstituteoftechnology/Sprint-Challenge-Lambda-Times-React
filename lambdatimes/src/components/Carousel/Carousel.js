import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentIndex: 0,
    }
  }
  componentDidMount(){
    console.log(carouselData)
    this.setState({
      images: carouselData,
    })
  }

  leftClick = () => {
    let index = this.state.currentIndex;
    this.setState({
      currentIndex: index - 1
    })
    if (index === 0) {
      this.setState({
        currentIndex: 3,
      })
    }
  }

  rightClick = () => {
    let index = this.state.currentIndex;
    this.setState({
      currentIndex: index + 1
    })
    if (index === 3) {
      this.setState({
        currentIndex: 0,
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.currentIndex]} style={{display: 'block'}} alt="Carousel"/>
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}