import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

// props: tabs={this.state.tabs}, selectedTab={this.state.selectedTab}, handleSelect={this.props.changeSelected}
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/ }
        {props.tabs.map((tab, i) => {
          <Tab key={i} tab={tab} selectedTab={props.selectedTab} handleSelect={props.handleSelect}/>
        })}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.PropTypes = {
  tabs: PropTypes.array
};

export default Tabs