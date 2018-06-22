import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types'


const Tabs = props => {
  let tabElems = props.tabs.map(tab => <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} key={tab} />);
  return (

    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
            {tabElems}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

// Make sure to use PropTypes to validate your types!
export default Tabs