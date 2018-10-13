import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      imageIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData
    })
  }

  leftClick = (e) => {
    if (this.state.imageIndex > 0) {
      this.setState({
        imageIndex: this.state.imageIndex - 1
      })
    }
    else if (this.state.imageIndex === 0) {
      this.setState({
        imageIndex: this.state.images.length - 1
      })
    }
  }

  rightClick = (e) => {
    if (this.state.imageIndex < this.state.images.length - 1) {
      this.setState({
        imageIndex: this.state.imageIndex + 1
      })
    }
    else if (this.state.imageIndex === this.state.images.length - 1) {
      this.setState({
        imageIndex: 0
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.imageIndex]} style={{display: 'block'}} />
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