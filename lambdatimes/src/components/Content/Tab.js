import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const _Tab = styled.div`
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
`;

const ActiveTab = styled(_Tab)`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  return props.tab === props.selectedTab ? (
    <ActiveTab onClick={() => props.selectTabHandler(props.tab)}>
      {" "}
      {props.tab.toUpperCase()}{" "}
    </ActiveTab>
  ) : (
    <_Tab onClick={() => props.selectTabHandler(props.tab)}>
      {" "}
      {props.tab.toUpperCase()}
    </_Tab>
  );
  // <div
  //   className={props.tab === props.selectedTab ? "tab active-tab" : "tab"}
  //   onClick={() => {
  //     props.selectTabHandler(props.tab);
  //     /* Replace this dummy click handler function with your selectTabHandler function from props
  //      you'll need to pass the `tab` in as an argument to this handler. */
  //   }}
  // >
  //   {props.tab.toUpperCase()}
  // </div>
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  tab: PropTypes.string
};
