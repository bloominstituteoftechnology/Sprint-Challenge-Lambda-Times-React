import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

import { TabsContainer, Topics, Title } from './TabStyles';

const Tabs = props => {
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map((e, i) => {
            return (
              <Tab tab={e}  key={i} changeSelected={props.changeSelected} selectedTab={props.selectedTab} />
            )
          })}
      </Topics>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func.isRequired,
  selectedTab: PropTypes.string
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
