import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';
import Tab from './Tab';

// Styled components:
const TabsWrapper = Styled.div`
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
const TopicsWrapper = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

  span {
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
  }
`;

// Props passed in:
  // - tabs: ()
  // - selectedTab: "all"
  // - selectTabHandler: fn()

const Tabs = props => {
  return (
    <TabsWrapper>
      <TopicsWrapper>
        <span>TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map( (tab) => {
          return (
            <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} ></Tab>
          )
        })}
      </TopicsWrapper>
    </TabsWrapper>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.defaultProps = {
  selectedTab: 'all'
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};
export default Tabs;
