import React from 'react'
import PropTypes from 'prop-types'

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  return (
    <div
      className={`${tab === selectedTab ? 'tab active-tab' : 'tab'}`}
      onClick={() => selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  )
}

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab
