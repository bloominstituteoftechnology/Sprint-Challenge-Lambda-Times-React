// Importing libraries
import React, { Component } from 'react';

// Importing data
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0,
      data: [],
    }
  }
  componentDidMount(){
    this.setState({
      data:carouselData,
    });
  }

  leftClick = () => {
    this.setState( prevState => ({
      selected: prevState.selected === 0 ? prevState.data.length - 1 : prevState.selected - 1,
    }));
  }

  rightClick = () => {
    this.setState( prevState => ({
      selected: (prevState.selected + 1) % prevState.data.length,
    }));
  }

  selectedImage = () => {
    return <img
      src={this.state.data[this.state.selected]} style={{display: 'block'}}
      alt="carousel"
    />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <this.selectedImage/>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}