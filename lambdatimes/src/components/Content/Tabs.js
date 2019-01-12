import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import { TabsWrapper, TabsTopics, TabsTitle } from '../../styles/TabStyles';

const Tabs = props => {
  return (
    <TabsWrapper>
      <TabsTopics>
        <TabsTitle>TRENDING TOPICS:</TabsTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map(tab => (
            <Tab key={tab} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/>
          ))}
      </TabsTopics>
    </TabsWrapper>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tabs;
