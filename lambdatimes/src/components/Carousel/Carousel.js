import React, { Component } from 'react';
import { carouselData } from '../../data'
import {CarouselStyle, CarouselLeftButton, CarouselRightButton, CarouselImg} from '../StyledComponents';

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
    return <CarouselImg src={this.state.data[this.state.current]} style={{display: 'block'}} />
  }
  
  render(){
    console.log(this.state.data)
    return (
      <CarouselStyle>
        <CarouselLeftButton onClick={this.leftClick}>{"<"}</CarouselLeftButton>
        {this.selectedImage()}
        <CarouselRightButton className="right-button" onClick={this.rightClick}>{">"}</CarouselRightButton>
      </CarouselStyle>
    )
  }
}