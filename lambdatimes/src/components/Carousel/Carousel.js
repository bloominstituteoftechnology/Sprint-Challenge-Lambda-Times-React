import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      imgs : [ ],
      index :0
    }
  }
  componentDidMount(){
      this.setState({
        imgs : carouselData
      })
  }

  leftClick = () => {
    this.setState(prevState => ({
      index:
        0<prevState.index -1<4
        ? this.state.index -1
        :this.state.index =4
    }))

  }

  rightClick = () => {
    this.setState(prevState => ({
      index:
        4> prevState.index +1 >0
        ?this.state.index +1
        :this.state.index =0
      }))
  }

  selectedImage = () => {
    return <img src={this.state.imgs[this.state.index]} style={{display: 'block'}} />
  }

  render(){
    return (
      <div className="carousel">
        {this.selectedImage()}
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}
