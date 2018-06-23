import React from "react";
import Tab from "./Tab";
import uuidv1 from "uuid/v1";
import styled from "styled-components";
const TabsContainer = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;

  @media (min-width: 1280px) {
    & {
      width: 1280px;
    }
  }
`;

const TabsTopic = styled.div`
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
    <TabsContainer className="tabs">
      <TabsTopic>
        <Title>TRENDING TOPICS:</Title>


        {props.tabs.map((tab, i) => {
          return (
            <Tab
              key={i}
              tab={tab}
              selectedTab={props.selectedTab}
              selectTabHandler={props.selectTabHandler}
            />
          );
        })}
      </TabsTopic>
    </TabsContainer>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
