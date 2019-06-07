import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  handleClick = event => {
    this.props.selectTabHandler(this.props.tab);
  }
  render() {
    return (
      <div
        className={'tab ' + (this.props.tab === this.props.selectedTab? 'active-tab' : null)}
        onClick={
          /* Replace this dummy click handler function with your selectTabHandler function from props 
          you'll need to pass the `tab` in as an argument to this handler. */
          this.handleClick
        }
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
};

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectTabHandler: PropTypes.func
}

export default Tab;
