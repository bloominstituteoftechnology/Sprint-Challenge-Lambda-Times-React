import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styled from './../../../node_modules/styled-components';

const Section = styled.section`
	display: flex;
	justify-content: ${(props) => (props.main ? 'center' : 'none')};
	align-items: center;
	flex-direction: row;
	border-bottom: ${(props) => (props.main ? '1px solid lightgrey' : null)};
	width: ${(props) => (props.main ? '100%' : null)};
	height: ${(props) => (props.main ? '47px' : null)};
	background-color: ${(props) => (props.main ? '#fff' : null)};
	@media (min-width: 1280px) {
		width: ${(props) => (props.main ? '1280px' : null)};
	}
`;

const Span = styled.span`
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;

const Tabs = (props) => {
	return (
		<Section main>
			<Section>
				<Span>TRENDING TOPICS:</Span>
				{props.tabs.map((tab, index) => {
					return (
						<Tab
							tab={tab}
							key={index}
							selectTabHandler={(event) => props.selectTabHandler(event)}
							selectedTab={props.selectedTab}
						/>
					);
				})}
			</Section>
		</Section>
	);
};
Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func
};
// Make sure to use PropTypes to validate your types!
export default Tabs;
