import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsDiv = styled.div`
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

const TabsTopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TabsTitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const StyledTabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
    color: white;
  }
`;


  // border: 2px solid #333;

const Tabs = props => {
  return (
    <TabsDiv>
      <TabsTopicsDiv>
        <TabsTitleSpan>TRENDING TOPICS:</TabsTitleSpan>
        
          {props.tabs.map((tab, index) => (
            <StyledTabDiv>
            <Tab 
            key= {Date.now()} 
            tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} isSelected={props.isSelected}/>
          </StyledTabDiv>
          ))}
          {/* map over the tabs provided on your props, create a new Tab component for each one.
              give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </TabsTopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
 }

export default Tabs;
