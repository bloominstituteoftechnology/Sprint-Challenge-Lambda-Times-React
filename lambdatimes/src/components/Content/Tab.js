import React from 'react';
import propTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      const selectedClass = 'tab'
      return (
        
        <div className="tab" onClick={() => props.changeSelected(props.tab)}>
          {props.tab.toUpperCase()}
        </div>
      )
    }
    Tab.propTypes = {
      tab: propTypes.string.isRequired,
      changeSelected: propTypes.func.isRequired,
      
    }

// Make sure you include PropTypes on your props.

export default Tab;
