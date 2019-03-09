import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
  data: [],
  index: 0,
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
    });
  }
 
  leftClick = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index === 0
          ? prevState.data.length - 1
          : prevState.index - 1,
      };
    });
  }
 
  rightClick = () => {
    this.setState((prevState) => {
      return {
        index: prevState.index === prevState.data.length - 1
          ? 0
          : prevState.index + 1,
      };
    });
  }
 
  selectedImage = () => {
    return <img src={this.state.data[this.state.index]} style={{display: 'block'}} alt="Carousel"/>
  }
 
  render(){
    return (
      <div className='carousel'>
      <div className='left-button' onClick={this.leftClick}>{"<"}</div>
      {this.selectedImage()}
      <div className='right-button' onClick={this.rightClick}>{">"}</div>
    </div>
    )
  }
 }