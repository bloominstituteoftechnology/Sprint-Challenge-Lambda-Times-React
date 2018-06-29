import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if this tab is selected, 
  if it is, the className 
    should be: 'tab active-tab', 
    if it is not it should just be 'tab' */
  const selectedClass = 'tab';
  return (
    <div
      className={`tab ${props.selected ? `active-tab`:''}`}
      onClick={() => props.selectTabHandler(props.tab)}
      key={props.index}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  Tab: PropTypes.shape({
    selected: PropTypes.bool,
    selectTabHandler: PropTypes.func,
    tab: PropTypes.string,
    index: PropTypes.number
  })
};

export default Tab;