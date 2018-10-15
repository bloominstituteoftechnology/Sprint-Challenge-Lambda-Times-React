import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      // console.log(props.selectedTab);
      // console.log(props.selectTabHandler)
      // console.log(props.tab);
     let name; 
    if(props.tab === props.selectedTab) {
       name = 'tab active-tab';
   } else {
       name = 'tab';  
   }
      

  return (
    <div className={name} onClick={props.selectTabHandler} >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler:PropTypes.func.isRequired
}

export default Tab;
