import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const TabContainer = styled.div`
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
  :hover {
    text-decoration: underline;
  }
  ${({ active }) =>
    active &&
    `
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  `} /* 
  Conditional rendering of the active via the method described in this Stack Overflow article.
  https://stackoverflow.com/questions/48502647/conditional-rendering-in-styled-components 
  */;
`;

const Tab = props => {
  return (
    <TabContainer
      active={props.tab === props.selectedTab}
      onClick={event => {
        props.selectTabHandler(event, props.tab);
      }}
    >
      {props.tab.toUpperCase()}
    </TabContainer>
  );
};

Tab.propTypes = {
  tab: PropTypes.string
};

export default Tab;
