import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  @media (min-width: 1280px) {
      width: 1280px;
    }
`
const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`
const TabsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsDiv>
      <TabsTopics>
        <TabsTitle className="title">TRENDING TOPICS:</TabsTitle>
        {props.tabs.map(tab => {
          return <Tab key={tab} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}/>
        })}
      </TabsTopics>
    </TabsDiv>
  )
}

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default Tabs