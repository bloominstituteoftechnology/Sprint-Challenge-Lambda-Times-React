import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      // using ternary approach again
   className={ props.selectedTab === props.tab  // is selectedTab prop same as tab prop?
                  ? 'tab-active-tab'               // Y, className set to active-tab
                  : 'tab'                          // N, className set to whatever tab
      }


      onClick={() => {
          props.selectTabHandler(props.tab);

      }}
      /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */

    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabs: PropTypes.array,
  tab: PropTypes.object,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.function,

};


export default Tab;
