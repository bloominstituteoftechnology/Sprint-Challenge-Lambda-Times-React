import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

const StyledTabs = Styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 47px;
background-color: #fff;
@media (min-width: 1280px) {
  .tabs {
    width: 1280px;
  }
`;
const Topics = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;
const TopicsTitle = Styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <StyledTabs>
      <Topics>
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
      {props.tabs.map(tab => {
        return (
        <Tab key={tab}
             tab={tab}
             selectTabHandler={props.selectTabHandler}
             selectedTab={props.selectedTab}
             >
        </Tab>
        );
      })


          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
          }
      </Topics>
    </StyledTabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array
}
export default Tabs;
