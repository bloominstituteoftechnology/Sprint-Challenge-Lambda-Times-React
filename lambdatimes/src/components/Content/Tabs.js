import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) =><Tab tab={tab} changeSelected={props.changeSelected} key={index} selectedTab={props.selectedTab}/>)}
      </div>
    </div>
  );
};

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;

