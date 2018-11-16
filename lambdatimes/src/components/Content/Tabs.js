import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled, { css } from "styled-components";

const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  ${props =>
    props.mediaBreak &&
    css`
      min-width: 1280px;
      width: 1280px;
    `};
`;

const TabsTopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

`;

const TabsTopicsTitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;


const Tabs = props => {
  return (
    <TabsDiv mediaBreak>
      <TabsTopicsDiv >
        <TabsTopicsTitleSpan >TRENDING TOPICS:</TabsTopicsTitleSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

        {props.tabs.map(tab => {
          return <Tab tab={tab} selectedTab={props.selectedTab} selectedTabHandler={props.selectedTabHandler} key={tab}/>
        })}

      </TabsTopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
}

export default Tabs;
