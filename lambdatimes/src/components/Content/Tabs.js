import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';
import styled from 'styled-components';

const TabsContainer = styled.div`
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
`

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
  }

  .active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
`

const Tabs = props => {
  return (
    <TabsContainer>
      <Topics>
        <span>TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab,index) => <Tab tab={tab} key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>)}
      </Topics>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: propTypes.array.isRequired,
  selectedTab: propTypes.string.isRequired,
  selectTabHandler: propTypes.func.isRequired
}

export default Tabs;
