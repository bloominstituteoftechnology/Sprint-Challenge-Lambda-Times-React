import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
         {props.tabs.map( (tab, index) =>
          <Tab 
            tab={tab} 
            selectedTab={props.selectedTab} 
            selectTabHandler={props.selectedHandler} 
            key={index} />
          
          )}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};
Tabs.propTypes = {
  selectedTab : propTypes.string.isRequired,
  selectTabHandler : propTypes.func.isRequired
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
