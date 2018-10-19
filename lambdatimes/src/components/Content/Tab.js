import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  if(props.tab===props.selectedTab){
    tabClass='tab active-tab';
  } else{
    tabClass='tab';
  }
  return (
    <div className= {tabClass} 
      onClick={props.selectedTabHandler} name={props.tab}>
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
  tab : PropTypes.string,
  selectedTab : PropTypes.string,
  selectTabHandler : PropTypes.function 
    
}
export default Tab;
