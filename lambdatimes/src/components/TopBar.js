import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
	return (
		<StyledTopBar>
			<StyledContainer>
				<StyledContainer left>
					<StyledSpan left>TOPICS</StyledSpan>
					<StyledSpan left>SEARCH</StyledSpan>
				</StyledContainer>
				<StyledContainer center>
					<StyledSpan center>GENERAL</StyledSpan>
					<StyledSpan center>BROWNBAG</StyledSpan>
					<StyledSpan center>RANDOM</StyledSpan>
					<StyledSpan center>MUSIC</StyledSpan>
					<StyledSpan center>ANNOUNCEMENTS</StyledSpan>
				</StyledContainer>
				<StyledContainer right>
					<StyledSpan right>LOG IN</StyledSpan>
				</StyledContainer>
			</StyledContainer>
		</StyledTopBar>
	);
};

export default TopBar;

export const StyledTopBar = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	position: fixed;
	height: 44px;
	background-color: #333;
`;

export const StyledContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: none;
	align-items: none;
	flex-direction: row;
	color: #fff;
	letter-spacing: 1px;
	padding: 0 10px;
	${(props) =>
		props.left
			? `display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;`
			: null} ${(props) =>
			props.right
				? `display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;`
				: null};
	${(props) =>
		props.center
			? `display : flex;
justify - content: center;
align - items: center;
flex - direction: row;
flex: 3;
font - size: 9px;`
			: null};
`;

export const StyledSpan = styled.span`
	${(props) =>
		props.left
			? `cursor: pointer;
	margin-right: 25%;
	font-weight: bold;`
			: null} ${(props) =>
			props.center
				? `cursor: pointer;
margin-right: 5%;
:last-child {
	margin-right: 0;
}
:hover {
	text-decoration: underline;
}`
				: null} ${(props) => (props.right ? `cursor: pointer` : null)};
`;
