import React from 'react';
import propTypes from 'prop-types';


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      let cn ='';
      if (props.selectedTab === props.tab) {
        cn = 'tab active-tab'
      } else {
        cn = 'tab'
      }
  return (
    <div
      className={cn}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: propTypes.string.isRequired,
  selectTabHandler: propTypes.func.isRequired,
  selectedTab: propTypes.string.isRequired
}

export default Tab;
