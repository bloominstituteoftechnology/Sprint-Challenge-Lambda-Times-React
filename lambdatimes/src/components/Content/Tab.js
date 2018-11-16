import React from "react";
import PropTypes from "prop-types";

class Tab extends React.Component {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  constructor(props) {
    super(props);
    this.state = {
      selectTabHandler: props.selectTabHandler,
      selectedTab: props.selectedTab,
      tab: props.tab
    };
  }
  whichTab = () => {
    if (this.state.tab === this.state.selectedTab) {
      return "tab active-tab";
    } else {
      return "tab";
    }
  };
  render() {
    return (
      <div
        className={this.whichTab()}
        onClick={() => this.state.selectTabHandler(this.state.tab)}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      >
        {this.state.tab.toUpperCase()}
      </div>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
};

// Make sure you include PropTypes on your props.

export default Tab;
