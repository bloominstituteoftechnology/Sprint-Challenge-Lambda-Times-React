import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div
      active-tab={props.tab === props.selectedTab}
      className={"tab active-tab"}
      onClick={tab => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
