import React, { Component } from 'react';
import { carouselData } from '../../data'
// Complete this Carousel

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivCarousel = styled.div`
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
`;

const DivCarouselLeftButton = style.div`
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
  left: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const DivCarouselRightButton = style.div`
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
  right: 25px;
  transform: translate(0, -50%);

  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`;

const Img = style.img`
  width: 100%;
  display: none;
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <Img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <DivCarousel>
        <DivCarouselLeftButton onClick={this.leftClick}>{"<"}</DivCarouselLeftButton>
        <DivCarouselRightButton onClick={this.rightClick}>{">"}</DivCarouselRightButton>
      </DivCarousel>
    )
  }
}