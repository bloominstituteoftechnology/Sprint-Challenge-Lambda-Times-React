import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  constructor(props) {
    super(props);
  }
  // console.log("TAB PROPS", props);

  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/

  render() {
    console.log("TAB PROPS", this.props);

    return (
      <div
        className={`tab ${
          this.props.selectedTab === this.props.tab ? "active-tab" : null
        }`}
        onClick={e => this.props.selectedTabHandler(this.props.tab)}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
}

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  props: PropTypes.shape({
    selectTabHandler: PropTypes.func,
    selectedTab: PropTypes.func,
    tab: PropTypes.string
  })
};

export default Tab;
