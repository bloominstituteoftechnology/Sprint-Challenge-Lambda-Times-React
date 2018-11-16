import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      
      let selectedClassName = 'tab'

      if(props.selectedTab === 'all') { 
        selectedClassName = 'tab active-tab'
      } else {
        selectedClassName = 'tab'
      }

  return (
    <div
      className={selectedClassName}
      // onClick={props.changeSelected(props.props)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
    >
      {props.props.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tabs : PropTypes.array,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
}

export default Tab;
