import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.active ? '#333' : '#FFF'};
  background-color: ${props => props.active ? '#FFF' : '#333'};
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  border: ${props => props.active ? '2px solid #333' : ''};;

  &:hover {
    text-decoration: underline;
  }
`;



const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  if (props.selectedTab === props.tab){
    return (
      <StyledTab active onClick={() => {props.selectTabHandler(props.tab)}}>
        {props.tab.toUpperCase()}
      </StyledTab>
    )
  }
  return (
    <StyledTab onClick={() => {props.selectTabHandler(props.tab)}}>
      {props.tab.toUpperCase()}
    </StyledTab>
  )
}

// Make sure you include PropTypes on your props.

export default Tab;
