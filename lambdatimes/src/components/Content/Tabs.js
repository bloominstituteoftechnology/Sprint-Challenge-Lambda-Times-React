import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
	return (
		<div
			id={props.tab}
			className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
			onClick={(event) => {
				props.selectTabHandler(event);
			}}
		>
			{props.tab}
		</div>
	);
};


Tab.propTypes = {
	tab: PropTypes.string.isRequired,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func
};

export default Tab;