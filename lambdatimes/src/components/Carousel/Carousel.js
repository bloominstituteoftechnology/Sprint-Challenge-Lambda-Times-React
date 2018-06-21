import React, { Component } from 'react';
import { carouselData } from '../../data'
export default class Carousel extends Component {
  state = {
    selected: 0
  }
  leftClick = () => {
    this.setState(prev => {
      let newSelected;
      if(prev.selected === 0){
        newSelected = carouselData.length - 1;
      } else {
        newSelected = prev.selected - 1;
      }

      return {selected: newSelected}
    })
  }

  rightClick = () => {
    this.setState(prev => {
      let newSelected;
      if (prev.selected === carouselData.length - 1) {
        newSelected = 0;
      } else {
        newSelected = prev.selected + 1;
      }
      return { selected: newSelected }
    })
  }

  selectedImage = () => {
    return <img src={carouselData[this.state.selected]} style={{display: 'block'}} />
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