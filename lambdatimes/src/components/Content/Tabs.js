import React from "react";
import Tab from "./Tab";

// tabs={this.state.tabs}
// selectedTab={this.changeSelected}
// selectTabHandler={this.filterCards}

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        <div>
          {props.tabs.map((each, i) => (
            <Tab key={i} each=
            {props.tabs}/>
          ))}
        </div>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
