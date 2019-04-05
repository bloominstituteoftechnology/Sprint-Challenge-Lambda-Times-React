import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import { StyledTabs, TabsTopics, TabsTopicsTitle } from './Styles';

const Tabs = props => {
 return (
   <StyledTabs className="tabs">
     <TabsTopics className="topics">
       <TabsTopicsTitle>TRENDING TOPICS:</TabsTopicsTitle>
       {/* map over the tabs provided on your props, create a new Tab component for each one.
           give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
         {props.tabs.map((tab, index) => (
           <Tab
             tab = {tab}
             key = {index}
             selectedTab = {props.selectedTab}
             selectTabHandler = {props.selectTabHandler}
           />
         ))}
         {/* stop putting ; after the map it gets rendered!!! */}
     </TabsTopics>
   </StyledTabs>
 );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
 tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;