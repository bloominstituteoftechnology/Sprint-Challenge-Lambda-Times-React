import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      index: 0

    }
  }
  componentDidMount(){
    this.setState({data: carouselData})
  }

  leftClick = () => {
    this.setState(prevState => {
      return ({
        index: prevState.index - 1 < 0 ? this.state.data.length - 1 : prevState.index - 1
      })
    })
  }

  rightClick = () => {
    this.setState(prevState => {
      return ({
        index: prevState.index + 1 < 0 ? this.state.data.length - 1 : prevState.index + 1

      })
    })

  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.index]} style={{display: 'block'}} />
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