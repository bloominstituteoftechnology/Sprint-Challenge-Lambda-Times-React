import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
          {props.tabs.map(tab => (
            <Tab key={tab} 
            selectTabHandler={props.selectTabHandler}
            selectedTab={props.selectedTab} 
            tab={tab} />
         ))}       
      </div>
    </div>
  )
}
  selectTabHandler = event => {
    const tabs = this.state.data.filter( tab => {
      if (tab.select.(event.target.value)) {
        return tab.setState({
      tab: event.target.value
    })
  }

  selectedTab = event => {
    this.setState({
      tab: event.target.value
    })
  }

  // Make sure to use PropTypes to validate your types!
  Tabs.propTypes = {
    tabs: PropTypes.arrayOf(
      PropTypes.shape({
        headline: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired, 
        type: PropTypes.arrayOf( 
          PropTypes.oneOf([
            'all',
            'javascript',
            'technology',
            'node',
            'React.js',
            'bootstrap'
          ])
        )
      })
    )
  };

export default Tabs;
