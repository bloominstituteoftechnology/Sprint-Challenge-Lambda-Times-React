import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'
import Card from "./Cards";

const Tabs = props => {
    console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {
              props.tabs.map(tab => {
                  console.log(tab);
                  return (
                      <Tab tab={tab} />
                  )
              })
          }
      </div>
    </div>
  );
};
// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
    tabs: PropTypes.array
}
export default Tabs;
