import React from "react";
import Tab from "./Tab";
import PropTypes from 'prop-types';

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
        <div className="tab">
          {props.tabs.map((tabName, i) => {
            {/* console.log("what is ", each); */}
            return <Tab key={i} tabName={tabName} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>;
          }
          )}
        </div>
      </div>
    </div>
  );
};


// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arry,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
}
export default Tabs;
