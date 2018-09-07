import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// const TabsStyle = styled.div`
//   border-bottom: 1px solid lightgrey;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: row;
//   width: 100%;
//   height: 47px;
//   background-color: #fff;

//   @media (min-width: 1280px) {
//     .tabs {
//       width: 1280px;
//     }
//   }
// `;

// const Topics = styled.div`
//   display: flex;
//   justify-content: none;
//   align-items: center;
//   flex-direction: row;

// `;

const Title = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(item => (
          <Tab
            tab={item}
            selectTabHandler={props.selectTabHandler(item)}
            selectedTab={props.selectedTab}
          />
        ))}
      </div>
    </div>
  );
};

Tabs.PropTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tabs;
