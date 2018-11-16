// libraries import
import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  // destructuring props for readability
  const {tab, selectedTab, selectTabHandler} = {...props};
  return (
    <div
      className={`tab ${tab === selectedTab ? 'active-tab' : ''}`}
      onClick={() => selectTabHandler(tab) }
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tab;
