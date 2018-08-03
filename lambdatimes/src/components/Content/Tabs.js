import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((element,i) => 
            <Tab key = {i}
                 selectTabHandler={props.selectTabHandler}
                 selectedTab={props.selectedTab}
                 tab={element} />  
        )}
      </div>
    </div>
  )
}

 Tabs.proptypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func
 }

export default Tabs