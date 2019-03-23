import React from 'react';
import propTypes from 'prop-types';

const Tab = props => {
    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    if (props.tab) {
    }
    return (
        <div
            className={
                props.selected === props.selectedTab ? 'tab active-tab' : 'tab'
            }
            onClick={() => {
                /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
                return props.selectTabHandler(props.tab);
            }}
        >
            {props.tab.toUpperCase()}
        </div>
    );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
    selectTabHandler: propTypes.func.isRequired,
    selectedTab: propTypes.string.isRequired,
    tab: propTypes.string.isRequired
};

export default Tab;
