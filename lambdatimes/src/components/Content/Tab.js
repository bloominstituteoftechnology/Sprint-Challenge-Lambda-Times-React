import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tabData ? 'tab active-tab' : 'tab'}
      onClick={e => props.selectTabHandler(e,props.tabData)}
    >
      {props.tabData.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tabData: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}

export default Tab;
