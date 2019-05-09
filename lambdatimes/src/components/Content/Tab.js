import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  const tabSelector = (str) =>{
      if (props.tab.toLowerCase() == props.selectedTab.toLowerCase()){
        return 'active-tab'
      
  }
  else return '';

}

 
  console.log(tabSelector(props.tabs))
  return (
    <div
      className={`tab ${tabSelector(props.tabs)}`}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
         const change = props.tab
         props.selectTabHandler(change)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
    }
// Make sure you include PropTypes on your props.
Tab.Proptypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.function
}
export default Tab;
