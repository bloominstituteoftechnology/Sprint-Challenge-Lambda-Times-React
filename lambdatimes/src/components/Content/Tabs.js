import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
   
          {props.tabs.map((tab, index) => {
            return(
              <Tab 
                selectTabHandler={props.selectTabHandler}
                selectedTab={props.selectedTab}
                tab={tab}
                key={index * 33}
              />
            )
        })}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

// yarn add prop-types

// export const tabData = ['all', 'javascript', 'technology', 'node', 'React.js', 'bootstrap'];

Tabs.propTypes = {
 tabData : PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default Tabs;
