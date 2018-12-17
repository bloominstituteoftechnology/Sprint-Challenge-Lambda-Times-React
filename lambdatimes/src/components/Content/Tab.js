import React from 'react';
import Tabs from './Tabs';
import { tabData } from '../../data';

const Tab = props => {

  
console.log(props.tab)
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
    
    return (
    <div
      className={`tab ${tabData ? 'active-tab' : null}`}
      onClick={(props) => {  
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      {props.selectTabHandler}
      }}
    >
      

    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;



// import React from 'react';  

// const Tab = props => {
//   /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
//       if they match, the className should be: 'tab active-tab', 
//       if it is not it should just be 'tab'*/

//  let tabSelectedClassName = props.tab === props.selectedTab;
//   return (
//     <div
//       className={`tab ${tabSelectedClassName ? 'active-tab': null}`}
//       onClick={() => {
//         /* Replace this dummy click handler function with your selectTabHandler function from props 
//          you'll need to pass the `tab` in as an argument to this handler.
//       props.selectTabHandleeed to pass the `tab` in as an argument to this handler. */
//       props.selectTabHandler(props.tab);
//       }}
//     >
//       {props.tab.toUpperCase()}
//     </div>
//   );
// };

// // Make sure you include PropTypes on your props.

// export default Tab;
