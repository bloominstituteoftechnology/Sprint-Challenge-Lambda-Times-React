import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';
import { TabsContain, TabsTopics, MyTab, TabsTopicsSpan, } from '../../Styles';

const Tabs = props => {
  return (
    <TabsContain>
      <TabsTopics>
        <TabsTopicsSpan>TRENDING TOPICS:</TabsTopicsSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab, index) => {
              return (
                <Tab 
                key={index}
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                tab={tab}
                />
              );
            })}
      </TabsTopics>
    </TabsContain>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  selectedTab : propTypes.string,
  selectTabHandler : propTypes.func
}

export default Tabs;
