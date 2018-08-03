import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map( tab => {
          return <Tab key={tab} changeSelectedTab={props.changeSelectedTab} selectedTab={props.selectedTab} tab={tab} />
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array,
}

export default Tabs
