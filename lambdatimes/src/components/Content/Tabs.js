import React from 'react';
import Tab from './Tab';
import PropTypes from "prop-types";
import styled from "styled-components";

const TabStyles = styled.div`
display: flex;
align-items: center;
flex-direction: column;
background-color: #f1f1f1;
color: #333;
font-family: 'PT Sans', sans-serif;
`;


const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* 
          DONE
          map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map((tab, index) => (
              <Tab key={index} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler}/>
            ))}
      </div>
    </div>
  );
};

// DONE
// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}


export default Tabs;


