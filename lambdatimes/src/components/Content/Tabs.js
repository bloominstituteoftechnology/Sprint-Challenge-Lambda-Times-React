import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
class Tabs extends React.Component {
 render(){
    return (
      <div className="tabs">
        <div className="topics">
          <span className="title">TRENDING TOPICS:</span>
          {/* map over the tabs provided on your this.props, create a new Tab component for each one.
              give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as this.props*/
            this.props.tabs.map((x,i)=> <Tab key={`${i}:tab`} tab={x} selectTabHandler={this.props.selectTabHandler} active={this.props.selectedTab===x}/>)
          }
        </div>
      </div>
    );
  }
};
Tabs.propTypes =
{
  tabs: PropTypes.arrayOf(String).isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired
}

// Make sure to use PropTypes to validate your types!
export default Tabs;
