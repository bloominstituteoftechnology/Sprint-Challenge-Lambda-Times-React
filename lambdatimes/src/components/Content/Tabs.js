import React from 'react';
import Tab from './Tab';


import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTabs = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`
const StyledTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`

const StyledTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <StyledTabs>
      <StyledTopics>
        <StyledTitle>TRENDING TOPICS:</StyledTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => 
          <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} />)}
      </StyledTopics>
    </StyledTabs>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
