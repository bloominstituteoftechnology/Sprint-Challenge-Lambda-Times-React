import React from 'react';
import styled from 'styled-components';

const TopBarC = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: row;
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

const ContainerLeftSpan = styled.span`
	cursor: pointer;
	margin-right: 25%;
	font-weight: bold;
`;

const ContainerCenter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex: 3;
	font-size: 9px;
`;

const ContainerCenterSpan = styled.div`
	cursor: pointer;
	margin-right: 5%;
	&:hover {
		text-decoration: underline;
	}
	&:last-child {
		margin-right: 0;
	}
`;

const ContainerRight = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	flex-direction: row;
	flex: 1;
	font-size: 11px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
	}
`;

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
	return (
		<TopBarC>
			<Container>
				<ContainerLeft>
					<ContainerLeftSpan>TOPICS</ContainerLeftSpan>
					<ContainerLeftSpan>SEARCH</ContainerLeftSpan>
				</ContainerLeft>
				<ContainerCenter>
					<ContainerCenterSpan>GENERAL</ContainerCenterSpan>
					<ContainerCenterSpan>BROWNBAG</ContainerCenterSpan>
					<ContainerCenterSpan>RANDOM</ContainerCenterSpan>
					<ContainerCenterSpan>MUSIC</ContainerCenterSpan>
					<ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
				</ContainerCenter>
				<ContainerRight>
					<span>LOG IN</span>
				</ContainerRight>
			</Container>
		</TopBarC>
	);
};

export default TopBar;
