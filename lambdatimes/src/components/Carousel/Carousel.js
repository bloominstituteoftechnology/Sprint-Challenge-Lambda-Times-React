import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      current: 0
    }
  }
  componentDidMount(){
    this.setState({data: carouselData});
  }

  leftClick = () => {
    this.setState(prevState => {
      return ({
        current: prevState.current - 1 < 0 ? this.state.data.length - 1 : prevState.current - 1
      })
    });
  }

  rightClick = () => {
    this.setState(prevState => {
      return ({
        current: prevState.current + 1 > this.state.data.length - 1 ? 0 : prevState.current + 1
      })
    });
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.current]} style={{display: 'block'}} alt="cute doggy" />
  }
  
  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}