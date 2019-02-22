import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0
    }
  }

  componentDidMount(){
    this.setState({carousel: carouselData[this.state.index]})
  }

  leftClick = () => {
    if(this.state.index <= 0){
      this.setState({index: 3})
    }
    this.setState({carousel: carouselData[this.state.index--]})
  }

  rightClick = () => {
    if(this.state.index >= 3){
      this.setState({index: 0})
    }
    this.setState({carousel: carouselData[this.state.index++]})
  }

  selectedImage = () => {
    return <img src={this.state.carousel} style={{display: 'block'}} />
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