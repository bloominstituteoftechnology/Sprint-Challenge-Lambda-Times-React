import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({tab, selectedTab, selectTabHandler}) => {
  const className = (selectedTab === tab) ? 'tab active-tab' : 'tab';
  return (
    <div
      className={className}
      onClick={() => {
        selectTabHandler(tab);
      }}
    >
      {tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {

  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired

}

export default Tab;
