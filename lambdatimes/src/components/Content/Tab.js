import React from "react";
import styled from "styled-components";
const TabContainer = styled.div`
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

  &.active-tab {
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  }
  
  &:hover {
    text-decoration: underline;
  }
`;
const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab'
  return (
    <div
      className={""}
      onClick={() => {/* Replace this dummy click handler function with your selectTabHandler function from props */}}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;