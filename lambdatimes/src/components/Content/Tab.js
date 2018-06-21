import React from 'react';

const Tab = props => {
  const { selectTabHandler, selected, tab} = props;
  return (
    <div
      className={`tab ${selected ? 'active-tab' : ''}`}
      onClick={selectTabHandler(tab)}
    >
      {tab.toUpperCase()}
    </div>
  )
}

export default Tab