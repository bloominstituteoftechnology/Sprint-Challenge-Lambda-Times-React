import React from 'react';
import styled from 'styled-components';
import trees from './img/trees.jpeg';
import computer from './img/computer.jpeg';
import mountains from './img/mountains.jpeg';
import turntable from './img/turntable.jpeg'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

library.add(faCaretLeft, faCaretRight);

let images = [trees, computer, mountains, turntable];

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

img {
width: 100%;
}
`

const CarouselLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding-right: 5px;
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


:hover {
color: #333;
background-color: #fff;
border: 2px solid #333;
}
`

const CarouselRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
padding-left: 5px;
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


:hover {
color: #333;
background-color: #fff;
border: 2px solid #333;
}
`

class Carousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            index: 0
        }
    }

    clickRight = () => {
        if (this.state.index < images.length - 1) {
            this.setState({index: this.state.index + 1})
        } else {
            this.setState({index: 0})
        }
    }

    clickLeft = () => {
        if (this.state.index > 0) {
            this.setState({index: this.state.index - 1})
        } else {
            this.setState({index: images.length-1})
        }
    }


    render() {
        return (
            <CarouselContainer>
            <CarouselLeft onClick={this.clickLeft}><FontAwesomeIcon icon="caret-left" /></CarouselLeft>
            <img src={images[this.state.index]}/>
            <CarouselRight onClick={this.clickRight}><FontAwesomeIcon icon="caret-right" /></CarouselRight>
            </CarouselContainer>
        )
    }
}

export default Carousel