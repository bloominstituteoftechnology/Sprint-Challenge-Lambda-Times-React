import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
//Carousel functions correctly, but the images won't show up
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentImg: "",
      imgPosition: 0,
      data: [],
    }
  }
  componentDidMount(){
    this.setState({
      currentImg: carouselData[this.state.imgPosition],
      imgPosition: 0,
      data: carouselData,
    })
  }

  leftClick = () => {
    if(this.state.imgPosition === 0) {
      this.setState(prevState => {
        return {
          imgPosition: prevState.imgPosition + 3,
          currentImg: carouselData[prevState.imgPosition + 3],
        }
      })
    } else {
      this.setState(prevState => {
        return {
          imgPosition: prevState.imgPosition - 1,
          currentImg: carouselData[prevState.imgPosition - 1],
        }
      })
    }
  }

  rightClick = () => {
    if(this.state.imgPosition === 3) {
      this.setState(prevState => {
        return {
          imgPosition: prevState.imgPosition - 3,
          currentImg: carouselData[prevState.imgPosition - 3],
        }
      })
    } else {
      this.setState(prevState => {
        return {
          imgPosition: prevState.imgPosition + 1,
          currentImg: carouselData[prevState.imgPosition + 1],
        }
      })
    }
  }

  selectedImage = () => {
    return <img src={this.currentImg} style={{display: 'block'}} alt="carousel"/>
  }
  
  render(){
    console.log(this.state)
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}