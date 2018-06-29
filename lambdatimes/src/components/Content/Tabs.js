import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(i => {
          return(
            <Tab
              selectTabHandler={props.selectedHandler}
              selectedTab={props.selectedTab}
              tab={i}
              key={Math.random()}
            />
          )

        })}
      </div>
    </div>
  )
}
/* map over the tabs provided on your props, create a new Tab component for each one.
  give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};
// Make sure to use PropTypes to validate your types!
export default Tabs
