import React from 'react';

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

// Make sure you include PropTypes on your props.

export default Tab;
