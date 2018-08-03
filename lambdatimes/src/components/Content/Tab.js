import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {
    return (
      <div
        className={(props.selectedTab === props.tab) ? "tab active-tab" : "tab"}
        onClick={props.changeSelectedTab(props.tab)}
      >{props.tab.toUpperCase()}</div>
    )
}

Tab.propTypes = {
  changeSelectedTab: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string,
}

export default Tab;
