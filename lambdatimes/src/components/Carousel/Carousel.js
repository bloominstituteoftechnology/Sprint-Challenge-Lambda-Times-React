import React, { Component } from 'react';
import { carouselData } from '../../data'
import styled from 'styled-components';

// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      selected: '',
    }
  }
  componentDidMount(){
    this.setState({ 
                    data : carouselData,
                    selected: carouselData[0],
                  })
  }

  leftClick = () => {
    this.state.selected === this.state.data[0] 
                            ? this.setState({ selected : this.state.data[this.state.data.length - 1] }) 
                            : this.setState({ selected : this.state.data[this.state.data.indexOf(this.state.selected) - 1] })
  }

  rightClick = () => {
    this.state.selected === this.state.data[this.state.data.length - 1] 
                            ? this.setState({ selected : this.state.data[0] }) 
                            : this.setState({ selected : this.state.data[this.state.data.indexOf(this.state.selected) + 1]})
  }

  selectedImage = () => {
    return <Image src={this.state.selected} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselContainer>
        <ButtonLeft left onClick={this.leftClick}>{"<"}</ButtonLeft>
          {this.selectedImage()}
        <ButtonRight right onClick={this.rightClick}>{">"}</ButtonRight>
      </CarouselContainer>
    )
  }
}

const CarouselContainer = styled.div`
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

const ButtonLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  z-index: 1;
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
  left: 25px;

  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  /* left: ${props => props.left ? "25px" : "0px"};
  right: ${props => props.right ? "25px" : "0px"}; */
`;

const ButtonRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  z-index: 1;
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
  right: 25px;

  :hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  /* left: ${props => props.left ? "25px" : "0px"};
  right: ${props => props.right ? "25px" : "0px"}; */
`;

const Image = styled.img`
  width: 100%;
  display: none;
`;