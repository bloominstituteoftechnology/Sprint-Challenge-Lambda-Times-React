import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
if (props.tab)
  return (
    <div
    className={ props.selected === props.selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
}

export default Tab;
