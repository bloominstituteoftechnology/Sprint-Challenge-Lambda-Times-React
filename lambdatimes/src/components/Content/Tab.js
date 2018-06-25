import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.className === 'active-tab' ? '#333' : '#fff'};
  background-color: ${props => props.className === 'active-tab' ? '#fff' : '#333'};
  border: ${props => props.className === 'active-tab' ?  '2px solid #333' : null};
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
  const selectedClass = props.tab===props.selectedTab? 'active-tab' : null
  return (
    <TabDiv
      className={selectedClass}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </TabDiv>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

export default Tab;