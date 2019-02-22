import React from 'react';

const Tab = (props) => {
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	return (
		<div
			className={props.selectedTab === props.tabData ? 'tab active-tab' : 'tab'}
			onClick={(e) => props.selectTabHandler(e)}
			value={props.tabData.toUpperCase()}
		>
			{props.tabData.toUpperCase()}
		</div>
	);
};

// Make sure you include PropTypes on your props.

export default Tab;
