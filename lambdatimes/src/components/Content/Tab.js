import React from 'react';
import styled from 'styled-components';
import '../../CSS/index.css';
import PropTypes from 'prop-types';

const getSelectedState = (props) => {
  return props.tab === props.selectedTab;
}

const ActiveTab = styled.div`
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
  &:hover{
     text-decoration: underline;
  }
   &.active-tab{
      background-color: #fff;
  color: #333;
  border: 2px solid #333;
  }
 
`;

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  // const selectedClass = 'tab';

  

  
  return (
    <ActiveTab
      className={ getSelectedState(props) ? "tab active-tab" : "tab"}
      onClick={() => { props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </ActiveTab>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;