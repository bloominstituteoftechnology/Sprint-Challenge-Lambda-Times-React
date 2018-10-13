import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components'

const ChildCarousel = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    height: 500px;
    position: relative;
    overflow: hidden;
    margin-top: 16px;  
  @media (min-width: 1200px) {
      width: 1200px;
  }
  >img {
      width: 100%;
      display: none;
  }
`

const CarouselButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: none;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    font-size: 40px;
    border-radius: 50%;
    position: absolute;
    width: 50px;
    height: 50px;
    cursor: pointer;
    top: 50%;
    transform: translate(0, -50%);
    &:hover {
        color: #333;
        background-color: #fff;
        border: 2px solid #333;
    }
    ${props => props.notClassName === "left-button" ? `left: 25px;` : null}
    ${props => props.notClassName === "right-button" ? `right: 25px;` : null}
`

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
        images: [],
        index: 0
    }
  }
  componentDidMount(){
    this.setState({images: [...carouselData]})
  }

  leftClick = () => {
      this.setState({
        index: this.state.index -1 < 0 ? this.state.images.length - 1 : this.state.index - 1
      })
  }

  rightClick = () => {
    this.setState({
      index: this.state.index + 1 > this.state.images.length - 1 ? 0 : this.state.index + 1
    })
  }

  selectedImage = () => <img src={this.state.images[this.state.index]} style={{display: 'block'}} alt="" />
  
  
  render(){
    return  <ChildCarousel>
                <CarouselButton notClassName="left-button" onClick={this.leftClick}>{"<"}</CarouselButton>
                {this.selectedImage()}
                <CarouselButton notClassName="right-button" onClick={this.rightClick}>{">"}</CarouselButton>
            </ChildCarousel>       
  }
}