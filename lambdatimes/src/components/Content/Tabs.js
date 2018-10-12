import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

import { Topics } from '../Styles/Styles';

const Tabs = props => {
  return (
    <Topics>
      <span>TRENDING TOPICS:</span>
      {props.tabs.map((tab, index) => (
        <div key={index}>
          <Tab
            tab={tab}
            changeSelected={props.changeSelected}
            selected={props.selected}
          />
        </div>
      ))}
    </Topics>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.array,
  changeSelected: PropTypes.func,
  selected: PropTypes.string,

}

export default Tabs;
