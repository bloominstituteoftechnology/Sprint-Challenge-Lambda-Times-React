import React, {Component} from 'react';
import {carouselData} from '../../data';
// Complete this Carousel
export class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentImg: '',
    };
  }
  componentDidMount() {
    this.setState({data: carouselData});
    this.setState({currentImg: carouselData[0]});
  }

  leftClick = () => {
    let imgs = this.state.data.slice();
    let newImgs = '';
    imgs.forEach((img, index) => {
      if (img === this.state.currentImg) {
        let newIndex = index - 1;
        if (newIndex < 0) {
          newIndex = 3;
        }
        newImgs = imgs[newIndex];
      }
    });
    this.setState({currentImg: newImgs});
  };

  rightClick = () => {
    let imgs = this.state.data.slice();
    let newImgs = '';
    imgs.forEach((img, index) => {
      if (img === this.state.currentImg) {
        let newIndex = index + 1;
        if (newIndex > 3) {
          newIndex = 0;
        }
        newImgs = imgs[newIndex];
      }
    });
    this.setState({currentImg: newImgs});
  };

  selectedImage = () => {
    return <img src={this.state.currentImg} style={{display: 'block'}} />;
  };

  render() {
    return (
      <div className="carousel">
        <div className="left-button" onClick={this.leftClick}>
          {'<'}
        </div>
        <img src={this.state.currentImg} alt="" />
        <div className="right-button" onClick={this.rightClick}>
          {'>'}
        </div>
      </div>
    );
  }
}
