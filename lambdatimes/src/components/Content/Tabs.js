import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

Tabs.PropTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map(tab => (<Tab selectTabHandler={props.selectTabHandler} selectedTab={prop.selectedTab} tab={tab}/>))
          }

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
