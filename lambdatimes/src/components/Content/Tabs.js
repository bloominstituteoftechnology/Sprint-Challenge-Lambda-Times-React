import React from 'react';
import Tab from './Tab';
import propTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map((tab, id) => (<Tab key={"tab" + id} selectedTabHandler={props.selectedTabHandler} selectedTab={props.selectedTab} tab={tab}/>))
            }
      </div>
    </div>
  );
};
Tabs.propTypes = {
  tabs: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTab: propTypes.string.isRequired,
  selectedTabHandler: propTypes.func.isRequired
}
// Make sure to use PropTypes to validate your types!
export default Tabs;
