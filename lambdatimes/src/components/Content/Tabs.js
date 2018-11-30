import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(i => {
              return (
                <Tab 
                tab={i}
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                key={i}
                />
              )
            })}
      </div>
    </div>
  );
};

/* Make sure to use PropTypes to validate your types! */

  Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string)
  }

export default Tabs;
