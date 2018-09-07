import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import PropTypes from 'prop-types'

// Styles
const TabsD = styled.div`
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
`;


// Component
const Tabs = props => {
  return (
    <TabsD>
      <Topics>
        <span >TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(tab => <Tab selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} key={tab}  />)}
      </Topics>
    </TabsD>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabData: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.arrayOf(PropTypes.sstring)
};
export default Tabs;
