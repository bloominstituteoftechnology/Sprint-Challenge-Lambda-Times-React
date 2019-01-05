// Importing libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled Component
const TabComp = styled.div`
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

const Tab = props => {
  // destructuring props for readability
  const {tab, selectedTab, selectTabHandler} = {...props};
  return (
    <TabComp
      className={`tab ${tab === selectedTab ? 'active-tab' : ''}`}
      onClick={() => selectTabHandler(tab) }
    >
      {props.tab.toUpperCase()}
    </TabComp>
  );
};

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}

export default Tab;
