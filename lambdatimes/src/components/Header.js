import React from 'react';
import styled from './../../node_modules/styled-components';
// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Div = styled.div`
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
	@media (min-width: 1280px) {
		width: 1280px;
	}
`;
const Span = styled.span`
	align-self: flex-end;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;
	text-align: ${props => props.temp ? 'right' : null};
	margin-left: ${props => props.date ? '25px' : null};
	margin-right: ${props => props.temp ? '25px' : null};
	flex: 1;
`;
const Heading = styled.h1`
	font-size: 60px;
	font-family: Didot, serif;
	font-weight: bold;
	flex: 8;
	text-align: center;
	color: #000;
`;


const Header = () => {
	return (
		<Div>
			<Span date>SMARCH 32, 2018</Span>
			<Heading>Lambda Times</Heading>
			<Span temp>98°</Span>
		</Div>
	);
};

export default Header;
