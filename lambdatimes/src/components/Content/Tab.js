import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from './../../../node_modules/styled-components';

const Div = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	color: ${(props) => (props.inactive ? '#fff' : '#333')};
	background-color: ${(props) => (props.inactive ? '#333' : '#fff')};
	border: ${(props) => (props.inactive ? null : '2px solid #333')};
	margin: 0 5px;
	padding: 2px 10px;
	font-size: 12px;
	letter-spacing: 2px;
	cursor: pointer;
	font-weight: bold;
	:hover {
		text-decoration: underline;
	}
`;

class Tab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inactive: true
		};
	}
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	render() {
		return (
			<Div
				inactive={this.state.inactive}
				id={this.props.tab}
				onClick={(event) => {
					this.props.selectTabHandler(event);
					this.setState({
						inactive: false
					});
				}}
			>
				{this.props.tab}
			</Div>
		);
	}
}
Tab.propTypes = {
	tab: PropTypes.string.isRequired,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func
};
// Make sure you include PropTypes on your props.

export default Tab;
