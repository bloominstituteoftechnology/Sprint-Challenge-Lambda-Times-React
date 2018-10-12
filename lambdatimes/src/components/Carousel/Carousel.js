import React, { Component } from 'react';
import { carouselData } from '../../data';
// Complete this Carousel
export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carousel: [],
			index: 0
		};
	}
	componentDidMount() {
		this.setState({
			carousel: carouselData
		});
	}

	leftClick = () => {
		this.setState({
			index:
				this.state.index === 0
					? this.state.carousel.length - 1
					: this.state.index - 1
		});
	};

	rightClick = () => {
		this.setState({
			index:
				this.state.index === this.state.carousel.length - 1
					? 0
					: this.state.index + 1
		});
	};

	selectedImage = () => {
		return (
			<img
				src={this.state.carousel[this.state.index]}
				style={{ display: 'block' }}
			/>
		);
	};

	render() {
		return (
			<div className="carousel">
				<div className="left-button" onClick={this.leftClick}>
					{'<'}
				</div>
				{this.selectedImage()}
				<div className="right-button" onClick={this.rightClick}>
					{'>'}
				</div>
			</div>
		);
	}
}
