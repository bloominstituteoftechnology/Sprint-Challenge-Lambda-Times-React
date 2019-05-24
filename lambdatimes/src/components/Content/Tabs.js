import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map(tab => 
        <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/> )}

        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.func,
}



// Make sure to use PropTypes to validate your types!
export default Tabs;

// props.tabs = this.state.tabs
// props.selectedtab = this.state.selected... which is selected: 'all'
// props.selectedTabHandler = sets state... tab is whatever is selected
