import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types' ;
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
        {props.tabs.map(tab => { 
          return <Tab selectedTab={props.selectedTab} 
                      selectTabHandler={props.selectTabHandler} 
                      tab={tab} />
          })
          }
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.array

}

export default Tabs;
