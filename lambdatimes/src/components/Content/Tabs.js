import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types'
const Tabs = props => {
  
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tabDate, counter) => <Tab tab={tabDate} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} key={counter}/>) }
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array
}
export default Tabs