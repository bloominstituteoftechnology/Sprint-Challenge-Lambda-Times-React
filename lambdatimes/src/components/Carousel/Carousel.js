import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs : [],
      selected : 0,
    }
  }
  componentDidMount(){
    this.setState({imgs : carouselData});
  }

  leftClick = () => {
    if(this.state.selected == 0)
      this.setState({selected : this.state.imgs.length-1})
    else
      this.setState({selected : this.state.selected-1})
    
  }

  rightClick = () => {
    if(this.state.selected == this.state.imgs.length-1)
      this.setState({selected : 0})
    else
      this.setState({selected : this.state.selected + 1})
  }

  selectedImage = () => {
    return <img src={this.state.imgs[this.state.selected]} style={{display: 'block'}} />
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