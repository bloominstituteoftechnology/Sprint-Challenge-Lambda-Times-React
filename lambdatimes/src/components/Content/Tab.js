import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ActiveTab=styled.div` 
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
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
`
const TaB=styled.div`
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
`
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass=props.selectedTab;
  return ( 
  <div>
    {(props.tab===props.selectedTab)?
      <ActiveTab onClick={(e) => {e.preventDefault;props.selectTabHandler(props.tab)}}>{props.tab.toUpperCase()}</ActiveTab>
      :<TaB onClick={(e) => {e.preventDefault;props.selectTabHandler(props.tab)}}>{props.tab.toUpperCase()}</TaB>}
  </div>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes={
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
}
export default Tab;