import React, { Component } from 'react';
import { carouselData } from '../../data';
let currentIndex = 0;
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: "",
      selected: ""
    }
  }
  componentDidMount(){
    this.setState({images: carouselData,
    selected: carouselData[currentIndex]})
  }

  leftClick = () => {
    if (this.state.selected === carouselData[0]) {
       this.setState({selected: carouselData[carouselData.length-1]})
       currentIndex = carouselData.length-1;
     }
     else {
        this.setState({selected: carouselData[currentIndex-1]})
        currentIndex = currentIndex - 1;
     }
  }

  rightClick = () => {
    if (this.state.selected === carouselData[carouselData.length-1]) {
      this.setState({selected: carouselData[0]})
      currentIndex = 0;
    }
    else {
       this.setState({selected: carouselData[currentIndex+1]})
       currentIndex = currentIndex + 1;
    }
  }

  selectedImage = () => {
    return <img src={this.state.selected} style={{display: 'block'}} />
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