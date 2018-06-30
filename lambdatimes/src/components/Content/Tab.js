import React from 'react';

const Tab = props => {
  /* Using your props, determine if this tab is selected, if it is, the className 
    should be: 'tab active-tab', if it is not it should just be 'tab' */
  const selectedClass = 'tab';
  if (props.selectedTab === props.tab) {
    return (
      <div 
      className={"tab active-tab"}
      onClick= {() => props.selectTabHandler(props.tab)}
      >
        {props.tab.toUpperCase()}
      </div>
    )
  }
  else {
    return (
        <div 
        className={"tab"}
        onClick= {() => props.selectTabHandler(props.tab)}
        >
          {props.tab.toUpperCase()}
        </div>
    )
  }
}

//   return (
//     <div
//       className={""}
//       // onClick={() => {/* Replace this dummy click handler function with your selectTabHandler function from props */}}
//       onClick={props.selectTabHandlers}
//     >
//       {props.tab.toUpperCase()}
//     </div>
//   )
// }

// Make sure you include PropTypes on your props.

export default Tab;