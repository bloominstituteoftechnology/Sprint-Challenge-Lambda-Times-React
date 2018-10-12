import React from "react";
import PropTypes from 'prop-types';
const Tab = props => {
 
  if (props.tab === props.selectedTab) {
    return (
      <div
        className={"tab active-tab"}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  } else {
    return (
      <div
        className={"tab"}
        onClick={() => {
          props.selectTabHandler(props.tab)
        }}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  }
};

// Make sure you include PropTypes on your props.
Tab.propTypes={
  tab : PropTypes.string
}
export default Tab;
