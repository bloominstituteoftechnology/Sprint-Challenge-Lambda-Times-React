import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      currentImg: carouselData[0],
      countup: 1,
      countdown: -1,
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    if (this.state.countdown === -1){
      this.state.countdown = 3
    }
    this.setState({
      countdown: this.state.countdown - 1,
      currentImg: carouselData[this.state.countdown]
    })
  }

  rightClick = () => {

    if (this.state.countup === 4) {
      this.state.countup = 0;
      this.setState({
        currentImg: carouselData[this.state.countup]
      })
    }

    this.setState({
      countup: this.state.countup + 1,
      currentImg: carouselData[this.state.countup]
    })
  }
  
  render(){
    console.log(this.state.carousel)
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.currentImg} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}