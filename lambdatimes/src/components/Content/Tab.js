import React from 'react';
import PropTypes from 'prop-types';


const Tab = props => {

return (
    <div 
    className={(props.selectedTab === props.tabs) ? "tab active-tab" : "tab"}  
    
    onClick={props.changeSelected}>
    
    {props.tabs.toUpperCase()}

    </div>
  )
}

Tab.propTypes = {
  tabs: PropTypes.string
}


export default Tab;