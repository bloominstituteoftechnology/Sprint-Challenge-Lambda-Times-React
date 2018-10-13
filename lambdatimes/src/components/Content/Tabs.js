import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import { Title, Topics, TabsContainer } from "../styles";

const Tabs = props => {
  return (
    <TabsContainer>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(tab => (
          <Tab tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} key={tab} />
        ))}
      </Topics>
    </TabsContainer>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
