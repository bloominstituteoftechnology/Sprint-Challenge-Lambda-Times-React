import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
background-color: #fff;
border-bottom: 1px solid lightgrey;
width: 100%;
height: 120px;
margin-top: 44px;
padding-bottom: 15px;
`

const HeaderDate = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
margin-left: 25px;
flex: 1;
`

const HeaderTitle = styled.h1`
font-size: 60px;
font-family: Didot, serif;
font-weight: bold;
flex: 8;
text-align: center;
color: #000;
`

const Temperature = styled.span`
align-self: flex-end;
font-size: 11px;
font-weight: bold;
letter-spacing: 1px;
text-align: right;
margin-right: 25px;
flex: 1;

`

const APIkey = "1da2e29772ce6e50353a9941cc3bed10";
const date = new Date();
const monthNames = [
  "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" 
  ];
const month = date.getMonth()
const day = date.getDate()
const year = date.getFullYear()

console.log(day)

const dateString = `${monthNames[month].toUpperCase()} ${day}, ${year}`


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 98,
      cityName: "San Francisco"
    }
  }

  componentDidMount() {
    axios
      .get(`http://api.openweathermap.org/data/2.5/weather?id=2152797&APPID=${APIkey}`)
      .then(response => {
        this.setState({ 
          temperature: parseInt((response.data.main.temp - 273.15) * 9/5 + 32),
        cityName: response.data.name})
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderDate>{dateString}</HeaderDate>
        <HeaderTitle>Lambda Times</HeaderTitle>
        <Temperature>{this.state.cityName}: {this.state.temperature}°F</Temperature>
      </HeaderWrapper>
    )
  }
}

export default Header
