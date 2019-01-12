import React, { Component } from 'react';

// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      index: 0
    }
  }

  leftClick = () => {
    if(this.state.index !== 0) {
      this.setState(prevState => ({
        index: prevState.index - 1
      }))

      return;
    }

    this.setState({
      index: this.props.images.length - 1
    });
  }

  rightClick = () => {
    if(this.state.index !== this.props.images.length - 1) {
      this.setState(prevState => ({
        index: prevState.index + 1
      }))

      return;
    }

    this.setState({
      index: 0
    });
  }

  selectedImage = () => {
    const current = this.state.index;

    return <img src={this.props.images[current]} style={{display: 'block'}} alt="Puppers"/>
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
