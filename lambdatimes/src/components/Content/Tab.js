import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  return (
    <div
      className={props.selectedTab === props.tab ? "tab" : "tab active-tab"}
      onClick={() => {
        props.changeSelected(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;
