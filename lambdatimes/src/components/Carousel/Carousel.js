import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      selectedImg: '',
      stage: 0,
    }
  }
  componentDidMount(){
    let selected = carouselData[this.state.stage];
    this.setState({ images: carouselData, selectedImg: selected });
  }

  leftClick = () => {
    const newStage = this.state.stage === 0 ? this.state.images.length -1 : this.state.stage - 1;
    this.setState({selectedImg: this.state.images[newStage], stage: newStage});
  }

  rightClick = () => {
    const newStage = this.state.stage === this.state.images.length - 1 ? 0 : this.state.stage + 1;
    this.setState({selectedImg: this.state.images[newStage], stage: newStage});
  }

  selectedImage = () => {
    return <img src={this.state.selectedImg} style={{display: 'block'}} alt='' />
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
