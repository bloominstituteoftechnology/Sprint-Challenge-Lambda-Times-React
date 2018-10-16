import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
    color: white;
  }
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
  if they match, the className should be: 'tab active-tab', 
  if it is not it should just be 'tab'*/
  
  return (
    <TabDiv
      style={ props.tab === props.selectedTab ? { color: '#333', backgroundColor: '#fff', border: '2px solid #333' } 
        : { color: '#fff', backgroundColor: '#333' } }
      onClick={() => {props.selectTabHandler(props.tab) }}>
      
      {props.tab.toUpperCase()}
      </TabDiv>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string
}

export default Tab;
