import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './Content.css'
import './Content.js'

import colors from './Content.js'

export const StyledTab = styled.div `
display: flex;
justify-content: none;
align-items: center;
flex-direction: row;
color: ${props => props.selectedTab === props.id ? '#333' : '#fff'};
background-color: ${props => props.selectedTab === props.id ? '#fff' : '#333'};
margin: 0 5px;
padding: 2px 10px;
font-size: 12px;
letter-spacing: 2px;
cursor: pointer;
font-weight: bold;
`




const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <StyledTab selectedTab={props.selectedTab} id={props.tab} 
      onClick={() =>props.selectedTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

StyledTab.propTypes = {
  id: PropTypes.string,
}
// Make sure you include PropTypes on your props.

export default Tab;
