import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs: [],
      position: 0
    }
  }
  componentDidMount(){
    this.setState({imgs: carouselData});
  }

  leftClick = () => {
    if(this.state.position === 0) this.setState({position: this.state.imgs.length - 1})
    if(this.state.position > 0) {
      const newPosition = this.state.position - 1; 
      this.setState({position: newPosition}); 
    }
  }

  rightClick = () => {
    if(this.state.position === this.state.imgs.length - 1) this.setState({position: 0})
    if(this.state.position < this.state.imgs.length - 1) {
      const newPosition = this.state.position + 1; 
      this.setState({position: newPosition}); 
    }
  }

  selectedImage = () => {
    return <img src={this.state.imgs[this.state.position]} style={{display: 'block'}} />
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