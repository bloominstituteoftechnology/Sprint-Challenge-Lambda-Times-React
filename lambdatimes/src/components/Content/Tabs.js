import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import {
  TabsStyle,
  Topics,
  Title
} from '../Styles/Tabs';

const Tabs = props => {
  return (
    <TabsStyle>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => (
          <div key={Math.random() * 100000}>
            <Tab 
              tab={tab} 
              selectTabHandler={props.selectTabHandler}  
              selectedTab={props.selectedTab}
            />
          </div>
        ))}   
      </Topics>
    </TabsStyle>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array
}

export default Tabs;
