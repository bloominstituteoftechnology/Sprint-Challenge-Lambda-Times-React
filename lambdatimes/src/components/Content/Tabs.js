import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
	// console.log(props)
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        
        { props.tabs.map(tab => 
        	<Tab 
        		selectTabHandler={props.selectTabHandler} 
        		selectedTab={props.selectedTab} 
        		tab={tab}
        		key={tab} 
        	/> 
        )}

      </div>
    </div>
  );
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
