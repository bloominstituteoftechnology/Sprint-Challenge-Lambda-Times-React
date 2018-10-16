import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const {tab, selectedTab, selectTabHandler} = props;

  return (
    <div
      className={tab === selectedTab ? 'tab active-tab' : 'tab'}
      onClick={() => selectTabHandler(tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
    tab: PropTypes.string.isRequired,
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func
};

Tab.defaultProps = {
    tab: 'Tab'
};

export default Tab;
