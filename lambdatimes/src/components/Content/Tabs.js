import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
const Tabs = props => {
	return (
		<div className="tabs">
			<div className="topics">
				<span className="title">TRENDING TOPICS:</span>

				{props.tabs.map(tab => {
					return (
						<Tab
							key={Math.random()}
							selectTabHandler={props.selectTabHandler}
							selectedTab={props.selectedTab}
							tab={tab}
						/>
					);
				})}
			</div>
		</div>
	);
};

Tabs.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	selectTabHandler: PropTypes.func.isRequired,
	tabs: PropTypes.array.isRequired
};

export default Tabs;
