import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = props => {
  const selectedClass = `tab${
    props.selectedTab === props.tab ? 'active-tab' : ''
  }`;
  return (
    <div className={selectedClass} onClick={props.selectTabHandler}>
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
