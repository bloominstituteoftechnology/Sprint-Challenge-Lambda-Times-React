import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from "styled-components";

/***************************************************************************************************
********************************************** Styles **********************************************
***************************************************************************************************/
const DivTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const DivTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const SpanTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

/***************************************************************************************************
********************************************* Component ********************************************
***************************************************************************************************/
const Tabs = props => {
  return (
    <DivTabs>
      <DivTopics>
        <SpanTitle>TRENDING TOPICS:</SpanTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => {return <Tab key={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab}></Tab>})}
      </DivTopics>
    </DivTabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
