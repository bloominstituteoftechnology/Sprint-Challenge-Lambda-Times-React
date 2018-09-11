import React from 'react';
import PropTypes from 'prop-types';
const Tab = props => {
  const active = props.tab === props.selectedTab;
  // const clickHandler = () => props.selectedTabHandler(props.tab);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={`tab ${active ? 'active-tab': null}`}
      onClick={() => props.selectTabHandler(props.tab)}>
      
    
      {props.tab.toUpperCase()}
    </div>
  );
};
Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
}
// Make sure you include PropTypes on your props.

export default Tab;
