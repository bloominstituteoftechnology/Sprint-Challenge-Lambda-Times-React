import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */

  // const tabString = () => {
  //   if (props.tab === props.selected) {
  //     return "active-tab";
  //   }else return '';
  // }
  
  return (
    <div
      className={`tab ${props.selected ? 'active-tab' : ''}`}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  selected: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tab: PropTypes.string
}

export default Tab;