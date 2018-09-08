import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

const Tabs = props => {

  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        <div>
          {props.tabs.map((tab) => 
              <Tab
                key={tab}
                tab={tab}
                value={props.value}
                filterCards={props.filterCards}
                //selectedTabHandler={props.selectedTabHandler}
              />
            )
          }
        </div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  //selectedTabHandler: PropTypes.func
};

export default Tabs;
