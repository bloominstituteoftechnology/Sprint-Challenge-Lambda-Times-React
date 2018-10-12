import React from 'react';

const Tab = (props) => {
	{
		if (props.selected === 'all') {
			return <div className="tab active-tab" />;
		} else {
			return (
				<div
					className={''}
					onClick={(props) => {
						props.selectedTabHandler(props);
					}}
				/>
				/* Replace this dummy click handler function with your selectTabHandler function from props
             you'll need to pass the `tab` in as an argument to this handler. */
			);
		}
	}
};
/* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab'*/

// Make sure you include PropTypes on your props.

export default Tab;
