import React from 'react';

// const Tab = props => {
//   /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
//       if they match, the className should be: 'tab active-tab', 
//       if it is not it should just be 'tab'*/
//   return (
//   if (props.tab)  
//     <div
//       className={props.currentlySelected === props.tab ? "tab active-tab" : "tab"}
//       onClick={() => {
//         /* Replace this dummy click handler function with your selectTabHandler function from props 
//          you'll need to pass the `tab` in as an argument to this handler. */
//         props.selectTabHandler(props.tab); }}>

        
//       {props.tab.toUpperCase()}
//     </div>
//   );
// };


const Tab = props => {
  if (props.tab)
    return (
      <div
      className={ props.selected === props.selectedTab ? 'tab active-tab' : 'tab'}
        onClick={() => props.selectTabHandler(props.tab)}>
        {props.tab.toUpperCase()}
      </div>
    );
  }


// Make sure you include PropTypes on your props.

export default Tab;
