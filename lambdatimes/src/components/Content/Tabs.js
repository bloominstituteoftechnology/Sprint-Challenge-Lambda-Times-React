import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((e,i)=><Tab tab={e} key={i} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>)}
      </div>
    </div>
  )
}
Tabs.propTypes={
  tabs: PropTypes.array.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired
}
// Make sure to use PropTypes to validate your types!
export default Tabs