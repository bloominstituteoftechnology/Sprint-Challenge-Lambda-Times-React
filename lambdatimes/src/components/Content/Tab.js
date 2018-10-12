import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 7px 12px;
    margin: 8px;
    border: none;
    background : black;
    color: white;
    font-weight : bold;
`;

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={''}
      onClick={() => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      <Button>{props.tab.toUpperCase()} </Button>
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
