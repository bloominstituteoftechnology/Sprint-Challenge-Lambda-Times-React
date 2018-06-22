import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  const selectedClass =
    props.selectedTab === props.tab ? 'tab active-tab' : 'tab';
  return (
    <div
      className={selectedClass}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default Tab;
