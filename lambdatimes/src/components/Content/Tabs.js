import React from "react";
import Tab from "./Tab";
import PropTypes from 'prop-types';
class Tabs extends React.Component {
  constructor(props) {
    super(props);
  }




  render() {
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {this.props.tabs.map(tab => {
            return (
              <Tab
                tab={tab}
                key={Math.random()}
                selectedTab={this.props.selectedTab}
                selectTabHandler={this.props.selectTabHandler}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({tab: PropTypes.string})
  )
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
