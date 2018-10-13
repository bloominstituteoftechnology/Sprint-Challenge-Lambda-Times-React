import React from "react";
import PropTypes from 'prop-types';

class Tab extends React.Component {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  select = () => {
    this.props.selectHandler(this.props.tab);
  }

  render() {
    return (
      <div
        className={
          this.props.tab === this.props.selectedTab ? "tab active-tab" : "tab"
        }
        onClick={this.select}
      >
        {this.props.tab.toUpperCase()}
      </div>
    );
  }
}

// Make sure you include PropTypes on your props.
Tab.propTypes = {
  tab: PropTypes.string,
  selectedTab: PropTypes.string,
  selectHandler: PropTypes.func
}

export default Tab;
