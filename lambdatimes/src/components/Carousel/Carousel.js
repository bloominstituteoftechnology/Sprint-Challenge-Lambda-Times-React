import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: []
    }
  }
  componentDidMount(){
     this.setState({carousel: carouselData});
  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={carouselData[0]} style={{display: 'block'}} />
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