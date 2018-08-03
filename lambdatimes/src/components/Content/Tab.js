import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const selectedClass = `tab ${props.selected === props.tab ? 'active-tab' : ''}`;
  return (
    <div
      className={selectedClass}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  tab: PropTypes.string,
  selected: PropTypes.string,
  selectTabHandler: PropTypes.func,
};

export default Tab;