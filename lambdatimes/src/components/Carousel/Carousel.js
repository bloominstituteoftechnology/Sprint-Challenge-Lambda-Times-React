import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselImages: [],
      currentImage: ''
    }
  }
  componentDidMount() {
    this.setState({
      carouselImages: carouselData,
      currentImage: carouselData[0],
      currentIndex: 0
    })
  }

  leftClick = () => {
    const newIndex = negMod((this.state.currentIndex - 1), this.state.carouselImages.length)
    this.setState(() => ({
      currentIndex: newIndex,
      currentImage: this.state.carouselImages[newIndex]
    }))
  }

  rightClick = () => {
    const newIndex = negMod((this.state.currentIndex + 1), this.state.carouselImages.length)
    this.setState(() => ({
      currentIndex: newIndex,
      currentImage: this.state.carouselImages[newIndex]
    }))
  }

  selectedImage = (image) => {
    return <img src={image} style={{ display: 'block' }} alt="carousel" />
  }

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage(this.state.currentImage)}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}

function negMod(n, m) {
  return ((n % m) + m) % m;
}