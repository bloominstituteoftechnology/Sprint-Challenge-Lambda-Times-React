import React from 'react';
import Tab from './Tab'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsInd = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <TabsInd>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map((element,i) => 
            <Tab key = {i}
                 selectTabHandler={props.selectTabHandler}
                 selectedTab={props.selectedTab}
                 tab={element} />  
        )}
      </Topics>
    </TabsInd>
  )
}

 Tabs.proptypes = {
    tabs: PropTypes.arrayOf(PropTypes.object),
    selectedTab: PropTypes.string,
    selectTabHandler: PropTypes.func
 }

export default Tabs