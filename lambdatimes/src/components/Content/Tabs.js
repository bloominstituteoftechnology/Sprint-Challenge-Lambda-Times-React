import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const tabStyleDiv = styled.div `
  display: flex;
  margin:auto;
   `
  
const Tabs = props => {
    return (
    <tabStyleDiv>
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
       
            {props.tabs.map ( tab => {
              return (
                <Tab  
                  id = {tab.index}
                  tab = {tab}
              selectTabHandler={props.selectTabHandler}
              selectedTab={props.selectedTab}
                  />
              )
            }
            )}
              
      </div>
    </div>
     </tabStyleDiv>
  );
};
// Make sure to use PropTypes to validate your types!
PropTypes.Tabs = {
  tabs: PropTypes.array,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  };
export default Tabs;
