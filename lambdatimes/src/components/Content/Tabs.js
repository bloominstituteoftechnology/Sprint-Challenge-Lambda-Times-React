import React from 'react';
import PropTypes from 'prop-types';

// Children Component(s)
import Tab from './Tab';

const Tabs = props => {
  console.log(this)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>

        {props.tabs.map((t, i) => <Tab 
          key={i}
          tab={t}
          selectedTab={props.selectedTab}
          selectTabHandler={props.selectTabHandler}
        />)}

      </div>
    </div>
  );
};


// PropTypes
Tabs.propTypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
