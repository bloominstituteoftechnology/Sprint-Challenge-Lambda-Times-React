import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.slideIndex = 1;
    this.state = {

    }
  }
  componentDidMount(){
    this.showDivs(this.slideIndex);
  }

  leftClick = () => {
    this.showDivs(this.slideIndex - 1);
  }

  rightClick = () => {
    this.showDivs(this.slideIndex + 1);
  }

  showDivs = (n) => {
    let i;
    let x = this.myRef.current;
    if (n > x.length) {this.slideIndex = 1};
    if (n < 1) {this.slideIndex = x.length};
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[this.slideIndex - 1].style.display = 'block';
  }

  selectedImage = () => {
    return <img src={carouselData[0]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel" ref={this.myRef}>
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}