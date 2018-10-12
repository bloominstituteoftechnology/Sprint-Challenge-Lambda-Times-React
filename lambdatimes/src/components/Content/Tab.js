import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
      let selection = props.selectTabHandler(props.tab)
  return (
    <div
      className={props.selectedTab === props.tab ? 'tab active-tab' : 'tab'}
      onClick={selection}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
}
export default Tab;
