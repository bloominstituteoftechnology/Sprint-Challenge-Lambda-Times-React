import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
       {props.tabs.map(tab => 
       <Tab selectTabHandler={props.selectTabHandler}
        selectedTab={props.selectedTab} 
        tab={tab} 
        />
        )}
      </div>
    </div>
  );
};
Tabs.propTypes = {
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string),

};

export default Tabs;
