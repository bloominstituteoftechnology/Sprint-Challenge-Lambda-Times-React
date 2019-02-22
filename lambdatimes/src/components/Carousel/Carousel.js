import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carouselArr: [],
      index: 0
    }
  }
  componentDidMount(){
    this.setState({carouselArr: carouselData})
  }

  leftClick = () => {
    if(this.state.index !== 0) {
    this.setState(prevState => ({
      index: prevState.index -1
    }))
  } else {
    this.setState({
      index: this.state.carouselArr.length -1
    })
  }

}

  rightClick = () => {
    if(this.state.index !== this.state.carouselArr.length -1) {
    this.setState(prevState => ({
      index: prevState.index + 1
    }))
    } else {
      this.setState({
        index: 0
      })
    }
  }

  selectedImage = (img) => {
    return <img src={img} style={{display: 'block'}} alt="landscape"/>
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage(this.state.carouselArr[this.state.index])}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}