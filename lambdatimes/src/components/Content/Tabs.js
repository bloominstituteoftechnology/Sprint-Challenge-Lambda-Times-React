import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            
          }

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTab: propTypes.string.isRequired,
  selectedTabHandler: propTypes.func.isRequired
}
export default Tabs;
