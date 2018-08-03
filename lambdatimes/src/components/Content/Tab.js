import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tabs = styled.div`
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
`;

const Tab = props => {
  const selectedClass = `${props.selectedTab === props.tab ? 'active-tab':'tab'}`; 
  return (
    <Tabs
      className={selectedClass}
      onClick={() => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </Tabs>
  )
}

Tab.proptypes = {
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string,
  tab: PropTypes.string
}
export default Tab;