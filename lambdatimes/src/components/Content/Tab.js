import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  return (
    <div
      className={ props.tab === props.selectedTab ? 'tab active-tab' : 'tab' }
      onClick={ props.selectTabHandler(props.tab) }>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
}

export default Tab;
