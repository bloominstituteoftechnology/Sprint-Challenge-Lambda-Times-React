import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, onSelectTab, selectedTab }) => {
  /* Using your props, determine if this tab is selected, if it is, the className
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = `tab${selectedTab === tab ? ' active-tab' : ''}`;
  return (
    <div className={selectedClass} onClick={onSelectTab}>
      {tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  onSelectTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
};

export default Tab;
