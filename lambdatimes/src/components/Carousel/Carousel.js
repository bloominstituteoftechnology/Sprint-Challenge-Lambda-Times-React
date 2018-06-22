import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selected: 0,
    }
  }
  componentDidMount(){
    this.setState({
      carousel: carouselData,
    })
  }

  leftClick = () => {
    this.setState({
      selected: this.state.selected===0 ? 3 : this.state.selected-1
    })
  }

  rightClick = () => {
    this.setState({
      selected: this.state.selected===3 ? 0 : this.state.selected+1
    })
  }

  selectedImage = () => {
    return <img src={this.state.carousel[this.state.selected]} style={{display: 'block'}} />
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