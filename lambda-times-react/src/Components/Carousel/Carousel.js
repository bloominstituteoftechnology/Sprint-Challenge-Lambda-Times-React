import React, { Component } from 'react';
import { carouselData } from '../../data';
import './Carousel.css';

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselData: [],
      selectedIndex: 0
    }
  }
  componentDidMount(){
    this.setState({carouselData: carouselData})
  }

  leftClick = () => {
    if (this.state.selectedIndex > 0) {
      this.setState({selectedIndex: this.state.selectedIndex - 1})
    } else {
      this.setState({selectedIndex: this.state.selectedIndex})
    }

  }

  rightClick = () => {
    if (this.state.selectedIndex < 3) {
      this.setState({selectedIndex: this.state.selectedIndex + 1})
    } else {
      this.setState({selectedIndex: this.state.selectedIndex})
    }
    

  }

  selectedImage = () => {
    return <img src={this.state.carouselData[this.state.selectedIndex]} style={{display: 'block'}} />
  }
  
  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div>{this.selectedImage()}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}