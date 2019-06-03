import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  console.log("props in Tab, ", props)
  const tabMatch = props.tab === props.selectedTab; 
  return (
    <div
      className={`tab ${tabMatch ? "active-tab" : null}`}
      onClick={ () => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
