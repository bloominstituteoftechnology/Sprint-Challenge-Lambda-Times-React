import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

// Props avail to Tabs Component:
// tabs={this.state.tabs} 
// selectedTab={this.state.selected}
// selectTabHandler={this.changeSelected}  

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((eachTab, i) => (
          <Tab
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={eachTab}
            key={eachTab}
          />)
        )}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
};

export default Tabs;
