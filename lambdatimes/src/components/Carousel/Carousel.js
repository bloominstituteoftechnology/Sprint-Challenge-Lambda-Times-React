import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselIndex: 0
    }
  }
  componentDidMount(){
    this.setState({carouselIndex: 0})
  }

  leftClick = () => {
    if (this.state.carouselIndex === 0)
      this.setState({carouselIndex: carouselData.length - 1})
    else 
      this.setState({carouselIndex: this.state.carouselIndex - 1})
  }

  rightClick = () => {
    if (this.state.carouselIndex === carouselData.length - 1)
      this.setState({carouselIndex: 0})
    else 
      this.setState({carouselIndex: this.state.carouselIndex + 1})
  }

  selectedImage = () => {
    return <img src={carouselData[this.state.carouselIndex]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={carouselData[this.state.carouselIndex]} style={{display: 'block'}} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}