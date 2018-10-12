import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 47px;
  background-color: #fff;
  width: 1280px;
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

  span {
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
  .tab {
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    color: #fff;
    background-color: #333;
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    :hover {
      text-decoration: underline;
    }

  .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
    }

  }
`;


const Tabs = props => {
  return (
    <TabDiv>
      <Topics>
        <span>TRENDING TOPICS:</span>
        {props.tabs.map( tab => {
          return <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} key={Math.floor(Math.random() * 1000)} />
        })}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </Topics>
    </TabDiv>
  );
};

Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string.isRequired),
  selectedTab: PropTypes.string.isRequired
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
