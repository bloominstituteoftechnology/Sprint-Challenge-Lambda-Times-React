import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
let count = 0;

export default class Carousel extends Component {
  constructor(props){
    super(props);
    console.log('in carousel')
    console.log(props.photos)
    this.state = {
      currentPhoto: props.photos[count]
    }
  }
  componentDidMount(){

  }

  leftClick = () => {
    this.selectedImage
    if(count>0){
      count-=1;
    }else{
      count = 3;
    }
  }

  rightClick = () => {
    if(count==3){
      count=0;
    }else{
      count += 1;
    }
  }

  selectedImage = () => {
    return <img src={this.state.currentPhoto} style={{display: 'block'}} />
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
