import React from 'react';
import PropTypes from 'prop-types'; // loads PropTypes validation library
// import Tab from './Tab';
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props */

        // A-BROKEN  `ERROR: FAILED TO COMPILE - Syntax error: Unexpected token, expected , (11:19)`
            // { props.tabs.map( (tab,index) => <Tab key={index} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)}
          }
          
          { // BROKEN - `TypeError: props.tabs.map is not a function`
            /* { props.tabs.map( (tab,index) => <Tab key={index} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />)} */}
        
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tab: PropTypes.array,  // validates PropType as array
  selectedTab: PropTypes.string, // validates PropType as string
  selectTabHandler: PropTypes.func // validates PropType as function
}
export default Tabs;
