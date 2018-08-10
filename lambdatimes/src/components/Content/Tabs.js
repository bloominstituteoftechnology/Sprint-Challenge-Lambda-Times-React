import React from 'react';
import Tab from './Tab'

const Tabs = props => {
  console.log(props);
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
          {props.tabs.map(tab => {
            return (
              <Tab
                tab={tab}
                selectTabHandler={props.selectTabHandler}
                selected={props.selected}
                key={tab}
                />
            );  
          })}
          
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;