import React from 'react';
import PropTypes from 'prop-types';



// class Tab extends React.Component {
//   constructor(props){
//     super(props);
//   }

//    /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
//       if they match, the className should be: 'tab active-tab', 
//       if it is not it should just be 'tab'*/
  

//   render(){
//     if (this.props.tab === this.props.selectedTab) 
//     return (
//       <div
//         className={'tab active-tab'}
//         onClick={(tab) => {
//           /* Replace this dummy click handler function with your selectTabHandler function from props 
//            you'll need to pass the `tab` in as an argument to this handler. */
//           this.props.selectTabHandler
//         }}
//       >
//         {this.props.tab.toUpperCase()}
//       </div>
//     );
//   }
// }
 

  
const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  if (props.tab === props.selectedTab) 

  return (
    <div
      className={'tab active-tab'}
      onClick={(tab) => {
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
        props.selectTabHandler
      }}
    >
      {/* {props.tab.toUpperCase()}  */} Placeholder
    </div>
  );
};




// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string,
}

export default Tab;
