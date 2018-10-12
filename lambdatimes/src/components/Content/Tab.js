import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTab = styled.div`
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
  color: ${props => props.activeColor || '#fff'};
  background-color: ${props => props.activeBG || '#333'};
  border: ${props => props.activeBorder || null};
  :hover {
    text-decoration: underline;
  }
`;

const Tab = props => {

  /* DONE: Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
  if they match, the className should be: 'tab active-tab', 
  if it is not it should just be 'tab'*/

  /* DONE: Replace this dummy click handler function with your selectTabHandler function from props 
  you'll need to pass the `tab` in as an argument to this handler. */

  return (
    <StyledTab 
        activeColor={props.tab === props.selectedTab ? '#333' : null}
        activeBG={props.tab === props.selectedTab ? '#fff' : null}
        activeBorder={props.tab === props.selectedTab ? '2px solid #333' : null}
        onClick={() => props.selectTabHandler(props.tab)}>
      {props.tab.toUpperCase()}
    </StyledTab>
  );
}

// DONE: Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;