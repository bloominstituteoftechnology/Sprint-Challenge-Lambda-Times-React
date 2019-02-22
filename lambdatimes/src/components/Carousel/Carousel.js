import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      indexer: 0
    }
  }

  componentDidMount() {
    this.setState({
      images: carouselData
    });
  }

  leftClick = () => {
    this.setState({
      indexer: this.state.indexer < this.state.images.length - 1 ? this.state.indexer + 1 : 0
    })
    console.log(this.state.indexer);
  };

  rightClick = () => {
    this.setState({
      indexer: this.state.indexer > 0 ? this.state.indexer - 1 : this.state.images.length - 1
    });
  };

  selectedImage = () => {
    return (
      <img
        src={this.state.images[this.state.indexer]}
        style={{ display: "block" }}
        alt=""
      />
    );
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {"<"}
        </div>
        <this.selectedImage />
        <div className="right-button" onClick={this.rightClick}>
          {">"}
        </div>
      </div>
    );
  }
}