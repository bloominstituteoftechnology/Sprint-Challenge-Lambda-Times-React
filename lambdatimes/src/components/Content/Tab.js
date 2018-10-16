import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
  ${ ({ activeTab })  => activeTab && `
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
  `}
 
`

const Tab = props => {
  return (
    <TabContainer
      activeTab={props.tab === props.selectedTab}
      onClick={() => props.selectHanlder(props.tab)
        
      }
    >
      {props.tab.toUpperCase()}
    </TabContainer>
  );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectHandler: PropTypes.func,
}

export default Tab;