import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
if (props.tab === props.selectedTab) {
  (props.tab.className === 'tab active-tab')
} else {
  (props.tab.className ==='tab')
}
  return (
    <div
      className={props.tab.className}
      onClick={(tab) => props.selectTabHandler(tab)}>
      {props.tab.toUpperCase()}
    </div>
  );
}

Tab.PropTypes = {
  tab: PropTypes.string
}

export default Tab;
