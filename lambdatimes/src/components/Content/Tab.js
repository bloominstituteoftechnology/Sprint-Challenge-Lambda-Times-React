import React from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types'
import './Content.css'
export const StyledTab = styled.div`
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
    <StyledTab className={props.selectedStyle} id={props.tab} 
      onClick={() =>props.changeSelected(props.tab)} onClick={props.changeStyle}
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
