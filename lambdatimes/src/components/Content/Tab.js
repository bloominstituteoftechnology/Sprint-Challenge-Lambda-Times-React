import React from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
	const isActive = props.tab === props.selectedTab;
	return (
		<div
			className={`tab ${isActive ? 'active-tab' : null}`}
			// className={`tab ${isActive && 'active-tab'}`}
			onClick={() => {
				props.selectTabHandler(props.tab);
				props.filterCards(props.tab);
			}}
		>
			{props.tab.toUpperCase()}
		</div>
		/* Replace this dummy click handler function with your selectTabHandler function from props
             you'll need to pass the `tab` in as an argument to this handler. */
	);
};
/* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

// Make sure you include PropTypes on your props.

Tab.propTypes = {
	selectedTab: PropTypes.string.isRequired,
	tab: PropTypes.string.isRequired,
	selectedTabHandler: PropTypes.func.isRequired,
	filterCards: PropTypes.func.isRequired
}.isRequired;

export default Tab;
