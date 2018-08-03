import React from 'react';

const Tab = props => {

return (
    <div 
    className={(props.selectedTab === props.tabs) ? "tab active-tab" : "tab"}  
    
    onClick={props.selectTabHandler}>
    
      {props.tab.toUpperCase()}
    </div>
  )
}

export default Tab;