import React from 'react';
import propTypes from 'prop-types';


const Tab = props => {

  let selectedClass = (props.selectedTab === props.tab) ? 'tab active-lab' : 'tab';

  return (
    <div
      className={selectedClass}
      onClick = {() => {props.selectTabHandler(props.tab)}}
      >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: propTypes.string.isRequired,
  selectTabHandler: propTypes.func.isRequired,
  selectedTab: propTypes.string.isRequired
}

export default Tab;
