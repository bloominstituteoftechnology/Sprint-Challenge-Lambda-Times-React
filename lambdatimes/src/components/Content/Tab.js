import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab':'tab'}
      onClick={() => {
        
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes ={
  tab: PropTypes.arrayOf(PropTypes.string),
  selectedTab:PropTypes.string,
  selectTabHandler:PropTypes.string

}

export default Tab;
