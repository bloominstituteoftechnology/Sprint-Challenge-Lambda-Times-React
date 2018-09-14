import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import styled from "styled-components";

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(item => (
          <Tab
            tab={item}
            selectTabHandler={props.selectTabHandler(item)}
            selectedTab={props.selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

// Make sure to use PropTypes to validate your types!

Tabs.PropTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
