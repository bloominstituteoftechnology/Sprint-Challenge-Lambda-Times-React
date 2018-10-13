import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';

const eachTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map((singularTab) => {
          return (
            <Tab tab={singularTab} />
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
