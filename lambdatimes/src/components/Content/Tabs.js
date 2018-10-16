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
            selectedTab={props.selectedTab}
            selectTabHandler={props.selectTabHandler}
            tab={item}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
};

export default Tabs;
