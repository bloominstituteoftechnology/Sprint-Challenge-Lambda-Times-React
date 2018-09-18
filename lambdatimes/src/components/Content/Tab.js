import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    
  return (
    <div className={props.tab === props.selectedTab ? "active-tab" : ""} onClick={() => props.selectTabHandler(props.tab)}>
        {props.tab.toUpperCase()}
    </div>
  ); //if tab name from the cards is equal to the selected tab, then activate that tab, else show nothing
}

Tab.propTypes = {
  key: PropTypes.string,
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;

 {/* Replace this dummy click handler function with your 
        selectTabHandler function from props you'll need to pass the `tab` in 
        as an argument to this handler. Make sure you include PropTypes on your props.*/}