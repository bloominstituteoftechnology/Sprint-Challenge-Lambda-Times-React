import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(tab => {
          return (
            <Tab
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
              tab={tab}
              key={tab}
            />
          );
        })}
      </div>
    </div>
  )
};

export default Tabs;


Tabs.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      selectTabHandler: PropTypes.func.isRequired,
      selectedTab: PropTypes.func.isRequired,
      tab: PropTypes.string.isRequired
    })
  )
}