import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
const images = ['./assets/carousel/computer.jpeg', './assets/carousel/mountains.jpeg', './assets/carousel/trees.jpeg', './assets/carousel/turntable.jpeg'];
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgList: [],
      currentIndex: 0
    }
  }
  componentDidMount(){

    this.setState({imgList: images});

  }

  leftClick = () => {

    let newIndex = (this.state.currentIndex > 0) ? this.state.currentIndex - 1 : this.state.imgList.length - 1;

    this.setState({currentIndex: newIndex});

  }

  rightClick = () => {

    let newIndex = (this.state.currentIndex < this.state.imgList.length - 1) ? this.state.currentIndex + 1 : 0;

    this.setState({currentIndex: newIndex});

  }

  render(){
    return (
      <div className="carousel">
        <img src={this.state.imgList[this.state.currentIndex]} style={{display: 'block'}} />
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
