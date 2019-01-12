import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = (props) => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>
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
			</div>
		</div>
	);
};
Tabs.propTypes = {
	tabs: PropTypes.array.isRequired,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func
};

export default Tabs;