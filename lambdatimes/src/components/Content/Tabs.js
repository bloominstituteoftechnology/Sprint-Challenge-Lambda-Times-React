import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";

const Tabs = ({ selectedTab, selectTabHandler, tabs }) => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {tabs.map((tab, i) => {
          return (
            <Tab
              selectTabHandler={selectTabHandler}
              selectedTab={selectedTab}
              tab={tab}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array.isRequired
};

export default Tabs;
