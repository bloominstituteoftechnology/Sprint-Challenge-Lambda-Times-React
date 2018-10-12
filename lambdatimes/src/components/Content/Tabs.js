import React from 'react';
import PropTypes from 'prop-types';

import Tab from './Tab';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((tab, index) => <Tab tab={tab} changeSelected={props.changeSelected} selected={props.selected} key={index}/>)}
      </div>
    </div>
  );
};


Tabs.propTypes = {
  changeSelected: PropTypes.func,
  selected: PropTypes.string,
  tabs: PropTypes.arrayOf(PropTypes.string)
}

export default Tabs;
