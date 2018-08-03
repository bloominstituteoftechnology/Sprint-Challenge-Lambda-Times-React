import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images:[],
      currentImage:0
    }
  }
  componentDidMount(){
    this.setState({images: carouselData})
  }

  leftClick = () => {
    if (this.state.currentImage === 0 ){
      this.setState((prevState)=>{return {currentImage: this.state.images.length - 1 }})
    }
    this.setState((prevState)=>{return {currentImage: prevState.currentImage - 1}})
  }

  rightClick = () => {
    if (this.state.currentImage ===  this.state.images.length - 1 ){
      this.setState((prevState)=>{return {currentImage: 0 }})
    }
    this.setState((prevState)=>{return {currentImage: prevState.currentImage + 1}})
  }

  selectedImage = () => {
    return <img alt='imageforcarosaul'src={this.state.images[this.state.currentImage]} style={{display: 'block'}} />
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