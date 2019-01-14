import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

/* Passed as Props from Content.js
  tabs={this.state.tabs}
  selectedTab={this.state.selected} 
  selectedTabHandler={this.changeSelected}
*/



const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {/* Maps over the tabs array and returns a tab component for each with a unique key identifier using the index */}
        {props.tabs.map( (t, i) => <Tab key={i} tab={t} selectedTab={props.selectedTab} selectedTabHandler={props.selectedTabHandler} /> )}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!

Tabs.propTypes = {
  tabs: PropTypes.array
};

export default Tabs;

