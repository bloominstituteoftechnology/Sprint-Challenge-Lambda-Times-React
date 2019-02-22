import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

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
  :hover {
    text-decoration: underline;
  }
`;

const StyledActiveTab = styled(StyledTab)`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`;

const Tab = props => {
  let name = "";
  if (props.tab === props.selectedTab) {
    name = "tab active-tab";
  } else {
    name = "tab";
  }
  return (
    <div>
      {name === "tab" ? (
        <StyledTab onClick={() => props.selectTabHandler(props.tab)}>
          {props.tab.toUpperCase()}
        </StyledTab>
      ) : (
        <StyledActiveTab onClick={() => props.selectTabHandler(props.tab)}>
          {props.tab.toUpperCase()}
        </StyledActiveTab>
      )}
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
};

export default Tab;
