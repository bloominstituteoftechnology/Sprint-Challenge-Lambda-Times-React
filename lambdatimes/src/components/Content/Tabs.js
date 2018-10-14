import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import { StyledDiv } from './StyledDiv';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            <StyledDiv>{props.tabs.map((tab, index) => {
              return <h2
              key = {index}
              
              >
              <Tab
              TabHandler = {props.selectTabHandler}
              TabSelected = {props.selectedTab}
              onChange = {props.onChange}
              tab = {tab}
              >{tab}</Tab>
              
              </h2>
            })}</StyledDiv>
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: PropTypes.string,
}
export default Tabs;
