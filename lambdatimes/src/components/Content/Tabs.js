import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';
import {TabsBox, Topics, Title} from '../../CSS/ReusableStyles';

// props: tabs={this.state.tabs} selectedTab={this.state.selectedTab} handleSelect={this.props.changeSelected}
const Tabs = props => {
  return (
    <TabsBox>
      <Topics>
        <Title><span>TRENDING TOPICS:</span></Title>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
        {props.tabs.map((tab, i) => {
          return (
            <Tab key={i} tab={tab} selectedTab={props.selectedTab} handleSelect={props.handleSelect}/>
          );
        })}
      </Topics>
    </TabsBox>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array
};

export default Tabs;