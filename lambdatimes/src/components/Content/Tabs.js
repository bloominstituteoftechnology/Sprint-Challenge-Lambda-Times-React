// Importing libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Importing components
import Tab from './Tab';

// Styled Components
const TabsComp = styled.div`
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
`;

const Topics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTitle = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;


const Tabs = props => {
  // destructuring props for readability
  const {tabs, selectedTab, selectTabHandler} = {...props}
  return (
    <TabsComp className="tabs">
      <Topics className="topics">
        <TopicsTitle>TRENDING TOPICS:</TopicsTitle>
        {
          // map over the tabs
          tabs.map(
            (tab, i) => (
              <Tab
                key={i}
                tab={tab}
                selectedTab={selectedTab}
                selectTabHandler={selectTabHandler}
              />
            ))
        }
      </Topics>
    </TabsComp>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,

}

export default Tabs;
