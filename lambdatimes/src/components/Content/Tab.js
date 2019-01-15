import React from 'react';

import PropTypes from 'prop-types';


const Tab = props => {
  return <h2 
  // style={{color: "red"}}
  onClick={() => props.selectTabHandler(props.tab)} 
  className={`tab ${props.tab === props.selectedTab ? 'active-tab' : ''}`}
  >
  {props.tab.toUpperCase()}</h2>
};


Tab.propTypes = {
  tab: PropTypes.string.isRequired
}
export default Tab;


