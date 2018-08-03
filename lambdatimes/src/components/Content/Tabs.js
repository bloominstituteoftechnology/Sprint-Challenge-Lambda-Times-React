import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types'; 

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => { return <Tab key = {index} tab = {tab} selectTabHandler = {props.selectTabHandler} selectedTab = {props.selectedTab} />})}
      </div>
    </div>
  )
}

Tabs.proptypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}
export default Tabs