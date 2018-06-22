import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabWrapper = styled.div`  
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: ${props => props.active ? "333": "#fff"};
  background-color: ${props=> props.active ? '#fff' : '#333'};
  border: ${props => props.active ? '2px solid #333': 'none'};
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
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  return (
   <TabWrapper active={props.selectedTab === props.tab}
      onClick={() => {
        console.log('clicked')
        props.selectTabHandler(props.tab)
      }}
    >
      {props.tab.toUpperCase()}
    </TabWrapper>
  )
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selectedTab: PropTypes.string,
  tab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
}


export default Tab;