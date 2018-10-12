import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 7px 12px;
    margin: 8px;
    border: none;
    background : black;
    color: white;
    font-weight : bold;
    cursor: pointer; 
`;

const Tab = props => {
  console.log("In Tab Component :  ********* ",props.tab);
  console.log(props.selectedTab);
  console.log(props.selectTabHandler);
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div
      className={props.tab === props.selectedTab ? 'active-tab': ''}
    >
        <Button onClick={() => props.selectTabHandler(props.tab)}> {props.tab.toUpperCase()} </Button>
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;
