import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(tab => <Tab key={tab} tab={tab} selectTab={props.selectTab} selected={props.selected}/>)
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTab:PropTypes.func,
  selected:PropTypes.string,
  tab:PropTypes.string
}

// Make sure to use PropTypes to validate your types!
export default Tabs;

// map over the tabs provided on your props, create a new Tab component for each one.</div>
//give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props