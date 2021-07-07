import React from 'react';
import StyledTab from './Tab';
import styled from 'styled-components'
import Tab from './Tab';
const Tabs = props => {
 
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        { props.tabs.map(tab => <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler = {props.selectTabHandler}/>)}
      </Topics>
    </TabsContainer>
    // <div className="tabs">
    //   <div className="topics">
    //     <span className="title">TRENDING TOPICS:</span>
    //     {/* map over the tabs provided on your props, create a new Tab component for each one.
    //         give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
    //        { props.tabs.map(tab => <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler = {props.selectTabHandler}/>)}
    //   </div>
    // </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;

const TabsContainer = styled.div`
border-bottom: 1px solid lightgrey;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 100%;
height: 47px;
background-color: #fff;
}
@media (min-width: 1280px) {  
  width: 1280px;
}

`
const Topics = styled.div`

  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
` 
const Title = styled.div`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;

`