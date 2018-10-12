import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

import { TabContainer } from '../Styles/Styles';
import { Topics } from '../Styles/Styles';

const Tabs = props => {
  return (
    <TabContainer>
      <Topics>
        <span className="title">TRENDING TOPICS:</span>
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
    </TabContainer>
  );
};


// Make sure to use PropTypes to validate your types!
export default Tabs;
