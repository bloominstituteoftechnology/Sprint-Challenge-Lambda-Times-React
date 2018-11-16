import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      imageIndex: 0
    }
  }
  componentDidMount(){
    this.setState({
      images: carouselData
    })
  }

  leftClick = () => {
    if (this.state.imageIndex === 0){
      this.setState({
        imageIndex: 3
      })
    } else if(this.state.imageIndex === 3) {
      this.setState({
        imageIndex: 2
      })
    } else if(this.state.imageIndex === 2) {
      this.setState({
        imageIndex: 1
      })
    } else{
      this.setState({
        imageIndex: 0
      })
    }
  }

  rightClick = () => {
    if (this.state.imageIndex === 0){
      this.setState({
        imageIndex: 1
      })
    } else if(this.state.imageIndex === 1) {
      this.setState({
        imageIndex: 2
      })
    } else if(this.state.imageIndex === 2) {
      this.setState({
        imageIndex: 3
      })
    } else{
      this.setState({
        imageIndex: 0
      })
    }
  }

  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.images[this.state.imageIndex]} alt='current' style={{display: 'block'}}/>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}