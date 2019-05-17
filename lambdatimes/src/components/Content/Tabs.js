import React from 'react';
import { Tab } from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ChildTabs = styled.div`
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
const Topics = styled.div`
    display: flex;
    justify-content: none;
    align-items: center;
    flex-direction: row;
    >span{
      font-size: 12px;
      letter-spacing: 1px;
      font-weight: bold;
    }
`

export const Tabs = props =>  <ChildTabs>
                                  <Topics>
                                    <span>TRENDING TOPICS:</span>
                                    {props.tabs.map((tab, index) => <Tab key={index} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} tab={tab} />)}
                                  </Topics>
                              </ChildTabs>

Tabs.propTypes = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}