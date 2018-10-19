import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let className='tab';
  if(props.tab === props.selectedTab) {
    className+=' active-tab'
  }
  return (
    <div
      className={className}
      value="tab"
      onClick={(event) => {
        props.selectedTabHandler(props.tab);
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
  tabs: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Tab;
