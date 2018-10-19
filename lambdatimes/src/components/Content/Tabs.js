import React from 'react';
import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

        {props.tabs.map(tab, index => {
          return (
            <Tab
                selectTabHandler= {props.tabs.selectTabHandler}
                selectedTab= {props.tabs.selectedTab}
                tab= {tab}
                key= {index * 33} />
          )
        })}
      </div>
    </div>
  );
};

        {/* props.tabs.map(tab,index) => {
              return (
                <Tab
                selectTabHandler= {props.tabs.selectTabHandler}
                selectedTab= {props.tabs.selectedTab}
                tab= {tab}
                key= {index * 33} />
              )
            }) */}

// Make sure to use PropTypes to validate your types!

// yarn add prop-types

// export const tabData = ['all', 'javascript', 'technology', 'node', 'React.js', 'bootstrap'];

Tabs.propTypes = {
 tabData : PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Tabs;
