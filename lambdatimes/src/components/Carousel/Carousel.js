import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    const images = [
      './assets/carousel/computer.jpeg',
      './assets/carousel/mountains.jpeg',
      './assets/carousel/trees.jpeg',
      './assets/carousel/turntable.jpeg'
    ]

    this.state = {
      currentIndex: 0,
      currentImage: images[0]
    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {
    this.setState({
      currentIndex: this.state.currentIndex+1
    })
  }

  selectedImage = () => {
    return <img src={this.state.currentImage} style={{display: 'block'}} />
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
