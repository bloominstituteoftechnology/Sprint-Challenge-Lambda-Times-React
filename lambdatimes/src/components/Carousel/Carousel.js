import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selectedCarouselIndex: 0

    }
  }
  componentDidMount(){
    this.setState({carousel: carouselData})
  }

  leftClick = () => {
    if (this.state.selectedCarouselIndex === 0){
      this.setState({ selectedCarouselIndex: 3})
    } else {
      this.setState({ selectedCarouselIndex:  this.state.selectedCarouselIndex -1 })
    }
  }

  rightClick = () => {
    if (this.state.selectedCarouselIndex === 3){
      this.setState({ selectedCarouselIndex: 0})
    } else {
      this.setState({
        selectedCarouselIndex: this.state.selectedCarouselIndex + 1
      })
    }
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.selectedCarouselIndex]} style={{display: 'block'}} />
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
