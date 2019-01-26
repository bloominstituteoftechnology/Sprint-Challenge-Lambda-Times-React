import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = (props) => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>
				{props.tabs.map((tab, i) => (
					<Tab key={i} tab={tab} selectHandler={props.selectHandler} selectedTab={props.selectedTab} />
				))}
			</div>
		</div>
	);
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
	tabs: PropTypes.array,
	selectedTab: PropTypes.string,
	selectHandler: PropTypes.func
};
export default Tabs;
