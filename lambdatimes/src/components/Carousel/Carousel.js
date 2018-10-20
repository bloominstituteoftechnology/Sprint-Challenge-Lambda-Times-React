import React, { Component } from 'react';
import { carouselData } from '../../data'

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: [],
        current: 0
    }
  }
  componentDidMount(){
    this.setState({
        data: [...carouselData]
    })
  }

  leftClick = () => {
    let currentImg = this.state.current;
    { currentImg > 0 ? this.setState({current: currentImg-1}) : this.setState({current: this.state.data.length-1}) }
  }

  rightClick = () => {
    let currentImg = this.state.current;
    { currentImg < this.state.data.length-1 ? this.setState({current: currentImg+1}) : this.setState({current: 0})}
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.current]} style={{display: 'block'}} />
  }
  
  render(){
    console.log(this.state.data)
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>{"<"}</div>
        {this.selectedImage()}
        <div className="right-button" onClick={this.rightClick}>{">"}</div>
      </div>
    )
  }
}