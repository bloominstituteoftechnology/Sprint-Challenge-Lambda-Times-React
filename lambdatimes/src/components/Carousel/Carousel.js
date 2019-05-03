import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0,
      data: carouselData
    }
  }
  componentDidMount(){
    
  }

  leftClick = () => {
    this.setState({selected: (this.state.selected <= 0 ? this.state.data.length : this.state.selected)-1, data : this.state.data});
  }

  rightClick = () => {
    this.setState({selected:(this.state.data.length-1 <= this.state.selected ? -1 : this.state.selected)+1, data : this.state.data});
  }

  selectedImage = () => {
    try
      {
      return <img src={this.state.data[this.state.selected]} style={{display: 'block'}} alt="img" />
    }catch(err)
    {
      return <img src={this.state.data[0]} style={{display: 'block'}} alt="img"/>
    }
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
        {this.selectedImage()}
      </div>
    )
  }
}