import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map((tab, index) => {
          return (
            <Tab 
              selectTabHandler={props.selectTabHandler}
              key={index}
              tab={tab}
            />
          )
        })}
      </div>
    </div>
  );
};

// Tabs Proptypes!

Tab.propType = {
  tab: PropTypes.string.isRequired
}
export default Tabs;
