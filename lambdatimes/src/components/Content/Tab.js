import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/*
Received as props from Tabs.js

  key={i} 
  tab={t}
  selectedTab={props.selectedTab} 
  selectedTabHandler={props.selectedTabHandler}
*/

const TabStyle = styled.div`
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

  &:hover {
    text-decoration: underline;
  }

  ${props => (props.type === 'tab active-tab' ? `
  background-color: #fff;
  color: #333;
  border: 2px solid #333;` : null)};
`

const Tab = props => { 
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if (props.tab)
  return (
     /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */ 

    <TabStyle type={ props.tab === props.selectedTab ? "tab active-tab" : "tab" }
         onClick={ () => {props.selectedTabHandler(props.tab)} } >

      {props.tab.toUpperCase()}

    </TabStyle>
  );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
    tab: PropTypes.string
};

export default Tab;
