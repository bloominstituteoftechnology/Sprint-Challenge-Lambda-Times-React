import React from "react";
import Tab from "./Tab";
import "../../CSS/index.css";
import PropTypes from "prop-types";
import * as S from "../../CSS/styles";
const Tabs = props => {
  return (
    <S.Tabs>
      <S.TabsTopics>
        <S.TabsTopicsTitle>TRENDING TOPICS:</S.TabsTopicsTitle>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/
        props.tabs.map((item, index) => {
          return (
            <Tab
              tab={item}
              key={index}
              select={props.selectedtab}
              selected={props.selected}
            />
          );
        })}
      </S.TabsTopics>
    </S.Tabs>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  selectedtab: PropTypes.func,
  selected: PropTypes.string
};
export default Tabs;
