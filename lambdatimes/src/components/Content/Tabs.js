import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((item, index) => (
          <Tab
            key={index}
            changeSelected={props.changeSelected}
            selectedTab={props.selectedTab}
            tab={item}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
