import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      images: [],
      currentImage: 0,
    }
  }
  componentDidMount(){
    this.setState({ images: [
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ed86b965826826e3dd08bb3b33726543&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2059a86937844c84267d5126e5b36aa3&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1517799094725-e3453440724e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=353f3663a9fae75773d2942aeb37c2c8&auto=format&fit=crop&w=500&q=60",
      "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fe6b92f88f55824e64a1bae15f5bf52a&auto=format&fit=crop&w=500&q=60"
    ]})

  }

  leftClick = () => {
    let prevImage = this.state.currentImage - 1;
    if (prevImage < 0) {
      prevImage = this.state.images.length - 1;
    }
    this.setState({currentImage: prevImage})
    }


  rightClick = () => {
    let nextImage = this.state.currentImage + 1;
    if (nextImage >= this.state.images.length) {
      nextImage = 0;
    }
    this.setState({ currentImage: nextImage });

  }

  selectedImage = () => {
    return <img src={this.state.images[this.state.currentImage]} style={{display: 'block'}} />
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