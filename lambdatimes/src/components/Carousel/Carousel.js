import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs: [],
      active:0
    }
  }
  componentDidMount(){
    this.setState({ imgs: carouselData, active:0})
  }

  leftClick = () => {
    if(this.state.active >0){
    this.setState(prevState => ({
      active: prevState.active - 1
    }))}
    else{
this.setState({active:this.state.imgs.length-1})
    }

  }

  rightClick = () => {
    if (this.state.active < this.state.imgs.length-1) {
      this.setState(prevState => ({
        active: prevState.active + 1
      }))
    }
    else {
      this.setState({ active: 0 })
    }

  }

  selectedImage = () => {
    return <img src={this.state.imgs[this.state.active]} style={{display: 'block'}} alt=""/>
  }
  
  render(){
    return (
      <div className="carousel">
      {this.selectedImage(this.state.active)}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}