import React from "react";
import Tab from "./Tab";
import PropTypes from "prop-types";
import { TabsWrapper, Topics, Title } from "../Content/Styled";

const Tabs = props => {
  return (
    <TabsWrapper>
      <Topics>
        <Title>TRENDING TOPICS:</Title>
        {props.tabs.map(tab => (
          <Tab
            tab={tab}
            key={tab}
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab}
          />
        ))}
      </Topics>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
};

export default Tabs;
