import React from "react";
import "../../CSS/index.css";
import PropTypes from "prop-types";
import * as S from "../../CSS/styles";

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  return (
    <div>
      {props.selected === props.tab ? (
        <S.TabsTopicsActiveTab
          onClick={() => {
            props.select(props.tab);
          }}
        >
          {" "}
          {props.tab.toUpperCase()}{" "}
        </S.TabsTopicsActiveTab>
      ) : (
        <S.TabsTopicsTab
          onClick={() => {
            props.select(props.tab);
          }}
        >
          {" "}
          {props.tab.toUpperCase()}{" "}
        </S.TabsTopicsTab>
      )}
    </div>
    // <div
    //   className={props.selected === props.tab ? "tab active-tab" : "tab"}
    //   onClick={() => {
    //     /* Replace this dummy click handler function with your selectTabHandler function from props
    //      you'll need to pass the `tab` in as an argument to this handler. */
    //     props.select(props.tab);
    //   }}
    // >
    //   {props.tab.toUpperCase()}
    // </div>
  );
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  selected: PropTypes.string,
  tab: PropTypes.string,
  select: PropTypes.func
};
export default Tab;
