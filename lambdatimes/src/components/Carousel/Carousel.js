import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: carouselData,
      selectedImage: 0
    }
  }
  componentDidMount(){

  }

  leftClick = () => {
    this.setState(
      (prevState => ({ selectedImage: prevState.selectedImage - 1 })),
      () => {
        if (this.state.selectedImage < 0) this.setState({ selectedImage: this.state.images.length - 1 });
      }
    );
  }

  rightClick = () => {
    this.setState(
      (prevState => ({ selectedImage: prevState.selectedImage + 1 })),
      () => {
        if (this.state.selectedImage >= this.state.images.length) this.setState({ selectedImage: 0 });
      }
    );
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selectedImage]} style={{display: 'block'}} />
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