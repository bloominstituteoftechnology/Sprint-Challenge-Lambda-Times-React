import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

//------------------- STYLED COMPONENTS -------------

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

//------------------- STYLED COMPONENTS -------------

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/        
  return (
    <TabDiv
      // className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab'}      
      onClick={() => { props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </TabDiv>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,  
}

export default Tab;
