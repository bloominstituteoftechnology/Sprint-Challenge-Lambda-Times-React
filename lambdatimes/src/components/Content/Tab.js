import React from "react";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      className: ""
    };
    console.log(this.props);
  }
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  assignClass = () => {
    if (this.props.tab === this.props.selectedTab) {
      this.setState({ className: "tab active-tab" });
    } else {
      this.setState({ className: "tab" });
    }
  };
  render() {
    return (
      <div
        className={this.state.className}
        onClick={
          () => this.props.selectTabHandler(this.props.selectedTab)
          /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        }
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
}

// Make sure you include PropTypes on your props.
