import React from 'react';
import Tabs from './Tabs';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
        // if(props.tab === props.selectedTab){
        //  return props.tab.className='tab active-tab'
        // }
        // else{
        //   return props.tab.className='tab'
        // }

      const istab = props.tab === props.selectedTab;
      
      
      
  return (
    <div
      className={`tab ${istab ? 'active-tab' : ''}`}
      /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      onClick={() => props.selectedTabHandler(props.tab)}
    >

      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab:PropTypes.string,
  tab: PropTypes.string,
};
export default Tab;
