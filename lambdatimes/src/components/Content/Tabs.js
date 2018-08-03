import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types'
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return <Tab key={tab}
        selectTabHandler = {props.selectTabHandler}
        selected = {props.selectTab}
        tab = {tab} /> //have to call it tab becasue it was already devlard in tab
      })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
}
export default Tabs
