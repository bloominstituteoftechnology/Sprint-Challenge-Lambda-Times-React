import React from 'react';
import Tab from './Tab';
import styled from 'styled-components'

//Now hearDis!
const InnaDivStylee = styled.div `
   display: inline-flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  `





const Tabs = props => {
  return (
   <InnaDivStylee> 
         <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
            props.tabs.map ( tab => {
              return (
                <Tab  
                  id = {tab.id}
                  tab = {tab}
                  changeSelected = {props.changeSelected}/>
              )
            })}
            </InnaDivStylee>
   );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
