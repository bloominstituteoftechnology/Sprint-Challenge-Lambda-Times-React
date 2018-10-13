import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      asset: '',
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
      asset: carouselData[0],
    })
  }

  leftClick = () => {
    this.setState({
      asset: carouselData[1-1],
    })

  }

  rightClick = () => {
    this.setState({
      asset: carouselData[0+1],
    })
  }

  selectedImage = () => {
    return <img src={this.state.asset} style={{display: 'block'}} />
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