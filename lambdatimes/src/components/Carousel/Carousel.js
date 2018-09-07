import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      selected: '',
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
      selected: carouselData[0],
    })
  }

  leftClick = () => {
    const currImgIndex = this.state.data.indexOf(this.state.selected);
    let newState = this.state;

    if (currImgIndex === 0) {
      newState.selected = this.state.data[this.state.data.length - 1];
    } else {
      newState.selected = this.state.data[currImgIndex - 1];
    }

    this.setState(newState);
  }

  rightClick = () => {
    const currImgIndex = this.state.data.indexOf(this.state.selected);
    let newState = this.state;

    if (currImgIndex === this.state.data.length - 1) {
      newState.selected = this.state.data[0];
    } else {
      newState.selected = this.state.data[currImgIndex + 1];
    }

    this.setState(newState);
  }

  selectedImage = () => {
    return <img alt = { this.state.selected } src={ this.state.selected } style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        { this.selectedImage() }
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
