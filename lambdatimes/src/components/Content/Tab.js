import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
	let className = '';
	if (props.tab === props.selectedTab) {
		className = 'tab active-tab';
	} else {
		className = 'tab';
	}
	/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
	return (
		<div
			className={className}
			onClick={() => props.selectTabHandler(props.tab)}
			/* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
		>
			{props.tab}
		</div>
	);
};

Tab.propTypes = {
	tab: PropTypes.object,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.function
};

// Make sure you include PropTypes on your props.

export default Tab;
