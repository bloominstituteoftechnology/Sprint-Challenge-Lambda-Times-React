import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const HeaderCss = styled.div`
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

const H1 = styled.h1`
	font-size: 80px;
	font-family: Didot, serif;
	font-weight: bold;
	flex: 8;
	text-align: center;
	color: #000;
`;

const HeaderSpan = styled.span`
	align-self: flex-end;
	font-size: 11px;
	font-weight: bold;
	letter-spacing: 1px;
	flex: 1;
	${(props) => (props.type === `date` ? `margin-left: 25px;` : null)};
	${(props) => (props.type === `temp` ? `text-align: right;` : null)};
	${(props) => (props.type === `temp` ? `margin-right: 25px;` : null)};
`;

const Header = () => {
	return (
		<HeaderCss>
			<HeaderSpan type="date">SMARCH 32, 2018</HeaderSpan>
			<H1>Lambda Times</H1>
			<HeaderSpan type="temp">98°</HeaderSpan>
		</HeaderCss>
	);
};

export default Header;
