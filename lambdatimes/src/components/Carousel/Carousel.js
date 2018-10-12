import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentimg: ''
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData,

    })
  }

  leftClick = () => {
    this.selectedImage();
  }

  rightClick = () => {

  }

  selectedImage = () => {
    this.state.images.map((image, index) => {
      return (
        <img src={image} style={{display: 'block'}} alt="carousel" index={index}  />
      )})
  }

  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
