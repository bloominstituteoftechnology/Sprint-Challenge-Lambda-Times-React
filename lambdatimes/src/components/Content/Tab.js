import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
  if they match, the className should be: 'tab active-tab',
  if it is not it should just be 'tab'*/
  const TabWrapper = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    ${props => (props.tab === props.selectedTab ? `color: #333;` : `color: #fff;`)}
    ${props => (props.tab === props.selectedTab ? `background-color: #fff;` : `background-color: #333;`)}
    margin: 0 5px;
    padding: 2px 10px;
    font-size: 12px;
    letter-spacing: 2px;
    cursor: pointer;
    font-weight: bold;
    ${props => (props.tab === props.selectedTab ? `border: 2px solid #333;` : null)}

    &:hover {
      text-decoration: underline;
    }
  `;

  const cName = props.tab === props.selectedTab ? "tab active-tab" : "tab";

  return (
    <TabWrapper
      tab={props.tab}
      selectedTab={props.selectedTab}
      onClick={() => {
        props.selectTabHandler(props.tab);
        /* Replace this dummy click handler function with your selectTabHandler function from props
         you'll need to pass the `tab` in as an argument to this handler. */
      }}
    >
      {props.tab.toUpperCase()}
    </TabWrapper>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;
