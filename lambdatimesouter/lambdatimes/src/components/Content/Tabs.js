import React from 'react';
import Tab from './Tab';
// import styled from 'styled-components';

//  const eachTab = styled.div`
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;
// `
const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {props.tabs.map((singularTab) => {
          return (
            <Tab tab={singularTab} onClick={props.onClick} />
          )
        })}
      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
