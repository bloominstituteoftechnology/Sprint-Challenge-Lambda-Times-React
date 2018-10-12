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
    this.setState({ images: carouselData })
  }

  leftClick = () => {
    let prevImage = this.state.currentImage - 1;
    if (prevImage < 0) {
      prevImage = this.state.images.length - 1;
    }
    this.setState({currentImage: prevImage})
    }


  rightClick = () => {
    let nextImage = this.state.currentImage + 1;
    if (nextImage >= this.state.images.length) {
      nextImage = 0;
    }
    this.setState({ currentImage: nextImage });

  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.currentImage]} style={{display: 'block'}} />
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