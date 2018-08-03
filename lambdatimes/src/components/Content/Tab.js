import React from 'react';


const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */

  const selectedClass = 'tab'
  //  If then statement in React...
  

  return (
    <div
      className={"tab"}
      // I know 'tab' doens't go here, it's evaluated by the if/tehn above, but how...
      onClick={props.selectTabHandler}
        
        // () => {/* Replace this dummy click handler function with your selectTabHandler function from props */}
    >
      {props.tab.toUpperCase()}
    </div>
  )
}

// Make sure you include PropTypes on your props.


export default Tab;