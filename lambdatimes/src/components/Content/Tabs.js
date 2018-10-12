import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* <Tab selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} tab={props.tab}/> */}
          {props.tabs.map((item, i) => <Tab key={i} tab={item} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
  };
export default Tabs;
