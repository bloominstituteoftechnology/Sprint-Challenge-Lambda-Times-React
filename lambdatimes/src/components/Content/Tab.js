import React from 'react';
import './Tab.css'
import PropTypes from 'prop-types';


const Tab = props => {
  return <h2 
  onClick={tab => props.selectedTab(tab)} 
  className="tab"
  >
  {props.propsinTab.toUpperCase()}</h2>
};


Tab.propTypes = {
  propsinTab: PropTypes.string.isRequired
}
export default Tab;


