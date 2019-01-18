import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsGeneral = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  max-width: 1280px;
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsGeneral>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(tab => <Tab key={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />)}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </Topics>
    </TabsGeneral>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
