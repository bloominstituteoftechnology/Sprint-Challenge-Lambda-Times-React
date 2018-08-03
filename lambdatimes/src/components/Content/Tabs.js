import React from "react";
import Tab from "./Tab";
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map(tab => (
          <Tab
            key={tab}
            tabs={tab}
            changeSelected={props.changeSelected}
            selectedTab={props.selectedTab}
          />
        ))}
         </div>
    </div>
  );
};



export default Tabs;
