import React, { Component } from 'react';
import { carouselData } from '../../data';
import {TweenMax} from 'gsap/TweenMax';
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgList: [],
      currentIndex: 0,
      nextIndex: 0
    }
  }
  componentDidMount(){

    this.setState({imgList: carouselData});

  }

  leftClick = () => {

    let newIndex = (this.state.currentIndex > 0) ? this.state.currentIndex - 1 : this.state.imgList.length - 1;
    TweenMax.set('#nextImg', {xPercent: 100});

    this.setState({nextIndex: newIndex}, () => {

      TweenMax.set('#nextImg', {display: 'block'});

      TweenMax.to('#currentImg', 1, {xPercent: -100, onComplete: () => {

        this.setState({currentIndex: newIndex});
        TweenMax.set('#currentImg', {xPercent: 0});
        TweenMax.set('#nextImg', {display: 'none'});

      }});

      TweenMax.to('#nextImg', 1, {xPercent: 0});

    });

  }

  rightClick = () => {

    let newIndex = (this.state.currentIndex < this.state.imgList.length - 1) ? this.state.currentIndex + 1 : 0;
    TweenMax.set('#nextImg', {xPercent: -100});

    this.setState({nextIndex: newIndex}, () => {

      TweenMax.set('#nextImg', {display: 'block'});

      TweenMax.to('#currentImg', 1, {xPercent: 100, onComplete: () => {

        this.setState({currentIndex: newIndex});
        TweenMax.set('#currentImg', {xPercent: 0});
        TweenMax.set('#nextImg', {display: 'none'});

      }});

      TweenMax.to('#nextImg', 1, {xPercent: 0});

    });

  }

  render(){
    return (
      <div className="carousel">
        <img id='nextImg' src={this.state.imgList[this.state.nextIndex]} style={{display: 'block', position: 'absolute'}}/>
        <img id='currentImg' src={this.state.imgList[this.state.currentIndex]} style={{display: 'block', position: 'absolute'}} />
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
