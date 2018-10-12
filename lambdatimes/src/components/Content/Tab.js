import React from 'react';

const Tab = props => {
if (props.tab === props.selectedTab) {
  (props.tab.className === 'tab active-tab')
} else {
  (props.tab.className ==='tab')
}
  return (
    <div
      className={props.tab.className}
      onClick={(event) => this.selectTabHandler(props.tab, event)}>
      {props.tab.toUpperCase()}
    </div>
  );
}


// Make sure you include PropTypes on your props.

export default Tab;
