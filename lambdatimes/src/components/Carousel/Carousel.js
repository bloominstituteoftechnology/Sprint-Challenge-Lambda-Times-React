import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0,
      images: [],
    }
  }

  componentDidMount() {
    this.setState({ images: this.props.images });
  }

  leftClick = () => {
    let nextIndex = this.state.selected - 1;
    let lastIndex = this.state.images.length - 1;
    if (nextIndex < 0) this.setState({ selected: lastIndex })
    else this.setState({ selected: nextIndex })
  }

  rightClick = () => {
    let nextIndex = this.state.selected + 1;
    let firstIndex = 0;
    if (nextIndex >= this.state.images.length) this.setState({ selected: firstIndex })
    else this.setState({ selected: nextIndex })
  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.selected]} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <img src={this.state.images[this.state.selected]} style={{display: 'block'}} />
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}