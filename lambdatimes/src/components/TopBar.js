import React from 'react';
import styled, { css } from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file
const TopBarSC = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	position: fixed;
	height: 44px;
	background-color: #333;
`;

const Container = styled.div`
	width: 100%;
	display: flex;
	justify-content: none;
	align-items: none;
	flex-direction: row;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;

	@media (min-width: 1280px) {
		width: 1280px;
	}
`;

const ContainerLeft = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
`;

const ContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 3;
	font-size: 9px;
`;

const ContainerRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
`;

const Span = styled.span`
	cursor: pointer;

	${props =>
		props.left &&
		css`
			margin-right: 25%;
			font-weight: bold;
		`};

	${props =>
		props.center &&
		css`
			margin-right: 5%;

			&:last-child {
				margin-right: 0;
			}
			&:hover {
				text-decoration: underline;
			}
		`};
`;

const TopBar = () => {
	return (
		<TopBarSC>
			<Container>
				<ContainerLeft>
					<Span left>TOPICS</Span>
					<Span left>SEARCH</Span>
				</ContainerLeft>
				<ContainerCenter>
					<Span center>GENERAL</Span>
					<Span center>BROWNBAG</Span>
					<Span center>RANDOM</Span>
					<Span center>MUSIC</Span>
					<Span center>ANNOUNCEMENTS</Span>
				</ContainerCenter>
				<ContainerRight>
					<Span>LOG IN</Span>
				</ContainerRight>
			</Container>
		</TopBarSC>
	);
};

export default TopBar;
