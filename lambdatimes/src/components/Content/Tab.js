import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const selectedClass = `tab ${props.selected === props.tab ? 'active-tab':''}`; 
  return (
    <div
      className={selectedClass}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.proptypes = {
  selectTabHandler: PropTypes.func,
  selected: PropTypes.string,
  tab: PropTypes.string
}
export default Tab;