import React from 'react';
import PropTypes from 'prop-types';

// Children Component(s)
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}

            {props.tabs.map(t => <Tab 
              tab={t}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
            />)}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
// PropTypes
Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
