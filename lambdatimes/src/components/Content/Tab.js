import React from 'react';
import PropTypes from 'prop-types'
import Styled from 'styled-components';

const RegTab = Styled.div`
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
`

const ActiveTab = Styled.div`
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
`



const Tab = props => {


  let tabClass='tab';
  if (props.tab.toLowerCase() === props.selectedTab.toLowerCase())
  {
    tabClass = 'tab active-tab'
  }

  if(tabClass==='tab')
  {
    return (
      <RegTab onClick={props.selectTabHandler}>
        {props.tab.toUpperCase()}
      </RegTab>
      )
  } else {
    return (
      <ActiveTab onClick={props.selectTabHandler}>
        {props.tab.toUpperCase()}
      </ActiveTab>
      )
  }
  

  



};

Tab.propTypes = {
  selectTabHandler:PropTypes.func,
  tab:PropTypes.string
}

export default Tab;
