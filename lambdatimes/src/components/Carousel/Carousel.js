import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 


export default class Carousel extends Component {
  constructor(props){
    console.log(props)
    super(props);
    this.state = {
      data: [],
      Currentindex: 0
    }
  }
  componentDidMount(){
    this.setState({
      data: carouselData,
      Currentindex: 0
    })
  }

  leftClick = () => {
    if(this.state.Currentindex === 0) {
      this.setState({Currentindex: this.state.data.length-1})
    } else {
      this.setState({Currentindex: this.Currentindex-1})
    }
  }

  rightClick = () => {
    if(this.state.Currentindex === this.state.data.length-1) {
      this.setState({Currentindex: 0})
    } else {
      this.setState({Currentindex: this.state.Currentindex+1})
    }
  }

  selectedImage = () => {
    return <img src={this.state.data[this.state.Currentindex]} style={{display: 'block'}} />
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