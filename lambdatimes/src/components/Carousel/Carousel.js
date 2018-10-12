import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      index: 0,
      currentImage: ""
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
      currentImage: carouselData[this.state.index]
    })
  }

  leftClick = () => {
    if (this.state.index === 0) {
      this.setState({
        index: 3,
        currentImage: this.state.carousel[this.state.index]
      })
    } else {
      this.setState(prevState => ({
        index: prevState.index-1,
        currentImage: this.state.carousel[this.state.index]
      }))
    }
  }

  rightClick = () => {
    if (this.state.index === 3) {
      this.setState({
        index: 0,
        currentImage: this.state.carousel[this.state.index]
      })
    } else {
      this.setState(prevState => ({
        index: prevState.index+1,
        currentImage: this.state.carousel[this.state.index]
      }))
    }
  }

  selectedImage = () => {
    return <img src={this.state.currentImage} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <this.selectedImage />
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}