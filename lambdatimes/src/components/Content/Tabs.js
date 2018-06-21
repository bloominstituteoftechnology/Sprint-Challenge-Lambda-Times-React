import React from 'react';
import Tab from './Tab'
const Tabs = props => {
  const { tabs, selected, selectTabHandler } = props
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {tabs.map( (tab, i) => {
          return <Tab selectTabHandler={selectTabHandler} selected={selected === tab} key={i} tab={tab} />
        })}
      </div>
    </div>
  )
}

export default Tabs