import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
	return (
		<div
			className={props.tab === props.selectedTab ? 'active-tab' : 'tab'}
			onClick={e => {
				e.preventDefault();
				props.selectTabHandler(props.tab);
			}}
		>
			{props.tab.toUpperCase()}
		</div>
	);
};
Tab.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	selectTabHandler: PropTypes.func.isRequired,
	tab: PropTypes.string.isRequired
};



export default Tab;
