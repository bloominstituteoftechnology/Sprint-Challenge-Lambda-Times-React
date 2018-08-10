import React, { Component } from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map(t =>
          <Tab
            tab={t}
          />)}
      </div>
    </div>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  card: PropTypes.shape({
    tab: PropTypes.string,
  })
};

export default Tabs