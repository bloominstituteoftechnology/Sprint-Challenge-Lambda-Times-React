import React from "react";
import PropTypes from "prop-types";

const Tab = props => {
  if (props.selected === props.all || props.selected === props.tab)
    return (
      <div
        className={"tab active-tab"}
        onClick={tab => {
          props.selectTabHandler(props.tab);
          console.log('clicked')
        }}
      >
        {props.tab.toUpperCase()}
      </div>
    );
};

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
};

export default Tab;

/* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
