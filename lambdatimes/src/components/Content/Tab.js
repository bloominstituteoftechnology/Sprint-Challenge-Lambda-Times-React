import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  console.log('what do i have? ', props.tab)
  console.log('and i have a ', props.selectedTab)
  let tabClass='tab';
  if (props.tab.toLowerCase() === props.selectedTab.toLowerCase())
  {
    tabClass = 'tab active-tab'
  }

  return (
    <div className={tabClass} onClick={props.selectTabHandler}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler:PropTypes.func,
  tab:PropTypes.string
}

export default Tab;
