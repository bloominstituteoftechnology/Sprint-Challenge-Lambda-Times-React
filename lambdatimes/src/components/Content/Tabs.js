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
            console.log("Tabs: ", props.value);
                return(
                    <div key={index}>
                        <Tab
                            tab = {tab}
                            value = {props.value}
                            filterCards={props.filterCards}
                            selectedTabHandler = {props.selectedTabHandler}
                        />
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tab: PropTypes.object,
  value: PropTypes.string,
  selectedTabHandler: PropTypes.func
};

export default Tabs;
