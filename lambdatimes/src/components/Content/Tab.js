import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  const activeTab = props.tab === props.selected;
  return (
    <div
      className={`tab ${activeTab ? "active" : null}`}
      onClick={() => {
        props.selectTabHandler(props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  selectTabHandler: PropTypes.func,
  selected: PropTypes.string,
  tab: PropTypes.string
};

export default Tab;
