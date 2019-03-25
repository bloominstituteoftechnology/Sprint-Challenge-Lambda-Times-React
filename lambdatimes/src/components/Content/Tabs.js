import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Tab from "./Tab";

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
    width: 12080px;
  }
`;

const StyledTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const StyledTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <StyledTopics>
        <StyledTitle>TRENDING TOPICS:</StyledTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => (
          <Tab
            key={tab}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
            tab={tab}
          />
        ))}
      </StyledTopics>
    </StyledTabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.PropTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
