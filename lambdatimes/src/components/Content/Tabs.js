import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
          {props.tabs.map((tab, index) => {
                return(
                    <button key={index}>
                        <Tab
                            tab = {tab}
                            selectedTab = {props.selectedTab}
                            selectedTabHandler = {props.selectedTabHandler}
                        />
                    </button>
                )
            })}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.object,
  selectedTab: PropTypes.string,
  selectedTabHandler: PropTypes.function
};

export default Tabs;
