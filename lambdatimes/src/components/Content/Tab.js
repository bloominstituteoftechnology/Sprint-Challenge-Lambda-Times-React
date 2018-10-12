import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={(props.tab !== props.selected) ? "tab active-tab" : "tab" }
      onClick={() => {
         props.changeSelected(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  changeSelected: PropTypes.func,
  selected: PropTypes.string,
  tab: PropTypes.string
}

export default Tab;
