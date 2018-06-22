import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabDiv = styled.div`
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

  ${props => props.active && css`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  `}
`;

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  return (
    <TabDiv
      active={(props.selectedTab === props.tab) ? true : false}
      onClick={() => {props.selectTabHandler(props.tab)}}
    >
      {props.tab.toUpperCase()}
    </TabDiv>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string
};

export default Tab;