import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      carousel: [],
      selected: '',
      selectedIndex: 0,
    }
  }
  componentDidMount(){
    this.setState({carousel: carouselData});
    setTimeout(() => {
      this.setState({selected: `${this.state.carousel[`${this.state.selectedIndex}`]}`});
    });
  }

  leftClick = () => {
    if(this.state.selectedIndex === 0) {
      this.setState({selectedIndex: `${this.state.carousel.length - 1}`})
    }
    else {
      this.setState({selectedIndex: --this.state.selectedIndex})
      setTimeout(() => {
        this.setState({selected: `${this.state.carousel[`${this.state.selectedIndex}`]}`});
      }, 500)
    }
  }

  rightClick = () => {
    if(this.state.selectedIndex === this.state.carousel.length - 1) {
      this.setState({selectedIndex: 0});
    }
    else {
      this.setState({selectedIndex: ++this.state.selectedIndex})
      setTimeout(() => {
        this.setState({selected: `${this.state.carousel[`${this.state.selectedIndex}`]}`});
      }, 500)
    }
  }

  selectedImage = () => {
    return <img src={this.state.selected} style={{display: 'block'}} alt="carousel" />
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