import React from 'react';
import styled from 'styled-components'

const StyledTab = styled.div`
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
`




const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <StyledTab id={props.tab} 
      onClick={props.changeSelected}
    >
      {props.tab.toUpperCase()}
    </StyledTab>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
