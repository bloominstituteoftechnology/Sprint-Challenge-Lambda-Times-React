import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  // const selector = props.selectedTab();
  // console.log(selector);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab=> <Tab tab={tab} key={tab} selector={props.selectedTab()}selectTabHandler={props.selectTabHandler}/>)}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string)
}

export default Tabs