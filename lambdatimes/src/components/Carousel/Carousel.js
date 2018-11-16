import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from '../../../node_modules/styled-components';

const CarouselSection = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 500px;
	position: relative;
	overflow: hidden;
	margin: 1% 0;
	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const CarouselButton = styled.button`
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
	transform: translate(0, -50%);
	top: 50%;
	left: ${(props) => (props.left ? '25px' : null)};
	right: ${(props) => (props.right ? '25px' : null)};
	:hover {
		color: #333;
		background-color: #fff;
		border: 2px solid #333;
	}
`;

const Image = styled.img`
	width: 100%;
	display: none;
`;
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			imageIndex: 0
		};
	}
	componentDidMount() {
		this.setState({
			images: carouselData
		});
	}

	leftClick = () => {
		if (this.state.imageIndex === 0) {
			this.setState({
				imageIndex: 3
			});
		} else if (this.state.imageIndex === 3) {
			this.setState({
				imageIndex: 2
			});
		} else if (this.state.imageIndex === 2) {
			this.setState({
				imageIndex: 1
			});
		} else {
			this.setState({
				imageIndex: 0
			});
		}
	};

	rightClick = () => {
		if (this.state.imageIndex === 0) {
			this.setState({
				imageIndex: 1
			});
		} else if (this.state.imageIndex === 1) {
			this.setState({
				imageIndex: 2
			});
		} else if (this.state.imageIndex === 2) {
			this.setState({
				imageIndex: 3
			});
		} else {
			this.setState({
				imageIndex: 0
			});
		}
	};

	render() {
		return (
			<CarouselSection>
				<CarouselButton left onClick={this.leftClick}>
					{'<'}
				</CarouselButton>
				<Image
					src={this.state.images[this.state.imageIndex]}
					alt="current"
					style={{ display: 'block' }}
				/>
				<CarouselButton right onClick={this.rightClick}>
					{'>'}
				</CarouselButton>
			</CarouselSection>
		);
	}
}
