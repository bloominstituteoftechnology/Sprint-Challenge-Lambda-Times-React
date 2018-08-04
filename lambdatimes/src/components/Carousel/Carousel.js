import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';
// Complete this Carousel 

const CarouseL=styled.div`
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
`
  
const LeftButton=styled.div`
  top: 50%;
  left: 25px;
  transform: translate(0,-50%);
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
  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`

const RightButton=styled.div`
  top: 50%;
  right: 25px;
  transform: translate(0, -50%);
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
  &:hover{
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }
`

export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      number:''
    }
  }
  componentDidMount(){
    this.setState({number:0});
  }

  leftClick = () => {
    if (this.state.number>0) {
      this.setState((prevState)=>{return {number:prevState.number-1}});
    } else {
      this.setState({number:3});
    }
  }

  rightClick = () => {
    if (this.state.number<3) {
      this.setState((prevState)=>{return {number:prevState.number+1}});
    } else {
      this.setState({number:0});
    }
  }

  selectedImage = (number) => {
    return <img alt='' src={carouselData[number]} style={{display: 'block',height: '500px',width: 'auto'}} />
  }
  
  render(){
    return (
      <CarouseL >
        {this.selectedImage(this.state.number)}
        <LeftButton onClick={this.leftClick}>{"<"}</LeftButton>
        <RightButton  onClick={this.rightClick}>{">"}</RightButton>
      </CarouseL>
    )
  }
}
