import React from 'react';

const Tab = props => {
  return (
    <button className={''} onClick={props.onClick}>
      {props.tab.toUpperCase()}
    </button>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
