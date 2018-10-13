import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(item =>{
          return(
          <Tab 
          key={item}
           selectTabHandler={props.selectTabHandler}
           selectedTab={props.selectedTab}
           tab={item}
         >
          </Tab>
          )
        })}
      </div>
    </div>
  );
};
Tabs.propType={
  key: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.object
}
export default Tabs;
