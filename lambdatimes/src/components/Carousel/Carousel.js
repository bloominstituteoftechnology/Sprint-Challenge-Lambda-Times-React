import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel


export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgNum: 0,
      numOfImg: carouselData.length,
    }
  }

  componentDidMount(){
    this.setState({
      imgNum: 1,
      // currentImage: carouselData[this.state.imgNum]
    })
  }

  leftClick = () => {
    if (this.state.imgNum === 0){
      this.setState({
        imgNum: this.state.numOfImg-1,
      })} else {
        this.setState({
          imgNum: (this.state.imgNum) - 1,
        })
      }
  }

  rightClick = () => {
    if (this.state.imgNum === this.state.numOfImg-1){
      this.setState({
        imgNum: 0,
      })} else {
        this.setState({
          imgNum: (this.state.imgNum) + 1,
        })
      }
  }

  selectedImage = () => {
    return <img src={carouselData[this.state.imgNum]} alt="" style={{display: 'block'}} />
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
