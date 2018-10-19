import React from 'react';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(article => {
          return (<Tab changeSelected={props.changeSelected} selectedTab={props.selectedTab} tab={article} key={article}/>);
        })}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
