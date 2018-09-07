import React from 'react';
import propTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

let yeet;

      if(props.tab===props.selectedTab){

        yeet = 'tab active-tab';

      }
      else{
        yeet= 'tab';
      }



  return (
    <div
      className={yeet}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         props.selectTabHandler(props.tab);

      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTabHandler: propTypes.func.isRequired, 
  selectedTab: propTypes.string.isRequired, 
  tab: propTypes.string.isRequired
}
export default Tab;
