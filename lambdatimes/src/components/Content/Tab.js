import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  let tabClass = ''; 
    if (props.tab === props.selectedTab){
     tabClass = 'tab active-tab'
  } else {
     tabClass = 'tab'
  }

return (
  <div
    className={tabClass}
    onClick={() => props.selectTabHandler(props.tab)}
  >
    {props.tab.toUpperCase()}
  </div>
 );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tab;
