import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: carouselData,
      selected: null,
    }
  }
  componentDidMount(){
    this.setState({ carousel: carouselData });
  }

  leftClick = () => {
    console.log("left Click clicked!");
  }

  rightClick = () => {
    console.log("right click clicked!");
  }

  selectedImage = () => {
    return <img src={this.state.selected} style={{display: 'block'}} />
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
