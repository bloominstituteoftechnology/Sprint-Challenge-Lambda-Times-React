import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeImg: 0,
      images: []

    }
  }
  componentDidMount(){
    this.setState({images:carouselData});
  }

  leftClick = () => {
    let newActive; 
    this.state.activeImg === 0 ? newActive = this.state.images.length-1 : newActive = this.state.activeImg -1;
    this.setState({activeImg: newActive});
  }

  rightClick = () => {
    let newActive; 
    this.state.activeImg === this.state.images.length-1 ? newActive = 0 : newActive = this.state.activeImg + 1; 
    this.setState({activeImg: newActive});
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.activeImg]} style={{display: 'block'}} />
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

