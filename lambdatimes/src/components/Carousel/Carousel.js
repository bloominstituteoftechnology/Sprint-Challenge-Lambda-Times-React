import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  leftClick = () => {
    // ev.preventDefault();
    if(this.state.index === 0){
      this.setState({index: this.state.images.length-1})
    }
    else{
      this.setState({index: this.state.index-1})
    }
  }

  rightClick = () => {
    // ev.preventDefault();
    if(this.state.index === this.state.images.length-1){
      this.setState({index: 0});
    }
    else{
      this.setState({index: this.state.index+1});
    }
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.index]} style={{display: 'block'}} />
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