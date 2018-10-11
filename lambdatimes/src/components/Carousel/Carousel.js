import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imagePaths: [],
      displayedImage: "",
      imageIndex: 0
    }
  }
  componentDidMount(){
    // set the state from the data
    this.setState({ imagePaths: carouselData, displayedImage: this.selectedImage(carouselData[0]) });
  }

  leftClick = () => {
    let newIndex;

    if (this.state.imageIndex === 0) {
      newIndex = 3;
    } else {
      newIndex = this.state.imageIndex - 1;
    }
    this.setState({ imageIndex: newIndex, displayedImage: this.selectedImage(this.state.imagePaths[newIndex]) });
  }

  rightClick = () => {
    let newIndex;

    if (this.state.imageIndex === 3) {
      newIndex = 0;
    } else {
      newIndex = this.state.imageIndex + 1;
    }

    this.setState({ imageIndex: newIndex, displayedImage: this.selectedImage(this.state.imagePaths[newIndex]) });
  }

  selectedImage = (imagePath) => {
    return <img src={imagePath} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.state.displayedImage}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}