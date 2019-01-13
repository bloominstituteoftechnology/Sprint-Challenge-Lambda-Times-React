import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      const selectedTab = () => {
        const selected = props.tab
      if (selected === props.selectedTab) {
        console.log("selected", selected)
        console.log("selected tab active:", 'tab active-tab')
        // return <div className={'tab active-tab'}></div>;
        return 'tab active-tab'
      } else 
          return 'tab'
    }
  return (
    <div
      className={selectedTab()}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         const selected = props.tab;
        props.selectTabHandler(selected)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
	tab: PropTypes.string,
	selectedTab: PropTypes.string,
	selectTabHandler: PropTypes.func,
}

export default Tab;
