import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      links: [],
      index: 0,
      length: 0
    }
  }
  componentDidMount(){
    this.setState({
      links: carouselData,
      length: carouselData.length
    });
  }

  leftClick = () => {
    let i = this.state.index;
    let length = this.state.length;
    i--;
    if (i===-1) {
      i=length-1;
    }
    this.setState({
      index: i
    });
  }

  rightClick = () => {
    let i = this.state.index;
    let length = this.state.length;
    i++;
    if (i===length) {
      i=0;
    }
    this.setState({
      index: i
    });
  }

  selectedImage = () => {
    console.log(this.state.index);
    return <img src={this.state.links[this.state.index]} style={{display: 'block'}} alt='carousel' />
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
