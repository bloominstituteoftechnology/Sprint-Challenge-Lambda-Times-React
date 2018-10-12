import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {
          props.tabs.map(element => {
            return(<Tab 
                selectTabHandler = {props.selectTabHandler}
                    selectedTab = {props.selectedTab}
                    tab = {element}
                  />)
          })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectedTab: PropTypes.string,
  selectTabHandler:PropTypes.func,
  tabs:PropTypes.array
}



// Make sure to use PropTypes to validate your types!
export default Tabs;
