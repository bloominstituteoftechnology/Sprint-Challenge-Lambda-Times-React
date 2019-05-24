import React from 'react';
import Tabs from './Tabs';
import PropTypes from 'prop-types'


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => {props.selectTabHandler(props.tab)
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
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
  selectedTabHandler: PropTypes.func,
}



export default Tab;

// When we map through Tabs, we return one Tab. 
// We pass in Tabs, selectedTab, and selectedTabHandler from Tabs. 

// (props.tabs = this.state.tabs
// props.selectedtab = this.state.selected... which is selected: 'all'
// props.selectedTabHandler = sets state... tab is whatever is selected)

{/* <className = if props.tab is equal to the selected 'tab active-tab' else 'tab' */}
// if you inspect console, you can see the div className change when clicked



