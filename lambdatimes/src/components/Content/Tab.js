import React from "react";

class Tab extends React.Component {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  constructor(props) {
    super(props);
    if (this.props.selectedTab == this.props.tab) {
      this.state = {
        thisClass: "tab active-tab"
      };
    } else {
      this.state = {
        thisClass: "tab"
      }
    } 
  }

  render() {
    return (
      <div
        className={this.state.thisClass}
        onClick={() => {
          /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        }}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
}

// Make sure you include PropTypes on your props.

export default Tab;
